import React, { useEffect, useState } from "react";
// import ToastProps, ToastActionElement types removed

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};

const toastTimeouts = new Map();
const listeners = [];
let memoryState = { toasts: [] };

function addToRemoveQueue(toastId) {
  if (toastTimeouts.has(toastId)) return;
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: actionTypes.REMOVE_TOAST, toastId });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map(t =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach(t => addToRemoveQueue(t.id));
      }
      return {
        ...state,
        toasts: state.toasts.map(t =>
          toastId == null || t.id === toastId
            ? { ...t, open: false }
            : t
        ),
      };
    }
    case actionTypes.REMOVE_TOAST:
      return {
        ...state,
        toasts:
          action.toastId == null
            ? []
            : state.toasts.filter(t => t.id !== action.toastId),
      };
    default:
      return state;
  }
}

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach(listener => listener(memoryState));
}

export function toast(props) {
  const id = genId();
  function update(newProps) {
    dispatch({ type: actionTypes.UPDATE_TOAST, toast: { ...newProps, id } });
  }
  function dismiss() {
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });
  }
  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: open => {
        if (!open) dismiss();
      },
    },
  });
  return { id, dismiss, update };
}

export function useToast() {
  const [state, setState] = useState(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const idx = listeners.indexOf(setState);
      if (idx >= 0) listeners.splice(idx, 1);
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: toastId => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  };
}

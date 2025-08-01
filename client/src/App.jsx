import React from "react"
import { Toaster } from "./components/ui/toaster"
import { Toaster as Sonner } from "./components/ui/sonner"
import {Toaster as Message} from 'react-hot-toast'
import { TooltipProvider } from "@components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "@pages/Index"
import NotFound from "@pages/NotFound"
import CandidatePage from "./components/pages/CandidatePage"
import SignIn from "./components/pages/SignIn"
import Register from "./pages/Register"
import AdminDashboard from "./pages/AdminDashboard"
import VotePage from "./pages/VotePage"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Message position='top-center'/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
           <Route path="/candidatepage" element={<CandidatePage />} />
           <Route path="/signin" element={<SignIn />} />
           <Route path="/register" element={<Register/>} />
           <Route path="/admin" element={<AdminDashboard />} />
           <Route path="/castyourvote" element={<VotePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App;

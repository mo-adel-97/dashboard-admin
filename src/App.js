import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blank from './Pages/Dashboard';
import { ThemeProvider } from './Components/ThemeContect/ThemeContext';
import Ticket from './Pages/Ticket/Ticket';
import AddTicket from './Pages/AddTickets/AddTicket';
function App() {
    return (
        <ThemeProvider>
        <BrowserRouter>
            <Routes>
             <Route path='/' element={<Blank />} />
             <Route path='/started' element={<Ticket />} />
             <Route path='/started/addticket' element={<AddTicket />} />
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
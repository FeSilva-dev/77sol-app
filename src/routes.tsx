import {Route, BrowserRouter} from 'react-router-dom';
import { AvailableServices } from './app/pages/availableService';

export function Routes(){
  return(
    <BrowserRouter>
      <Route path="/" exact component={AvailableServices}/>
    </BrowserRouter>
  )
}
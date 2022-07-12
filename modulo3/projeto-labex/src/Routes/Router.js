import React from 'react'
import { HomePage } from '../Pages/HomePage/HomePage'
import { ListTripsPage } from '../Pages/ListTripsPage/ListTripsPage.js'
import { ApplicationFormPage } from '../Pages/ApplicationFormPage/ApplicationFormPage.js'
import { LoginPage } from '../Pages/LoginPage/LoginPage.js'
import { AdminHomePage } from '../Pages/AdminHomePage/AdminHomePage.js'
import { TripDetailsPage } from '../Pages/TripDetailsPage/TripDetailsPage.js'
import { CreateTripPage } from '../Pages/CreateTripPage/CreateTripPage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route exact path="/trips/list" element={<ListTripsPage />}></Route>
        <Route
          path="/trips/applicationForm"
          element={<ApplicationFormPage />}
        ></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/adminHome" element={<AdminHomePage />}></Route>
        <Route path="/admin/tripDetails" element={<TripDetailsPage />}></Route>
        <Route path="/admin/createTrip" element={<CreateTripPage />}></Route> */
      </Routes>
    </BrowserRouter>
  )
}
export default Router

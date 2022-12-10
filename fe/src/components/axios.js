import React from 'react'
import axios from 'axios'

const instance = axios.create({
  baseURL: "http://localhost:9000//messages/new"
})
export default instance


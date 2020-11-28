import React from 'react'
import ReactDOM from 'react-dom'
import Amplify from 'aws-amplify'
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers'
import App from './App'
import * as serviceWorker from './serviceWorker'
import awsExports from './aws-exports'

const iotConfig = {
  aws_pubsub_region: process.env.REACT_APP_IOT_REGION,
  aws_pubsub_endpoint: `wss://${process.env.REACT_APP_IOT_ENDPOINT}/mqtt`,
}
Amplify.addPluggable(new AWSIoTProvider(iotConfig))
console.log(iotConfig)

Amplify.configure(awsExports)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

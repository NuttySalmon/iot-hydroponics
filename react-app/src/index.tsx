import React from 'react'
import ReactDOM from 'react-dom'
import Amplify, { PubSub } from 'aws-amplify'
import App from './App'
import * as serviceWorker from './serviceWorker'
import awsExports from './aws-exports'
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers'

Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'us-west-2',
    aws_pubsub_endpoint:
      'wss://a1778zndtxlcj-ats.iot.us-west-2.amazonaws.com/mqtt',
  })
)
Amplify.configure(awsExports)

PubSub.configure({})
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

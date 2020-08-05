# react-redux-message-simple-store-15217b2b

The main goal this project is show how reducer's works.

It's a simple business example, where user can put some message in input text and send a message to others components clicking on send button.

This project contain three main components:

header: contain a label eith the words "Inbox(0)" and it keep watching an attribute count from reducer state, the each add message on array the count attribute receiver one more number and header update the inbox count.

body: this component show every message that was inputed on reducer message array and show to user a trash icon that the user can be click to delete the card from dashboard.

bottom: in this panel, was included a input text and a send button to user put the message and send the action to reducer to delivery a new state array with the message.~~~~

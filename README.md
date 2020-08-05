# REDUX01 POC~~~~

The main goal this project is show how reducer works.

It's a simple business example, where user can put some message in input text sending this message to others components clicking on send button.

This project contain three main components:

header: this component contain a label with the words "Inbox(0)", every time that user click in a button send (in a bottom component) one message is sended to reducer and it's do a count, notifying a component header with a new count value.

body: this component show every message that was inputed on reducer message array and show to user a trash icon that the user can be click to delete the card from dashboard.

bottom: in this panel, was included a input text and a send button to user put the message and send the action to the reducer include the message in a central message array.~~~~

To develop this sample I used the below libraries:

* postcss
* tailwindcss
* twin.macro
* styled-components~~~~

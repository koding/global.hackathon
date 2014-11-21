// PubNub is a Data Stream Network that enables developers to
// rapidly build realtime apps that scale globally, without
// worrying about infrastructure!
//
// This example publishes a event to a channel and then subscribes
// to receive that event.
//
// Please see these for more information:
//
// http://godoc.org/github.com/pubnub/go/messaging
// http://www.pubnub.com/developers/demos

package main

import (
	"fmt"

	"github.com/pubnub/go/messaging"
)

const (
	PublishKey    = "<YOUR KEY>"
	SubscribeKey  = "<YOUR KEY>"
	SecretKey     = "<YOUR KEY>"
	KodingChannel = "koding"
	TimeToken     = "1000"
)

var ()

func main() {
	var pub = messaging.NewPubnub(PublishKey, SubscribeKey, SecretKey, "", false, "")

	var errorChannel = make(chan []byte, 1)
	var successChannel = make(chan []byte, 1)
	var messageChannel = make(chan []byte, 1)

	pub.Subscribe(KodingChannel, TimeToken, messageChannel, false, errorChannel)
	pub.Publish(KodingChannel, "Hello koders!", errorChannel, successChannel)

	for {
		select {
		case err := <-errorChannel:
			fmt.Printf("Got error :%s\n", err)
		case result := <-successChannel:
			fmt.Printf("Success :%s\n", result)
		case result := <-messageChannel:
			fmt.Printf("Got message :%s\n", result)
		}
	}

	fmt.Println("Exit")
}

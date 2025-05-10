import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

const Room = () => {
  const { id } = useParams()
  const meetingRef = useRef(null)
  useEffect(() => {
    if (meetingRef.current) {
      const meet = (element) => {
        // generate Kit Token
        const appID = 1840667043;
        const serverSecret = "a7709d2ab39b826e6a351822ad7b938e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, id, Date.now().toString(), "Sameer Khan");


        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // start the call
        zp.joinRoom({
          container: element,
          sharedLinks: [
            {
              name: 'Personal link',
              url: `http://localhost:5173/room/${id}`
            },
          ],
          scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
          },
        });


      }
      meet(meetingRef.current)
    }
  })
  return (
   <div ref={meetingRef} className="room-container"></div>

  )
}

export default Room
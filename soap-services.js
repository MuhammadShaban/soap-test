const soapServices = {
    /* Services */

    SendService: {
        /* Ports */

        SendServiceSoap: {
            /* Methods */

            SendMessage: function(args, callback, headers, req) {
                return callback(args);
                /*
          args = {
                 UserName of type s:string
                 Password of type s:string
                 MessageText of type s:string
                 MessageContent of type s:string
                 ClientMessageID of type s:string
                 Flashing of type s:string
                 SenderName of type s:string
                 Acknowledgement of type s:string
                 EnableCallback of type s:string
                 DeliveryTime of type s:string
                 MaximumCredits of type s:string
                 MessageType of type s:string
                 ValidityPeriod of type s:string
                 Recipients of type s:string
                 IP of type s:string
                 DlrUrl of type s:string
                 DateStamp of type s:string
                 fullURL of type s:string
                 udh of type s:string
                 dataCoding of type s:string
          }
        */
                //
                // Your code
                //
                /* return {
                 SendMessageResult of type  {
                         Response[] of type  {
                                 RequestId of type s:long
                                 ErrorId of type s:int
                                 ErrorText of type s:string
                                 IsSent of type s:boolean
                                 ResponseText of type s:string
                                 ClientMessageId of type s:string
                                 Split of type s:int
                                 PhoneNumber of type s:string
                                 targetNSAlias of type tns
                                 targetNamespace of type http://codeproject.com/webservices/
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://codeproject.com/webservices/
                   }

        }; */
            }
        },
        SendServiceSoap12: {
            /* Methods */

            SendMessage: function(args, callback, headers, req) {
                return callback({ service: 'SendServiceSoap12', data: args });
                /*
          args = {
                 UserName of type s:string
                 Password of type s:string
                 MessageText of type s:string
                 MessageContent of type s:string
                 ClientMessageID of type s:string
                 Flashing of type s:string
                 SenderName of type s:string
                 Acknowledgement of type s:string
                 EnableCallback of type s:string
                 DeliveryTime of type s:string
                 MaximumCredits of type s:string
                 MessageType of type s:string
                 ValidityPeriod of type s:string
                 Recipients of type s:string
                 IP of type s:string
                 DlrUrl of type s:string
                 DateStamp of type s:string
                 fullURL of type s:string
                 udh of type s:string
                 dataCoding of type s:string
          }
        */
                //
                // Your code
                //
                /* return {
                 SendMessageResult of type  {
                         Response[] of type  {
                                 RequestId of type s:long
                                 ErrorId of type s:int
                                 ErrorText of type s:string
                                 IsSent of type s:boolean
                                 ResponseText of type s:string
                                 ClientMessageId of type s:string
                                 Split of type s:int
                                 PhoneNumber of type s:string
                                 targetNSAlias of type tns
                                 targetNamespace of type http://codeproject.com/webservices/
                           }
                         targetNSAlias of type tns
                         targetNamespace of type http://codeproject.com/webservices/
                   }

        }; */
            }
        }
    }
};

module.exports = soapServices;

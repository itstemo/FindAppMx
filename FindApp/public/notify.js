
				  function showNotification(){

            var userOD, accs_tok;

            FB.getLoginStatus(function(response) {
              // Check login status on load, and if the user is
              // already logged in, go directly to the welcome message.
              if (response.status == 'connected') {
                userOD=response.authResponse.userID;
                accs_tok='1744047332489375|o6awV863RfIEgavmtGl4yZ4Nl8c';
              } else {
                // Otherwise, show Login dialog first.
                FB.login(function(response) {

                }, {scope: 'user_friends, email'});
              }
            });



            Parse.initialize("LDUjtHoZzgepi460STD39zOo2ah6i5SEPD8OsGpH", "b1ayhsBbaERGv2pp50iqXHmFUEpeQFyt7pXxLwYV");

            var Perdido = Parse.Object.extend("Perdidos");
            var query = new Parse.Query(Perdido);

            query.find({
            success: function(results) {
              // Do something with the returned Parse.Object values
              for (var i = 0; i < results.length; i++) {
                var object = results[i];
                var nombre = object.get("nombre");
                var lugar = object.get("lugar");


                					$.ajax({
                						type: 'POST',
                				        contentType: 'application/json',
                                        url: 'https://graph.facebook.com/' + userOD + '/notifications?access_token=' + accs_tk + '&href=https://findpic.parseapp.com/&template=Extraviada: ' + nombre + ' en ' + lugar,
                                        success: function() {
                                            console.log('success');
                                        }
                                    });

              }
            }
          });

        }

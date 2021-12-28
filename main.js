
    const ably = new Ably.Realtime('fNpv_g.OLqV0w:udFXDzCOG8bZrKK_6xe1OqMICMVzL-vHW8Ualswmwvw');
    ably.connection.on('connected', () => {
      //alert('Connected to Ably!');
      document.getElementById("MsgDisplay").value="链接服务器成功";
    });
    
    const channel = ably.channels.get('quickstart');

      $("#MsgInput").keydown(function(e){
        if (e.keyCode == 13) {
          channel.publish('greeting', $('#MsgInput').val());
          $("#MsgInput").val("");
      }
    });
      
      channel.subscribe('greeting', (message) => {
        
        $('#MsgReciv').val($('#MsgReciv').val()+'\n'+"收到信息："+message.data);
        
      });
const express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);      //chat application

app.use( express.static(__dirname) );

async function botstr(findStr){
      var { NlpManager } = require('node-nlp');       //natural language processing for chatbot
      const manager = new NlpManager({ languages: ['en'], nlu: { useNoneFeature: false }});
      //train the chatbot

      manager.addDocument('en', '1', 'greetings.1');      
      manager.addDocument('en', '2', 'greetings.2');
      manager.addDocument('en', '3', 'greetings.3');
      manager.addDocument('en', '4', 'greetings.4');
      manager.addDocument('en', '5', 'greetings.5');
      
      manager.addDocument('en', '*', 'greetings.*');

      manager.addDocument('en', 'A', 'greetings.A');
      manager.addDocument('en', 'B', 'greetings.B');
      manager.addDocument('en', 'C', 'greetings.C');
      manager.addDocument('en', 'D', 'greetings.D');
      manager.addDocument('en', 'D-1', 'greetings.D-1');
      manager.addDocument('en', 'D-2', 'greetings.D-2');
      manager.addDocument('en', 'D-3', 'greetings.D-3');
      manager.addDocument('en', 'E', 'greetings.E');
      
      //************************************************************************************//
      //************************************************************************************//
      //************************************************************************************//
     
    
      manager.addAnswer('en', 'greetings.*', 'Please reply with the numbers to the corresponding questions. \
                                              <br> 1. General IP Queries \
                                              <br> 2. Learning Path 1 \
                                              <br> 3. Learning Path 2 \
                                              <br> 4. Learning Path 3 \
                                              <br> 5. Live Projects');

      manager.addAnswer('en', 'greetings.1', 'A. IP Start date <br> \
                                              B. IP End date <br> \
                                              C. Bitrix 24 <br> \
                                              D. Workgroup <br> \
                                              E. Appointment letter <br><br> \
                                              Press * for main menu');

      manager.addAnswer('en', 'greetings.2', 'LP1 training is common across all the technologies . <br> \
                                              For each training of LP1, there are different tokens.<br> \
                                              Please note that in LP1 there are 3 types tokens: <br> \
                                              1. One for each technology, you are a part of. <br> \
                                              2. The lp1 home page. \
                                              3. The 6 tokens (one for each step) \
                                              Please read the tasks or watch the videos again meticulously.  <br> <br> \
                                              Press * for main menu ');

      manager.addAnswer('en', 'greetings.3', 'The main focus of LP2 is to provide you with a basic foundation of the technology you are interested in. <br> \
                                              The training is also handpicked in such a way that they enable you to work on LP3 assignments which interim gives you the beginning to start \
                                               your study for the selected technology and in no terms is the only/ final training you should look into.<br> \
                                               Please keep learning after your LP2 is complete, <br>\
                                               that is the only way to grow in your technology of choice. <br> <br> \
                                               Press * for main menu ');

      manager.addAnswer('en', 'greetings.4', 'LP3 will be assignment based and its execution and content vary from technology to technology.<br> \
                                              This assignment will be like a mini-project for all interns in a particular  technology \
                                              which will be verified by Cloud Counselage Project Managers . <br> <br>\
                                              Press * for main menu')    

      manager.addAnswer('en', 'greetings.5', ' Live Projects will have only your part of technology even if there are multiple technologies \
                                               that are a part of the project, <br> \
                                               you will be working only on the part that covers your technology.<br> \
                                               Live Projects will be provided by Cloud Counselage as these are the ongoing projects of Cloud Counselage \
                                               and your opportunity to create an impact in the organisation. <br> \
                                               You will receive your internship experience letter in August \
                                              during the convocation only if you successfully submit your Live Project.<br> <br>\
                                              Press * for main menu')  
                                              
      manager.addAnswer('en', 'greetings.A', 'The dates to begin the learning paths (LP) are: - <br> \
                                               LP1 - 01/03/2020 <br> \
                                               LP2 - 18/03/2020 <br> \
                                               LP3 - 02/04/2020 <br> <br> \
                                               Reply with the characters corresponding to the following questions for further assistance <br> \
                                               B. IP End date <br> \
                                               C. Bitrix 24 <br> \
                                               D. Workgroup <br>\
                                               E. Appointment letter <br> <br> \
                                               Press * for main menu ');

      manager.addAnswer('en', 'greetings.B', 'IP will end with the submission of live project i.e., on 31/07/2020 \
                                              This is a three (3) month internship conducted in the month of March, June & July 2020. <br> \
                                              You will receive your internship experience letter in August \
                                              during the convocation only if you successfully submit your Live Project <br> <br> \
                                              Reply with the characters corresponding to the following questions for further assistance <br> \
                                               A. IP Start date <br> \
                                               C. Bitrix 24 <br> \
                                               D. Workgroup <br> \
                                               E. Appointment letter <br> <br> \
                                               Press * for main menu '); 

      manager.addAnswer('en', 'greetings.C', ' If you have submitted the ‘New Joinee Form’ after the 1st of March,<br> \
                                               please wait till the 31st of March to receive your access. \
                                               Go to https://cloudcounselage24.bitrix24.com/ On the Login page, <br> \
                                               In the, Enter the phone number or email ,<br> \
                                               type in your email id that you have registered with Cloud Counselage and Click ‘Forgot Password’. <br> \
                                               In case the problem persists, please write a mail to hrsupport@cloudcounselage.in <br><br>\
                                               Reply with the characters corresponding to the following questions for further assistance <br> \
                                               A. IP Start date <br> \
                                               B. IP end date <br> \
                                               D. Workgroup  <br> \
                                               E. Appointment letter <br> <br> \
                                               Press * for main menu '); 

      manager.addAnswer('en', 'greetings.D', ' D-1) How many workgroups will an intern be a part of?/ How many workgroups should I be in? <br> \
                                               D-2) I am having trouble finding the workgroup ( no workgroup is visible) <br>\
                                               I am not added into my technology workgroup. \
                                               actually there are n no of tokens and every token I entered it is showing user no found or redirecting to the same page <br> \
                                               D-3)  Not able to see the task as not part of the IP workgroup. <br> \
                                               D-4) I am not added into my technology workgroup. <br> \
                                               Actually there are n no of tokens and every token I entered it is showing user no found \
                                               or redirecting to the same page <br><br> \
                                               Press * for main menu ');
                                               
      manager.addAnswer('en', 'greetings.D-1', 'Every intern should be a part of 2 workgroups. \
                                                1. "202003-IP"  -- This is a general workgroup. \
                                                Everyone who is enrolled in IP should be a part of this workgroup.<br> \
                                                2. "202003-IP-Technology"  -- This is a technology-specific workgroup. \
                                                You will be added to the technology you had enrolled for. \
                                                For example "202003-IP-Python" for students who enrolled for python. <br> \
                                                If anyone has not been added to any of these workgroups, \
                                                kindly message "Cloud Counselage HR " regarding the same over bitrix24 platform. <br> <br> \
                                                Press * for main menu '); 

      manager.addAnswer('en', 'greetings.D-2', 'Please ensure that you have connected to the drive of that workgroup by going \
                                                to your notification and connecting to the drive of that workgroup. <br> \
                                                If that is done, please try to search for your workgroup in the search bar \
                                                at the top of your screen. To search, use the keywords, 202003-IP-TechnologyName. <br> \
                                                Ex "202003-IP-DevOps". In case there is no invitation to you, please message Cloud Counselage HR.<br> \
                                                You will be added to 2 groups “202003-IP” which is a general workgroup <br> \
                                                and the other one is “202003-IP-Technology” which is a technology-specific workgroup. <br> <br> \
                                                Press * for main menu '); 

      manager.addAnswer('en', 'greetings.D-3', ' Please message ‘Cloud Counselage HR’ in Bitrix24  <br> <br> \
                                                Press * for main menu '); 

      manager.addAnswer('en', 'greetings.D-4', ' Please follow the instructions given in the videos or the one in the Bitrix24 mail \
                                                 (these are the same videos share in the task), <br> \
                                                 the tokens are given to you. Ensure that you are putting the right token on the right page. <br> <br> \
                                                 Press * for main menu  '); 

       manager.addAnswer('en', 'greetings.E', '  If you had not attended the live induction and have registered in the pre-recorded session after 4 PM, \
                                                 31st March. Then you will get your joining letter by 30th April 2020.<br> \
                                                 If you have otherwise, please a mail to hrsupport@cloudcounselage.in \
                                                 or ping Cloud Counselage HR in B24. <br><br> \
                                                 Reply with the characters corresponding to the following questions for further assistance <br> \
                                                 A. IP Start date <br> \
                                                 B. IP end date <br> \
                                                 D. Workgroup <br>  \
                                                 E. Appointment letter <br><br> \
                                                 Press * for main menu '); 


 
      await manager.train();
      manager.save();
      var response = await manager.process('en', findStr);
      console.log(response);
      //console.log(typeof(response.answer));
      return response.answer;
}

//serve the static html files
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//events emitters
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
      console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
    botstr(msg)
        .then(result => {
            if(result == null){
              io.emit('chat message', " Sorry , I did not understand that. <br> \
                                       Please reply with the valid characters to the corresponding questions <br> \
                                       or visit https://cloudcounselage.co.in/faq for more information");
            }
            else{
              io.emit('chat message', result);
            }
        });

  });
});
//server start
http.listen(8000, function(){
  console.log('listening on *:8000');
});

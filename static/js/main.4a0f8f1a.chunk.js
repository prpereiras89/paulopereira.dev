(this.webpackJsonppaulopereira=this.webpackJsonppaulopereira||[]).push([[0],{133:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),o=a.n(r),s=(a(83),a(84),a(2)),l=a(13),c=a(7),m=a(8),p=a(9),u=a(10),d=a(71),h=a.n(d),g=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:{width:"100%",margin:"auto"}},i.a.createElement(s.Grid,{className:"landing-grid",style:{overflow:"auto"}},i.a.createElement(s.Cell,{col:12},i.a.createElement("img",{className:"profile-pic",src:h.a,alt:"profile pic"}),i.a.createElement("div",{className:"banner-text",style:{marginBottom:"50px"}},i.a.createElement("h1",null,"Paulo Pereira"),i.a.createElement("h2",null,"Ph.D. Student"),i.a.createElement("hr",null),i.a.createElement("p",null,"Data Science | Artificial Intelligence | Statistical Learning | Computional Vision | Cloud Computing | Computional Modeling"),i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:"https://www.linkedin.com/in/paulo-pereira-prps",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("i",{className:"fab fa-linkedin","aria-hidden":"true"})),i.a.createElement("a",{href:"https://github.com/prpereiras89",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("i",{className:"fab fa-github","aria-hidden":"true"})),i.a.createElement("a",{href:"https://scholar.google.com.br/citations?user=mREVZ3wAAAAJ&hl=pt-BR",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("i",{className:"fab fa-google","aria-hidden":"true"})))))))}}]),a}(n.Component),f=a(58),y=a(18),b=a(34),v=a(73),E=(a(133),[{url:"img/about_3.jpg",orientation:"landscape"},{url:"img/about_2.jpg",orientation:"portrait"},{url:"img/about_0.png",orientation:"portrait"},{url:"img/about_1.jpg",orientation:"landscape"}]),w=function(e){return{x:0,y:-4*e,scale:1,rot:20*Math.random()-10,delay:100*e}},k=function(e,t){return"perspective(1500px) rotateX(0deg) rotateY(".concat(e/10,"deg) rotateZ(").concat(e,"deg) scale(").concat(t,")")};function C(){var e=Object(n.useState)((function(){return new Set})),t=Object(y.a)(e,1)[0],a=Object(b.useSprings)(E.length,(function(e){return Object(f.a)(Object(f.a)({},w(e)),{},{from:{x:0,rot:0,scale:1.5,y:-1e3}})})),r=Object(y.a)(a,2),o=r[0],s=r[1],l=Object(v.a)((function(e){var a=Object(y.a)(e.args,1)[0],n=e.down,i=Object(y.a)(e.delta,1)[0],r=(e.distance,Object(y.a)(e.direction,1)[0]),o=e.velocity,l=r<0?-1:1;!n&&o>.2&&t.add(a),s((function(e){if(a===e){var r=t.has(a);return{x:r?(200+window.innerWidth)*l:n?i:0,rot:i/100+(r?10*l*o:0),scale:n?1.1:1,delay:void 0,config:{friction:50,tension:n?800:r?200:500}}}})),n||t.size!==E.length||setTimeout((function(){return t.clear()||s((function(e){return w(e)}))}),600)}));return o.map((function(e,t){var a=e.x,n=e.y,r=e.rot,o=e.scale;return i.a.createElement(b.animated.div,{key:t,style:{transform:Object(b.interpolate)([a,n],(function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))}},i.a.createElement(b.animated.div,Object.assign({},l(t),{style:{transform:Object(b.interpolate)([r,o],k),backgroundImage:"url(".concat(E[t].url,")"),width:"portrait"===E[t].orientation?"240px":"320px",height:"portrait"===E[t].orientation?"320px":"240px"}})))}))}var x=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"about-container"},i.a.createElement(s.Grid,{style:{overflow:"auto"}},i.a.createElement(s.Cell,{className:"about-title",col:12},i.a.createElement("h1",null,"So, who am I?"),i.a.createElement("h3",null,"Me talking about myself...")),i.a.createElement(s.Cell,{className:"about-cell-2",col:8,tablet:12,phone:12,style:{margin:"auto"}},i.a.createElement("div",{style:{textIndent:"2em"}},i.a.createElement("p",null,"My name is Paulo Pereira, I am from the most beautiful city in the whole world, also known as Bras\xedlia, which is the capital of Brazil. Currently, I am living in Recife, an awesome city, located in Pernambuco along the Northeast coast of Brazil. At the moment, I am getting my Ph.D. in computer science at the Universidade Federal de Pernambuco, which is the same place where I got my Master's degree also in computer science. During my bachelor's degree, I had the opportunity of being an exchange student at the State University of New York at Oswego, where I studied for one year and a half. Over there, I was enrolled in a class of Data Analytics, which made me fall in love with data science and artificial intelligence. I spend most of my time researching and learning about the data science process that starts at the data acquisition and finishes at data visualization, going through all steps, such as data scraping, data cleansing, wrangling and exploration, the model conception, and so on.")),i.a.createElement("div",{style:{textIndent:"2em"}},i.a.createElement("p",null,"So, talking a little bit about my Ph.D., I am researching about modeling the availability and performance of object detection in edge and fog computing environments. So far, in the literature, there is not a clear-cut difference between fog and edge computing, which may be confusing when defining edge and fog environments; however, it is essential to differentiate both paradigms. Edge computing concentrates on the end-devices side, while fog computing concentrates on the infrastructure. Edge computing is the layer that performs local computing or sensor metering. It is worth pointing out that edge computing environments run specific applications in the end-devices (e.g., self-driving cars, healthcare monitors, etc.). On the other hand, fog computing is an extension of the cloud computing paradigm, where the computational resources are extended to near the edge devices. Services are also provided by fog computing environments, which can be used through the Internet or private networks. My Master's dissertation was about autoscaling of virtual machines in cloud computing environments, where I used time-series forecasting to predict the most suitable moment to perform the scaling activity. Therefore, using my approach, it is possible to decrease the performance degradation of cloud environments.")),i.a.createElement("div",{style:{textIndent:"2em"}},i.a.createElement("p",null,"I am also a Linux enthusiastic, I love writing scripts and code on Linux terminal. I am also all about the open-source philosophy, which seeks to achieve a culture that engages in collective freedom via freedom of expression, free public access to knowledge and information, full demonstration of creativity and innovation in various arenas and promotion of citizen liberties.")),i.a.createElement("div",{style:{textIndent:"2em"}},i.a.createElement("p",null,"And besides all the computing stuff, my greatest passion in life is traveling to other countries, where I can meet different people and places. I think traveling is one of the greatest gifts we can give to ourselves. I feel really blessed to see different cultures and places. To finish I would like to quote Anthony Bourdain:"," ",i.a.createElement("p",{style:{textIndent:"0em",fontWeight:"bold",width:"75%",margin:"auto",paddingTop:"3em"}},"\"Travel isn't always pretty. It isn't always comfortable. Sometimes it hurts, it even breaks your heart. But that's okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.\""))),i.a.createElement(s.Cell,{style:{width:"100%",height:"500px",position:"relative"}},i.a.createElement("div",{id:"photo-deck"},i.a.createElement(C,null))))))}}]),a}(n.Component),T=a(44),j=a.n(T),I=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"contact-body",style:{overflow:"auto"}},i.a.createElement(s.Grid,{className:"contact-grid"},i.a.createElement(s.Cell,{col:12},i.a.createElement("h2",null,"Contact Me"),i.a.createElement("hr",{style:{paddingBottom:"2em"}}),i.a.createElement("img",{src:j.a,alt:"contact pic",style:{height:"250px"}}),i.a.createElement("h2",null,"Paulo Pereira"),i.a.createElement("p",{style:{width:"75%",margin:"auto",paddingTop:"1em"}},"I am a PhD computer science student at Federal University of Pernambuco in Brazil. My skills are software development mainly with Python and Java, computer networks, cloud, fog and edge computing, IoT, time series forecast (Python and R), performance and availability evaluations, analytical modeling, machine learning, data science and computer vision."),i.a.createElement("p",{style:{width:"75%",margin:"auto",paddingTop:"1em"}},"I am always interested in new projects. Add me on LinkedIn or email me whenever you want to. See ya!"),i.a.createElement("div",{className:"contact-list",style:{width:"30em",margin:"auto"}},i.a.createElement(s.List,null,i.a.createElement(s.ListItem,null,i.a.createElement(s.ListItemContent,{style:{fontSize:"25px",fontFamily:"Anton"}},i.a.createElement("i",{class:"fas fa-envelope-square"}),"prpereiras89@gmail.com")),i.a.createElement(s.ListItem,null,i.a.createElement(s.ListItemContent,{style:{fontSize:"25px",fontFamily:"Anton",marginBottom:"100px"}},i.a.createElement("i",{class:"fab fa-linkedin"}),i.a.createElement("a",{href:"https://www.linkedin.com/in/paulo-pereira-prps",target:"_blank",rel:"noopener noreferrer",style:{color:"black",textDecoration:"none"}},"Paulo Pereira"))))))))}}]),a}(n.Component),S=a(55),O=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={activeTab:0},n}return Object(m.a)(a,[{key:"toggleCategories",value:function(){return 0===this.state.activeTab?i.a.createElement("div",{className:"projects-grid"},i.a.createElement(s.Grid,{style:{width:"100%"}},i.a.createElement(s.Cell,{col:3,tablet:12,phone:12},i.a.createElement(s.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},i.a.createElement(s.CardTitle,{style:{color:"black",height:"176px",background:"white url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqJ79aOGr6yFpgatGPTg5L5BprrLN4AP0jMg&usqp=CAU) center / cover"}},"A Hybrid Mechanism of Horizontal Auto-scaling Based on Thresholds and Time Series"),i.a.createElement(s.CardText,null,"This project is the proposal of my Msc degree, and it was presented and published at the 2019 IEEE International Conference on Systems, Man, and Cybernetics (SMC 2019) in Bari, Italy. This project is implemented using triggering thresholds and five forecasting models: Drift, Simple Exponential Smoothing, Holt, Holt-Winters and ARIMA. The main goal of this project is to achieve a better QoS related to the cloud computing environment."," "),i.a.createElement(s.CardActions,{border:!0},i.a.createElement(s.Button,{href:"https://github.com/prpereiras89/hybrid-autoscaling",target:"_blank",colered:!0},"Github"),i.a.createElement(S.HashLink,{style:{textDecoration:"none",color:"black"},to:"/publications#hybrid-paper",colered:!0},"Paper")),i.a.createElement(s.CardMenu,{style:{color:"#fff"}},i.a.createElement(s.IconButton,{name:"share"})))),i.a.createElement(s.Cell,{col:3,tablet:12,phone:12},i.a.createElement(s.Card,{shadow:5,tablet:12,phone:12,style:{minWidth:"450",margin:"auto"}},i.a.createElement(s.CardTitle,{style:{color:"black",height:"176px",background:"white url(https://ai2-s2-public.s3.amazonaws.com/figures/2017-08-08/2f5d1f79d631822a5812cd2f620b61105b979e47/4-Figure1-1.png) center / cover"}},"Predictor"),i.a.createElement(s.CardText,null," ","This project is a tool that uses some forecasting techiniques to predict how the phenomenon software aging will increase over time. This project was presented and published at the 2018 IEEE 37th International Performance Computing and Communications Conference (IPCCC 2018) with the title of Software Rejuvenation in Computer Systems: An Automatic Forecasting Approach Based on Time Series."," "),i.a.createElement(s.CardActions,{border:!0},i.a.createElement(s.Button,{href:"https://github.com/prpereiras89/predictor",target:"_blank",colered:!0},"Github"),i.a.createElement(S.HashLink,{style:{textDecoration:"none",color:"black"},to:"/publications#predictor",colered:!0},"Paper")),i.a.createElement(s.CardMenu,{style:{color:"#fff"}},i.a.createElement(s.IconButton,{name:"share"})))),i.a.createElement(s.Cell,{col:3,tablet:12,phone:12},i.a.createElement(s.Card,{shadow:5,tablet:12,phone:12,style:{minWidth:"450",margin:"auto"}},i.a.createElement(s.CardTitle,{style:{color:"black",height:"176px",background:"white url(https://i.ytimg.com/vi/oAQ-v7hJKos/maxresdefault.jpg) center / cover"}},"Fault Injector"),i.a.createElement(s.CardText,null,"This project is a fault injector to test the availability of cloud, fog, and edge computing environments. It also monitors to see if the system is up or down."," "),i.a.createElement(s.CardActions,{border:!0},i.a.createElement(s.Button,{href:"https://github.com/prpereiras89/fault-injector",target:"_blank",colered:!0},"Github")),i.a.createElement(s.CardMenu,{style:{color:"#fff"}},i.a.createElement(s.IconButton,{name:"share"})))))):1===this.state.activeTab?i.a.createElement("div",{className:"projects-grid"},i.a.createElement(s.Grid,{style:{width:"100%"}},i.a.createElement(s.Cell,{col:3,tablet:12,phone:12},i.a.createElement("h1",null,"Data Science"),i.a.createElement("p",null,"I am still building, coming out soon!")))):2===this.state.activeTab?i.a.createElement("div",{className:"projects-grid"},i.a.createElement(s.Grid,{style:{width:"100%"}},i.a.createElement(s.Cell,{col:3,tablet:12,phone:12},i.a.createElement("h1",null,"Computational Vision"),i.a.createElement("p",null,"I am still building, coming out soon!")))):3===this.state.activeTab?i.a.createElement("div",{className:"projects-grid"},i.a.createElement(s.Grid,{style:{width:"100%"}},i.a.createElement(s.Cell,{col:3,tablet:12,phone:12},i.a.createElement(s.Card,{shadow:5,style:{minWidth:"450",margin:"auto"}},i.a.createElement(s.CardTitle,{style:{color:"black",height:"176px",background:"white url(https://twilio-cms-prod.s3.amazonaws.com/original_images/UvUUs1WXEBgwWcMbhbQ_JB5tScafJWbz95oNsfYnIyQQWW0oHawdrojZMGqEuHSiDAjdGZ8PJgMqAF) center / cover"}},"Memory Leaking Simulator"),i.a.createElement(s.CardText,null,"It is a memory leaking simulator written in Python 3.8. It monitors and kill itself when a resident memory value has been consumed."," "),i.a.createElement(s.CardActions,{border:!0},i.a.createElement(s.Button,{href:"https://github.com/prpereiras89/memoryleaksimulator",target:"_blank",colered:!0},"Github")),i.a.createElement(s.CardMenu,{style:{color:"#fff"}},i.a.createElement(s.IconButton,{name:"share"})))))):void 0}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"category-tabs"},i.a.createElement(s.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},i.a.createElement(s.Tab,null,"Cloud Computing"),i.a.createElement(s.Tab,null,"Data Science"),i.a.createElement(s.Tab,null,"Computational Vision"),i.a.createElement(s.Tab,null,"Miscellaneous")),i.a.createElement(s.Grid,null,i.a.createElement(s.Cell,{col:12},i.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),a}(n.Component),P=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(s.Grid,null,i.a.createElement(s.Cell,{col:4},i.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),i.a.createElement(s.Cell,{col:8,style:{width:"63%"}},i.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),i.a.createElement("h5",{style:{marginTop:"0px"}},this.props.position),i.a.createElement("p",null,this.props.schoolDescription)))}}]),a}(n.Component),A=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.relevantSkills.map((function(e,t){return i.a.createElement("li",null,e)}));return i.a.createElement(s.Grid,null,i.a.createElement(s.Cell,{col:4},i.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),i.a.createElement(s.Cell,{col:8,style:{width:"63%"}},i.a.createElement("h4",{style:{marginTop:"0px"}},this.props.position),i.a.createElement("h5",{style:{marginTop:"0px"}},this.props.place),i.a.createElement("p",null,this.props.jobDescription),i.a.createElement("p",null,"Relevant skills: ",i.a.createElement("ul",{style:{paddingLeft:"10em"}},e))))}}]),a}(n.Component),D=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(s.Grid,null,i.a.createElement(s.Cell,{col:12,style:{width:"100%"}},i.a.createElement("div",{style:{display:"flex"}},this.props.skill,i.a.createElement(s.ProgressBar,{style:{margin:"auto",width:"75%"},progress:this.props.progress,buffer:this.props.progress}))))}}]),a}(n.Component),M=a(15),B=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(s.Grid,null,i.a.createElement(s.Cell,{col:4,tablet:12,phone:12},i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",{src:j.a,alt:"resume",style:{height:"200px"}}),i.a.createElement("h2",{style:{fontWeight:"bold",fontFamily:"Oxygen, sans-serif",paddingTop:"1em"}},"Paulo Pereira"),i.a.createElement("h4",{style:{fontFamily:"Oxygen, sans-serif",color:"grey"}},"Ph.D. Computer Science"),i.a.createElement("hr",{style:{margin:"auto",borderTop:"3px solid rgb(66,66,66)",width:"50%"}}),i.a.createElement("p",{style:{textAlign:"justify",width:"75%",margin:"auto",marginTop:"25px",marginBottom:"25px",fontFamily:"Oxygen, sans-serif"}},"I am a PhD computer science student at Federal University of Pernambuco in Brazil. My skills are software development, computer networks, cloud and fog computing, time series forecast, performance and availability evaluations, analytical modeling, machine learning, and computer vision."),i.a.createElement("hr",{style:{margin:"auto",borderTop:"3px solid rgb(66,66,66)",width:"50%"}}),i.a.createElement("h4",{style:{fontFamily:"Oxygen, sans-serif",marginBottom:"0px"}},"Recife"),i.a.createElement("h5",{style:{fontFamily:"Oxygen, sans-serif",marginTop:"0px"}},"Pernambuco - Brazil"))),i.a.createElement(s.Cell,{className:"resume-right-col",col:8,tablet:12,phone:12,style:{fontFamily:"Oxygen, sans-serif"}},i.a.createElement("h2",{style:{fontFamily:"Oxygen, sans-serif"}},"Goals"),i.a.createElement("p",{style:{textAlign:"justify"}},"My main goal is to apply my knowledge of programming, statistics, Artificial Intelligence, data wrangling, and data visualiztion in real-world projects. Thus, I will be able to get experience and improve my abilities as a data science professional."),i.a.createElement("hr",{style:{margin:"auto",width:"75%"}}),i.a.createElement("h2",{style:{fontFamily:"Oxygen, sans-serif"}},"Education"),i.a.createElement(P,{startYear:2019,endYear:"Present",schoolName:"Universidade Federal de Pernambuco - CIn UFPE",position:"Ph.D in Computer Science",schoolDescription:"Thesis (temporary): Performability Evaluation of Object Detection systems in Edge and Fog Environments"}),i.a.createElement(P,{startYear:2017,endYear:2019,schoolName:"Universidade Federal de Pernambuco - CIn UFPE",position:"MSc in Computer Science",schoolDescription:"Dissertation: A Hybrid Strategy for Auto-scaling of VMs: An Approach Based on Time Series and Thresholds"}),i.a.createElement(P,{startYear:2014,endYear:2015,schoolName:"State University of New York at Oswego - SUNY",schoolDescription:"English as a Second Language/Computer Science Bachelor."}),i.a.createElement(P,{startYear:2010,endYear:2016,schoolName:"Universidade Federal Rural de Pernambuco - UFRPE",schoolDescription:"Computer Science Bachelor Degree."}),i.a.createElement("hr",{style:{margin:"auto",width:"75%"}}),i.a.createElement("h2",{style:{fontFamily:"Oxygen, sans-serif"}},"Experience"),i.a.createElement(A,{startYear:2017,endYear:"Present",position:"System Developer, MoDCS Research Group.",place:"Pernambuco, Brazil",jobDescription:"Maintaining and developing new features for the Mercury Modeling Tool.",relevantSkills:["Java","Analytical Modeling, Simulation"]}),i.a.createElement(A,{startYear:2012,endYear:2014,position:"System Developer, Time Jr.",place:"Pernambuco, Brazil",jobDescription:"Developed many systems such as web systems and desktop systems.",relevantSkills:["Java, Primefaces, PHP, SQL, HTML, Javascript, CSS","Problem-solving","Teamwork"]}),i.a.createElement(A,{startYear:2013,endYear:2013,position:"Instructor in Web Development Course , Time Jr Marathon of Courses",place:"Pernambuco, Brazil",jobDescription:"Taught students how to develop a web system using PHP.",relevantSkills:["PHP, SQL, HTML, Javascript, CSS","Communication","Public Speaking"]}),i.a.createElement("hr",{style:{margin:"auto",width:"75%"}}),i.a.createElement("h2",{style:{fontFamily:"Oxygen, sans-serif"}},"Scientific Publications"),i.a.createElement(M.Link,{to:"/publications",style:{textDecoration:"none",color:"white"}},"Clik here to go to publications' Page"),i.a.createElement("hr",{style:{margin:"auto",marginTop:"5em",width:"75%"}}),i.a.createElement("h2",{style:{fontFamily:"Oxygen, sans-serif"}},"Skills"),i.a.createElement(D,{skill:"Statistics",progress:90}),i.a.createElement(D,{skill:"Statistical Learning",progress:85}),i.a.createElement(D,{skill:"Time Series",progress:85}),i.a.createElement(D,{skill:"Artificial Intelligence",progress:70}),i.a.createElement(D,{skill:"Markov Chains",progress:70}),i.a.createElement(D,{skill:"Python",progress:80}),i.a.createElement(D,{skill:"Django",progress:10}),i.a.createElement(D,{skill:"React",progress:25}))))}}]),a}(n.Component),N=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement(s.Grid,null,i.a.createElement(s.Cell,{col:2},i.a.createElement("p",{style:{fontSize:"2em"}},this.props.year)),i.a.createElement(s.Cell,{col:10,style:{width:"63%"}},i.a.createElement("h4",{style:{marginTop:"0px"}},i.a.createElement("a",{href:this.props.link,rel:"noopener noreferrer",target:"_blank",onMouseOver:function(e){e.target.style.color="rgb(255,64,129)"},onMouseOut:function(e){e.target.style.color="white"},style:{textDecoration:"none",color:"white"}},this.props.title)),i.a.createElement("h5",{style:{marginTop:"0px"}},this.props.metaData),i.a.createElement("p",{style:{fontWeight:"bold"}},"Abstract:"),i.a.createElement("p",null,this.props.abstract)))}}]),a}(n.Component),L=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(s.Grid,null,i.a.createElement(s.Cell,{className:"publications-col",col:8,tablet:12,phone:12,style:{margin:"auto",fontFamily:"Oxygen, sans-serif"}},i.a.createElement("h1",{style:{fontFamily:"Oxygen, sans-serif"}},"Scientific Publications"),i.a.createElement("h3",{style:{fontFamily:"Oxygen, sans-serif"}},"Journals"),i.a.createElement(N,{year:2020,title:"Stochastic performance model for web server capacity planning in fog computing",link:"https://link.springer.com/content/pdf/10.1007/s11227-020-03218-w.pdf",metaData:"The Journal of Supercomputing",abstract:"Cloud computing is attractive mostly because it allows companies to increase and decrease available resources, which makes them seem limitless. Although cloud computing has many advantages, there are still several issues such as unpredictable latency and no mobility support. To overcome these problems, fog computing extends communication, storage, and computation toward the edge of network. Therefore, fog computing may support delay-sensitive applications, which means that the application latency from end users can be improved, and it also decreases energy consumption and traffic congestion. The demand for performance, availability, and reliability in computational systems grows every day. To optimize these features, it is necessary to improve the resource utilization such as CPU, network bandwidth, memory, and storage. Although fog computing extends the cloud computing resources and improves the quality of service, executing capacity planning is an effective approach to arranging a deterministic process for web-related activities, and it is one of the approaches of optimizing web performance. The goal of capacity planning in fog computing is preparing the system for an incoming workload, so we are able to optimize the system\u2019s utilization while minimizing the total task execution time, which happens before sending the load toward the cloud environment or not sending it at all. In this paper, we evaluate the performance of a web server running in a fog environment. We also use QoS metrics to plan its capacity. We proposed performance closed-form equations extracted from a continuous-time Markov chain model of the system."}),i.a.createElement(N,{year:2019,title:"Feature Learning with Multi-objective Evolutionary Computation in the generation of Acoustic Features",link:"https://journal.iberamia.org/index.php/intartif/article/view/276",metaData:"Inteligencia Artificial (Ed. IBERAMIA)",abstract:"Choosing audio features has been a very interesting theme for audio classification experts. They have seen that this process is probably the most important effort to solve the classification problem. In this sense, there are techniques of Feature Learning for generate new features more suitable for classification model than conventional features. However, these techniques generally do not depend on knowledge domain and they can apply in various types of raw data. However, less agnostic approaches learn a type of knowledge restricted to the area studded. The audio data requires a specific knowledge type. There are many techniques that seek to improve the performance of the new generation of acoustic features, among which stands the technique that use evolutionary algorithms to explore analytical space of function. However, the efforts made leave opportunities for improvement. The purpose of this work is to propose and evaluate a multi-objective alternative to the exploitation of analytical audio features. In addition, experiments were arranged to be validated the method, with the help a computational prototype that implemented the proposed solution. After it was found the effectiveness of the model and ensuring that there is still opportunity for improvement in the chosen segment."}),i.a.createElement(N,{year:2019,title:"Models to evaluate service Provisioning over Cloud Computing Environments - A Blockchain-As-A-Service case study",link:"https://www.seer.ufrgs.br/rita/article/view/RITA_VOL26_NR3_65",metaData:"RITA - Revista de Inform\xe1tica Te\xf3rica e Aplicada",abstract:"The strictness of the Service Level Agreements(SLAs) is mainly due toa set of constraints related to performance and dependability attributes, such as availability. This paper shows that system\u2019s availability values may be improved by deploying services over a private environment, which may obtain better availability values with improved management, security, and control. However, how much a company needs to afford to keep this improved availability? As an additional activity, this paper compares the obtained availability values with the infrastructure deployment expenses and establishes a cost \xd7 benefit relationship. As for the system\u2019s evaluation technique, we choose modeling; while for the service used to demonstrate the models\u2019 feasibility, the blockchain-as-a-service was the selected one. This paper proposes and evaluate four different infrastructures hosting blockchains: (i) baseline; (ii) double redundant; (iii) triple redundant, and (iv) hyper-converged. The obtained results pointed out that the hyper-converged architecture had an advantage over a full triple redundant environment regarding availability and deployment cost."}),i.a.createElement("h3",{style:{fontFamily:"Oxygen, sans-serif"}},"Conference"),i.a.createElement("div",{id:"hybrid-paper"},i.a.createElement(N,{year:2019,title:"A Hybrid Mechanism of Horizontal Auto-scaling Based on Thresholds and Time Series",link:"https://ieeexplore.ieee.org/abstract/document/8914522/",metaData:"2019 IEEE International Conference on Systems, Man and Cybernetics (SMC)",abstract:"Demand for performance, availability, and reliability in computational systems has increased lately. Improving these aspects is an important research challenge due to the applications and users diversity. In this paper, we propose a hybrid auto-scaling approach that uses reactive and proactive solutions. We focus on the operation of a Web server, where we applied the characteristic of CPU-bound in the application. The approach proposed is a CPU usage monitor and auto-scaling management that is used to improve the system's throughput and reduce the CPU idle time. Our proposal is implemented using triggering thresholds and five forecasting models: Drift, Simple Exponential Smoothing, Holt, Holt-Winters and ARIMA. The main goal of this research is to achieve a better QoS related to the cloud computing environment. One of the obtained results shows that our method represents a throughput improvement of 12.11% by using our proposal, instead of only using a threshold-based technique."})),i.a.createElement(N,{year:2019,title:"Dependability Evaluation of an IoT System: A Hierarchical Modelling Approach",link:"https://ieeexplore.ieee.org/abstract/document/8914032/",metaData:"2019 IEEE International Conference on Systems, Man and Cybernetics (SMC)",abstract:"Internet of Things (IoT) is a network of physical objects equipped with embedded technology, sensors, and connection to the network (e.g. vehicles, buildings, and others). These physical objects are able to collect data that will be used by various applications. Currently, there are already various applications in IoT such as smart agriculture and smart parking. These applications are composed by a set of heterogeneous components, so tasks such as resource management and maintenance of these systems become complex. Therefore, this paper presents a modeling strategy based on hierarchical models using Stochastic Petri Net (SPN) and Reliability Block Diagram (RBD). In order to evaluate the dependability in an IoT system, a case study was carried out based on a specific scenario considering a smart building. The proposed models enable to estimate measures such as steady-state availability and annual downtime."}),i.a.createElement(N,{year:2019,title:"Blockchain provisioning over private cloud computing environments: Availability modeling and cost requirements",link:"https://ieeexplore.ieee.org/abstract/document/9064125/",metaData:"2019 IEEE 8th International Conference on Cloud Networking (CloudNet)",abstract:"This paper proposes and evaluates availability models for blockchain provisioning over cloud computing infrastructures as well as their respective deployment expenses in order to establish a cost \xd7 benefit relationship. To demonstrate these models' feasibility, we provide two case studies considering blockchain provisioning over a baseline architecture, and three other alternative redundant environments."}),i.a.createElement("div",{id:"predictor"},i.a.createElement(N,{year:2018,title:"Software Rejuvenation in Computer Systems: An Automatic Forecasting Approach Based on Time Series",link:"https://ieeexplore.ieee.org/abstract/document/8711347",metaData:"2018 IEEE 37th International Performance Computing and Communications Conference (IPCCC)",abstract:"Distributed computing is bringing many advantages in cost, flexibility and availability. However, it increases the demand for performance and reliability. Resources such as CPU, memory, storage and network bandwidth, are very susceptible of presenting software aging issues. Therefore, proactive actions, also known as software rejuvenation must be performed to avoid these issues. The identification of the best moment to perform software rejuvenation is not a simple task, mostly because it may affect the system's availability and reliability. To overcome this problem, we propose an automatic forecasting strategy to support the system administrators to choose the best moment to perform software rejuvenation. Our strategy uses six time series techniques: Drift, Simple Exponential Smoothing, Holt, Holt-Winters, Linear Regression, and ARIMA. In our proposal, the most suitable one is chosen automatically as the best fit for a particular scenario. Three case studies were performed to evaluate the efficiency of our automatic strategy. Our proposal aims to increase the system's availability while decreasing the QoS violation probability. In one of our experiments, we can observe a reduction of 92.3% in the system's downtime. This research supports decision making activities and opens possibilities to foster the usage of forecasting strategies when dealing with software aging phenomenon."})))))}}]),a}(n.Component),F=function(){return i.a.createElement(l.g,null,i.a.createElement(l.d,{exact:!0,path:"/",component:g}),i.a.createElement(l.d,{path:"/aboutme",component:x}),i.a.createElement(l.d,{path:"/resume",component:B}),i.a.createElement(l.d,{path:"/projects",component:O}),i.a.createElement(l.d,{path:"/publications",component:L}),i.a.createElement(l.d,{path:"/contact",component:I}))};var H=function(){return i.a.createElement("div",{className:"demo-big-content"},i.a.createElement(s.Layout,null,i.a.createElement(s.Header,{className:"header-color",style:{fontFamily:"Oxygen, sans-serif"},title:i.a.createElement(M.Link,{to:"/",style:{fontFamily:"Oxygen, sans-serif",color:"white",textDecoration:"none"}},"Home"),scroll:!0},i.a.createElement(s.Navigation,null,i.a.createElement(M.Link,{to:"/aboutme"},"About Me"),i.a.createElement(M.Link,{to:"/resume"},"Resume"),i.a.createElement(M.Link,{to:"/projects"},"Projects"),i.a.createElement(M.Link,{to:"/publications"},"Publications"),i.a.createElement(M.Link,{to:"/contact"},"Contact"))),i.a.createElement(s.Drawer,{style:{fontFamily:"Oxygen, sans-serif"},title:i.a.createElement(M.Link,{to:"/",style:{fontFamily:"Oxygen, sans-serif",color:"rgb(66,66,66)",textDecoration:"none"}},"Paulo Pereira")},i.a.createElement(s.Navigation,null,i.a.createElement(M.Link,{to:"/aboutme"},"About Me"),i.a.createElement(M.Link,{to:"/resume"},"Resume"),i.a.createElement(M.Link,{to:"/projects"},"Projects"),i.a.createElement(M.Link,{to:"/publications"},"Publications"),i.a.createElement(M.Link,{to:"/contact"},"Contact"))),i.a.createElement(s.Content,null,i.a.createElement("div",{className:"page-content"}),i.a.createElement(F,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(138),a(139);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(M.BrowserRouter,null,i.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,a){e.exports=a.p+"static/media/pp_rounded_contact.eeb08a55.png"},71:function(e,t,a){e.exports=a.p+"static/media/pp_rounded.4e993032.png"},78:function(e,t,a){e.exports=a(140)},83:function(e,t,a){},84:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.4a0f8f1a.chunk.js.map
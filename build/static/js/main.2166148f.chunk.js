(this["webpackJsonpjobby-app"]=this["webpackJsonpjobby-app"]||[]).push([[0],{40:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),c=a(29),i=a.n(c),r=a(6),o=a(4),l=a(11),j=a(14),b=a(15),m=a(16),d=a(18),h=a(17),p=a(8),u=a.n(p),g=(a(40),a(1)),O=function(e){function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).state={username:"",password:"",showSubmitError:!1,errorMsg:""},e.onSubmitSuccess=function(t){var a=e.props.history;u.a.set("jwt_token",t,{expires:30}),a.replace("/")},e.onSubmitFailure=function(t){e.setState({showSubmitError:!0,errorMsg:t})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.submitForm=function(){var t=Object(j.a)(Object(l.a)().mark((function t(a){var n,s,c,i,r,o,j;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,s=n.username,c=n.password,i={username:s,password:c},"https://apis.ccbp.in/login",r={method:"POST",body:JSON.stringify(i)},t.next=7,fetch("https://apis.ccbp.in/login",r);case 7:return o=t.sent,t.next=10,o.json();case 10:j=t.sent,!0===o.ok?e.onSubmitSuccess(j.jwt_token):e.onSubmitFailure(j.error_msg);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderPasswordField=function(){var t=e.state.password;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{className:"input-label",htmlFor:"password",children:"PASSWORD"}),Object(g.jsx)("input",{type:"password",id:"password",className:"input-field",value:t,onChange:e.onChangePassword,placeholder:"password"})]})},e.renderUserNameField=function(){var t=e.state.username;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{className:"input-label",htmlFor:"username",children:"USERNAME"}),Object(g.jsx)("input",{type:"text",id:"username",className:"input-field",value:t,onChange:e.onChangeUsername,placeholder:"username"})]})},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.showSubmitError,a=e.errorMsg;return void 0!==u.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/"}):Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"login-form-container",children:Object(g.jsxs)("form",{className:"form-container",onSubmit:this.submitForm,children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/logo-img.png",className:"website-logo",alt:"website logo"}),Object(g.jsx)("div",{className:"input-container",children:this.renderUserNameField()}),Object(g.jsx)("div",{className:"input-container",children:this.renderPasswordField()}),Object(g.jsx)("button",{className:"login-button",type:"submit",children:"Login"}),t&&Object(g.jsxs)("p",{className:"error-message",children:["*",a]})]})})})}}]),t}(n.Component),x=O,f=a(32),y=a(31),N=a(7),v=(a(47),Object(o.g)((function(e){var t=function(){var t=e.history;u.a.remove("jwt_token"),t.replace("/login")};return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("nav",{className:"nav-header",children:Object(g.jsxs)("div",{className:"nav-content",children:[Object(g.jsxs)("div",{className:"nav-bar-mobile-container",children:[Object(g.jsx)(r.b,{to:"/",children:Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/logo-img.png ",className:"website-logo",alt:"website logo"})}),Object(g.jsxs)("ul",{className:"nav-bar-mobile-icons-container",children:[Object(g.jsx)("li",{children:Object(g.jsx)(r.b,{to:"/",children:Object(g.jsx)(y.a,{className:"nav-item-mobile-link"})})}),Object(g.jsx)("li",{children:Object(g.jsx)(r.b,{to:"/jobs",children:Object(g.jsx)(N.a,{className:"nav-item-mobile-link"})})}),Object(g.jsx)("li",{children:Object(g.jsxs)("button",{type:"button",className:"nav-mobile-btn",onClick:t,children:["Click",Object(g.jsx)(f.a,{})]})})]})]}),Object(g.jsxs)("div",{className:"nav-bar-large-container",children:[Object(g.jsx)(r.b,{to:"/",children:Object(g.jsx)("img",{className:"website-logo",src:"https://assets.ccbp.in/frontend/react-js/logo-img.png",alt:"website logo"})}),Object(g.jsxs)("ul",{className:"nav-menu",children:[Object(g.jsx)("li",{className:"nav-menu-item",children:Object(g.jsx)(r.b,{to:"/",className:"nav-link",children:"Home"})}),Object(g.jsx)("li",{className:"nav-menu-item",children:Object(g.jsx)(r.b,{to:"/jobs",className:"nav-link",children:"Jobs"})})]}),Object(g.jsx)("div",{className:"large-device-button-container",children:Object(g.jsx)("button",{type:"button",className:"logout-desktop-btn",onClick:t,children:"Logout"})})]})]})})})}))),S=(a(48),function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{}),Object(g.jsx)("div",{className:"home-container",children:Object(g.jsxs)("div",{className:"home-content",children:[Object(g.jsx)("h1",{className:"home-heading",children:"Find The Job That Fits Your Life"}),Object(g.jsx)("p",{className:"home-description",children:"Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential."}),Object(g.jsx)(r.b,{to:"/jobs",children:Object(g.jsx)("button",{type:"button",className:"shop-now-button",children:"Find Jobs"})})]})})]})}),k=a(34),w=a(20),I=a.n(w),D=(a(67),"INITIAL"),L="SUCCESS",F="FAILURE",_="IN_PROGRESS",T=function(e){function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).state={profileData:[],apiStatus:D},e.getProfile=Object(j.a)(Object(l.a)().mark((function t(){var a,n,s,c,i;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:_}),a=u.a.get("jwt_token"),"https://apis.ccbp.in/profile",n={headers:{Authorization:"Bearer ".concat(a)},method:"GET"},t.next=6,fetch("https://apis.ccbp.in/profile",n);case 6:if(!0!==(s=t.sent).ok){t.next=15;break}return t.next=10,s.json();case 10:c=t.sent,i={name:c.profile_details.name,profileImageUrl:c.profile_details.profile_image_url,shortBio:c.profile_details.short_bio},e.setState({apiStatus:L,profileData:i}),t.next=16;break;case 15:e.setState({apiStatus:F});case 16:case"end":return t.stop()}}),t)}))),e.renderProfileView=function(){var t=e.state.profileData,a=t.name,n=t.profileImageUrl,s=t.shortBio;return Object(g.jsxs)("div",{className:"profile-success-container",children:[Object(g.jsx)("img",{src:n,alt:"profile",className:"profile-img"}),Object(g.jsx)("h1",{className:"profile-heading",children:a}),Object(g.jsx)("p",{className:"profile-bio",children:s}),Object(g.jsx)("h1",{className:"profile-heading",children:"Koppolu Koushik"}),Object(g.jsx)("p",{className:"profile-bio",children:"Frontend Developer"})]})},e.renderFailureView=function(){return Object(g.jsx)("div",{className:"profile-error-view-container",children:Object(g.jsx)("button",{type:"button","data-testid":"button",className:"profile-failure-button",onClick:e.getProfile,children:"Retry"})})},e.renderLoadingView=function(){return Object(g.jsx)("div",{className:"profile-loader-container ","data-testid":"loader",children:Object(g.jsx)(I.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})},e.renderProfileDetails=function(){switch(e.state.apiStatus){case L:return e.renderProfileView();case F:return e.renderFailureView();case _:return e.renderLoadingView();default:return null}},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getProfile()}},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:this.renderProfileDetails()})}}]),t}(n.Component),J=T,C=(a(68),function(e){var t=function(t){(0,e.changeSearchInput)(t)},a=function(t){var a=e.getJobs;"Enter"===t.key&&a()},n=function(t){(0,e.changeEmployeeList)(t.target.value)};return Object(g.jsxs)("div",{className:"filters-group-container",children:[function(){var n=e.getJobs,s=e.searchInput;return Object(g.jsxs)("div",{className:"search-input-container",children:[Object(g.jsx)("label",{htmlFor:"searchInput",className:"visually-hidden",children:"Search"}),Object(g.jsx)("input",{type:"search",id:"searchInput",className:"search-input",placeholder:"Search",value:s,onChange:t,onKeyDown:a}),Object(g.jsxs)("button",{type:"button","data-testid":"searchButton",className:"search-button-container",onClick:n,children:["Click",Object(g.jsx)(N.b,{className:"search-icon"})]})]})}(),Object(g.jsx)(J,{}),Object(g.jsx)("hr",{className:"horizontal-line"}),function(){var t=e.employmentTypesList;return Object(g.jsxs)("div",{className:"employment-type-container",children:[Object(g.jsx)("h1",{className:"employment-type-heading",children:" Type of Employment"}),Object(g.jsx)("ul",{className:"employee-type-list-container",children:t.map((function(e){return Object(g.jsxs)("li",{className:"employee-item",children:[Object(g.jsx)("input",{type:"checkbox",id:e.employmentTypeId,className:"check-input",value:e.employmentTypeId,onChange:n}),Object(g.jsx)("label",{htmlFor:e.employmentTypeId,className:"check-label",children:e.label})]},e.employmentTypeId)}))})]})}(),Object(g.jsx)("hr",{className:"horizontal-line"}),function(){var t=e.salaryRangesList;return Object(g.jsxs)("div",{className:"salary-range-container",children:[Object(g.jsx)("h1",{className:"salary-range-heading",children:"Salary Range"}),Object(g.jsx)("ul",{className:"salary-range-list-container",children:t.map((function(t){var a=e.changeSalary;return Object(g.jsxs)("li",{className:"salary-item",onClick:function(){a(t.salaryRangeId)},children:[Object(g.jsx)("input",{type:"radio",id:t.salaryRangeId,name:"salary",className:"check-input"}),Object(g.jsx)("label",{htmlFor:t.salaryRangeId,className:"check-label",children:t.label})]},t.salaryRangeId)}))})]})}()]})}),E=a(21),A=(a(69),function(e){var t=e.jobData,a=t.companyLogoUrl,n=t.employmentType,s=t.jobDescription,c=t.location,i=t.packagePerAnnum,o=t.rating,l=t.title,j=t.id;return Object(g.jsx)(r.b,{to:"/jobs/".concat(j),className:"link-item",children:Object(g.jsxs)("li",{className:"job-item",children:[Object(g.jsxs)("div",{className:"logo-title-location-container",children:[Object(g.jsxs)("div",{className:"logo-title-container",children:[Object(g.jsx)("img",{src:a,alt:"company logo",className:"company-logo"}),Object(g.jsxs)("div",{className:"title-rating-container",children:[Object(g.jsx)("h1",{className:"title-heading",children:l}),Object(g.jsxs)("div",{className:"rating-container",children:[Object(g.jsx)(N.c,{className:"rating-icon"}),Object(g.jsx)("p",{className:"rating-heading",children:o})]})]})]}),Object(g.jsxs)("div",{className:"location-package-container",children:[Object(g.jsxs)("div",{className:"location-employee-container",children:[Object(g.jsxs)("div",{className:"location-container",children:[Object(g.jsx)(E.a,{className:"location-icon"}),Object(g.jsx)("p",{className:"location-heading",children:c})]}),Object(g.jsxs)("div",{className:"employee-type-container",children:[Object(g.jsx)(N.a,{className:"brief-case-icon"}),Object(g.jsx)("p",{className:"employee-type-heading",children:n})]})]}),Object(g.jsx)("p",{className:"package-heading",children:i})]})]}),Object(g.jsx)("hr",{className:"line"}),Object(g.jsx)("h1",{className:"description-heading",children:"Description"}),Object(g.jsx)("p",{className:"description-text",children:s})]})})}),P=(a(70),[{label:"Full Time",employmentTypeId:"FULLTIME"},{label:"Part Time",employmentTypeId:"PARTTIME"},{label:"Freelance",employmentTypeId:"FREELANCE"},{label:"Internship",employmentTypeId:"INTERNSHIP"}]),R=[{salaryRangeId:"1000000",label:"10 LPA and above"},{salaryRangeId:"2000000",label:"20 LPA and above"},{salaryRangeId:"3000000",label:"30 LPA and above"},{salaryRangeId:"4000000",label:"40 LPA and above"}],U="INITIAL",V="SUCCESS",M="FAILURE",W="IN_PROGRESS",B=function(e){function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).state={jobsList:[],apiStatus:U,employeeTypeList:[],minimumSalary:"",searchInput:""},e.getJobs=Object(j.a)(Object(l.a)().mark((function t(){var a,n,s,c,i,r,o,j,b,m;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:W}),a=e.state,n=a.employeeTypeList,s=a.minimumSalary,c=a.searchInput,i="https://apis.ccbp.in/jobs?employment_type=".concat(n.join(),"&minimum_package=").concat(s,"&search=").concat(c),r=u.a.get("jwt_token"),o={headers:{Authorization:"Bearer ".concat(r)},method:"GET"},t.next=7,fetch(i,o);case 7:if(!0!==(j=t.sent).ok){t.next=16;break}return t.next=11,j.json();case 11:b=t.sent,m=b.jobs.map((function(e){return{companyLogoUrl:e.company_logo_url,employmentType:e.employment_type,id:e.id,jobDescription:e.job_description,location:e.location,packagePerAnnum:e.package_per_annum,rating:e.rating,title:e.title}})),e.setState({jobsList:m,apiStatus:V}),t.next=17;break;case 16:e.setState({apiStatus:M});case 17:case"end":return t.stop()}}),t)}))),e.renderJobsList=function(){var t=e.state.jobsList;return t.length>0?Object(g.jsx)("div",{className:"all-jobs-container",children:Object(g.jsx)("ul",{className:"jobs-list",children:t.map((function(e){return Object(g.jsx)(A,{jobData:e},e.id)}))})}):Object(g.jsxs)("div",{className:"no-jobs-view",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/no-jobs-img.png",className:"no-jobs-img",alt:"no jobs"}),Object(g.jsx)("h1",{className:"no-jobs-heading",children:"No Jobs Found"}),Object(g.jsx)("p",{className:"no-jobs-description",children:"We could not find any jobs. Try other filters."})]})},e.renderFailureView=function(){return Object(g.jsxs)("div",{className:"jobs-error-view-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/failure-img.png",alt:"failure view",className:"jobs-failure-img"}),Object(g.jsx)("h1",{className:"jobs-failure-heading-text",children:"Oops! Something Went Wrong"}),Object(g.jsx)("p",{className:"jobs-failure-description",children:"We cannot seem to find the page you are looking for"}),Object(g.jsx)("button",{type:"button","data-testid":"button",className:"jobs-failure-button",onClick:e.getJobs,children:"Retry"})]})},e.renderLoadingView=function(){return Object(g.jsx)("div",{className:"loader-container","data-testid":"loader",children:Object(g.jsx)(I.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})},e.renderAllJobs=function(){switch(e.state.apiStatus){case V:return e.renderJobsList();case M:return e.renderFailureView();case W:return e.renderLoadingView();default:return null}},e.changeSalary=function(t){e.setState({minimumSalary:t},e.getJobs)},e.changeEmployeeList=function(t){var a=e.state.employeeTypeList;if(0===a.filter((function(e){return e===t})).length)e.setState((function(e){return{employeeTypeList:[].concat(Object(k.a)(e.employeeTypeList),[t])}}),e.getJobs);else{var n=a.filter((function(e){return e!==t}));e.setState({employeeTypeList:n},e.getJobs)}},e.changeSearchInput=function(t){e.setState({searchInput:t.target.value})},e.onEnterSearchInput=function(t){"Enter"===t.key&&e.getJobs()},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getJobs()}},{key:"render",value:function(){var e=this.state.searchInput;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{}),Object(g.jsx)("div",{className:"jobs-container",children:Object(g.jsxs)("div",{className:"jobs-content",children:[Object(g.jsx)(C,{employmentTypesList:P,salaryRangesList:R,changeSearchInput:this.changeSearchInput,searchInput:e,getJobs:this.getJobs,changeSalary:this.changeSalary,changeEmployeeList:this.changeEmployeeList}),Object(g.jsxs)("div",{className:"search-input-jobs-list-container",children:[Object(g.jsxs)("div",{className:"search-input-container-desktop",children:[Object(g.jsx)("input",{type:"search",className:"search-input-desktop",placeholder:"Search",onChange:this.changeSearchInput,onKeyDown:this.onEnterSearchInput}),Object(g.jsxs)("button",{type:"button","data-testid":"searchButton",className:"search-button-container-desktop",onClick:this.getJobs,children:[Object(g.jsx)("span",{className:"visually-hidden",children:"Search"}),Object(g.jsx)(N.b,{className:"search-icon-desktop"})]})]}),this.renderAllJobs()]})]})})]})}}]),t}(n.Component),G=B,z=a(33),K=(a(71),function(e){var t=e.jobDetails,a=t.companyLogoUrl,n=t.employmentType,s=t.jobDescription,c=t.location,i=t.rating,r=t.title;return Object(g.jsx)("li",{className:"similar-job-item",children:Object(g.jsxs)("div",{className:"logo-title-location-container",children:[Object(g.jsxs)("div",{className:"logo-title-container",children:[Object(g.jsx)("img",{src:a,alt:"similar job company logo",className:"company-logo"}),Object(g.jsxs)("div",{className:"title-rating-container",children:[Object(g.jsx)("h1",{className:"title-heading",children:r}),Object(g.jsxs)("div",{className:"rating-container",children:[Object(g.jsx)(N.c,{className:"rating-icon"}),Object(g.jsx)("p",{className:"rating-heading",children:i})]})]})]}),Object(g.jsx)("h1",{className:"description-heading",children:"Description"}),Object(g.jsx)("p",{className:"description-text",children:s}),Object(g.jsxs)("div",{className:"location-employee-container",children:[Object(g.jsxs)("div",{className:"location-container",children:[Object(g.jsx)(E.a,{className:"location-icon"}),Object(g.jsx)("p",{className:"location-heading",children:c})]}),Object(g.jsxs)("div",{className:"employee-type-container",children:[Object(g.jsx)(N.a,{className:"brief-case-icon"}),Object(g.jsx)("p",{className:"employee-type-heading",children:n})]})]})]})})}),H=(a(72),function(e){var t=e.skillDetails,a=t.imageUrl,n=t.name;return Object(g.jsx)("li",{className:"skills-item-container",children:Object(g.jsxs)("div",{className:"skills-container",children:[Object(g.jsx)("img",{src:a,alt:n,className:"skill-image"}),Object(g.jsx)("p",{className:"skill-name",children:n})]})})}),q=(a(73),"INITIAL"),Y="SUCCESS",Q="FAILURE",X="IN_PROGRESS",Z=function(e){function t(){var e;Object(b.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=Object(d.a)(this,t,[].concat(n))).state={jobData:{},similarJobsData:[],apiStatus:q},e.getFormattedSimilarData=function(e){return{companyLogoUrl:e.company_logo_url,employmentType:e.employment_type,id:e.id,jobDescription:e.job_description,location:e.location,rating:e.rating,title:e.title}},e.getFormattedData=function(e){return{companyLogoUrl:e.company_logo_url,companyWebsiteUrl:e.company_website_url,employmentType:e.employment_type,id:e.id,jobDescription:e.job_description,lifeAtCompany:{description:e.life_at_company.description,imageUrl:e.life_at_company.image_url},location:e.location,rating:e.rating,title:e.title,packagePerAnnum:e.package_per_annum,skills:e.skills.map((function(e){return{imageUrl:e.image_url,name:e.name}}))}},e.getJobData=Object(j.a)(Object(l.a)().mark((function t(){var a,n,s,c,i,r,o,j,b,m;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({apiStatus:X}),a=e.props.match,n=a.params,s=n.id,c=u.a.get("jwt_token"),i="https://apis.ccbp.in/jobs/".concat(s),r={headers:{Authorization:"Bearer ".concat(c)},method:"GET"},t.next=9,fetch(i,r);case 9:if(!0!==(o=t.sent).ok){t.next=19;break}return t.next=13,o.json();case 13:j=t.sent,b=e.getFormattedData(j.job_details),m=j.similar_jobs.map((function(t){return e.getFormattedSimilarData(t)})),e.setState({jobData:b,similarJobsData:m,apiStatus:Y}),t.next=20;break;case 19:e.setState({apiStatus:Q});case 20:case"end":return t.stop()}}),t)}))),e.renderFailureView=function(){e.props.match.params.id;return Object(g.jsxs)("div",{className:"job-item-error-view-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/failure-img.png",alt:"failure view",className:"job-item-failure-img"}),Object(g.jsx)("h1",{className:"job-item-failure-heading-text",children:"Oops! Something Went Wrong"}),Object(g.jsx)("p",{className:"job-item-failure-description",children:"We cannot seem to find the page you are looking for"}),Object(g.jsx)("button",{type:"button","data-testid":"button",className:"job-item-failure-button",onClick:e.getJobData,children:"Retry"})]})},e.renderLoadingView=function(){return Object(g.jsx)("div",{className:"job-item-loader-container","data-testid":"loader",children:Object(g.jsx)(I.a,{type:"ThreeDots",color:"#ffffff",height:"50",width:"50"})})},e.renderJobDetailsView=function(){var t=e.state,a=t.jobData,n=t.similarJobsData,s=a.companyLogoUrl,c=a.companyWebsiteUrl,i=a.employmentType,r=a.jobDescription,o=a.location,l=a.packagePerAnnum,j=a.rating,b=a.title,m=a.lifeAtCompany,d=a.skills,h=m.description,p=m.imageUrl;return Object(g.jsxs)("div",{className:"job-details-view-container",children:[Object(g.jsxs)("div",{className:"job-item",children:[Object(g.jsxs)("div",{className:"logo-title-location-container",children:[Object(g.jsxs)("div",{className:"logo-title-container",children:[Object(g.jsx)("img",{src:s,alt:"job details company logo",className:"company-logo"}),Object(g.jsxs)("div",{className:"title-rating-container",children:[Object(g.jsx)("h1",{className:"title-heading",children:b}),Object(g.jsxs)("div",{className:"rating-container",children:[Object(g.jsx)(N.c,{className:"rating-icon"}),Object(g.jsx)("p",{className:"rating-heading",children:j})]})]})]}),Object(g.jsxs)("div",{className:"location-package-container",children:[Object(g.jsxs)("div",{className:"location-employee-container",children:[Object(g.jsxs)("div",{className:"location-container",children:[Object(g.jsx)(E.a,{className:"location-icon"}),Object(g.jsx)("p",{className:"location-heading",children:o})]}),Object(g.jsxs)("div",{className:"employee-type-container",children:[Object(g.jsx)(N.a,{className:"brief-case-icon"}),Object(g.jsx)("p",{className:"employee-type-heading",children:i})]})]}),Object(g.jsx)("p",{className:"package-heading",children:l})]})]}),Object(g.jsx)("hr",{className:"line"}),Object(g.jsxs)("div",{className:"description-visit-container",children:[Object(g.jsx)("h1",{className:"description-heading",children:"Description"}),Object(g.jsxs)("div",{className:"visit-container",children:[Object(g.jsx)("a",{href:c,className:"visit-heading",children:"Visit"}),Object(g.jsx)(z.a,{className:"visit-icon"})]})]}),Object(g.jsx)("p",{className:"description-text",children:r}),Object(g.jsx)("h1",{className:"skills-heading",children:"Skills"}),Object(g.jsx)("ul",{className:"skills-list-container",children:d.map((function(e){return Object(g.jsx)(H,{skillDetails:e},e.name)}))}),Object(g.jsx)("h1",{className:"life-at-company-heading",children:"Life at Company"}),Object(g.jsxs)("div",{className:"life-at-company-description-image-container",children:[Object(g.jsx)("p",{className:"life-at-company-description",children:h}),Object(g.jsx)("img",{src:p,alt:"life at company",className:"life-at-company-image"})]})]}),Object(g.jsx)("h1",{className:"similar-jobs-heading",children:"Similar Jobs"}),Object(g.jsx)("ul",{className:"similar-jobs-list",children:n.map((function(e){return Object(g.jsx)(K,{jobDetails:e},e.id)}))})]})},e.renderJobDetails=function(){switch(e.state.apiStatus){case Y:return e.renderJobDetailsView();case Q:return e.renderFailureView();case X:return e.renderLoadingView();default:return null}},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getJobData()}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{}),Object(g.jsx)("div",{className:"job-item-details-container",children:this.renderJobDetails()})]})}}]),t}(n.Component),$=Z,ee=(a(74),function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(v,{}),Object(g.jsxs)("div",{className:"not-found-container",children:[Object(g.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png",alt:"not found",className:"not-found-img"}),Object(g.jsx)("h1",{className:"not-found-heading",children:"Page Not Found"}),Object(g.jsx)("p",{className:"not-found-description",children:"we\u2019re sorry, the page you requested could not be found"})]})]})}),te=a(35),ae=function(e){return void 0===u.a.get("jwt_token")?Object(g.jsx)(o.a,{to:"/login"}):Object(g.jsx)(o.b,Object(te.a)({},e))},ne=(a(75),function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(o.d,{children:[Object(g.jsx)(o.b,{exact:!0,path:"/login",component:x}),Object(g.jsx)(ae,{exact:!0,path:"/",component:S}),Object(g.jsx)(ae,{exact:!0,path:"/jobs",component:G}),Object(g.jsx)(ae,{exact:!0,path:"/jobs/:id",component:$}),Object(g.jsx)(o.b,{path:"/not-found",component:ee}),Object(g.jsx)(o.a,{to:"not-found"})]})})});i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(r.a,{children:Object(g.jsx)(ne,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.2166148f.chunk.js.map
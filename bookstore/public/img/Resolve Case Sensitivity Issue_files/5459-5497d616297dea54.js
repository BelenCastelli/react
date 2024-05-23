"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5459],{95459:function(e,a,t){t.d(a,{Z:function(){return D}});var i,n=t(24312),r=t(95312),l=t(17098),s=t(66267),o=t(28983),d=t(35226),m=t(96053),c=t(18939),u=t.n(c),p=t(92379),f=t(88041),g=t(84551),v=t(73581),h=t(19841),b=t(94695),x=t(54368),j=t(63364),M=t(21292),w=t(29757),y=t(651);function I(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,i)}return t}function S(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?I(Object(t),!0).forEach(function(a){(0,n.Z)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function N(e){return e.split(/[\s,]+/)}function C(e){let{value:a,onChange:t,className:i}=e,n=(0,f.Z)(),{0:r,1:l}=(0,p.useState)(""),s=(0,p.useCallback)(e=>{if(r)switch(e.key){case"Enter":case",":case" ":t([...a,...N(r).map(k)]),l(""),e.preventDefault()}},[r,t,a]);return(0,y.jsx)(x.ZP,{className:(0,h.default)("react-select-container",i),isMulti:!0,onBlur:e=>{r&&(t([...a,...N(r).map(k)]),l(r),e.preventDefault())},classNamePrefix:"react-select",components:Z,inputValue:r,isClearable:!0,menuIsOpen:!1,onChange:t,onInputChange:l,onKeyDown:s,placeholder:n.formatMessage(P.placeholder),value:a,"aria-labelledby":"add-emails-label",name:"add-member-emails"})}let k=e=>({label:e,value:e,isValid:o.F.test(e)}),Z={DropdownIndicator:()=>null,IndicatorsContainer:()=>null,ClearIndicator:()=>null,MultiValueRemove:()=>null,MultiValue:e=>{let a=(0,f.Z)(),t=(0,y.jsxs)("span",{className:"flex items-center gap-1",children:[(0,y.jsx)("span",{children:e.children}),(0,y.jsx)(w.tPq,{className:"icon-sm"})]}),i=e.data.isValid?t:(0,y.jsx)(M.u,{label:a.formatMessage(P.tooltipInvalidEmail,{email:e.data.value}),side:"top",children:t});return(0,y.jsx)(j.c.MultiValue,S(S({},e),{},{children:(0,y.jsx)("button",{className:(0,h.default)("m-1 cursor-pointer rounded-full border border-transparent py-1 pl-3 pr-2 text-sm text-token-text-primary",e.data.isValid?"bg-token-main-surface-secondary hover:border-token-border-medium hover:bg-token-main-surface-tertiary":"bg-red-200 text-red-500"),onClick:a=>{var t,i;null===(t=(i=e.removeProps).onClick)||void 0===t||t.call(i,a),a.preventDefault()},"aria-label":a.formatMessage(P.removeMember,{member:e.data.value}),children:i})}))}},P=(0,b.vU)({membersAdded:{id:"emailsTextarea.membersAdded",defaultMessage:"+{count} {count, plural, one {member} other {members}}"},removeMember:{id:"emailsTextarea.removeMember",defaultMessage:"Remove {member}"},tooltipInvalidEmail:{id:"emailsTextarea.tooltipInvalidEmail",defaultMessage:'"{email}" may not be a valid email'},clearAllEntries:{id:"emailsTextarea.clearAllEntries",defaultMessage:"Clear all"},placeholder:{id:"emailsTextarea.placeholder",defaultMessage:"Type an email and press enter..."}});var T=t(51891),O=t(4181),A=t(27617),R=t(75887),V=t(43446),E=t(77940);function L(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,i)}return t}function B(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?L(Object(t),!0).forEach(function(a){(0,n.Z)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}let F=((i={})[i.INITIAL=0]="INITIAL",i[i.CSV_TABLE=1]="CSV_TABLE",i);function D(e){let{workspace:a,canResendInviteEmails:t,onCancel:i,cancelButtonText:n,onSuccess:c,fullWidthButtons:h=!1}=e,b=a.isOwnerOfAccount(),{0:x,1:j}=(0,p.useState)(!1),{0:M,1:I}=(0,p.useState)(!1),S=(0,p.useRef)(null),N=a.isTeam(),k=(0,f.Z)(),{0:Z,1:P}=(0,p.useState)(!0),{0:L,1:D}=(0,p.useState)(!1),{0:H,1:W}=(0,p.useState)(F.INITIAL),{0:U,1:q}=(0,p.useState)([]),{0:K,1:$}=(0,p.useState)([]),{mutateAsync:J}=function(e,a){let t=(0,f.Z)(),i=(0,d.NL)();return(0,m.D)({mutationFn:async a=>{let{emails:i,role:n,resendEmails:r}=a,l=[],o=Math.max(5,Math.round(i.length/10));for(let e=0;e<i.length;e+=o)l.push(i.slice(e,e+o));let d=async a=>s.Z.addWorkspaceUsers(e,a,n,r).then(e=>(e.errored_emails.length>0&&V.m.danger(t.formatMessage(z.inviteMessageFailure,{emailsStr:e.errored_emails.map(e=>{let{email_address:a,error:t}=e;return"".concat(a,": ").concat(t)}).join(", ")})),e.account_invites)).catch(e=>{throw V.m.danger(e.message),e});return(await Promise.all(l.map(e=>d(e)))).flat()},onSuccess:()=>{i.invalidateQueries({queryKey:["workspace","invites",e]}),null==a||a()}})}(a.id,c),Q=_(b),X=async e=>{var a;let t=null===(a=e.target.files)||void 0===a?void 0:a[0];if(t){let e=await new Promise(e=>{if(t.size/1048576>25)e({status:"error",reason:"file_too_large"});else if("text/csv"!==t.type)e({status:"error",reason:"invalid_file_type"});else{let a=new FileReader;a.readAsText(t),a.onload=function(a){var t;let i=M,n=(null===(t=a.target)||void 0===t?void 0:t.result).split("\n"),r=new Set;e({status:"success",newRows:n.reduce((e,a)=>{let[t,n]=a.split(",").map(e=>e.trim());if(o.F.test(t)&&!r.has(t)){var l;void 0!==Q[n]||i||(i=!0),e.push({email:t,role:null!==(l=Q[n])&&void 0!==l?l:Q.member})}return r.add(t),e},[]),hasWarning:i})}}});"success"===e.status?(q(e.newRows),W(F.CSV_TABLE),I(e.hasWarning)):"file_too_large"===e.reason?V.m.danger(k.formatMessage(z.fileTooLargeWarning,{maxSize:"".concat(25,"MB")}),{duration:5}):"invalid_file_type"===e.reason&&V.m.danger(k.formatMessage(z.fileIncorrectTypeWarning),{duration:5})}},G=(e,a,t)=>{let i=[...U];i[e]=B(B({},i[e]),{},{[a]:t}),q(i)},Y=e=>{q([...U.slice(0,e),...U.slice(e+1)])},ee=(0,p.useCallback)(()=>{q([]),W(F.INITIAL),D(!1),$([])},[]),ea=async()=>{D(!0);try{U.length>5&&V.m.info(k.formatMessage(z.inviteMessageLoading,{numRows:U.length}),{hasCloseButton:!0});let e=[["admin",r.r3.ADMIN],["owner",r.r3.OWNER],["member",r.r3.STANDARD]],t=(await Promise.all(u()(e.map(e=>{let[a,t]=e,i=U.filter(e=>e.role===a).map(e=>e.email);return i.length>0&&J({emails:i,role:t,resendEmails:Z})})))).flat().length;t>0&&V.m.success(k.formatMessage(z.inviteSuccessToast,{numRows:t,userStr:1===t?"user":"users",workspaceName:(0,E.CV)(k,a)})),null==c||c(),ee()}finally{D(!1)}},et=(0,y.jsx)(v.z,{color:"primary",size:h?"large":"medium",disabled:L||0===U.length,onClick:ea,children:L?k.formatMessage(z.inviteMemberInviteSubmitButtonLoading):k.formatMessage(z.inviteMemberInviteSubmitButton)}),ei=(0,y.jsx)(v.z,{color:"primary",size:h?"large":"medium",disabled:0===K.length,onClick:()=>{let e=new Set;q(K.reduce((a,t)=>(e.has(t.value)||a.push(t.value),e.add(t.value),a),[]).map(e=>({email:e,role:Q.member}))),W(F.CSV_TABLE)},children:k.formatMessage(z.inviteMemberInviteNextButton)});return(0,y.jsxs)("div",{className:"flex flex-col gap-2",children:[H===F.INITIAL&&(0,y.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,y.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,y.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,y.jsx)("label",{htmlFor:"upload-csv",id:"upload-csv-label",children:(0,y.jsx)(g.Z,B({},z.importCSVLabel))}),(0,y.jsxs)("span",{className:"text-sm text-token-text-tertiary",children:[(0,y.jsx)(g.Z,B(B({},x?z.helperCSVFormatHide:z.helperCSVFormatShow),{},{values:{link:e=>(0,y.jsx)("button",{className:"underline",onClick:()=>{j(!x)},children:e})}})),x&&(0,y.jsx)("pre",{className:"mt-4",children:"email,role\nuser1@company.com,member\nadmin@company.com,admin\nit@company.com,owner"})]})]}),(0,y.jsx)("input",{ref:S,type:"file",accept:".csv,text/csv",id:"upload-csv",className:"hidden",onChange:X}),(0,y.jsx)(v.z,{color:"secondary",onClick:()=>{var e;return null===(e=S.current)||void 0===e?void 0:e.click()},children:(0,y.jsx)(g.Z,B({},z.importCSVButton))})]}),(0,y.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,y.jsx)("label",{htmlFor:"add-member-emails",id:"add-emails-label",children:(0,y.jsx)(g.Z,B({},z.addEmailsFieldName))}),(0,y.jsx)(C,{value:K,onChange:$})]})]}),H===F.CSV_TABLE&&(0,y.jsxs)(y.Fragment,{children:[M&&(0,y.jsxs)("div",{className:"flex w-full items-center bg-yellow-100 p-4",children:[(0,y.jsx)(w.ETw,{className:"icon-sm mr-2 text-yellow-700"}),(0,y.jsx)("div",{className:"flex-grow text-yellow-700",children:(0,y.jsx)(g.Z,B({},z.unspecifiedRoleDescription))})]}),(0,y.jsxs)(R.Z.Root,{size:"normal",children:[(0,y.jsxs)(R.Z.Header,{children:[(0,y.jsx)(R.Z.HeaderCell,{children:(0,y.jsx)(g.Z,B({},z.inviteTableHeaderEmail))}),(0,y.jsx)(R.Z.HeaderCell,{className:"pl-3 dark:bg-gray-900",children:(0,y.jsx)(g.Z,B({},z.inviteTableHeaderRole))}),(0,y.jsx)(R.Z.HeaderCell,{})]}),(0,y.jsx)(R.Z.Body,{children:U.map((e,a)=>(0,y.jsxs)(R.Z.Row,{children:[(0,y.jsx)(R.Z.Cell,{children:(0,y.jsx)(T.Z,{name:"email",type:"email",value:e.email,onChange:e=>G(a,"email",e.target.value),color:"neutral"})}),(0,y.jsx)(R.Z.Cell,{children:(0,y.jsxs)(A.Z.Root,{value:e.role,onValueChange:e=>G(a,"role",e),children:[(0,y.jsxs)(A.Z.Trigger,{children:[(0,y.jsx)(A.Z.Value,{}),(0,y.jsx)(A.Z.Icon,{})]}),(0,y.jsx)(A.Z.Portal,{children:(0,y.jsxs)(A.Z.Content,{className:"border border-token-main-surface-secondary",children:[(0,y.jsx)(A.Z.Item,{value:Q.member,children:(0,y.jsx)(g.Z,B({},z.inviteRoleMember))}),Q.admin&&(0,y.jsx)(A.Z.Item,{value:Q.admin,children:(0,y.jsx)(g.Z,B({},z.inviteRoleAdmin))}),Q.owner&&(0,y.jsx)(A.Z.Item,{value:Q.owner,children:(0,y.jsx)(g.Z,B({},z.inviteRoleOwner))})]})})]})}),(0,y.jsx)(R.Z.Cell,{textAlign:"right",children:(0,y.jsx)(w.XHJ,{onClick:()=>Y(a),className:"icon-sm mr-2 cursor-pointer text-token-text-secondary"})})]},a))})]})]}),t&&P&&(0,y.jsx)("div",{className:"mt-2 flex items-center text-left text-token-text-secondary",children:(0,y.jsx)(l.Z,{id:"resend-emails",checked:Z,onChange:e=>P(e.currentTarget.checked),label:k.formatMessage(z.resendEmailsFieldName)})}),H===F.INITIAL&&N&&(0,y.jsx)("div",{className:"mb-4",children:(0,y.jsx)(O.Z,{children:(0,y.jsx)(g.Z,B({},z.teamInviteModalNote))})}),(0,y.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,y.jsx)(v.z,{color:"secondary",size:h?"large":"medium",onClick:()=>{H!==F.INITIAL?W(F.INITIAL):(ee(),i())},children:H===F.INITIAL?n:k.formatMessage(z.inviteMemberInviteBackButton)}),H===F.INITIAL?ei:et]})]})}let _=e=>{let a={member:"member"};return e&&(a.admin="admin",a.owner="owner"),a},z={importCSVLabel:{id:"adminPage.importCSVLabel",defaultMessage:"Import from CSV",description:"Name of label for import from CSV button"},helperCSVFormatHide:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Hide Example</link>',description:"Instructions for formatting the import CSV, with a link to hide the example"},helperCSVFormatShow:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Show Example</link>',description:"Instructions for formatting the import CSV, with a link to show an example"},importCSVButton:{id:"adminPage.importCSVButton",defaultMessage:"Upload",description:"Name of upload from CSV button"},addEmailsFieldName:{id:"adminPage.addEmailsFieldName.0",defaultMessage:"Emails",description:"Name of input for adding emails to workspace"},unspecifiedRoleDescription:{id:"adminPage.unspecifiedRoleDescription",defaultMessage:"Roles that were unspecified have been changed to Member.",description:"Description text for defaulting invite roles to member"},inviteTableHeaderEmail:{id:"adminPage.inviteTableHeaderEmail",defaultMessage:"Email",description:"Label for email column of invite table header"},inviteTableHeaderRole:{id:"adminPage.inviteTableHeaderRole",defaultMessage:"Role",description:"Label for role column of invite table header"},inviteRoleMember:{id:"adminPage.inviteRoleMember",defaultMessage:"Member",description:"Member role for workspace invite"},inviteRoleAdmin:{id:"adminPage.inviteRoleAdmin",defaultMessage:"Admin",description:"Admin role for workspace invite"},inviteRoleOwner:{id:"adminPage.inviteRoleOwner",defaultMessage:"Owner",description:"Owner role for workspace invite"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}.",description:"Error when uploading a file that is too large"},fileIncorrectTypeWarning:{id:"adminPage",defaultMessage:"Please upload a CSV file.",description:"Error when uploading a file that is not a CSV"},resendEmailsFieldName:{id:"adminPage.resendEmailsFieldName",defaultMessage:"Resend emails for existing invites",description:"Name of checkbox input for resending emails to workspace"},teamInviteModalNote:{id:"adminPage.teamInviteModalNote",defaultMessage:"Users that accept invites will be included as additional seats on your next invoice.",description:"Note for team plan invites that additional seats will be charged"},inviteMessageLoading:{id:"adminPage.inviteMessageLoading",defaultMessage:"Sending out {numRows} invites, this may take a minute...",description:"Loading message when invites are being sent"},inviteSuccessToast:{id:"adminPage.inviteSuccessToast",defaultMessage:"Invited {numRows} {userStr} to {workspaceName}",description:"Message on successfully sending out invites"},inviteMemberInviteNextButton:{id:"adminPage.inviteMemberInviteNextButton",defaultMessage:"Next",description:"The title of the invite member modal next button"},inviteMemberInviteSubmitButton:{id:"adminPage.inviteMemberInviteSubmitButton",defaultMessage:"Send invites",description:"The title of the invite member modal submit button"},inviteMemberInviteSubmitButtonLoading:{id:"adminPage.inviteMemberInviteSubmitButtonLoading",defaultMessage:"Sending invites...",description:"Button label while inviting members"},inviteMemberInviteBackButton:{id:"adminPage.inviteMemberInviteBackButton",defaultMessage:"Back",description:"The title of the invite member modal back button"},inviteMessageFailure:{id:"adminPage.inviteMessageFailure",defaultMessage:"Unable to invite {emailsStr}",description:"Message that shows which emails were unsuccessful at being invited"}}},28983:function(e,a,t){t.d(a,{F:function(){return i}});let i=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/}}]);
//# sourceMappingURL=5459-5497d616297dea54.js.map
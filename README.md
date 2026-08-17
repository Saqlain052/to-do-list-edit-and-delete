1- Event Delegation 

sb say pehlay hum nay whi input lai kr add kia , or localstorage mei b add krtay gaye and input_list mei b .
aik render function bna kr uss mei user input show krtay gaye or append krtay gaye elements ko .
ussi mei hum nay aik delete button bnaya and aik edit button bnaya .
phir uss list k parent element pr eventListner lgaya taa k list k hr element pr lg jaye and event ko as a parameter pass kr dia .
phir if condition lga kr event.target.classList mei agar delete property hui to sb say pehlay index laina h uss ka datasets say 
phir splice lga daina h index and number of removal elements lga kr , phir localstorage mei data set kr dia
phir uss k baad same kaam edit k button k sath kia k if else lga kr event.target.classlist mei agar edit property hui to uss ka index lo uss ka parentElement lo 
phir new input element create kro , or uss ko inputList[index] ko assign kr dia ,
and then button k parent element yani list k firstChild ko replace krdo new value say 
ab user nay edit kia to edit ka button save mei convert ho jana chahiye 
to uss k liay uss ka textContent "save" krdia phir uss ki classlist say classname ko edit say save kr dia 
phir save pr b event listener bnaya , or input_list[index] mei b wo value save ho jaye gi .
or phir local storage mei b save krdia 
then renderlist() ko phir call kr dia

2- re-Attaching Listener

sb say pehlay hum nay whi input lai kr add kia , or localstorage mei b add krtay gaye and input_list mei b . aik render function bnaya aur uss mei user input ko show krtay huway elements ko append krtay gaye . ussi render function mei delete button and edit button bnaya . phir delete button par direct eventListener lagaya taa k jb user delete button pr click kray to uss specific item ka index mil jaye . phir splice lga kr input_list say uss item ko remove kr dia aur localstorage mei updated array save krdi , phir renderList() ko call kr dia taa k updated list dobara screen pr show ho jaye . isi trha edit button pr b direct eventListener lagaya . edit pr click honay par new input element create kia , uss input mei current value assign ki aur list k text ko new input say replace kr dia . phir edit button ka textContent "Save" kr dia aur uss ki class ko edit say save mei change kr dia . Save k liay dobara eventListener attach kia aur user ki updated value ko input_list[index] mei save kr dia , phir localStorage mei updated array save kia aur renderList() ko dobara call kr dia . kyun k renderList() har baar purani list remove kr k naye buttons create karta h , is liay naye Delete aur Edit buttons par eventListeners dobara attach hotay hain . isi process ko re-attaching listeners kehtay hain .

3- Mutation Observer

sb say pehlay hum nay whi input lai kr add kia , or localstorage mei b add krtay gaye and input_list mei b . aik render function bnaya aur uss mei list k elements create kr k ul mei append krtay gaye . phir hum nay MutationObserver bnaya taa k DOM mei honay wali changes ko observe kia ja sakay . uss observer ko ul par observe krwa dia aur childList property use ki taa k jb ul k andar koi child element add ya remove ho to observer ko pata chal jaye . jab renderList() call hota h to sb say pehlay ul.innerHTML = "" ki wajah say puranay li elements remove hotay hain aur phir forEach k through naye li elements create ho kr ul mei append hotay hain . ye add aur remove hona DOM ki mutation h aur MutationObserver is change ko detect kr leta h . observer k callback mei hum check ya console.log krwa saktay hain k DOM mei change hui h . MutationObserver kisi button k click ko directly handle nhi karta balkay sirf DOM mei honay wali changes ko observe karta h . is liay Add, Delete aur Edit k actual actions eventListeners handle kartay hain jab k MutationObserver sirf DOM changes ko detect karta h .




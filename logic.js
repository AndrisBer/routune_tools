function calculate(){
    let a = document.getElementById("km").value;
    let b = 5 / 18;
    let c = a * b;
    document.getElementById("outputkm").innerHTML = "Attālums sekundē -> " + c.toFixed(2) + " metri.";
}

function calculatem(){
    let a = document.getElementById("ms").value;
    let c = (a * 1.852);
    document.getElementById("outputms").innerHTML =
        "Attālums stundā -> " + c.toFixed(2) + " km, vai " + (c / 3.6).toFixed(2) + " metri sekundē";
}

function convert(){
    let miles = document.getElementById("milekm").value;
    let kilo = miles * 1.609344;
    let skilo = miles * 1.852;
    document.getElementById("milestokm").innerHTML =
        miles + " miles on the ground = " + kilo.toFixed(2) + " km.<br>" +
        miles + " miles on the sea = " + skilo.toFixed(2) + " km.";
}

function skersgriezums(){
		let diam = document.getElementById("skersgr").value;
		diam = diam.replace(',','.');
		let num1 = Math.PI/4;
		let num2 = diam*diam;
		document.getElementById("skersgiezums").innerHTML = "Vada šķērsgriezums "+(num2*num1).toFixed(2)+" mm.<hr>";
	}

	function ch_visibility_dist(selectedValue) {
	    const distances = document.getElementsByClassName('distances');
	    const electric = document.getElementsByClassName('electric');
	    const volt_devid = document.getElementsByClassName('days_till_date');
	    const passwords = document.getElementsByClassName('passwords');
	    const divide = document.getElementsByClassName('divider');

	    function toggleVisibility(elements, show, useFlex = false) {
	        Array.from(elements).forEach(element => {
	            element.style.display = show ? (useFlex ? 'flex' : 'block') : 'none';
	        });
	    }

	    toggleVisibility(distances, selectedValue === 'mkm');
	    toggleVisibility(electric, selectedValue === 'ohms');
	    toggleVisibility(volt_devid, selectedValue === 'days_till_date');
	    toggleVisibility(passwords, selectedValue === 'pgen');
			toggleVisibility(divide, selectedValue === 'volt_dvd', true);

	}
function reset(){
    let idsToClear = [
        "ms", "km", "password", "pass_gar", "milekm", "skersgr", "inputvoltage1",
        "inputres1", "inputres2", "inputvoltage", "outputvoltage", "skdienas"
    ];

    idsToClear.forEach(id => document.getElementById(id).value = "");

    let idsToClearInnerHTML = [
        "outputkm", "outputms", "milestokm", "array", "calvertvel", "skersgiezums",
        "involtage", "outvoltage", "res1", "res2", "input_voltage", "output_voltage",
        "resistor1", "resistor2", "dienas_skaits"
    ];

    idsToClearInnerHTML.forEach(id => document.getElementById(id).innerHTML = "");

    ti = [];
    it = 0;
}

const generatePassword = document.querySelector(".generatePassword");
var pass_garums = document.getElementById("pass_gar").value;
generatePassword.addEventListener("click", generateStrongPassword);
function generateStrongPassword() {
console.log(pass_garums);
pass_garums = document.getElementById("pass_gar").value;
console.log(pass_garums);
if(pass_garums<9|| pass_garums===""){
//💡
pass_garums = 15;

}

const passwordInput = document.getElementById("password");
  let randomPassword = "abcdefghVWXYZ12345ijklmnopq$%rstuvwxyzPQRSTU67890.ABCDEFGHIJKLMNO,!@#&*()-+",
    strongPassword = "",
    excludeDuplicate = false;
try{

      for (let i = 0; i < pass_garums; i++) {
        let charAt = randomPassword[Math.floor(Math.random() * randomPassword.length)];
          strongPassword += charAt;
        }
const matches_cipari = strongPassword.match(/[0-9]/g);
const matches_simboli = strongPassword.match(/[-+!@#$%^&*().,]/g);
const matches_lburti = strongPassword.match(/[A-Z]/g);
const matches_mburti = strongPassword.match(/[a-z]/g);

(/\d/.test(strongPassword) && /[-+!@#$%^&*().,]/.test(strongPassword) && (matches_cipari.length>1) && (matches_simboli.length>1) && (matches_lburti.length>1) && (matches_mburti.length>1) && !/[-+!@#$%^&*().,]/.test(strongPassword[0]) && !/[-+!@#$%^&*().,]/.test(strongPassword[1]) && isNaN(strongPassword[0]) && isNaN(strongPassword[1]))?passwordInput.value = strongPassword[0].toUpperCase()+strongPassword[1].toUpperCase()+strongPassword.slice(2, 999999):generateStrongPassword();
}catch{generateStrongPassword();}

}
function Palidziba() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function KopetParoli() {
document.getElementById("pass_gar").value = "Nokopēts";
  var copyText = document.getElementById("password");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);
document.getElementById("password").value = "Nokopēts";
}
function copyPassword() {
    let passwordField = document.getElementById("password");
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordField.value);
    passwordField.value = "Nokopēts";
}
function skaitit_dienas(){
var ddtt = new Date();
var dnaa = [1, 21,31,41,51,61,71,81,91,101,121,131,141,151,161,171,181,191,201];
var tk = document.getElementById("skdienas").value;
let days = Date.parse(tk)-Date.parse(ddtt);
let diens = Math.floor((days/(1000*60*60*24)))+1;
let dnd;
	if((diens%10)==1 && (diens%10)!=11 && (diens%100)!=11){dnd = "diena";}else{dnd="dienas";}
	if(isNaN(diens)){document.getElementById("dienas_skaits").innerHTML ="";}else{document.getElementById("dienas_skaits").innerHTML = diens+" "+dnd;}
}
function outputvoltage(){
	let involt = document.getElementById("inputvoltage1").value;
	involt = involt.replace(',','.');
	let r1 = document.getElementById("inputres1").value;
	r1 = r1.replace(',','.');
	let r2 = document.getElementById("inputres2").value;
	r2 = r2.replace(',','.');
	let calcvoltage = ((+involt)*(+r2))/((+r1)+(+r2));
	document.getElementById("involtage").innerHTML = "Input voltage "+involt;
	document.getElementById("res1").innerHTML = "Resistance 1 = "+r1+" Ohm";
	document.getElementById("res2").innerHTML = "Resistance 2 = "+r2+" Ohm";
	document.getElementById("outvoltage").innerHTML = "Output "+calcvoltage.toFixed(2)+" v";
	}
function calc_resistance(){
	let in_voltage = document.getElementById("inputvoltage").value;
	in_voltage = in_voltage.replace(',','.');
	let out_voltage = document.getElementById("outputvoltage").value;
	out_voltage = out_voltage.replace(',','.');
	let first_resistance = (in_voltage-out_voltage)*10;
	let second_resistance = out_voltage;
	if(first_resistance%second_resistance==0){
		first_resistance=(first_resistance/second_resistance); second_resistance=10;
	}else{
		first_resistance=in_voltage-out_voltage; second_resistance=(+out_voltage);
	}
	document.getElementById("resistor2").innerHTML = "Resistance 1 = "+first_resistance.toFixed(3)+" Ohm";
	document.getElementById("resistor1").innerHTML = "Resistance 2 = "+second_resistance.toFixed(3)+" Ohm";

	}

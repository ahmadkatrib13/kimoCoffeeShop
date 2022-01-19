const $Name = $("#name");
const $Gender = $("#gender");
const $Birth = $("#birthday");
const $Country = $("#country");
const $Username = $("#uname");
const $Email = $("#email");
const $Password = $("#pwd");
const $Confirmation = $("#cpwd");
const $Submit = $(".registerbtn");

let  name
    ,gender
    , birthd
    , country
    , username
    , email
    , password
    , confirmation;

$Submit.click((e) => {
    e.preventDefault();
     name = $Name.val();
     gender = $Gender.val();
     birthd = $Birth.val();
     country = $Country.val();
     username = $Username.val();
     email = $Email.val();
     password = $Password.val();
     confirmation = $Confirmation.val();

    if (!name.trim()) { alert("please enter you name"); return; }
    if (gender == "none") { alert("please enter a gender"); return; }
    if (birthd) {
        currentDate = new Date();
        birthd = new Date(birthd);
        if (birthd.getTime() > currentDate.getTime()) { alert("please enter a valide date of birth"); return; }
    } else { alert("you didn't enter the date of birth"); return; }
    if (country == "none") { alert("please enter a country"); return; }
    if (!username) { alert("please enter a username"); return; }
    if (username.indexOf(' ') !== -1) { alert("username shouldn't contains spaces"); return; }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { alert("please enter a valid email"); return; }
    if (!/^.{8,}$/g.test(password)) { alert("your password should be at least 8"); return; }
    if (!/[A-Z]{1,}/g.test(password)) { alert("your password should contains an UpperCase Letter"); return; }
    if (!/[a-z]{1,}/g.test(password)) { alert("your password should contains an LowerCase Letter"); return; }
    if (!/\d/g.test(password)) { alert("your password should contains at least one number"); return; }
    if (!/[#?!@$%^&*-]{1,}/g.test(password)) { alert("your password should contains at least one special character"); return; }
    if (confirmation !== password) { alert("your entered a wrong confirmation passowrd"); return; }
    alert("registration seccessfull");
})



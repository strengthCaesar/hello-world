var buttonStyle;
var falsePictures = [
    './Apps/weddinngInvetation/asserts/img/fails/1.jpg',
    './Apps/weddinngInvetation/asserts/img/fails/2.jpg',
    './Apps/weddinngInvetation/asserts/img/fails/3.jpg',
    './Apps/weddinngInvetation/asserts/img/fails/4.jpg',
    './Apps/weddinngInvetation/asserts/img/fails/5.jpg',
    './Apps/weddinngInvetation/asserts/img/fails/6.jpg',
    './Apps/weddinngInvetation/asserts/img/fails/7.jpg',
    './Apps/weddinngInvetation/asserts/img/fails/8.jpg',
    './Apps/weddinngInvetation/asserts/img/fails/9.jpg',
];
function randInt(min, max) {
    return Math.floor(Math.random() * (max -min +1))+min;
}
function requestFullScreen() {

    var el = document.body;

    // Supports most browsers and their versions.
    var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen
        || el.mozRequestFullScreen || el.msRequestFullScreen;

    if (requestMethod) {

        // Native full screen.
        requestMethod.call(el);

    } else if (typeof window.ActiveXObject !== "undefined") {

        // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");

        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}


if( isMobileDevice ) {


    buttonStyle = `
<style>
    .button {
    
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}

.button-empty {
  background-color: #f4511e;
width: 100%;
   display: inline-block;
  border-radius: 0.4px;
  /*background-color: #4CAF50;*/
  border: none;
  color: BLACK;
  text-align: center;
  font-weight: bold;
  /*font-size: 15px;*/
  /*padding: 14px;*/
      padding: 5.5px 14px;
  transition: all 0.5s;
  cursor: pointer;
  /*margin: 5px;*/
}

.border-size{
      padding: 6.5px 16px;
}

.facebook-blue{
    background-color: #3b5998
}

.button3 {
    /*background-color: white; */
    /*color: black; */
    /*border: 2px solid #f44336;*/
}

.all-line{
    width: 100%;
}

.button3:hover {
    background-color: #f44336;
    color: white;
}

.button2:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.green{
    background-color: #4CAF50; /* Green */
}

.blue{
    background-color: #4CAF50; /* Green */
}

.center{
    position: absolute;
    right: 36%;
}

.button4 {
  display: inline-block;
  border-radius: 0.5px;
  background-color: #f4511e;
  border: none;
  color: BLACK;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  padding: 14px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button4 span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button4 span:after {
  content: '\\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button4:hover span {
  padding-right: 25px;
}

.button4:hover span:after {
  opacity: 1;
  right: 0;
}

.titleMessageSize{
    text-align: center;
    font-size:200%;
}

.MessageSize{
    text-align: center;
    font-size:200%;
}

</style>
`;
}else{
    buttonStyle = `
<style>
    .button {
    
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}

.button-empty {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 9px 14px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 2px 1px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
.facebook-blue{
    background-color: #3b5998
}

.button3 {
    background-color: white; 
    color: black; 
    border: 2px solid #f44336;
}

.all-line{
    width: 100%;
}

.button3:hover {
    background-color: #f44336;
    color: white;
}

.button2:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}

.green{
    background-color: #4CAF50; /* Green */
}

.blue{
    background-color: #4CAF50; /* Green */
}

.center{
    position: absolute;
    right: 36%;
}

.button4 {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: BLACK;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  padding: 14px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button4 span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button4 span:after {
  content: '\\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button4:hover span {
  padding-right: 25px;
}

.button4:hover span:after {
  opacity: 1;
  right: 0;
}

.titleMessageSize{
    text-align: center;
    font-size:250%;
}

.MessageSize{
    text-align: center;
    font-size:500%;
}


</style>
`;
}
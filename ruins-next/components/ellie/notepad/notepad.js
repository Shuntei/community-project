import React from 'react'
import _JSXStyle from 'styled-jsx/style'

export default function Notepad() {
  return (
    <>
  <div className="container">
    <div className="notepad">
      <div className="notepad-bar">
        <div className="bar">
          <div className="flex-container, colStyle" >
            <div className="solid"></div>
            <div className="solid"></div>
            <div className="solid"></div>
            <div className="solid"></div>
            <div className="solid"></div>
          </div>
            <div className="notepad-title">Notepad</div>
          <div className="flex-container, colStyle">
            <div className="solid"></div>
            <div className="solid"></div>
            <div className="solid"></div>
            <div className="solid"></div>
            <div className="solid"></div>
          </div>

          <div className="icon-inline">
            <div className="notepad-minimize">
              <div className="button-minimize">
                <div className="icon-minimize"></div>
              </div>
            </div>

            <div className="notepad-maximize">
              <div className="button-maximize">
                <div className="icon-maximize"></div>
              </div>
            </div>
            
            <div className="notepad-exit">
              <div className="button-exit">&#10060;</div>
            </div>
          </div>
        </div>
        
      </div> {/* notepad bar */}
      <div className="blackLine">
        <div className="barPadding">
          <div className="title">Note - Title here</div>

      <div className="notepad-settings">
        <div className="buttonLineUp">
        <div className="buttonLineUp1">
          <div className="notepad-button"><i className="ri-arrow-go-back-line"></i></div>
          <div className="notepad-button"><i className="ri-arrow-go-forward-line"></i></div>
        </div>
        <div className="buttonLineUp2">
          <div className="notepad-button"><i className="ri-bold"></i></div>
          <div className="notepad-button"><i className="ri-italic"></i></div>
          <div className="notepad-button"><i className="ri-underline"></i></div>
          <div className="notepad-button"><i className="ri-strikethrough"></i></div>
        </div>
        </div>
      </div>{/* notepad settings */}
      <div className="notepad-content">
        <h1>OXOXOX</h1> 
        
        <div className="mainEnd">
          <div className="relative">
              <div className="trashbin">
                <div><i className="ri-delete-bin-6-fill"></i></div>
            </div>
          </div>
          <div className="relative">
              <div className="colseOut">
                <div className="colseInside">CLOSE</div>
            </div>
          </div>
        </div>{/* mainEnd */}
        
        {/* <p>
        Do me, I'mma do me <br>
        I'mma make mine, I'mma make mine <br>
        I fuck the shine, I said fuck the shine <br>
        Bitch, I grind, bitch, I grind <br>
        Yung Lean swerving in see me fucked up <br>
        See me swervin' through, they want me locked up <br>
        Been locked up, in my own mind <br>
        My thoughts will never be shallow <br><br>

        [Hook]<br>
        Do me, I'mma do me<br>
        I'mma make mine, I'mma make mine<br>
        I fuck the shine, I said fuck the shine<br>
        Bitch, I grind, bitch, I grind<br>
        Yung Lean swerving in see me fucked up<br>
        See me swervin' through, they want me locked up<br>
        Been locked up, in my own mind<br>
        My thoughts will never be shallow<br>
        I'mma make her mine, I'mma make her mine<br>
        I fuck the shine, I said fuck the shine<br>
        Bitch, I grind, bitch, I grind<br>
        Yung Lean swerving in see me fucked up<br>
        See me swervin' through, they want me locked up<br>
        Been locked up, in my own mind<br>
        My thoughts will never be shallow<br><br>

        </p> */}
        
      </div> {/* notepad-content */}
    </div>
    </div>
    </div> {/*<!-- notepad -->*/}
  </div> {/* container -->*/}

      <style global jsx>{`
* {
	box-sizing: border-box;
}


.container {
	display: block;
	max-width: 800px;
	min-height: 20px;
	margin: auto; 
}

.notepad {
	background: #CFCFCF;
	display: block;
	min-height: 100px;
	width: 100%;
	padding: 4px;
	-webkit-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.75);
	-moz-box-shadow: 5px 5px 5px 1px rgba(0,0,0,0.75);
	box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.75);
	border: 1.4px solid white;
}

.notepad-bar {
	width: 100%;
	/* background: #01007A; */
	height: 23px;
}
.bar{
  width: 100%; 
  height: 100%; 
  justify-content: flex-start; 
  align-items: flex-start; 
  gap: 70px; 
  display: inline-flex
}
.flex-container {
  flex-direction: column;
}
.colStyle {
  width: 100%; 
  height: 100%; 
  position: relative; 
}

.mainEnd{
  gap: 3px;
  display: flex;
  flex-flow: row;
  align-items: flex-end;
  justify-content: flex-end;
  position: sticky;
  top: 350px; 
  margin-right: 20px;

}

.solid {
  width: 100%; 
  height: 0px; 
  left: 0px; 
  top: 0px; 
  margin-bottom: 2px;
  /* position: absolute;  */
  border: 0.50px #AAABAC solid
}
.notepad-title {
	color: rgb(0, 0, 0);
	letter-spacing: .5px;
	/* word-spacing: .5px;
	padding-left: 5px;
	float: left; */
	font-family: IBM Plex Mono;
  font-weight: 400;
}
.icon-inline {
  display: inline-flex; 
}


{/* .notepad-minimize, .notepad-maximize, .notepad-exit	{
	height: 100%;
	display: block;
	float: right;
	padding-top: 3px;
	padding-bottom: 3px;
} */}


.notepad-exit {
	padding-left:  5px;
	padding-right: 5px;
}

.button-minimize, .button-maximize, .button-exit  {
	background: #BFBFBF;
	height: 100%;
	width: 19px;
	border-right: 2px solid black;
	border-bottom: 2px solid black;
	border-left: 1px solid white;
	border-top: 1px solid white;
	}

.button-exit {
	font-size: 55%;
	margin: auto;
	text-align: center;
}

.notepad-icon {
	height: 100%;
	/* float: left; */
	padding-top: 1px;
}

.notepad-icon img {
	object-fit: fill;
	/* display: block; */
	height: 19px;
	width: 19px;
}

.icon-maximize {
	border-bottom: 1px solid black;
	border-top: 3px solid black;
	border-left: 1px solid black;
	border-right: 1px solid black;
	height: 80%;
	width: 80%;
	/* display: block; */
	margin: auto;
	margin-top: 1.2px;
}

.icon-minimize {
	border-bottom: 2px solid black;
	width: 80%;
	height: 80%;
	/* display: block; */
	margin: auto;
	margin-left: 1.5px;
}

.notepad-settings {
	width: 100%;
	float: left;
	display: inline-flex;
	/* margin-left: 10px; */
	margin-bottom: 5px;
}

.settings-text {
	padding-right: 15px;
}

.underline {
	text-decoration: underline;
}

.notepad-content {
	height: 400px;
	width: 100%;
	background: white;
	clear: both;
	border-radius: 1px;
	border: 1.2px solid black;
	overflow: auto;
	padding: 5px;
}

.notepad-button {
  width: 25px; 
  height: 25px; 
  left: 0px; 
  top: 0px; 
  background: #D9D9D9; 
  box-shadow: 0px -4px 2px rgba(0, 0, 0, 0.25) inset; 
  border: 0.8px black solid
}

.relative {
	position: relative;
}
.trashbin {
	width: 25px; 
	height: 25px; 
	left: 0px; 
	top: 0px; 
	background: #D9D9D9; 
	box-shadow: 0px -4px 2px rgba(0, 0, 0, 0.25) inset; 
	border: 0.50px black solid
}
.colseOut {
	width: 46px; height: 25px; background: #D9D9D9; box-shadow: 0px -4px 2px rgba(0, 0, 0, 0.25) inset; border: 0.8px black solid
}
.colseInside {
	left: 5px; 
	top: 5px; 
	position: absolute; 
	color: black; 
	font-size: 12px; 
	font-family: IBM Plex Mono; 
	font-weight: 500;
}
.blackLine {
	width: 100%; 
	border: 1px black solid
}
.barPadding {
	width: 100%; 
	padding: 2rem ;
	background: #EDECEC; 
	border: 0.50px black solid
}
.buttonLineUp {
	width: 100%; 
	height: 100%; 
	justify-content: flex-start; 
	align-items: flex-start; 
	gap: 7px; 
	display: inline-flex
}
.buttonLineUp1 {
	height: 100%; 
	display: flex; 
	gap: 2px
}
.buttonLineUp2 {
	height: 100%; 
	display: inline-flex; 
	gap: 2px
}
.title {
	font-size: 20px; 
	font-family: IBM Plex Mono; 
	font-weight: 400; 
	word-wrap: break-word
}

      `} </style>
    </>
  )
}

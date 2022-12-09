import { makeStyles } from '@mui/styles';
 export const useStyle=makeStyles({
  list:{
   color:"red"
  },
  InputToDo:{
    margin: "auto",
    marginTop: "2em",
    width: "15em",
    height: "3em",
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
    
  },
  SubmitButton:{
    display: "flex",
    justifyContent: "center",
    padding:" 1.2em"
  },
  UlList:{
    width: "600px",
    margin: "auto",
    paddingLeft: "0",
    border:"2px solid  rgb(32, 4, 32)",
    height: "300px",
    overflowY: "auto"
   },
   Li_style:{
    listStyleType: "none",
    display: "flex",
    padding: "20px 0",
    justifyContent: "center",
    color: "rgb(32, 4, 32)",
    cursor: "pointer",
    width: "100%",
    "&:hover":{
      backgroundColor: "rgba(165, 159, 159, 0.278)"

    }
  },
  inputText:{
    display:"flex",
    justifyContent:"center",
    color:'red',
    margin:"10px 0px"

  },
  OnclickButton:{
    display:'block',
    margin:'auto',
    color:'red',
    width:'10.2em',height:'2.5em'

  }
  
})


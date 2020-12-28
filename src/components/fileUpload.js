import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Button  from 'react-bootstrap/Button';


export default function UploadButtons() {
    return ( <div>
        <input type="file" accept="image/*" className="{classes.input}" id="contained-button-file" multiple/>
        <label htmlFor="contained-button-file">
         <Button variant="primary" color="primary" component="span"> Upload </Button>
       </label>

    </div>

    )

//     const useStyles = makeStyles((theme) => ({
//         root: {
//           '& > *': {
//             margin: theme.spacing(1),
//           },
//         },
//         input: {
//           display: 'none',
//         },
//       }));
    
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <input
//         accept="image/*"
//         className={classes.input}
//         id="contained-button-file"
//         multiple
//         type="file"
//       />
//       <label htmlFor="contained-button-file">
//         <Button variant="contained" color="primary" component="span">
//           Upload
//         </Button>
//       </label>
//       <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
//       <label htmlFor="icon-button-file">
//         <IconButton color="primary" aria-label="upload picture" component="span">
//         </IconButton>
//       </label>
//     </div>
//   );
}

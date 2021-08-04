/*eslint-disable*/
// import React from "react";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardBody from "components/Card/CardBody.js";

// import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";
//
// const useStyles = makeStyles(styles);

// export default function Experts() {
//   const classes = useStyles();
//   return (
//     <GridContainer>
//       <GridItem xs={12} sm={12} md={12}>
//         <Card plain>
//           <CardHeader plain color="primary">
//             <h4 className={classes.cardTitleWhite}>Material Design Experts</h4>
//             <p className={classes.cardCategoryWhite}>
//               Handcrafted by our friends from{" "}
//               <a
//                 href="https://design.google.com/icons/Experts.js?ref=creativetime"
//                 target="_blank"
//               >
//                 Google
//               </a>
//             </p>
//           </CardHeader>
//           <CardBody>
//             <Hidden only={["sm", "xs"]}>
//               <iframe
//                 className={classes.iframe}
//                 src="https://material.io/icons/Experts.js"
//                 title="Experts iframe"
//               >
//                 <p>Your browser does not support iframes.</p>
//               </iframe>
//             </Hidden>
//             <Hidden only={["lg", "md"]}>
//               <GridItem xs={12} sm={12} md={6}>
//                 <h5>
//                   The icons are visible on Desktop mode inside an iframe. Since
//                   the iframe is not working on Mobile and Tablets please visit
//                   the icons on their original page on Google. Check the
//                   <a
//                     href="https://design.google.com/icons/Experts.js?ref=creativetime"
//                     target="_blank"
//                   >
//                     Material Experts
//                   </a>
//                 </h5>
//               </GridItem>
//             </Hidden>
//           </CardBody>
//         </Card>
//       </GridItem>
//     </GridContainer>
//   );
// }

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "../../assets/jss/material-dashboard-react/components/expert-group.css";
import styles from "../../components/question/question-summary/question-summary.module.css";
import Tag from "../../components/tag";
// import styles from "../../assets/jss/material-dashboard-react/components/customTabsStyle";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});
// const useExpertUserStyles = makeStyles(expertGroup);
function createData(expertGroup, members, questionsAnswered, experts) {
  return {
    expertGroup,
    members,
    questionsAnswered,
    experts,
    // carbs,
    // protein,
    // price,
    // history: [
    //   { date: "2020-01-05", customerId: "11091700", amount: 3 },
    //   { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    // ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  // const expertUnderClasses = useExpertUserStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.expertGroup}
        </TableCell>
        <TableCell align="right">{row.members}</TableCell>
        <TableCell align="right">{row.questionsAnswered}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {/*<Typography variant="h6" gutterBottom component="div">*/}
              {/*  Experts*/}
              {/*</Typography>*/}
              {/*<div className="container">*/}
              {/*<div className="row ">*/}
              {/*<div className="col-md-12">*/}
              <Table>
                <TableBody>
                  {row.experts.map((exp) => (
                    <TableCell size={"medium"} className={"col-md-4"}>
                      {/*<div className="col-md-4">*/}
                      <div
                        className="profile-card text-center"
                        style={{ height: "400px" }}
                      >
                        {/*<img*/}
                        {/*  className="img-responsive"*/}
                        {/*  src="https://images.unsplash.com/photo-1454678904372-2ca94103eca4?crop=entropy&fit=crop&fm=jpg&h=975&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1925"*/}
                        {/*/>*/}
                        <div className="profile-info img-responsive">
                          <img className="profile-pic" src={exp.image} />

                          <h2 className="hvr-underline-from-center">
                            {exp.name}
                            <span>{exp.role}</span>
                          </h2>
                          <div>{exp.description}</div>
                          <div className="tagContainer">
                            {exp.technology.map((tag) => (
                              <Tag key={tag}>{tag}</Tag>
                            ))}
                          </div>

                          <a href="https://www.twitter.com/mike_youngg">
                            <i className="fa fa-phone fa-2x"></i>
                          </a>
                          <a href="mailto:michael_y@live.co.uk">
                            <i className="fa fa-envelope-o fa-2x"></i>
                          </a>
                        </div>
                      </div>
                      {/*</div>*/}
                    </TableCell>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

const rows = [
  createData("UI5", 5, 2, [
    {
      name: "Adam",
      role: "Architect",
      image: "https://randomuser.me/api/portraits/men/98.jpg",
      description:
        "Architect with BTP Core E&PS, 14yrs core Experience in UI Development and expert in Fiori and UI5.",
      technology: ["javascript", "UI5", "Fiori Elements"],
      email: "",
      mobile: "",
    },
    {
      name: "Christian",
      role: "Solutions Architect",
      image: "https://randomuser.me/api/portraits/men/97.jpg",
      description:
        "I administer company wide SOX 404-like compliance over the control self-assessment program based on COSO and COBIT framework. I monitor and track closure of issues to mitigate risks and rectify control weaknesses. I am skilled at heading project component improvement, developing risk assessment strategies, and streamlining process improvements",
      email: "",
      technology: ["javascript", "reactjs", "UI5"],
      mobile: "",
    },
    {
      name: "Steve",
      role: "Product Owner",
      image: "https://randomuser.me/api/portraits/men/96.jpg",
      description:
        "An IT professional with over 4 years of work experience in an Investment Banking domain and having a sound knowledge of financial markets, Capital market instruments, Listed and OTC Derivatives products, especially in Foreign exchange derivatives. Expert in requirement elicitation and in providing IT solutions to the business by adhering to all the phases of business analysis that is needed to carry out a Project.\n",
      email: "",
      technology: ["angular", "yarn", "angular-cli", "OpenUI5"],
      mobile: "",
    },
  ]),
  createData("React", 8, 1, [
    {
      name: "Juliana Thomas",
      role: "Senior Developer",
      image: "https://randomuser.me/api/portraits/women/61.jpg",
      description:
        "Product Owner on JPMC in-house solutions with an overall experience of 4.5 years. Experienced in Requirement Gathering, maintain Product Backlog, building Analytical Reports, Data Analysis. Good understanding of Agile Framework and Product Development using Azure DevOps/Jira. Lead Product Implementations for Fortune Listed companies across the Globe. Keen on Innovation and Automation.",
      technology: ["React", "JS", "JSX"],
      email: "",
      mobile: "",
    },
    {
      name: "Zachary",
      role: "Product Management",
      image: "https://randomuser.me/api/portraits/men/60.jpg",
      description:
        "Experienced Product Owner with a demonstrated history of working in various domains like Financial Services, Insurance, Air Cargo and US Tax Credit. Strong business development professional skilled in Software Development Life Cycle (SDLC), defining Product roadmap, Requirements Analysis and Elicitation, Business Analysis, Solution Design and UX Consultant.",
      email: "",
      technology: ["UI", "UX", "JS", "UI5"],
      mobile: "",
    },
    // {
    //   name: "Steve",
    //   role: "Product Owner",
    //   image: "https://randomuser.me/api/portraits/men/96.jpg",
    //   description:
    //     "An IT professional with over 4 years of work experience in an Investment Banking domain and having a sound knowledge of financial markets, Capital market instruments, Listed and OTC Derivatives products, especially in Foreign exchange derivatives. Expert in requirement elicitation and in providing IT solutions to the business by adhering to all the phases of business analysis that is needed to carry out a Project.\n",
    //   email: "",
    //   technology: ["angular", "yarn", "angular-cli", "OpenUI5"],
    //   mobile: "",
    // },
  ]),
  // createData("ABAP", 3, 0),
];

export default function Experts() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Expert Group</TableCell>
            <TableCell align="right">Total Members</TableCell>
            <TableCell align="right">Total Questions Answered</TableCell>
            {/*<TableCell align="right">Carbs&nbsp;(g)</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.groupname} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Visibility from "@material-ui/icons/Visibility";
import FiberNew from "@material-ui/icons/FiberNew";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import Table from "components/Table/Table.js";
// import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Timeline from "components/Timeline/Timeline";
import QuestionWrapper from "components/question/question-wrapper";
import QuestionSummary from "components/question/question-summary/index";
import QuestionStats from "components/question/question-stats/index";

// import { website, server } from "variables/general.js";

import {
  // dailySalesChart,
  // emailsSubscriptionChart,
  learningGroupChart,
  // completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { Event, LocalLibrary, QuestionAnswer } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              {/*<CardIcon color="warning">*/}
              {/*  <Icon>content_copy</Icon>*/}
              {/*</CardIcon>*/}
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total Experts Onboarded</p>
              <h3 className={classes.cardTitle}>49</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <QuestionAnswer />
              </CardIcon>
              <p className={classes.cardCategory}>
                Overall Questions answered by Experts
              </p>
              <h3 className={classes.cardTitle}>4,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <LocalLibrary></LocalLibrary>
              </CardIcon>
              <p className={classes.cardCategory}>Learning Hours</p>
              <h3 className={classes.cardTitle}>5</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Event />
              </CardIcon>
              <p className={classes.cardCategory}>Events Taken Place</p>
              <h3 className={classes.cardTitle}>+8</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="info">
              <Timeline />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Upcoming Events</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 25%
                </span>{" "}
                more events than previous year.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              {/*<ChartistGraph*/}
              {/*  className="ct-chart"*/}
              {/*  data={emailsSubscriptionChart.data}*/}
              {/*  type="Bar"*/}
              {/*  options={emailsSubscriptionChart.options}*/}
              {/*  responsiveOptions={emailsSubscriptionChart.responsiveOptions}*/}
              {/*  listener={emailsSubscriptionChart.animation}*/}
              {/*/>*/}
              <ChartistGraph
                className="ct-chart-donut"
                data={learningGroupChart.data}
                type="Pie"
                options={learningGroupChart.options}
                // listener={learningGroupChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Learning Path</h4>
              <p className={classes.cardCategory}>Your Active Courses</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> last month
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        {/*<GridItem xs={12} sm={12} md={4}>*/}
        {/*  <Card chart>*/}
        {/*    <CardHeader color="danger">*/}
        {/*      <ChartistGraph*/}
        {/*        className="ct-chart"*/}
        {/*        data={completedTasksChart.data}*/}
        {/*        type="Line"*/}
        {/*        options={completedTasksChart.options}*/}
        {/*        listener={completedTasksChart.animation}*/}
        {/*      />*/}
        {/*    </CardHeader>*/}
        {/*    <CardBody>*/}
        {/*      <h4 className={classes.cardTitle}>Completed Tasks</h4>*/}
        {/*      <p className={classes.cardCategory}>Last Campaign Performance</p>*/}
        {/*    </CardBody>*/}
        {/*    <CardFooter chart>*/}
        {/*      <div className={classes.stats}>*/}
        {/*        <AccessTime /> campaign sent 2 days ago*/}
        {/*      </div>*/}
        {/*    </CardFooter>*/}
        {/*  </Card>*/}
        {/*</GridItem>*/}
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Trending Questions:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Votes",
                tabIcon: ThumbUp,
                tabContent: (
                  // <Tasks
                  //   checkedIndexes={[0, 3]}
                  //   tasksIndexes={[0, 1, 2, 3]}
                  //   tasks={bugs}
                  // />
                  <>
                    <QuestionWrapper key="23">
                      <QuestionStats voteCount="25" answerCount="2" view="12" />
                      <QuestionSummary
                        id="1"
                        title="NullPointerException due Attempt to invoke virtual method 'android.os.IBinder android.view.SurfaceControl.getHandle()' on a null object reference"
                        tags={["android", "proguard", "google-fabric"]}
                        author="Anshy"
                        createdTime="2021-04-21"
                      >
                        "Recently I did migration of my application to
                        targetSdkVersion = 28. After publishing the updated app
                        to Google Play I started to get very strange crash
                        reports in Fabric.io: Crash report
                        <samp>
                          Fatal Exception: java.lang.NullPointerException
                          Attempt to invoke virtual method 'android.os.IBinder
                          android.view.SurfaceControl.getHandle()' on a null
                          object reference android.os.Parcel.createException
                          (Parcel.java:1956) android.os.Looper.loop
                          (Looper.java:193) android.app.ActivityThread.main
                          (ActivityThread.java:6718)
                          java.lang.reflect.Method.invoke (Method.java)
                          com.android.internal.os.ZygoteInit.main
                          (ZygoteInit.java:858)
                        </samp>
                        "
                      </QuestionSummary>
                    </QuestionWrapper>
                    <QuestionWrapper key="2">
                      <QuestionStats voteCount="25" answerCount="2" view="12" />
                      <QuestionSummary
                        id="1"
                        title="CSS to make HTML page footer stay at bottom of the page with a minimum height, but not overlap the page?"
                        tags={["javascript", "reactjs"]}
                        author="Anshy"
                        createdTime="2021-03-21"
                      >
                        "I had the following page (deadlink:
                        http://www.workingstorage.com/Sample.htm ) that has a
                        footer that I can't make sit at the bottom of the page."
                      </QuestionSummary>
                    </QuestionWrapper>
                  </>
                ),
              },
              {
                tabName: "Views",
                tabIcon: Visibility,
                tabContent: (
                  <>
                    <QuestionWrapper key="23">
                      <QuestionStats voteCount="5" answerCount="1" view="102" />
                      <QuestionSummary
                        id="1"
                        title="What is difference between state and props in React"
                        tags={["javascript", "React"]}
                        author="Anshy"
                        createdTime="2021-06-21"
                      >
                        "I was watching a Pluralsight course on React and the
                        instructor stated that props should not be changed. I'm
                        now reading an article (uberVU/react-guide) on props vs.
                        state and it says"
                      </QuestionSummary>
                    </QuestionWrapper>
                    <QuestionWrapper key="2">
                      <QuestionStats voteCount="0" answerCount="1" view="18" />
                      <QuestionSummary
                        id="1"
                        title="How do I create a new angular app with ng command using yarn offline flag?"
                        tags={["angular", "yarn", "angular-cli"]}
                        author="Anshy"
                        createdTime="2021-03-21"
                      >
                        "The app boilerplate is created but when installing
                        packages using yarn. Yarn keeps throwing an error saying
                        I am offline, which I am, but I want yarn to use the
                        offline cache for angular to create the new app. I have
                        tried running:"
                      </QuestionSummary>
                    </QuestionWrapper>
                  </>
                ),
              },
              {
                tabName: "Newest",
                tabIcon: FiberNew,
                tabContent: (
                  <>
                    <QuestionWrapper key="23">
                      <QuestionStats voteCount="5" answerCount="1" view="102" />
                      <QuestionSummary
                        id="1"
                        title="How to get the word count from a google doc onto a google sheet"
                        tags={["google-sheets", "google-sheets-api"]}
                        author="Anshy"
                        createdTime="2021-07-21"
                      >
                        "I have a folder of a bunch of google docs, and I need
                        to make a spreadsheet that keeps track of the word count
                        for each one automatically. Is there any way to do this
                        with just formulas? Is delving into the google docs API
                        the only option? If so, any good starting points? "
                      </QuestionSummary>
                    </QuestionWrapper>
                    <QuestionWrapper key="2">
                      <QuestionStats voteCount="0" answerCount="1" view="18" />
                      <QuestionSummary
                        id="1"
                        title="how to add the public ip to X509 certificate when access kubernetes api server"
                        tags={["kubernets"]}
                        author="Anshy"
                        createdTime="2021-07-18"
                      >
                        "I am deployment a kubernetes v1.22.3 cluster using
                        kubeadm, today when I access api-server from public
                        domain, shows error like this:"
                      </QuestionSummary>
                    </QuestionWrapper>
                  </>
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Your Open Questions</h4>
              {/*<p className={classes.cardCategoryWhite}>*/}
              {/*  New employees on 15th September, 2016*/}
              {/*</p>*/}
            </CardHeader>
            <CardBody>
              {/*<Table*/}
              {/*  tableHeaderColor="warning"*/}
              {/*  tableHead={["ID", "Name", "Salary", "Country"]}*/}
              {/*  tableData={[*/}
              {/*    ["1", "Dakota Rice", "$36,738", "Niger"],*/}
              {/*    ["2", "Minerva Hooper", "$23,789", "Curaçao"],*/}
              {/*    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],*/}
              {/*    ["4", "Philip Chaney", "$38,735", "Korea, South"],*/}
              {/*  ]}*/}
              {/*/>*/}
              <>
                <QuestionWrapper key="23">
                  <QuestionStats voteCount="5" answerCount="1" view="102" />
                  <QuestionSummary
                    id="1"
                    title="After connecting to the BDC, when expanding HDFS it will thrown error username and password required"
                    tags={["docker", "sql-server-2019", "kublet", "sql-bdc"]}
                    author="Anshy"
                    createdTime="2021-07-21"
                  >
                    "I installed a SQL Server 2019 Big Data Cluster on
                    Kubernetes on Linux server. It works fine when using private
                    IP and public IP to connect ADS (VPN). But when I turn off
                    VPN and using public IP, only SQL works and HDFS returns
                    errors. When expanding HDFS it will prompt to input password
                    and username. However, after we input the username and
                    password in the azure data studio dialog. And it returned
                    error like Error retrieving endpoints from MyPrivateIP:Port
                    - connect ETIMEDOUT MyPrivateIP:Port (It should be Public IP
                    instead). What can I do to fix it? Can I change the
                    endpoints by replacing private IP with public IP using ADS
                    or AzDataCLI ? Thanks!!! "
                  </QuestionSummary>
                </QuestionWrapper>
                <QuestionWrapper key="2">
                  <QuestionStats voteCount="0" answerCount="1" view="18" />
                  <QuestionSummary
                    id="1"
                    title="Github Actions error on push to Digital Ocean - refusing to allow an OAuth App to create or update workflow"
                    tags={["yaml", "digital-ocean", "github-actions"]}
                    author="Anshy"
                    createdTime="2021-07-18"
                  >
                    "I am trying to set up a Node app to deploy to Digital Ocean
                    after pushing to a Github repo. I am using Github actions
                    and have followed this tutorial but have hit a snag at step
                    5. I get the following error when I try to push to the
                    repo.I have tried everything I can find, including this SO
                    post, but nothing works. I have a .yaml file in my project,
                    which I can't see anything immediately wrong with, that
                    currently looks like this."
                  </QuestionSummary>
                </QuestionWrapper>
              </>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

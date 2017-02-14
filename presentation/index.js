// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/serverless.css");

const images = {
  stockwerk: require("../assets/stockwerk.png"),
  techtalk: require("../assets/techtalk.png"),
  step_functions_1: require("../assets/step_functions_1.png"),
  aws_facial_recognition1: require("../assets/AWSFacialRecognition1.png"),
  aws_facial_recognition2: require("../assets/AWSFacialRecognition2.png"),
  azure_facial_recognition1: require("../assets/AzureCognitiveRecognition1.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#665d60",
  textColor: "white",
  headingColor: "white"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} textColor="headingColor">
              Serverless-Vienna
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="headingColor">
              Welcome!
            </Heading>
            <Heading size={2} fit caps lineHeight={1} textColor="headingColor">
              Meetup No.2
            </Heading>
          </Slide>

          {/*<Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Sponsors
            </Heading>
            <Image src={images.stockwerk.replace("/", "")} width="100%" />
            <p>Awesome co-working space</p>
          </Slide>*/
          }

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Sponsors
            </Heading>
            <Image
              src={images.techtalk.replace("/", "")}
              width="100%"
              bgColor={"white"}
            />
            <p>Delivering Software with Impact</p>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Talks
            </Heading>
            <List>
              <ListItem>Scalable Chat - Gojko</ListItem>
              <ListItem>15 minutes break</ListItem>
              <ListItem>Google Cloud Chat Hands on - Edem</ListItem>
              <ListItem>15 minutes break</ListItem>
              <ListItem>News Block - Gerald</ListItem>
              <ListItem>
                Learnings from Tinkering with OpenWhisk - László
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Scalable Chat - Gojko
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              15 minutes break
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Google Cloud Chat Hands on - Edem
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              15 minutes break
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              News Block - Gerald
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              News Block - Gerald
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS API Gateway
            </Heading>
            <List>
              <ListItem>
                AWS Marketplace - sell your api, usage plans, documentation
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Step Functions <Link href="https://aws.amazon.com/step-functions/">Link</Link>
            </Heading>
            <p>coordinate the components of your distributed application as series of steps in a visual workflow</p>            
          </Slide>

          <Slide transition={["slide"]}>
            <Layout>
              <Fill>
                <Image src={images.step_functions_1.replace("/", "")} width="100%" />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AI Explosion - AWS
            </Heading>
            <List>
              <ListItem>Lex</ListItem>
              <ListItem>Polly</ListItem>
              <ListItem>Rekognition</ListItem>
              <ListItem>Machine Learning</ListItem>
              </List>         
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AI Explosion - Google
            </Heading>
            <List>
              <ListItem>Machine Learning Platform</ListItem>
              <ListItem>Jobs API (alpha)</ListItem>
              <ListItem>Natural Language API</ListItem>
              <ListItem>Speech API (beta)</ListItem>
              <ListItem>Translation API</ListItem>
              <ListItem>Vision API</ListItem>
              </List>         
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AI Explosion - Azure
            </Heading>
            <List>
              <ListItem>Language - Understanding (preview), Analytics, Translator</ListItem>
              <ListItem>Speech - Speech (p), speaker recogn. (p), translator</ListItem>
              <ListItem>Search &amp; Autosuggest</ListItem>
              <ListItem>Vision - Face (p), Emotion (p), computer vision (p), content moderator (p)</ListItem>
              <ListItem>Knowledge - Recommendation (p), academic knowledge (p)</ListItem>
              </List>         
          </Slide>


            <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS - Facial Recognition 
            </Heading>
            <Layout><Fill>
              <Image src={images.aws_facial_recognition.replace("/", "")} width="100%" />
              </Fill></Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Facial Recognition Tweet
            </Heading>
            <Layout><Fill>
              <Image src={images.aws_facial_recognition1.replace("/", "")} width="100%" />
              </Fill></Layout>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Facial Recognition 
            </Heading>
            <Layout><Fill>
              <Image src={images.aws_facial_recognition2.replace("/", "")} width="100%" />
              </Fill></Layout>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Google Facial Recognition 
            </Heading>
            <Layout><Fill>
              <Image src={images.google_facial_recognition1.replace("/", "")} width="100%" />
              </Fill></Layout>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Azure Facial Recognition 
            </Heading>
            <Layout><Fill>
              <Image src={images.azure_facial_recognition1.replace("/", "")} width="100%" />
              </Fill></Layout>
          </Slide>



          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Learnings from Tinkering with OpenWhisk - László
            </Heading>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Resources
            </Heading>
            <List>
              <ListItem>Scalable Chat - Gojko</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} fit caps textColor="headingColor">
              Thank you
            </Heading>
            <Heading size={1} textColor="textColor">
              Discussion
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}

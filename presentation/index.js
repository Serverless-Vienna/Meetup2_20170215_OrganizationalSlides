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
  google_facial_recognition1: require("../assets/GoogleFacialRecognition1.png"),
  azure_facial_recognition1: require(
    "../assets/AzureCognitiveRecognition1.png"
  ),
  aws_image_analysis1: require("../assets/AWSRekognitionAPI1.png"),
  google_image_analysis1: require("../assets/GoogleVisionAPI1.png"),
  azure_image_analysis1: require("../assets/MSComputerVisionAPI1.png"),
  aws_greengrass1: require("../assets/AWSGreengrass1.png"),
  aws_cloudfront_tweet1: require("../assets/AWSCloudFrontTweet1.png"),
  aws_lightsail1: require("../assets/AWSLightsail1.png")
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
              <ListItem>- - - - - - - short break - - - - - - -</ListItem>
              <ListItem>Google Firebase Chat Hands on - Edem</ListItem>
              <ListItem>- - - - - - - short break - - - - - - -</ListItem>
              <ListItem>News Block - Gerald</ListItem>
              <ListItem>
                <s>Learnings from Tinkering with OpenWhisk - László</s>
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
              Google Firebase Chat Hands on - Edem
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
              AWS Step Functions{" "}
              <Link href="https://aws.amazon.com/step-functions/">+</Link>
            </Heading>
            <p>
              coordinate the components of your distributed application as series of steps in a visual workflow
            </p>
          </Slide>

          <Slide transition={["slide"]}>
            <Layout>
              <Fill>
                <Image
                  src={images.step_functions_1.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AI Explosion - AWS
            </Heading>
            <List>
              <ListItem>Lex - Build conversational interfaces using voice and text</ListItem>
              <ListItem>Polly - Turn text into lifelike speech using deep learning</ListItem>
              <ListItem>Rekognition - Deep learning-based image recognition</ListItem>
              <ListItem>Machine Learning - A scalable machine learning service</ListItem>
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
              <ListItem>
                Language - Understanding (preview), Analytics, Translator
              </ListItem>
              <ListItem>
                Speech - Speech (p), speaker recogn. (p), translator
              </ListItem>
              <ListItem>Search & Autosuggest</ListItem>
              <ListItem>
                Vision - Face (p), Emotion (p), computer vision (p), content moderator (p)
              </ListItem>
              <ListItem>
                Knowledge - Recommendation (p), academic knowledge (p)
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Facial Recognition
            </Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.aws_facial_recognition1.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Facial Recognition
            </Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.aws_facial_recognition2.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Google Facial Recognition{" "}
            </Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.google_facial_recognition1.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Azure Facial Recognition{" "}
            </Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.azure_facial_recognition1.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Rekognition API
            </Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.aws_image_analysis1.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Google Vision API
            </Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.google_image_analysis1.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Azure Computer Vision API
            </Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.azure_image_analysis1.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS EC2 F1 - new instance type
            </Heading>
            <p>
              is a new compute instance with programmable hardware for application acceleration. With F1, you can directly access custom FPGA hardware on the instance in a few clicks.
            </p>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Amazon Lightsail - New Service
            </Heading>
            <p>
              is the easiest way to launch and manage a virtual private server with AWS. Get everything you need to jumpstart your project - compute, storage, and networking - starting at $5/month.
            </p>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Amazon Lightsail - New Service
            </Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.aws_lightsail1.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Batch
            </Heading>
            <p>
              enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS
            </p>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Lambda
            </Heading>
            <List>
              <ListItem>
                <Link
                  href="http://docs.aws.amazon.com/lambda/latest/dg/dlq.html?adbsc=social_20170208_69639556&amp;adbid=829389464040452097&amp;adbpl=tw&amp;adbpr=66780587"
                  >
                  SQS Dead Letter Queue
                </Link>

              </ListItem>
              <ListItem>C# .NET Core 1.0</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Amazon AppStream 2.0
            </Heading>
            <p>
              allows you to stream desktop apps securely from the AWS cloud directly to users on the device of their choice, eliminating the need to rewrite desktop apps for the cloud.
            </p>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Amazon WorkSpaces
            </Heading>
            <p>
              virtual cloud desktops
            </p>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Greengrass - Software for Connected Devices
            </Heading>
            <p>
              Local compute, messaging & data caching for connected devices. Run IoT applications seamlessly across the AWS cloud and local devices using AWS Lambda and AWS IoT.
            </p>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Greengrass
            </Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.aws_greengrass1.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS IoT Button - 2nd Gen
            </Heading>
            <List>
              <ListItem>
                configure your AWS IoT Button with a new mobile app
              </ListItem>
              <ListItem>1000 clicks --&gt; 2000 clicks</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS Miscellaneous{" "}
            </Heading>
            <List>
              <ListItem>
                AWS SQS - First in first out FIFO, price reduction
              </ListItem>
              <ListItem>AWS Snowmobile - exabyte-scale data transfer</ListItem>
              <ListItem>AWS CloudFront - edge caches</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              AWS CloudFront edge caches
            </Heading>
            <Layout>
              <Fill>
                <Image
                  src={images.aws_cloudfront_tweet1.replace("/", "")}
                  width="100%"
                  />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Serverless
            </Heading>
            <p>
              IBM OpenWhisk support
              <Link
                href="https://serverless.com/blog/openwhisk-integration-with-serverless/"
                >
                +
              </Link>
            </p>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Serverless
            </Heading>
              <List>
              <ListItem>
              IoT event support</ListItem>
              <ListItem>Cognito user pool authorizer</ListItem>
              <ListItem>install service with a name in Serverless Framework v1.5
              <Link href="https://serverless.com/blog/serverless-v1.5.0/">
                +
              </Link>
              </ListItem>
              </List>
            </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Serverless
            </Heading>
            
            <List>
              <ListItem>
              C# service template</ListItem>
              <ListItem>Alexa event support</ListItem>
              <ListItem>service-wide metrics in Serverless Framework v1.4
                <Link href="https://serverless.com/blog/serverless-v1.4.0/">
                +
                </Link>
              </ListItem>
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


<Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Resources
            </Heading>
            <p>Serverless reference app and backend API, showcasing authentication and authorization patterns using Amazon Cognito, Amazon API Gateway, AWS Lambda, and AWS IAM. <Link href="https://github.com/awslabs/aws-serverless-auth-reference-app">+</Link>
            </p>
            <p>Simplify Serverless Applications with Environment Variables in AWS Lambda <Link href="https://aws.amazon.com/blogs/compute/simplify-serverless-applications-with-environment-variables-in-aws-lambda/?adbsc=social_20170206_69639456&adbid=828664607875100672&adbpl=tw&adbpr=66780587">+</Link>
            </p>
            <p>The getting started sample demonstrates how to perform common tasks using the Azure Blob Service in node.js including uploading a blob, CRUD operations, listing, as well as blob snapshot creation. <Link href="https://github.com/Azure-Samples/storage-blob-node-getting-started">+</Link>
            </p>
            <p>10 GitHub samples with Azure DocumentDB you shouldn’t miss! <Link href="https://azure.microsoft.com/en-us/blog/10-github-samples-with-azure-documentdb-you-shouldn-t-miss/?utm_source=t.co&utm_medium=referral">+</Link>
            </p>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Resources
            </Heading>
            <p>The Image Recognition and Processing Backend reference architecture demonstrates how to use AWS Step Functions to orchestrate a serverless processing workflow using AWS Lambda, Amazon S3, Amazon DynamoDB and Amazon Rekognition. <Link href="https://github.com/awslabs/lambda-refarch-imagerecognition">+</Link>
            </p>
            <p>Serverless Reference Architecture: Vote Application - Serverless Reference Architecture illustrating how to build dynamic web applications using AWS Lambda and Amazon API Gateway to authenticate and process API requests. <Link href="https://github.com/awslabs/lambda-refarch-voteapp">+</Link>
            </p>
            <p>Code and walkthrough labs to set up a serverless web application for the Wild Rydes Workshop <Link href="https://github.com/awslabs/aws-serverless-website-workshop">+</Link>
            </p>
            <p>Examples using AWS IoT (Internet of Things) <Link href="https://github.com/awslabs/aws-iot-examples">+</Link>
            </p>
          </Slide>



          <Slide transition={["slide"]}>
            <Heading size={2} textColor="headingColor">
              Resources
            </Heading>
            <p>Sample application for Amazon Polly. Allows to convert any blog into an audio podcast. <Link href="https://github.com/awslabs/amazon-polly-sample">+</Link>
            </p>
            <p>How To Build A Serverless Notification System on AWS <Link href="https://serverless.com/blog/serverless-notifications-on-aws/">+</Link>
            </p>
            <p>How to build powerful back-ends easily with Serverless - Building an image processor on AWS Lambda <Link href="https://hackernoon.com/how-to-build-powerful-back-ends-easily-with-serverless-17a833bc7ede#.wvyh71msk">+</Link>
            </p>
            <p>Google Cloud Node.js Client - Node.js idiomatic client for Google Cloud Platform services. <Link href="https://github.com/GoogleCloudPlatform/google-cloud-node">+</Link>
            </p>
            <p>StreamAlert: Real-time Data Analysis and Alerting <Link href="https://medium.com/airbnb-engineering/streamalert-real-time-data-analysis-and-alerting-e8619e3e5043#.rt2136xqv">+</Link>
            </p>
          </Slide>


        </Deck>
      </Spectacle>
    );
  }
}

export const blogs = [
  {
    id: "d6c2df98-5670-4146-86b6-f6674fdeaf80",
    title: "How to Show Image Loaders for native img tag and multiple images",
    written_on: "July 20, 2023",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "https://miro.medium.com/v2/resize:fit:1400/1*3GFVLEfT2WJJHS0Ri9Xpxw.jpeg",
    read_time: "9",
    blog_details: {
      title_img:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--XCrZ7e4W--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/rragrhsbtrzs573irt44.png",
      hashtags: [
        "IT",
        "Loaders",
        "Buffer",
        "Native Script",
        "Web",
        "Web App",
        "Web Development",
        "JS",
        "TS",
        "Image Loaders",
      ],
      page_content: `  <div>
                  <p>
                    In web development, optimizing image loading is vital for
                    providing a seamless user experience. Slow-loading images
                    can frustrate users and impact website performance. That's
                    where image loaders come in. Image loaders are valuable
                    tools that streamline the loading process, ensuring images
                    load quickly and smoothly.
                  </p>
                  <p>
                    In this blog post, we'll explore image loaders and how to
                    use them for single native img tags and multiple images.
                    Whether you're a seasoned developer or just starting,
                    mastering image loaders will boost your website's
                    performance. Let's dive in and learn these simple yet
                    effective techniques!
                  </p>
                  <blockquote>
                    <p>
                      Optimizing image loading is the key to unlocking a
                      captivating user experience and a high-performing website.
                    </p>
                    <cite>Tom Cruise</cite>
                  </blockquote>
                  <h2>What we are going to talk about</h2>
                  <p>
                    <div class="col-md-6">
                      <ul class="features-list">
                        <li>
                          <a href="#section-1">Standard Image Loading</a>
                        </li>
                        <li>
                          <a href="#section-2">Basic Image Loading</a>
                        </li>
                        <li>
                          <a href="#section-3">Independent Image Loaders</a>
                        </li>
                        <li>
                          <a href="#section-4">Different Image Loaders</a>
                        </li>
                      </ul>
                    </div>
                  </p>
                  <br />
                  <h2>Prerequisites required</h2>
                  <p>
                    <div class="col-md-6">
                      <ul class="features-list">
                        <li>Basic knowledge of HTML and CSS</li>
                        <li>Basic knowledge of Javascript</li>
                        <li>Hands on with React</li>
                      </ul>
                    </div>
                  </p>
                  <br />
                  <h4>Now that everything is done lets begin. 🙌🏻</h4>
                  <section id="section-1"></section>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Standard Image loading</h2>
                  <br />
                  <h3>The boredom of standard image loading 🥱</h3>
                  <List>
                    <ListItem>
                      <h3>
                        Picture this: You're browsing a website, and as the page
                        loads, images appear one by one, pixel by pixel. The
                        process is slow, disjointed, and hardly captivating.
                        This is the world of standard image loading, an approach
                        that, while functional, provides a less-than-optimal
                        user experience. Here's why:
                      </h3>
                    </ListItem>
                    <ListItem>
                      <h4>
                        Slow Load Times: Standard image loading relies on the
                        browser's default behavior, which can lead to slow load
                        times, especially when dealing with large images. Users
                        are left waiting, staring at a blank space or partially
                        loaded images, which can be frustrating and detrimental
                        to user retention.
                      </h4>
                    </ListItem>
                    <ListItem>
                      <h4>
                        Lack of Visual Feedback: Without any visual feedback,
                        users may become uncertain if the page is still loading
                        or if something is wrong. This ambiguity can create a
                        sense of frustration and impatience, causing them to
                        abandon the page altogether.
                      </h4>
                    </ListItem>
                    <ListItem>
                      <h4>
                        Poor Aesthetics: From a design standpoint, standard
                        image loading can disrupt the visual harmony of a
                        webpage. Images appearing haphazardly as they load can
                        negatively impact the overall aesthetic appeal of the
                        site.
                      </h4>
                    </ListItem>
                    <ListItem>
                      <h4>
                        Inconsistent Experience: Different browsers and devices
                        may handle standard image loading differently, leading
                        to an inconsistent experience for users. This lack of
                        uniformity can be jarring and undermine the credibility
                        of your website or application.
                      </h4>
                    </ListItem>
                    <ListItem>
                      <h4>
                        Missed Engagement Opportunities: Every aspect of your
                        website is an opportunity to engage users. Standard
                        image loading fails to capitalize on this by treating
                        image loading as a mere technical process rather than an
                        interactive and engaging element.
                      </h4>
                    </ListItem>
                  </List>
                  <br />
                  <iframe
                    src="https://codesandbox.io/embed/native-img-tag-loaders-4zjqvl?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fstandard-img-loading.js&theme=dark&view=editor"
                    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                    title="Native-Img-Tag-Loaders"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  ></iframe>
                  <section id="section-2"></section>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Basic loader for single image</h2>
                  <br />
                  <h3>
                    When it comes to enhancing the user experience of image
                    loading, even a simple loader can make a significant
                    difference. In this section, we'll walk through a basic
                    implementation of an image loader using the React framework.
                    😃
                  </h3>
                  <br />
                  <h3>
                    The Code Breakdown: Let's dissect the code step by step:
                  </h3>
                  <br />
                  <h4>
                    Component Definition: Our component, named
                    BasicImageLoading, is defined using a functional approach.
                    This is where we'll set up the structure and logic for our
                    basic image loader.
                  </h4>
                  <br />
                  <h4>
                    removeAttribute Function: Here's where the magic happens.
                    The removeAttribute function is designed to remove an
                    attribute called "image-loading" from an HTML element. Once
                    the image has loaded successfully, this attribute will be
                    removed, allowing us to signify that the loading process is
                    complete.
                  </h4>
                  <br />
                  <h4>
                    Image Element: The core of our loader is the img element.
                    Here, we specify the image's source using the src attribute,
                    provide alternative text using the alt attribute, and set
                    the width to stretch to the container using width="100%". An
                    id is also assigned to the image to identify it later in the
                    removeAttribute function. Additionally, the onLoad event is
                    crucial. This event is triggered when the image has finished
                    loading. Upon loading completion, the onLoad event calls the
                    removeAttribute function, which takes care of removing the
                    "image-loading" attribute from the image element.
                  </h4>
                  <br />
                  <h4>
                    Placeholder: While the image is loading, we want to keep the
                    user informed. This is where the "Loading..." text comes
                    into play. A div element with the class name "placeholder"
                    displays this text, creating a temporary space holder until
                    the image loads completely.
                  </h4>
                  <br />
                  <iframe
                    src="https://codesandbox.io/embed/native-img-tag-loaders-4zjqvl?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fbasic-img-loader.js&theme=dark&view=editor"
                    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                    title="Native-Img-Tag-Loaders"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  ></iframe>
                  <br />
                  <br />
                  <h3>A Sneak Peek into Enhancement:</h3>
                  <br />
                  <h4>
                    Though this is a basic loader implementation, it already
                    introduces an improved loading experience. Users are
                    provided with instant visual feedback that something is
                    happening, thanks to the "Loading..." placeholder. As the
                    image loads, the loader smoothly transitions into the actual
                    image, creating a seamless experience.
                    <br />
                    <br />
                    Stay tuned as we explore more advanced image loading
                    techniques that further elevate user engagement and
                    satisfaction in the upcoming sections.
                  </h4>
                  <section id="section-3"></section>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Event driven loaders on multiple images</h2>
                  <br />
                  <h3>
                    In our quest to enhance user experience, we move beyond
                    single image loaders and dive into the world of handling
                    multiple images with finesse. In this section, we'll explore
                    an event-driven approach to loading multiple images, all
                    while keeping the user engaged and informed.
                  </h3>
                  <br />
                  <h4>The Code Unveiled:</h4>
                  <br />
                  <h4>
                    Component Definition: The IndependentLoopLoaders component
                    is defined using the functional approach. This component
                    serves as a playground for our event-driven image loaders.
                  </h4>
                  <br />
                  <h4>
                    The images Array: Here, you've defined an array called
                    images, containing URLs of various images you want to load.
                    These images will showcase the capabilities of independent
                    event-driven loading.
                  </h4>
                  <br />
                  <h4>
                    Image Element: For each image, you've included an img
                    element with similar attributes to the previous example. The
                    key difference is the src attribute, which changes
                    dynamically based on the current image URL in the loop
                    iteration. The onLoad event is crucial here as well. Once an
                    image is fully loaded, the onLoad event triggers the removal
                    of the "image-loading" attribute, just like in the single
                    image example. This attribute removal visually signifies
                    that the image has loaded.
                  </h4>
                  <br />
                  <h4>
                    Placeholder: Similar to before, a placeholder with the text
                    "Loading..." is included under each image. What's
                    interesting here is that you've customized the placeholder
                    text's color for each image using inline styles. This level
                    of customization adds a touch of uniqueness to each loader.
                  </h4>
                  <br />
                  <h4>
                    Styling for Image Grid: You've wrapped the images in a div
                    that utilizes CSS Grid to create a visually pleasing
                    arrangement of the images. The gridTemplateColumns property
                    controls the layout, ensuring that images are evenly spaced.
                  </h4>
                  <br />
                  <iframe
                    src="https://codesandbox.io/embed/native-img-tag-loaders-4zjqvl?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findependent-loop-loaders.js&theme=dark&view=editor"
                    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                    title="Native-Img-Tag-Loaders"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  ></iframe>
                  <br />
                  <br />
                  <h3>A Symphony of Event-Driven Loading:</h3>
                  <br />
                  <h4>
                    With this approach, the loading of multiple images
                    transforms into a symphony of events. Each image and its
                    corresponding loader operate independently, updating the UI
                    dynamically as they load. Users are kept engaged and
                    informed about the loading progress, all within an organized
                    grid layout.
                    <br />
                    <br />
                    Stay tuned as we venture even further into the world of
                    diverse loader styles, exploring creative ways to captivate
                    users while optimizing image loading times.
                  </h4>
                  <section id="section-4"></section>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>
                    Embracing Diversity: Exploring Different Image Loader Styles
                  </h2>
                  <br />
                  <h3>
                    As we continue our journey toward optimizing image loading,
                    it's time to add a touch of creativity by incorporating
                    various loader styles. In this section, we'll dive into the
                    code showcasing a selection of captivating loader styles,
                    each designed to elevate the loading experience in its own
                    unique way.
                  </h3>
                  <br />
                  <h4>
                    The Code in the Spotlight: Let's uncover the intricacies of
                    the code snippet you've shared, highlighting the diversity
                    of image loader styles:
                  </h4>
                  <br />
                  <h4>
                    Component Definition: The CustomLoaders component is the
                    canvas on which we'll paint various image loading styles.
                    Like before, this component is defined functionally.
                  </h4>
                  <br />
                  <h4>
                    The images Array: Here's where the real magic happens. An
                    array named images is created, and each entry represents an
                    image along with its associated loader style. Each entry
                    includes attributes like src (image URL), title (loader
                    description), and loaderElement (the unique loader style for
                    the specific image).
                  </h4>
                  <br />
                  <h4>
                    Looping Through Images: Just like in the previous section,
                    the images array is looped through. However, instead of a
                    generic placeholder, each image is accompanied by its
                    distinct loader style, providing a rich and diverse loading
                    experience.
                  </h4>
                  <br />
                  <h4>
                    Custom Placeholder: Instead of a generic "Loading..."
                    placeholder, each image now has a custom placeholder. This
                    placeholder varies in style depending on the type of loader
                    being used for that image. This combination of images and
                    their associated loader styles creates a visually engaging
                    collage of loading animations.
                  </h4>
                  <br />
                  <iframe
                    src="https://codesandbox.io/embed/native-img-tag-loaders-4zjqvl?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fdifferent-loaders.js&theme=dark&view=editor"
                    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                    title="Native-Img-Tag-Loaders"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  ></iframe>
                  <br />
                  <br />
                  <h4>A Kaleidoscope of Loading Styles:</h4>
                  <br />
                  <h4>
                    With this implementation, you've unlocked a world of loading
                    diversity. From text-based loaders to GIFs, library
                    components, and even icon-based loaders, each image in your
                    collection brings a distinct loading experience. This not
                    only keeps users engaged while content loads but also adds
                    an artistic touch to the loading process.
                    <br />
                    <br />
                    Stay tuned as we conclude our exploration with a summary of
                    the different techniques covered, giving you a comprehensive
                    toolbox to enhance image loading across your web projects.
                  </h4>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>Here are the results...🥴</h2>
                  <br />
                  <iframe
                    src="https://codesandbox.io/embed/native-img-tag-loaders-4zjqvl?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                    title="Native-Img-Tag-Loaders"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                  ></iframe>
                </div> 
                
                <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and modernized development technique, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
                `,
    },
  },
  {
    id: "ff8a52ce-fe14-4cc7-bcb3-881d6dd92f4c",
    title: "Google announces Flutter for Windows, a big app development update",
    written_on: "August 22, 2023",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "https://blogger.googleusercontent.com/img/a/AVvXsEhKnMpHHkukLTOmgb1piySSgo9He9REnqmDOie_fZPvJmDN_v-mJy8M63tOC2reusd4fBDruY4yy7mLnEozHJaZh-8csxdt59MGPSvd6pvoFlijYwsUD8gf4GB-lv3780RnKp3uZXq_o2K7IIFE7KDgUQHoDXlWr4AFfOq2KSsm3qst8fyKwZWPSfX5",
    read_time: "2",
    blog_details: {
      title_img:
        "https://assets-global.website-files.com/5ee12d8e99cde2e20255c16c/62017643e0891b2c9e39feee_slide_puzzle_3_platforms.png",
      hashtags: [
        "IT",
        "Mobile App Development",
        "Flutter",
        "Windows",
        "Google",
        "einfonets",
      ],
      page_content: `<p><em><strong>Google announces a significant update to Flutter to make building apps for Windows easier.</strong></em></p>\n<h2>Flutter supports building apps for Windows.</h2>\n<p>The major new feature for Flutter 2.10 that Google has announced is solid support for Windows apps. The intention is to provide Windows developers access to the same level of capability and productivity as mobile developers. Developers may therefore use Flutter to create desktop apps that target Linux, iOS, Android, and the web.</p>\n<p>Teams from Microsoft also made contributions to the project. Microsoft's Corporate Vice President for Windows Developer Platform, Kevin Gallo, stated, "We are delighted to see <a title=\"https://www.einfonets.com/services\" href=\"https://www.einfonets.com/services\">Developers for Flutter</a><span data-key=\"337\"> are sharing their knowledge on Windows and the Microsoft Store. We're excited to see what you bring to Windows, and support for Flutter on Windows is a huge step forward for the community! </span></p>\n<p>Good to know: It's useful to note that Flutter has beta support for Linux, Windows, and macOS; however, stable support for Windows is the newest.</p>\n<h2>Why does Google optimize Flutter for Windows?</h2>\n<p>Google explains: &#8220;Desktop apps aren&#8217;t just mobile apps running on a bigger screen. They are designed for different input devices, such as a keyboard and mouse. They have resizable windows that often run on a widescreen. There are different conventions for critical elements such as accessibility, input method editors, and visual style.</p>\n<p>Another reason for this Flutter update for Windows: the firm specifies that PC applications also use different APIs from those running on Android or iOS.</p>\n<h2>Real cross-platform development possibilities with Flutter</h2>\n<p>Rolling out in March 2021, Flutter 2 now allows developers to build apps for any platform: iOS, Android, Windows, macOS, and Linux, as well as web experiences targeting browsers such as Chrome, Firefox, Safari, or Edge. Google&#8217;s framework is free and open source.</p>
      
      <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and our flutter services, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
      `,
    },
  },
  {
    id: "7c4c440e-310d-4985-afbc-b86b1fd58f00",
    title:
      "Using Computer Vision for Video Surveillance: An All-In-One Handbook",
    written_on: "October 22, 2023",
    written_by: "Janmey Solanki",
    blog_cover_img: "https://blog.koorsen.com/hubfs/AI_Video_Surveillance.jpg",
    read_time: "8",
    blog_details: {
      title_img:
        "https://img.securityinfowatch.com/files/base/cygnus/siw/image/2020/02/dreamstime_xxl_130185436.5e59505faeb6c.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630",
      hashtags: [
        "IT",
        "AI",
        "Computer Vision",
        "ML",
        "einfonets",
        "Artifical Network",
        "Security",
      ],
      page_content: `<p><em>Summary: From your regular CCTV cameras to automated security drones, video surveillance has come a long way. This blog discusses how computer vision AI revolutionizes video surveillance, making it meticulous and more effective.</em></p>\n<p>With rising security threats, the need for advanced video surveillance has become critical.</p>\n<p>Today, surveillance cameras are no longer limited to high-security areas such as nuclear power plants or military installations. They are everywhere &#8211; from airports, corporate offices, shopping malls to private buildings.</p>\n<p>These numerous cameras collect an incredible amount of random visual data every day. Monitoring, examining, and analyzing such mammoth inputs is humanly impossible.</p>\n<p>That’s where <a href=\"https://www.einfonets.com/services">computer vision AI</a> enters the picture.</p>\n<p><img decoding=\"async\" src=\"https://test4you.in/wordpress_api_demo/wp-content/uploads/2023/10/Person-count.webp\" alt=\"\" /></p>\n<p style=\"text-align: center;\"><a href=\"https://www.sdmmag.com/ext/resources/Issues/2019/February/Person-Count.jpg\">(Source)</a></p>\n<h2 style=\"font-size: 32px;\">Computer Vision: The Future of Video Surveillance</h2>\n<p><strong>Computer Vision AI</strong> is a sub-category of artificial intelligence (AI) that enables video surveillance systems to capture, understand, and derive meaningful insights from random digital visual inputs.</p>\n<p>It uses AI and deep learning to analyze video footage to identify and notify the unauthorized presence of humans, vehicles, and objects.</p>\n<h2 style=\" font-size: 32px;\">Overcoming Human Limitations with Computer Vision</h2>\n<p>Staring endlessly at camera views of empty corridors, parking lots, or hallways can be exceedingly tedious. Such overwhelming visual monotony makes the human attention span shorter.</p>\n<p>The result: increased chances of judgemental errors and inability to recognize a potential risk.</p>\n<p>Also, legacy surveillance cameras are reactive. This means you can only react to a situation once the incident has happened. It requires constant human supervision to discern abnormal patterns or anomalous movement before an unfortunate event. For example, law enforcement can gather circumstantial evidence but can’t prevent vandalism.</p>\n<p>Integrating <strong>computer vision AI</strong> enables real-time alerts, notifying the concerned personnel of unauthorized activities, possible intrusion, or other safety breaches- ranging from theft to mass shoot-outs. In this case, the security operatives have enough time to respond and avert any mishaps proactively.</p>\n<p>In a way, <strong>computer vision technology</strong> is like a tap on the shoulder that prompts you to look at something peculiar.</p>\n<p>Let’s take a quick look at some of the advantages of computer vision AI in video surveillance:</p>\n<h2 style=\" font-size: 32px;\">How Computer Vision Can Help You Achieve Your Video Surveillance Goals: The Benefits</h2>\n<h3 style=\"padding: 30px 0 10px;\">1. Automate Time-Consuming Tasks</h3>\n<p>Video surveillance generates massive volumes of visual data that requires continuous monitoring by security professionals. This consumes huge amounts of human time and effort.</p>\n<p>AI-powered computer vision can automate many tedious and repetitive video analytics tasks. For instance, instead of manually counting people, AI can accurately track foot traffic automatically.</p>\n<p><img decoding=\"async\" src=\"https://test4you.in/wordpress_api_demo/wp-content/uploads/2023/10/electronics.webp\" alt=\"\" /></p>\n<p style=\"text-align: center;\"><a href=\"https://www.mdpi.com/2079-9292/11/19/3105\">(Source)</a></p>\n<p><strong>Computer vision</strong> can also autonomously monitor restricted areas 24/7 to detect unauthorized access. It can help with license plate recognition, detecting loitering, or left objects. This automation enables human operators to focus on more critical safety issues rather than watching uneventful footage.</p>\n<p>Overall, AI automation enhances productivity, optimizes human resources, and reduces costs for surveillance operations.</p>\n<h3 style=\"padding: 30px 0 10px;\">2. Recognize Abnormal Behavioural Patterns</h3>\n<p>Deep learning algorithms classify and observe people, objects, and patterns to create a distinct definition of what is normal. Computer vision AI learns the average behavioral pattern of the objects examined and analyzed.</p>\n<p>This makes it possible to recognize any disparity or break in the patterns.</p>\n<p>Let’s see an example to get a better perspective. Computer vision AI will alert the operators if it notice an animal or intruder trying to trespass on a protected storage facility at night.</p>\n<p>For AI, this is an abnormal pattern, as usually there should be no one at the hour. It may not be possible for humans to continuously supervise a storage area during the night.</p>\n<p>Monitoring busy public areas such as airports, shopping malls, and academic campuses to see if someone is carrying a weapon is impractical and ineffective.</p>\n<p><img decoding=\"async\" src=\"https://test4you.in/wordpress_api_demo/wp-content/uploads/2023/10/person-with-gun.webp\" alt=\"\" /></p>\n<p style=\"text-align: center;\"><a href=\"https://abc7chicago.com/artificial-intelligence-gun-detection-software-omnilert-bradley-bourbonnais-high-school/12821562/\">(Source)</a></p>\n<p>AI-enabled video surveillance cautions security personnel if someone enters carrying a gun or knife, giving them enough time to tackle the situation before it is too late.</p>\n<h3 style=\"padding: 30px 0 10px;\">3. Actionable Security and Safety Insights</h3>\n<p>The use of AI cameras goes beyond live footage capture and surveillance. Computer vision technology can examine tons of visual inputs to extract data-driven and actionable insights.</p>\n<p>With built-in machine learning, smart motion detection, and object classification, AI camera surveillance can continuously learn and improve. The more data it processes, the more it gets familiar with the “normal behavior and patterns.”</p>\n<p>Over time, AI algorithms accumulate insights about regular patterns of activity, making it possible for security teams to make strategic and informed decisions as needed.</p>\n<h3 style=\"padding: 30px 0 10px;\">4. Prevent Crime and Liability Risks</h3>\n<p>With continuous real-time monitoring, AI-enabled surveillance systems can help deter criminal activities and legal risks. Criminals are less likely to attempt theft, vandalism or other offenses if they know the area is under active surveillance.</p>\n<p><a href=\"https://www.einfonets.com/services">Computer vision analytics</a> like crowd density estimation, object left behind detection can alert operators about suspicious behaviors. This allows preventative action rather than just reactive response.</p>\n<p>AI surveillance data provides visual evidence if any incident occurs. This is invaluable for investigating insurance claims or legal disputes. Demonstrable footage confirms alibis and reduces liability risks.</p>\n<p>Overall, proactive AI monitoring creates a strong deterrence against crimes, frauds and unethical activities. Smart surveillance safeguards people, assets and brand reputation 24/7 with minimal human intervention needed.</p>\n<h2 style=\" font-size: 32px;\">How Computer Vision AI Video Surveillance is Transforming Industries</h2>\n<h3 style=\"padding: 30px 0 10px;\">1. Manufacturing Units and Warehouses</h3>\n<p>Manufacturing units and warehouses can employ <a href=\"https://www.einfonets.com/services">computer vision camera surveillance</a> to prevent intrusion, theft, and unauthorized access. Also, these cameras can help in gathering business intelligence and streamline and automate security operations.</p>\n<h3 style=\"padding: 30px 0 10px;\">2. Energy Sector</h3>\n<p>The energy sector can employ AI video surveillance to monitor prohibited and restricted areas like power plants, pipelines, and critical infrastructure to avert trespassing and ensure safety.</p>\n<h3 style=\"padding: 30px 0 10px;\">3. Supply Chain and Logistics</h3>\n<p>The <a href=\"https://www.einfonets.com/services">supply chain and logistics industry</a> can use embedded vision technology for camera surveillance to deter nefarious acts such as thefts or intrusion. Additionally, this industry can leverage AI-powered cameras to recognize abnormal patterns to prevent any mishap before it can go out of control.</p>\n<h3 style=\"padding: 30px 0 10px;\">4. Retail Industry</h3>\n<p>From curbing shoplifting to enhancing customer experience, AI-powered camera surveillance can help the retail industry in several ways.</p>\n<h3 style=\"padding: 30px 0 10px;\">5. Transport Industry</h3>\n<p>Computer vision AI uses deep learning algorithms to analyze video footage to monitor critical elements within the field of view and identify any inconsistencies in normal behavior. This helps security operatives take appropriate safety measures.</p>\n<h2 style=\" font-size: 32px;\">How AI is Revolutionizing Video Surveillance</h2>\n<p>There is no denying that the future of video surveillance is AI-enabled. Currently, the <a href=\"https://www.marketsandmarkets.com/Market-Reports/video-surveillance-market-645.html\">video surveillance market</a> is valued at $ 53.7. And with the advent of AI technology, the market is set to grow at a CAGR of 9.2% by 2028.</p>\n<p>Computer vision AI has revolutionized video surveillance by making security operations, disaster management, and risk mitigation more streamlined and robust.</p>\n<h2 style=\" font-size: 32px;\">Ready to Take Your Video Surveillance to the Next Level with Computer Vision?</h2>\n<p>From deterring crimes to improving customer experience, the benefits of AI-enabled video surveillance are endless. If you haven’t adopted computer vision surveillance, now is the time.</p>\n<p><a href=\"https://www.einfonets.com/services">Contact</a> einfonets Technologies to learn more about computer and <a href=\"https://www.einfonets.com/services">embedded vision technology</a> solutions.</p>\n<p>We are a leading <a href=\"https://www.einfonets.com/services">computer vision company</a> that helps you make your video surveillance more practical, meticulous, and AI-powered. We have a team of experts who have extensive experience and expertise in developing scalable, cost-effective, and customized computer vision projects.</p>\n
      
      <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and how we utilize AI and Computer Vision, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
      `,
    },
  },
  {
    id: "08e7a756-a3cb-4173-8bf6-5baea3c445a9",
    title:
      "Why develop web applications with Laravel? Here are the 9 strongholds",
    written_on: "November 12, 2023",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "https://www.netsolutions.com/insights/wp-content/uploads/2022/04/best-choice-for-php-web-development.webp",
    read_time: "11",
    blog_details: {
      title_img:
        "https://miro.medium.com/v2/resize:fit:765/1*e9--UgRcK3mnSzBJfellLQ.jpeg",
      hashtags: [
        "IT",
        "Web App",
        "Laravel",
        "Web Development",
        "Backend",
        "Web",
      ],
      page_content: `<p>Laravel has been noted as one of the best framework options to develop a web application, and rightfully so. As per the official website, the web development framework is an open-source PHP web application framework. The syntax is especially simple and easy. It works on MVC (model-view-controller), an architectural pattern to separate the model, the view, and the controller. This makes the framework especially easy to work on.</p>\n<p>Laravel has an edge over other PHP framework solutions, such as CakePHP, Codeigniter, etc. because it is interactive, is intuitive and understandable. Furthermore, it helps developers by letting them access libraries to help them find answers to the challenges they face. The Blade Template Engine makes templating easy.</p>\n<p>There are more benefits of using Laravel for developing your web application. In this blog post, let’s discuss some of the best ones!</p>\n<h2 style=\"font-size: 32px;\">9 Reasons why Laravel is a great choice for web application development</h2>\n<h3 style=\"padding: 30px 0 10px;\">1. The MVC Architecture</h3>\n<p>The MVC architecture is a great advantage to web application development. MVC architecture is known to separate three components of an application, which are the model, the view, and the controller. This allows the developer to have a complete view of how the application looks and makes it easier for the developer to tweak their application without fuss.</p>\n<p>Furthermore, MVC architecture helps in separating the user interface and business logic. This helps in splitting the data to turn it into logical files, which makes it easier to find larger projects.</p>\n<p>MVC architecture allows you to maintain transparency within the layers and helps you to simplify the development. The architecture allows you to simplify some commonly used tasks and helps you develop a high-performance website.</p>\n<h3 style=\"padding: 30px 0 10px;\">2. The Blade Template Engine</h3>\n<p>Laravel is known for its easy and simple syntax. The reason behind this is the Blade Template Engine. The blade engine is simple; however, it is extremely powerful. Laravel Blade Template allows the developer to do much more than any other templating engine.</p>\n<p>The best part about the blade template engine is that it is simple; it does not restrict the user from using simple PHP code, unlike many other templating engines. Additionally, it allows the developer to create a sleek theme and design for the website.</p>\n<p>Laravel’s use of Blade makes it easy to have fast rendering websites. Blade caches the view; this happens until the design is modified, which means all the resources and views will have extensions.</p>\n<h3 style=\"padding: 30px 0 10px;\">3. Open-Source</h3>\n<p>Many developers use open-source platforms because it gives them the freedom to learn and access a variety of codes. However, Laravel, especially, does this a little better. Unlike other platforms with no updates, this platform is updated periodically.</p>\n<p>The framework had come into play after the previous one had failed critical security features such as authentication and authorization. To eliminate that, the Laravel framework is checked, updated, and maintained.</p>\n<h3 style=\"padding: 30px 0 10px;\">4. Artisan Tool</h3>\n<p>Another great reason to use Laravel is simple, the Artisan Tool. The beauty of this tool is that it allows you to automate the long list of monotonous tasks easily. This tool helps you automate and have the tasks running without manual intervention.</p>\n<p>The tool runs on the Symfony console component and helps access easy-to-read commands and schedule your commands for the Artisan tool. The tool can be easily used to run an artisan CLIR instead of creating the PHP.</p>\n<h3 style=\"padding: 30px 0 10px;\">5. Better security</h3>\n<p>Laravel offers better security to developers. The platform allows the developers to find a robust user authentication, which helps remove any possibility of unauthorized access. The framework allows you to sit back with ease when it comes to security with the help of “providers” and “guards.” These elements improve security.</p>\n<p>What’s more, you can store your password in the database without worrying about it being found or hacked. The password can be stored in a hashed format. The framework has a crypt feature, a hashing algorithm, which generates a new hash every time you use it.</p>\n<h3 style=\"padding: 30px 0 10px;\">6. Tutorials and Support</h3>\n<p>Developers need some support when it comes to learning the evolving tech. Laravel helps developers to access a plethora of options for education. <a href=\"https://www.einfonets.com/services">Laravel developers</a> can find a community here that provides support and help to developers. The community to find help is called Laracasts.</p>\n<p>The community has many tutorials and aid for developers. Other than this, developers can also access some amazing videos that help them walk through the process easily. Laravel has a community to help coders learn and develop as technology changes set this framework apart from others, such as CodeIgniter and CakePHP.</p>\n<p>Furthermore, the community offers paid and free support and help to the developers, which is a huge advantage to developers.</p>\n<h3 style=\"padding: 30px 0 10px;\">7. Better Cross-Platform Integration with Mail and Messaging Systems</h3>\n<p>Developing a website with integration does not have to be difficult. Laravel offers an in-built API service that allows you to send messages, auto-receipts, promotional messages, etc. As a developer, there will be no need to include other forms of extensions to help you manage the same.</p>\n<p>What’s more, Laravel can easily integrate with different drivers such as Amazon SES, Mandrill, Mailhgun, SparkPost, and SMPT. It also integrates easily with PHP’s send mail and mail functions. Laravel’s framework lets you build a website that easily sends emails through a cloud-based service and a local network. It even supports messages to services like Slack and Nexmo.</p>\n<h3 style=\"padding: 30px 0 10px;\">8. Automated Testing Processes</h3>\n<p>One of the reasons why developers choose to work with Laravel is thanks to its automated testing process. The platform allows developers to test their applications with protocols. The platform comes with built-in PHP Unit Support Testing and a phpunit.xml file. The unit and the file are already set up and ready to access.</p>\n<p>The unique feature of the automated testing process supported by Laravel is that a developer can run extensive tests. The unit not only allows the developer to test the entire program for errors and malfunctions but also allows the developer to test every feature, one by one.</p>\n<h3 style=\"padding: 30px 0 10px;\">9. Prioritized Messaging in Queue</h3>\n<p>One of the most important features of Laravel is its smart features. The framework helps you to develop a website that helps you to send messages, emails, and receipts constantly. And that too on priority. Messages for tracking orders, processing membership requests, and purchasing information are easy to queue.</p>\n<p>The framework can easily prioritize messages and requests easily. This feature allows developers to create a website that automatically processes every possible request. What’s more, the Laravel framework can easily handle thousands of requests.</p>\n<h3 style=\"padding: 30px 0 10px;\">More Benefits that make Laravel Stand Out</h3>\n<p>Apart from this, Laravel has many other key benefits that make the platform stand out from other platforms. Here are a few more key features which have made this framework a go-to developing option:</p>\n<ul>\n<li><b style=\"color: #fff;\">Forms to manage errors:</b><br />\nLaravel works with Monolog Logging Library, which provides support and help. This offers support through different log handlers. When a customer types into the form, the system will catch the errors. And then, the developer will be able to sort out the errors easily.</li>\n</ul>\n<ul>\n<li><b style=\"color: #fff;\">Better cache handling:</b><br />\nLaravel helps you to find better-caching configurations. A developer can create different cache backends and works with backends like Redis and Memcached. These backends can be configured to store cached objects. This feature makes the framework better and ideal for larger websites.<br />\nLaravel helps you to find better-caching configurations. A developer can create different cache backends and works with backends like Redis and Memcached. These backends can be configured to store cached objects. This feature makes the framework better and ideal for larger websites.</li>\n</ul>\n<ul>\n<li><b style=\"color: #fff;\">Effective database management:</b><br />\nThe data management system of the framework helps you to improve the website. The framework easily streamlines all processes, which helps the system manage updates and migration effectively. The thing is, the Laravel migration system helps developers to build a database that can handle all updates and version changes without having to worry about the update changing the model. This means that the risk of losing data development due to new updates is mitigated.</li>\n</ul>\n<h2>Lastly</h2>\n<p>That said, Laravel comes with a host of benefits for developers. The framework has many benefits, making it a better platform for <a href=\"https://www.einfonets.com/services">web application development</a>. This helps the developers to build and design a stunning website. Furthermore, the different integrations have made the framework easy to work with.</p>\n<p>Laravel is fast becoming the go-to choice for many developers. Most of the features mentioned above are quite impressive. However, there’s more to the framework. From better security to impressive templates, from better security to effective data management, Laravel offers a backbone with many features for the developers to create a great website. Additionally, the platform is perfect for small or large websites. Laravel is one of the most competent frameworks for PHP web development.</p>\n<p>Having the best team of <a href=\"https://www.einfonets.com/services">Laravel developers for hire</a> means we can undoubtedly assist you with getting the most out of the Laravel framework. Our <a href=\"https://www.einfonets.com/services">Laravel experts</a> will understand the creative aspect required for a successful web application! With the PHP framework and the application, our <a href=\"https://www.einfonets.com/services">experienced laravel team</a> can help you create applications and websites to make your ideas and businesses a success. <a href=\"https://www.einfonets.com/contact\">Contact us</a> today and let&#8217;s discuss your needs.</p>\n
      <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and our Laravel services, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
      `,
    },
  },
  {
    id: "a51432ef-f291-473e-8f7b-b7c866615361",
    title: "Be a flutter ace at managing the visibility of widgets",
    written_on: "December 01, 2023",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "https://www.techaheadcorp.com/wp-content/uploads/2023/09/Exploring-Flutter-Widgets-Creating-Dynamic-User-Interfaces.webp",
    read_time: "3",
    blog_details: {
      title_img:
        "https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_62f21f36ebd5c5f8ba226443_Flutter_Widgets_Cheatsheet_Categories_Types_and_Basic_Widgets_Main_Image_51d5d5d21e.jpg",
      hashtags: [
        "IT",
        "Mobile App Development",
        "Flutter",
        "Mobile",
        "Mobile App",
        "einfonets",
      ],
      page_content: `<p>The Flutter framework was designed by Google company teams, like the Android operating system. It, therefore, incorporates new features of the operating system as it is developed. Moreover, an application created with the framework will also work on iOS from the same code. To display or hide a widget, the framework has integrated the same operation found with developing a native application for Android.</p>\n<p>There are several ways to hide a widget. You can either hide it entirely or make it invisible, but the space it occupies is still there. With Flutter, both systems are supported through the &#8220;Visibility&#8221; property, just like a native Android app. The &#8220;Visible&#8221; attribute allows you to display or hide a widget according to your defined value.</p>\n<p><code>visibility(<br />\nchild: Text(\"Fully hidden widget\"),<br />\nvisible: false,<br />\n,<br />\n</code></p>\n<p>Other attributes allow the widget to keep its space while being invisible. The &#8220;maintainSize&#8221; attribute manages the size, &#8220;maintainanimation&#8221; takes care of the animation of the widget and &#8220;maintainState&#8221; takes care of the state. If you set all of these to &#8220;true&#8221; then the widget is not visible but still in your app and takes up space.</p>\n<p><code>visibility(<br />\nchild: Text(\"Invisible but still takes up space\"),<br />\nmaintainSize: true,<br />\nmaintainAnimation: true,<br />\nmaintainState: true,<br />\nvisible: false, ),</code></p>\n<p>If you are working with an older version of the framework, the &#8220;Visibility&#8221; attribute may not have been integrated yet. In this case, you need to work around the problem. To completely hide a widget and no longer occupy space, replace the container containing it with an empty container. To make it invisible while keeping the space, you can use the &#8220;Opacity&#8221; property, which controls the opacity of an element and assign a value of 0, which will make it impossible to see. Then move the code of your widget into the &#8220;Child&#8221; attribute.</p>\n<p><code>new Opacity(opacity: 0.0, child: myWidget)</code></p>\n
      <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and our flutter ace development, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
      `,
    },
  },
  {
    id: "f62ad784-2a80-48c7-95c1-aa91d2fdd16c",
    title: "What's new in Angular 17 ? Find out in this blog",
    written_on: "December 03, 2023",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "https://www.angular.love/wp-content/uploads/2023/11/image1-300x129.png",
    read_time: "5",
    blog_details: {
      title_img:
        "https://miro.medium.com/v2/resize:fit:1400/1*1HXCJCOpzKdmQI33ZrEIlg.png",
      hashtags: [
        "IT",
        "Web App Development",
        "Angular",
        "Angular 17",
        "Web",
        "Updates",
        "Programming",
        "Software Development",
        "einfonets",
        "Web App",
      ],
      page_content: `<div class="ch bg dx dy dz ea"><div><h1 id="ccea" class="pw-post-title et eu ev be ew ex ey ez fa fb fc fd fe ff fg fh fi fj fk fl fm fn fo fp fq fr fs ft fu fv bj" data-testid="storyTitle" data-selectable-paragraph="">Angular 17: Things you should know about the new version</h1></div><p id="e3a7" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">Angular has released a new version, bringing forth many intriguing changes, from an improved documentation to significant performance enhancements, marking the beginning of a renaissance for the JavaScript framework.</p><p id="c73f" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">In this article, we will explore the most significant changes in this new version that you should be aware of to stay up-to-date with the latest developments and not lose track of Angular’s evolution.</p><figure class="lu lv lw lx ly lz lr ls paragraph-image"><div role="button" tabindex="0" class="ma mb go mc bg md"><div class="lr ls lt"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/0*f7E-DY0TEi46ajt4 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/0*f7E-DY0TEi46ajt4 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/0*f7E-DY0TEi46ajt4 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/0*f7E-DY0TEi46ajt4 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/0*f7E-DY0TEi46ajt4 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/0*f7E-DY0TEi46ajt4 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/0*f7E-DY0TEi46ajt4 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/0*f7E-DY0TEi46ajt4 640w, https://miro.medium.com/v2/resize:fit:720/0*f7E-DY0TEi46ajt4 720w, https://miro.medium.com/v2/resize:fit:750/0*f7E-DY0TEi46ajt4 750w, https://miro.medium.com/v2/resize:fit:786/0*f7E-DY0TEi46ajt4 786w, https://miro.medium.com/v2/resize:fit:828/0*f7E-DY0TEi46ajt4 828w, https://miro.medium.com/v2/resize:fit:1100/0*f7E-DY0TEi46ajt4 1100w, https://miro.medium.com/v2/resize:fit:1400/0*f7E-DY0TEi46ajt4 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka me c" width="700" height="467" loading="eager" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/0*f7E-DY0TEi46ajt4"></picture></div></div><figcaption class="mf mg mh lr ls mi mj be b bf z gw" data-selectable-paragraph="">Photo by <a class="af mk" href="https://unsplash.com/@alterego_swiss?utm_source=medium&amp;utm_medium=referral" rel="noopener ugc nofollow" target="_blank">AbsolutVision</a> on <a class="af mk" href="https://unsplash.com/?utm_source=medium&amp;utm_medium=referral" rel="noopener ugc nofollow" target="_blank">Unsplash</a></figcaption></figure><h1 id="55c1" class="ml mm ev be mn mo mp mq mr ms mt mu mv mw mx my mz na nb nc nd ne nf ng nh ni bj" data-selectable-paragraph="">A Fresh Look</h1><p id="c335" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">Angular has been reborn, and in every aspect, we now have a new documentation that holds great promise, along with a new logo. All of this is aimed at providing a new home for Angular developers: <a class="af mk" href="https://angular.dev/" rel="noopener ugc nofollow" target="_blank">angular.dev</a>.</p><h2 id="3459" class="no mm ev be mn np nq nr mr ns nt nu mv le nv nw nx li ny nz oa lm ob oc od oe bj" data-selectable-paragraph="">New Documentation</h2><p id="1d64" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">As we know, Angular has revamped documentation where we can:</p><ul class=""><li id="9e45" class="kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq of og oh bj" data-selectable-paragraph="">Review detailed documentation.</li><li id="8e75" class="kt ku ev kv b kw oi ky kz la oj lc ld le ok lg lh li ol lk ll lm om lo lp lq of og oh bj" data-selectable-paragraph="">Follow tutorials.</li><li id="e304" class="kt ku ev kv b kw oi ky kz la oj lc ld le ok lg lh li ol lk ll lm om lo lp lq of og oh bj" data-selectable-paragraph="">Explore freely with the integrated playground.</li><li id="4f83" class="kt ku ev kv b kw oi ky kz la oj lc ld le ok lg lh li ol lk ll lm om lo lp lq of og oh bj" data-selectable-paragraph="">Examine API references.</li></ul><h1 id="8e0c" class="ml mm ev be mn mo mp mq mr ms mt mu mv mw mx my mz na nb nc nd ne nf ng nh ni bj" data-selectable-paragraph="">Declarative Control Flow</h1><p id="81c1" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">The introduction of a declarative control flow mechanism marks a paradigm shift in how we manage templates. While the <code class="cw on oo op oq b">*ngIf</code> structure has been a standard for conditional rendering, Angular 17 introduces a syntax more akin to JavaScript. This not only aligns with modern development practices but also provides a familiar feel for developers.</p><p id="ea1e" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">Let’s explore the changes in these structures, showcasing an example of structures in previous versions and versions with the new Angular version.</p><h2 id="1069" class="no mm ev be mn np nq nr mr ns nt nu mv le nv nw nx li ny nz oa lm ob oc od oe bj" data-selectable-paragraph="">if</h2><p id="f27f" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">Here’s a simple example of rendering a table or list using <code class="cw on oo op oq b">*ngIf</code> based on the value of the <code class="cw on oo op oq b">showTable</code> variable.</p><pre class="lu lv lw lx ly or oq os bo ot ba bj"><span id="9023" class="ou mm ev oq b bf ov ow l ox oy" data-selectable-paragraph=""><span class="hljs-comment">&lt;!-- Angular 16 and previous versions --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"showTable; else showList"</span>&gt;</span><br>  <span class="hljs-tag">&lt;<span class="hljs-name">table</span>&gt;</span><br>    <span class="hljs-comment">&lt;!-- full table --&gt;</span><br>  <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br><span class="hljs-comment">&lt;!-- Angular 17 --&gt;</span><br>@ngIf (showTable) {<br>  <span class="hljs-tag">&lt;<span class="hljs-name">table</span>&gt;</span><br>    <span class="hljs-comment">&lt;!-- full table --&gt;</span><br>  <span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span><br>}</span></pre><p id="6dd0" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">As observed, in the new Angular version, we have a clearer structure, and we no longer need to use extra tags or the <code class="cw on oo op oq b">ng-template</code> tag.</p><h2 id="9c7b" class="no mm ev be mn np nq nr mr ns nt nu mv le nv nw nx li ny nz oa lm ob oc od oe bj" data-selectable-paragraph="">for</h2><p id="522d" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">For the <code class="cw on oo op oq b">*ngFor</code> structure, we have a better structure and clarity compared to previous versions. Also, the mandatory <code class="cw on oo op oq b">track</code> property is added, where we need to provide an identifier for each item (similar to other frameworks and libraries like <code class="cw on oo op oq b">React</code>s or <code class="cw on oo op oq b">Vue</code>) to uniquely identify each element. This not only enhances element identification but also contributes to performance improvements.</p><pre class="lu lv lw lx ly or oq os bo ot ba bj"><span id="b2b3" class="ou mm ev oq b bf ov ow l ox oy" data-selectable-paragraph=""><span class="hljs-comment">&lt;!-- Angular 16 and previous versions --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items; let i = index;"</span>&gt;</span><br>  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br><span class="hljs-comment">&lt;!-- Angular 17 --&gt;</span><br>@for (item of items; track item.id) {<br>  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{ item }}<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>}</span></pre><h2 id="e2c9" class="no mm ev be mn np nq nr mr ns nt nu mv le nv nw nx li ny nz oa lm ob oc od oe bj" data-selectable-paragraph="">switch</h2><p id="397c" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">In the <code class="cw on oo op oq b">ngSwitch</code> structure, we also have a clearer structure that is very helpful for developers because it significantly simplifies the way we express our conditions, almost identical to JavaScript.</p><p id="9584" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">The example shows how to render a template according to the value of the <code class="cw on oo op oq b">color</code> variable.</p><pre class="lu lv lw lx ly or oq os bo ot ba bj"><span id="242f" class="ou mm ev oq b bf ov ow l ox oy" data-selectable-paragraph=""><span class="hljs-comment">&lt;!-- Angular 16 and previous versions --&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> [<span class="hljs-attr">ngSwitch</span>]=<span class="hljs-string">"color"</span>&gt;</span><br>  <span class="hljs-tag">&lt;<span class="hljs-name">app-color</span> *<span class="hljs-attr">ngSwitchCase</span>=<span class="hljs-string">"red"</span>/&gt;</span><br>  <span class="hljs-tag">&lt;<span class="hljs-name">app-color</span> *<span class="hljs-attr">ngSwitchCase</span>=<span class="hljs-string">"blue"</span>/&gt;</span><br>  <span class="hljs-tag">&lt;<span class="hljs-name">app-default-color</span> *<span class="hljs-attr">ngSwitchDefault</span>/&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><br><span class="hljs-comment">&lt;!-- Angular 17 --&gt;</span><br>@switch (color) {<br>  @case ('red') {<br>    <span class="hljs-tag">&lt;<span class="hljs-name">app-red-color</span> /&gt;</span><br>  }<br>  @case ('blue') {<br>    <span class="hljs-tag">&lt;<span class="hljs-name">app-blue-color</span> /&gt;</span><br>  }<br>  @default {<br>    <span class="hljs-tag">&lt;<span class="hljs-name">app-default-color</span> /&gt;</span><br>  }<br>}</span></pre><p id="c5fb" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">If you want to explore in more detail the update of the declarative control flow, you can <a class="af mk" rel="noopener" href="/@dgongoragamboa/introduction-to-the-new-control-flow-for-our-angular-17-templates-2ee64ca5f9a0">visit this article</a> where we detail the updates.</p><h1 id="4892" class="ml mm ev be mn mo mp mq mr ms mt mu mv mw mx my mz na nb nc nd ne nf ng nh ni bj" data-selectable-paragraph="">Stable Application Builders</h1><p id="2ea6" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">Angular has different builders for building our applications. The default one we use is <code class="cw on oo op oq b">Client Side Rendering</code> (<code class="cw on oo op oq b">CSR</code>), where the application is built on the client. Now, the option to start our app using <code class="cw on oo op oq b">Server Side Rendering</code> (<code class="cw on oo op oq b">SSR</code>) has been stably integrated. This brings several advantages, such as better performance by sending fully rendered HTML to users, along with improvements in <code class="cw on oo op oq b">SEO</code>. If we want to start our app using <code class="cw on oo op oq b">SSR</code>, we can initiate it with the <code class="cw on oo op oq b">--ssr</code> flag.</p><pre class="lu lv lw lx ly or oq os bo ot ba bj"><span id="b608" class="ou mm ev oq b bf ov ow l ox oy" data-selectable-paragraph="">ng new my-app --ssr</span></pre><p id="b935" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">Even if we don’t specify the <code class="cw on oo op oq b">--ssr</code> flag, the creation assistant will ask us if we want to start our app using <code class="cw on oo op oq b">SSR</code>. If we already have an app, we can add <code class="cw on oo op oq b">SSR</code> to our app with the following command:</p><pre class="lu lv lw lx ly or oq os bo ot ba bj"><span id="9e5e" class="ou mm ev oq b bf ov ow l ox oy" data-selectable-paragraph="">ng add @angular/ssr</span></pre><h1 id="00ec" class="ml mm ev be mn mo mp mq mr ms mt mu mv mw mx my mz na nb nc nd ne nf ng nh ni bj" data-selectable-paragraph="">Deferred Loading Blocks</h1><p id="e65d" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">One of the things that had been requested for some time (although it could already be done) is the lazy loading of specific elements or complete components.</p><p id="51a2" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">Now we can use defer to delay the loading of components in response to different user interactions, such as clicks, inputs, or hovers, and of course, when certain logic conditions are met in our applications.</p><p id="3736" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">In the following example, we see how to use defer to load the component only when the “Load my profile” button is clicked. In this case, the trigger interaction is used, and it validates that the load variable is true. Optional values for loading time can be specified using the placeholder, loading, and error options.</p><pre class="lu lv lw lx ly or oq os bo ot ba bj"><span id="7c44" class="ou mm ev oq b bf ov ow l ox oy" data-selectable-paragraph=""><span class="hljs-tag">&lt;<span class="hljs-name">button</span> (<span class="hljs-attr">click</span>)=<span class="hljs-string">"load = true"</span> #<span class="hljs-attr">showProfileBtn</span>&gt;</span><br>  Load my profile<br><span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span><br><br>@defer (on interaction(showProfileBtn); when load == true) {<br>  <span class="hljs-tag">&lt;<span class="hljs-name">my-profile</span> /&gt;</span><br>} @placeholder (minimum 300ms) {<br>  <span class="hljs-comment">&lt;!-- placeholder --&gt;</span><br>} @loading (after 300ms; minimum 1.5s) {<br>  <span class="hljs-tag">&lt;<span class="hljs-name">loading-component</span> /&gt;</span> <span class="hljs-comment">&lt;!-- loading section --&gt;</span><br>} @error {<br>  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Something went wrong, please try again... <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span> <span class="hljs-comment">&lt;!-- handle error msg --&gt;</span><br>}</span></pre><p id="5a6e" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">There are different triggers for this functionality:</p><ul class=""><li id="7185" class="kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq of og oh bj" data-selectable-paragraph="">idle: loads when the browser reaches an idle state.</li><li id="8171" class="kt ku ev kv b kw oi ky kz la oj lc ld le ok lg lh li ol lk ll lm om lo lp lq of og oh bj" data-selectable-paragraph="">viewport: loads when the content matches the user’s screen sizes.</li><li id="8955" class="kt ku ev kv b kw oi ky kz la oj lc ld le ok lg lh li ol lk ll lm om lo lp lq of og oh bj" data-selectable-paragraph="">interaction: loads when the user has an interaction (click on an element, focus, etc.).</li><li id="9fd7" class="kt ku ev kv b kw oi ky kz la oj lc ld le ok lg lh li ol lk ll lm om lo lp lq of og oh bj" data-selectable-paragraph="">timer: loads after a defined waiting time.</li><li id="c951" class="kt ku ev kv b kw oi ky kz la oj lc ld le ok lg lh li ol lk ll lm om lo lp lq of og oh bj" data-selectable-paragraph="">hover: loads when the mouse moves over a particular area</li></ul><h1 id="9ee6" class="ml mm ev be mn mo mp mq mr ms mt mu mv mw mx my mz na nb nc nd ne nf ng nh ni bj" data-selectable-paragraph="">ESBuild and Vite Are a Reality</h1><p id="97dd" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">ESBuild will be enabled by default for new projects, and for the test server (dev), the default server will be <code class="cw on oo op oq b">Vite</code>. This brings significant improvements in performance regarding application building. All of this is related to the fact that <code class="cw on oo op oq b">Webpack</code> will no longer be used.</p><h1 id="3df4" class="ml mm ev be mn mo mp mq mr ms mt mu mv mw mx my mz na nb nc nd ne nf ng nh ni bj" data-selectable-paragraph="">Installation or Update</h1><p id="37d1" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">Before creating any new project with Angular, I suggest reviewing <a class="af mk" href="https://angular.dev/" rel="noopener ugc nofollow" target="_blank">the new documentation</a> and seeing for yourself the changes that have been released, as well as exploring the new features with the playground.</p><h2 id="612d" class="no mm ev be mn np nq nr mr ns nt nu mv le nv nw nx li ny nz oa lm ob oc od oe bj" data-selectable-paragraph="">Install and Create a New Project</h2><p id="b9ec" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">If you want to install Angular in its latest version on your computer, you can run the following command (you need to have <a class="af mk" href="https://nodejs.org/en" rel="noopener ugc nofollow" target="_blank">Node.js</a> installed):</p><p id="7ee2" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph=""><code class="cw on oo op oq b">npm install --global @angular/cli@next</code></p><p id="9830" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">Once installed, you just need to navigate to the folder where you want to save the project and run the following command:</p><p id="384c" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph=""><code class="cw on oo op oq b">ng new my-project</code></p><p id="9e17" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">Replace <code class="cw on oo op oq b">my-project</code> with the name you want to give to your project. Once done, follow the instructions of the assistant to create your application.</p><h2 id="1866" class="no mm ev be mn np nq nr mr ns nt nu mv le nv nw nx li ny nz oa lm ob oc od oe bj" data-selectable-paragraph="">Update a Project</h2><p id="883b" class="pw-post-body-paragraph kt ku ev kv b kw nj ky kz la nk lc ld le nl lg lh li nm lk ll lm nn lo lp lq eo bj" data-selectable-paragraph="">If you already have an Angular version installed and a project in a version prior to 17, all you need to run is the <code class="cw on oo op oq b">ng update</code> command. The assistant will guide you on which dependencies to update in your project to have the latest version running.</p><p id="7f00" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">In summary, Angular 17 is a version that brings significant changes to the framework, including a series of improvements and new features that make it more powerful and easier to use. These enhancements make Angular a more attractive option for the development of modern web applications. As a recap, some of the points we covered in this article include:</p><p id="0801" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">The new Angular syntax is more concise and readable, helping developers write cleaner and more efficient code.</p><ul class=""><li id="745f" class="kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq of og oh bj" data-selectable-paragraph="">Performance improvements in Angular can make applications faster and smoother, enhancing the user experience.</li><li id="46a1" class="kt ku ev kv b kw oi ky kz la oj lc ld le ok lg lh li ol lk ll lm om lo lp lq of og oh bj" data-selectable-paragraph="">New Angular features, such as deferrable views and triggers, can help developers create more complex and functional applications.</li><li id="22c2" class="kt ku ev kv b kw oi ky kz la oj lc ld le ok lg lh li ol lk ll lm om lo lp lq of og oh bj" data-selectable-paragraph="">The Angular ecosystem offers a wide variety of possibilities, so keep experimenting and building to stay updated on the latest updates.</li></ul><p id="e6de" class="pw-post-body-paragraph kt ku ev kv b kw kx ky kz la lb lc ld le lf lg lh li lj lk ll lm ln lo lp lq eo bj" data-selectable-paragraph="">If you found this article helpful, please don’t hesitate to follow, subscribe, and applaud. Thank you!</p></div> 
      <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and how we utilize Angular for modernizing Web, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
      `,
    },
  },
  {
    id: "21a5aff6-3eb1-4455-8179-42fd0a29c190",
    title: "Bun bringing fun to JavaScript! How? Find out in this blog",
    written_on: "December 04, 2023",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "https://d1tlzifd8jdoy4.cloudfront.net/wp-content/uploads/2022/07/eyecatch_bun_1200x630-960x504.png",
    read_time: "7",
    blog_details: {
      title_img:
        "https://miro.medium.com/v2/resize:fit:1400/1*D3zIbK_09CWrUtTo_0QQhw.jpeg",
      hashtags: [
        "IT",
        "Bun or Node or Deno",
        "Bun",
        "Bun.sh",
        "Javascript",
        "Typescript",
        "Programming",
        "Software Development",
        "einfonets",
        "Expressjs in Bun",
        "Package Manager",
        "Nodejs",
      ],
      page_content: `<div><div class="ch bg dx dy dz ea"><div><h1 id="6853" class="pw-post-title et eu ev be ew ex ey ez fa fb fc fd fe ff fg fh fi fj fk fl fm fn fo fp fq fr fs ft fu fv bj" data-testid="storyTitle" data-selectable-paragraph="">Bun: Revolutionizing JavaScript Development — An In-Depth Guide with Real-World Examples</h1></div><p id="3720" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">The hype surrounding something called "<strong class="lj ew">Bun</strong>" is rapidly growing. But how many of us actually know what Bun is? Perhaps only a few. Let's explore it more deeply with examples in this blog post. Before diving into Bun, let's first delve into the history of previous technology.</p><h2 id="33fb" class="mf mg ev be mh mi mj mk ml mm mn mo mp ls mq mr ms lw mt mu mv ma mw mx my mz bj" data-selectable-paragraph="">History</h2><p id="9660" class="pw-post-body-paragraph lh li ev lj b lk na lm ln lo nb lq lr ls nc lu lv lw nd ly lz ma ne mc md me eo bj" data-selectable-paragraph="">Back in 2008, JavaScript was the scripting language used to create website frontends and handle events. In 2009, Ryan Dahl replaced this and introduced NodeJs. The introduction of NodeJs made it possible for developers to write JavaScript not only on the client-side (frontend) but also on the server-side (backend). NodeJs was a revolutionary runtime environment, but it came with many defects, some of which still exist today. These defects include:</p><p id="28b3" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">1. Legacy Issues with Security<br>2. API Compatibility and Tooling<br>3. Module Management</p><p id="7778" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">To address these issues, Ryan Dahl introduced Deno in 2020 AD. Deno, a remix of "<em class="nf">noDE,</em>" addressed all the above issues and defects of NodeJs. However, there are common problems in both NodeJs and Deno, such as speed and versioning issues, among others.</p><p id="30af" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">For addressing both the problems of NodeJs and Deno, and due to frustration with the speed of NodeJs while developing a NextJs project, Jarred Summer introduced Bun in 2022.</p><h2 id="e99e" class="mf mg ev be mh mi mj mk ml mm mn mo mp ls mq mr ms lw mt mu mv ma mw mx my mz bj" data-selectable-paragraph="">What is Bun?</h2><p id="cccd" class="pw-post-body-paragraph lh li ev lj b lk na lm ln lo nb lq lr ls nc lu lv lw nd ly lz ma ne mc md me eo bj" data-selectable-paragraph="">After looking at the history above, we can say that Bun is a replacement for runtime environments like NodeJs and Deno. Besides being a runtime environment, it also serves as a replacement for package managers like npm and yarn. Furthermore, it handles bundling and testing. So, we can say that Bun is an <strong class="lj ew">all-in-one package</strong> for runtime, package management, bundling, and testing.</p><p id="8fc6" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">In terms of technical details, both NodeJs and Deno were based on the V8 JavaScript Engine. If you're unfamiliar with the V8 JavaScript Engine, let me give you a brief introduction. The V8 JavaScript engine is an open-source, high-performance web assembly and JS engine developed in C++. It is used by Google, NodeJs, and Deno.</p><p id="f823" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">In contrast to the V8 JavaScript Engine, Bun runs on the JavaScript Core Engine, which is also open source and developed by Apple. Bun was developed using the Zig programming language, which can work at a low level, manage memory manually, and support native threading and concurrency.</p></div><div class="ch bg dx dy dz ea"><h2 id="ff0b" class="mf mg ev be mh mi mj mk ml mm mn mo mp ls mq mr ms lw mt mu mv ma mw mx my mz bj" data-selectable-paragraph="">Similarities with NodeJs</h2><p id="3826" class="pw-post-body-paragraph lh li ev lj b lk na lm ln lo nb lq lr ls nc lu lv lw nd ly lz ma ne mc md me eo bj" data-selectable-paragraph="">Bun also has web APIs similar to NodeJs, including fetch, JSON, websockets, url, blob, path, http, util, dns, __dirname, __filename, and more.</p><p id="3976" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">Some Friendly Command Replacements</p><p id="3c99" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph=""><em class="nf">- npx is replaced with bunx.<br>- npm init is replaced with bun init.<br>- npm install packageName is replaced with bun add packageName.</em></p><h2 id="b55c" class="mf mg ev be mh mi mj mk ml mm mn mo mp ls mq mr ms lw mt mu mv ma mw mx my mz bj" data-selectable-paragraph="">Let’s Go Practical Now: How to Install Bun</h2><p id="4ab7" class="pw-post-body-paragraph lh li ev lj b lk na lm ln lo nb lq lr ls nc lu lv lw nd ly lz ma ne mc md me eo bj" data-selectable-paragraph="">For now, Bun can only be installed on Linux and macOS, with an experimental version available for Windows. There are several ways to install Bun, such as:</p><pre class="no np nq nr ns nt nu nv bo nw ba bj"><span id="516c" class="nx mg ev nu b bf ny nz l oa ob" data-selectable-paragraph="">curl https://bun.sh/install | bash<br>npm i -g bun<br>docker pull oven/bun<br>docker run -<span class="hljs-built_in">rm</span> -init -<span class="hljs-built_in">ulimit</span> memlock=-1:-1 oven/bun</span></pre><p id="c0ad" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">For uninstallation, you can use:</p><pre class="no np nq nr ns nt nu nv bo nw ba bj"><span id="6f0f" class="nx mg ev nu b bf ny nz l oa ob" data-selectable-paragraph=""><span class="hljs-built_in">rm</span> -rf ~/.bin</span></pre><p id="abdc" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">After this command, you need to update .bashrc/.zshrc to remove references to ~/.bun/bin from the PATH variable as well.</p><h2 id="b40c" class="mf mg ev be mh mi mj mk ml mm mn mo mp ls mq mr ms lw mt mu mv ma mw mx my mz bj" data-selectable-paragraph="">Setting up Wsl On Windows</h2><blockquote class="oc od oe"><p id="7ec8" class="lh li nf lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">Note : You system should be running Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11</p></blockquote><p id="2876" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">In this blog post, we assume we have a Windows machine and are installing Bun on WSL (Windows Subsystem for Linux) using curl. If you don’t have WSL on your system, you can follow the steps outlined in the image above.</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku of"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*KYXBwrmywdQW_yo62RLtXQ.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*KYXBwrmywdQW_yo62RLtXQ.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*KYXBwrmywdQW_yo62RLtXQ.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*KYXBwrmywdQW_yo62RLtXQ.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*KYXBwrmywdQW_yo62RLtXQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*KYXBwrmywdQW_yo62RLtXQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KYXBwrmywdQW_yo62RLtXQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*KYXBwrmywdQW_yo62RLtXQ.png 640w, https://miro.medium.com/v2/resize:fit:720/1*KYXBwrmywdQW_yo62RLtXQ.png 720w, https://miro.medium.com/v2/resize:fit:750/1*KYXBwrmywdQW_yo62RLtXQ.png 750w, https://miro.medium.com/v2/resize:fit:786/1*KYXBwrmywdQW_yo62RLtXQ.png 786w, https://miro.medium.com/v2/resize:fit:828/1*KYXBwrmywdQW_yo62RLtXQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*KYXBwrmywdQW_yo62RLtXQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*KYXBwrmywdQW_yo62RLtXQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="179" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*KYXBwrmywdQW_yo62RLtXQ.png"></picture></div></div></figure><p id="81cd" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">By default, Ubuntu will be installed. Once installed, restart your system, create a user and password as prompted, and you are ready to install Bun.</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku og"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*wa1YQT_V_rmLGTeA2svYzw.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*wa1YQT_V_rmLGTeA2svYzw.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*wa1YQT_V_rmLGTeA2svYzw.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*wa1YQT_V_rmLGTeA2svYzw.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*wa1YQT_V_rmLGTeA2svYzw.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wa1YQT_V_rmLGTeA2svYzw.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*wa1YQT_V_rmLGTeA2svYzw.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*wa1YQT_V_rmLGTeA2svYzw.png 640w, https://miro.medium.com/v2/resize:fit:720/1*wa1YQT_V_rmLGTeA2svYzw.png 720w, https://miro.medium.com/v2/resize:fit:750/1*wa1YQT_V_rmLGTeA2svYzw.png 750w, https://miro.medium.com/v2/resize:fit:786/1*wa1YQT_V_rmLGTeA2svYzw.png 786w, https://miro.medium.com/v2/resize:fit:828/1*wa1YQT_V_rmLGTeA2svYzw.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*wa1YQT_V_rmLGTeA2svYzw.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*wa1YQT_V_rmLGTeA2svYzw.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="302" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*wa1YQT_V_rmLGTeA2svYzw.png"></picture></div></div></figure><h2 id="0224" class="mf mg ev be mh mi mj mk ml mm mn mo mp ls mq mr ms lw mt mu mv ma mw mx my mz bj" data-selectable-paragraph="">Initializing Bun Project</h2><p id="5967" class="pw-post-body-paragraph lh li ev lj b lk na lm ln lo nb lq lr ls nc lu lv lw nd ly lz ma ne mc md me eo bj" data-selectable-paragraph="">Now that Bun is installed on our system, let’s create a project in Bun, similar to how we would create one in NodeJs. Almost everything is the same. We created a “learningBun” folder where all our code will be. We ran “bun init” to initialize our project, just like you would do “npm init” or “yarn init” in NodeJs. By default, Bun creates projects in TypeScript.</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku oh"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*5Ol038DkLFpcC2o1MF5_PQ.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*5Ol038DkLFpcC2o1MF5_PQ.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*5Ol038DkLFpcC2o1MF5_PQ.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*5Ol038DkLFpcC2o1MF5_PQ.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*5Ol038DkLFpcC2o1MF5_PQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*5Ol038DkLFpcC2o1MF5_PQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5Ol038DkLFpcC2o1MF5_PQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*5Ol038DkLFpcC2o1MF5_PQ.png 640w, https://miro.medium.com/v2/resize:fit:720/1*5Ol038DkLFpcC2o1MF5_PQ.png 720w, https://miro.medium.com/v2/resize:fit:750/1*5Ol038DkLFpcC2o1MF5_PQ.png 750w, https://miro.medium.com/v2/resize:fit:786/1*5Ol038DkLFpcC2o1MF5_PQ.png 786w, https://miro.medium.com/v2/resize:fit:828/1*5Ol038DkLFpcC2o1MF5_PQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*5Ol038DkLFpcC2o1MF5_PQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*5Ol038DkLFpcC2o1MF5_PQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="257" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*5Ol038DkLFpcC2o1MF5_PQ.png"></picture></div></div></figure><p id="a7c0" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">If you want JS which we will be using in this blog post, you type the fileName with .js extension in the entry point like below to create project on JS.</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku oi"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*DlmaLXa2EUXpHseL3Yxalg.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*DlmaLXa2EUXpHseL3Yxalg.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*DlmaLXa2EUXpHseL3Yxalg.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*DlmaLXa2EUXpHseL3Yxalg.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*DlmaLXa2EUXpHseL3Yxalg.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*DlmaLXa2EUXpHseL3Yxalg.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DlmaLXa2EUXpHseL3Yxalg.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*DlmaLXa2EUXpHseL3Yxalg.png 640w, https://miro.medium.com/v2/resize:fit:720/1*DlmaLXa2EUXpHseL3Yxalg.png 720w, https://miro.medium.com/v2/resize:fit:750/1*DlmaLXa2EUXpHseL3Yxalg.png 750w, https://miro.medium.com/v2/resize:fit:786/1*DlmaLXa2EUXpHseL3Yxalg.png 786w, https://miro.medium.com/v2/resize:fit:828/1*DlmaLXa2EUXpHseL3Yxalg.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*DlmaLXa2EUXpHseL3Yxalg.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*DlmaLXa2EUXpHseL3Yxalg.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="230" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*DlmaLXa2EUXpHseL3Yxalg.png"></picture></div></div></figure><p id="cf90" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">Now let’s take a look at our project by opening it in Visual Studio Code (VSCode).</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku oj"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*-TacYlz91vak9dL8DaMGkg.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*-TacYlz91vak9dL8DaMGkg.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*-TacYlz91vak9dL8DaMGkg.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*-TacYlz91vak9dL8DaMGkg.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*-TacYlz91vak9dL8DaMGkg.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-TacYlz91vak9dL8DaMGkg.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*-TacYlz91vak9dL8DaMGkg.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*-TacYlz91vak9dL8DaMGkg.png 640w, https://miro.medium.com/v2/resize:fit:720/1*-TacYlz91vak9dL8DaMGkg.png 720w, https://miro.medium.com/v2/resize:fit:750/1*-TacYlz91vak9dL8DaMGkg.png 750w, https://miro.medium.com/v2/resize:fit:786/1*-TacYlz91vak9dL8DaMGkg.png 786w, https://miro.medium.com/v2/resize:fit:828/1*-TacYlz91vak9dL8DaMGkg.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*-TacYlz91vak9dL8DaMGkg.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*-TacYlz91vak9dL8DaMGkg.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="268" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*-TacYlz91vak9dL8DaMGkg.png"></picture></div></div></figure><p id="dea7" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">In the images above, all the folders and files are provided by Bun by default. We simply opened our terminal and ran “bun run app.js” to start/run our project. “app.js” is the main file, so “bun run mainFile” should be provided.</p><h2 id="6a44" class="mf mg ev be mh mi mj mk ml mm mn mo mp ls mq mr ms lw mt mu mv ma mw mx my mz bj" data-selectable-paragraph="">Simple Get API in Bun</h2><p id="ad43" class="pw-post-body-paragraph lh li ev lj b lk na lm ln lo nb lq lr ls nc lu lv lw nd ly lz ma ne mc md me eo bj" data-selectable-paragraph="">Next, let’s see how to create a simple GET API in Bun.</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku ok"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*Px2UALN_evWL70JIo0Fp7w.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*Px2UALN_evWL70JIo0Fp7w.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*Px2UALN_evWL70JIo0Fp7w.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*Px2UALN_evWL70JIo0Fp7w.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*Px2UALN_evWL70JIo0Fp7w.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Px2UALN_evWL70JIo0Fp7w.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Px2UALN_evWL70JIo0Fp7w.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*Px2UALN_evWL70JIo0Fp7w.png 640w, https://miro.medium.com/v2/resize:fit:720/1*Px2UALN_evWL70JIo0Fp7w.png 720w, https://miro.medium.com/v2/resize:fit:750/1*Px2UALN_evWL70JIo0Fp7w.png 750w, https://miro.medium.com/v2/resize:fit:786/1*Px2UALN_evWL70JIo0Fp7w.png 786w, https://miro.medium.com/v2/resize:fit:828/1*Px2UALN_evWL70JIo0Fp7w.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*Px2UALN_evWL70JIo0Fp7w.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*Px2UALN_evWL70JIo0Fp7w.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="330" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*Px2UALN_evWL70JIo0Fp7w.png"></picture></div></div></figure><p id="7ae5" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">The output in the browser is as follows. We will dive deeper into this code later, but for now, understand that it opens port 4000 on our system and displays a response message on the request.</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku ol"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*0CDE8BnHvGWJ-OKggyUFrQ.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*0CDE8BnHvGWJ-OKggyUFrQ.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*0CDE8BnHvGWJ-OKggyUFrQ.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*0CDE8BnHvGWJ-OKggyUFrQ.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*0CDE8BnHvGWJ-OKggyUFrQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0CDE8BnHvGWJ-OKggyUFrQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*0CDE8BnHvGWJ-OKggyUFrQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*0CDE8BnHvGWJ-OKggyUFrQ.png 640w, https://miro.medium.com/v2/resize:fit:720/1*0CDE8BnHvGWJ-OKggyUFrQ.png 720w, https://miro.medium.com/v2/resize:fit:750/1*0CDE8BnHvGWJ-OKggyUFrQ.png 750w, https://miro.medium.com/v2/resize:fit:786/1*0CDE8BnHvGWJ-OKggyUFrQ.png 786w, https://miro.medium.com/v2/resize:fit:828/1*0CDE8BnHvGWJ-OKggyUFrQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*0CDE8BnHvGWJ-OKggyUFrQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*0CDE8BnHvGWJ-OKggyUFrQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="131" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*0CDE8BnHvGWJ-OKggyUFrQ.png"></picture></div></div></figure><h2 id="3a03" class="mf mg ev be mh mi mj mk ml mm mn mo mp ls mq mr ms lw mt mu mv ma mw mx my mz bj" data-selectable-paragraph="">Trying ExpressJs in Bun</h2><p id="d20f" class="pw-post-body-paragraph lh li ev lj b lk na lm ln lo nb lq lr ls nc lu lv lw nd ly lz ma ne mc md me eo bj" data-selectable-paragraph="">Now, let’s try the same thing using Express.js. In the next blog post, we will use Elysia.js, but for now, let’s see how we can use Express.js in our Bun project.</p><p id="e7ed" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">To install Express, we can use the following command: “bun add express.”</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku om"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*gqbBX5ufl9y48Zpzpf-KVQ.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*gqbBX5ufl9y48Zpzpf-KVQ.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*gqbBX5ufl9y48Zpzpf-KVQ.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*gqbBX5ufl9y48Zpzpf-KVQ.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*gqbBX5ufl9y48Zpzpf-KVQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*gqbBX5ufl9y48Zpzpf-KVQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*gqbBX5ufl9y48Zpzpf-KVQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*gqbBX5ufl9y48Zpzpf-KVQ.png 640w, https://miro.medium.com/v2/resize:fit:720/1*gqbBX5ufl9y48Zpzpf-KVQ.png 720w, https://miro.medium.com/v2/resize:fit:750/1*gqbBX5ufl9y48Zpzpf-KVQ.png 750w, https://miro.medium.com/v2/resize:fit:786/1*gqbBX5ufl9y48Zpzpf-KVQ.png 786w, https://miro.medium.com/v2/resize:fit:828/1*gqbBX5ufl9y48Zpzpf-KVQ.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*gqbBX5ufl9y48Zpzpf-KVQ.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*gqbBX5ufl9y48Zpzpf-KVQ.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="423" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*gqbBX5ufl9y48Zpzpf-KVQ.png"></picture></div></div></figure><h2 id="92ea" class="mf mg ev be mh mi mj mk ml mm mn mo mp ls mq mr ms lw mt mu mv ma mw mx my mz bj" data-selectable-paragraph="">Alias Command In Scripts(package.json) in Bun</h2><p id="7001" class="pw-post-body-paragraph lh li ev lj b lk na lm ln lo nb lq lr ls nc lu lv lw nd ly lz ma ne mc md me eo bj" data-selectable-paragraph="">You can see the “bun start” command in the terminal. Don’t worry; just like in NodeJs, you can give an alias to some commands in the package.json file.</p><p id="8d14" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">Use the <strong class="lj ew">— watch</strong> flag to automatically restart our server after any changes. We talked about this flag earlier.</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku on"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*tHTtmB6o4NtcmoqA6XwSrw.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*tHTtmB6o4NtcmoqA6XwSrw.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*tHTtmB6o4NtcmoqA6XwSrw.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*tHTtmB6o4NtcmoqA6XwSrw.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*tHTtmB6o4NtcmoqA6XwSrw.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tHTtmB6o4NtcmoqA6XwSrw.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*tHTtmB6o4NtcmoqA6XwSrw.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*tHTtmB6o4NtcmoqA6XwSrw.png 640w, https://miro.medium.com/v2/resize:fit:720/1*tHTtmB6o4NtcmoqA6XwSrw.png 720w, https://miro.medium.com/v2/resize:fit:750/1*tHTtmB6o4NtcmoqA6XwSrw.png 750w, https://miro.medium.com/v2/resize:fit:786/1*tHTtmB6o4NtcmoqA6XwSrw.png 786w, https://miro.medium.com/v2/resize:fit:828/1*tHTtmB6o4NtcmoqA6XwSrw.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*tHTtmB6o4NtcmoqA6XwSrw.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*tHTtmB6o4NtcmoqA6XwSrw.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="345" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*tHTtmB6o4NtcmoqA6XwSrw.png"></picture></div></div></figure><p id="65f9" class="pw-post-body-paragraph lh li ev lj b lk ll lm ln lo lp lq lr ls lt lu lv lw lx ly lz ma mb mc md me eo bj" data-selectable-paragraph="">Output:</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku oo"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*XV_WjBHWPlMwsvhpxJngpw.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*XV_WjBHWPlMwsvhpxJngpw.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*XV_WjBHWPlMwsvhpxJngpw.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*XV_WjBHWPlMwsvhpxJngpw.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*XV_WjBHWPlMwsvhpxJngpw.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*XV_WjBHWPlMwsvhpxJngpw.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XV_WjBHWPlMwsvhpxJngpw.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*XV_WjBHWPlMwsvhpxJngpw.png 640w, https://miro.medium.com/v2/resize:fit:720/1*XV_WjBHWPlMwsvhpxJngpw.png 720w, https://miro.medium.com/v2/resize:fit:750/1*XV_WjBHWPlMwsvhpxJngpw.png 750w, https://miro.medium.com/v2/resize:fit:786/1*XV_WjBHWPlMwsvhpxJngpw.png 786w, https://miro.medium.com/v2/resize:fit:828/1*XV_WjBHWPlMwsvhpxJngpw.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*XV_WjBHWPlMwsvhpxJngpw.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*XV_WjBHWPlMwsvhpxJngpw.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="68" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*XV_WjBHWPlMwsvhpxJngpw.png"></picture></div></div></figure><h2 id="a2cc" class="mf mg ev be mh mi mj mk ml mm mn mo mp ls mq mr ms lw mt mu mv ma mw mx my mz bj" data-selectable-paragraph="">Accessing Environment Variables in Bun</h2><p id="d0b0" class="pw-post-body-paragraph lh li ev lj b lk na lm ln lo nb lq lr ls nc lu lv lw nd ly lz ma ne mc md me eo bj" data-selectable-paragraph="">Now, let’s try to access environment variables in Bun without third-party packages. In the .env file, I have placed “name=Manish.” You can access this using either “<strong class="lj ew">process.env.name</strong>” or “<strong class="lj ew">Bun.env.name.</strong>”</p><figure class="no np nq nr ns lb kt ku paragraph-image"><div role="button" tabindex="0" class="lc ld go le bg lf"><div class="kt ku op"><picture><source srcset="https://miro.medium.com/v2/resize:fit:640/format:webp/1*UnMiG6h6zE7bmUK06LW_5g.png 640w, https://miro.medium.com/v2/resize:fit:720/format:webp/1*UnMiG6h6zE7bmUK06LW_5g.png 720w, https://miro.medium.com/v2/resize:fit:750/format:webp/1*UnMiG6h6zE7bmUK06LW_5g.png 750w, https://miro.medium.com/v2/resize:fit:786/format:webp/1*UnMiG6h6zE7bmUK06LW_5g.png 786w, https://miro.medium.com/v2/resize:fit:828/format:webp/1*UnMiG6h6zE7bmUK06LW_5g.png 828w, https://miro.medium.com/v2/resize:fit:1100/format:webp/1*UnMiG6h6zE7bmUK06LW_5g.png 1100w, https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UnMiG6h6zE7bmUK06LW_5g.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px" type="image/webp"><source data-testid="og" srcset="https://miro.medium.com/v2/resize:fit:640/1*UnMiG6h6zE7bmUK06LW_5g.png 640w, https://miro.medium.com/v2/resize:fit:720/1*UnMiG6h6zE7bmUK06LW_5g.png 720w, https://miro.medium.com/v2/resize:fit:750/1*UnMiG6h6zE7bmUK06LW_5g.png 750w, https://miro.medium.com/v2/resize:fit:786/1*UnMiG6h6zE7bmUK06LW_5g.png 786w, https://miro.medium.com/v2/resize:fit:828/1*UnMiG6h6zE7bmUK06LW_5g.png 828w, https://miro.medium.com/v2/resize:fit:1100/1*UnMiG6h6zE7bmUK06LW_5g.png 1100w, https://miro.medium.com/v2/resize:fit:1400/1*UnMiG6h6zE7bmUK06LW_5g.png 1400w" sizes="(min-resolution: 4dppx) and (max-width: 700px) 50vw, (-webkit-min-device-pixel-ratio: 4) and (max-width: 700px) 50vw, (min-resolution: 3dppx) and (max-width: 700px) 67vw, (-webkit-min-device-pixel-ratio: 3) and (max-width: 700px) 65vw, (min-resolution: 2.5dppx) and (max-width: 700px) 80vw, (-webkit-min-device-pixel-ratio: 2.5) and (max-width: 700px) 80vw, (min-resolution: 2dppx) and (max-width: 700px) 100vw, (-webkit-min-device-pixel-ratio: 2) and (max-width: 700px) 100vw, 700px"><img alt="" class="bg ka lg c" width="700" height="421" loading="lazy" role="presentation" src="https://miro.medium.com/v2/resize:fit:700/1*UnMiG6h6zE7bmUK06LW_5g.png"></picture></div></div></figure></div></div>
      <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and how we utilize Bun, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
      `,
    },
  },
  {
    id: "80f2cc11-67ee-4e6c-b6da-5a042d809790",
    title: "Advantages of Custom Website Design for Unique Needs",
    written_on: "January 27, 2024",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    read_time: "7",
    blog_details: {
      title_img:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hashtags: [
        "CustomWebsiteDesign",
        "UniqueNeeds",
        "BrandIdentity",
        "User Experience",
        "SEO",
        "einfonets",
        "Web Development",
      ],
      page_content: `<h1>Advantages of Custom Website Design for Unique Needs</h1>

    <p>In today's competitive digital landscape, having a unique and engaging online presence is essential for businesses to stand out and attract customers. While template-based website builders offer convenience and affordability, they often fall short in meeting the specific requirements and branding objectives of businesses with unique needs. Custom website design, on the other hand, offers a tailored solution that aligns perfectly with the goals and preferences of the business. When it comes to custom website design, <a href="https://www.einfonets.com">einfonets</a> stands out as a top choice, providing expert solutions for businesses looking to create a distinct online presence.</p>

    <h2>1. Tailored to Your Brand Identity</h2>

    <p>A custom website allows you to showcase your brand identity in a way that accurately reflects your values, mission, and personality. From color schemes and typography to imagery and messaging, every element can be carefully crafted to resonate with your target audience and leave a memorable impression.</p>

    <h2>2. Unique and Distinctive Design</h2>

    <p>With a custom website, you're not limited by pre-designed templates or cookie-cutter layouts. Instead, you have the freedom to create a unique and distinctive design that sets you apart from your competitors. This uniqueness can help you capture the attention of visitors and leave a lasting impact, increasing brand recognition and credibility.</p>

    <h2>3. Scalability and Flexibility</h2>

    <p>Custom websites are built with scalability and flexibility in mind, allowing for seamless expansion and adaptation as your business grows and evolves. Whether you need to add new features, integrate third-party tools, or optimize for mobile devices, a custom-designed website can easily accommodate your changing needs without compromising performance or user experience.</p>

    <h2>4. Enhanced User Experience</h2>

    <p>User experience (UX) is a critical factor in determining the success of a website. Custom website design enables you to prioritize user-centric design principles and create an intuitive and seamless browsing experience for your visitors. By understanding your target audience's needs and behaviors, you can optimize navigation, streamline interactions, and guide users towards desired actions, ultimately leading to higher engagement and conversions.</p>

    <h2>5. Improved SEO Performance</h2>

    <p>Search engine optimization (SEO) is essential for driving organic traffic to your website and increasing visibility in search engine results. Custom website design allows for optimized code structure, faster page loading times, and tailored content strategies—all of which contribute to improved SEO performance. By implementing SEO best practices from the outset, you can position your website for long-term success and achieve higher rankings in relevant search queries.</p>

    <h2>6. Full Control and Ownership</h2>

    <p>Unlike template-based websites, which often come with limitations and restrictions, a custom-designed website gives you full control and ownership over your digital assets. You're not bound by third-party platforms or subscription fees, and you have the freedom to make changes and updates as needed without relying on external providers.</p>

    <h2>Conclusion</h2>

    <p>Custom website design offers numerous advantages for businesses with unique needs, providing a tailored solution that aligns with brand identity, enhances user experience, and drives business growth. While the upfront investment may be higher compared to template-based alternatives, the long-term benefits in terms of brand differentiation, scalability, and performance far outweigh the initial costs. By partnering with an experienced web design agency like <a href="https://www.einfonets.com">einfonets</a>, businesses can unlock the full potential of custom website design and achieve their online objectives with confidence.</p>
    
    <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and our custom product services, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
    `,
    },
  },
  {
    id: "f59b2789-2a58-4696-8551-608b7254160a",
    title:
      "The Practical Limitations of Cloud Technology: A Comprehensive Guide",
    written_on: "January 28, 2024",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "https://www.quotemaster.org/images/d8/d8ac4153cd4cedec3da47b360804a8cf.jpg",
    read_time: "8",
    blog_details: {
      title_img:
        "https://i.pinimg.com/736x/86/17/13/861713705499e1d6c035bcb36be4d771.jpg",
      hashtags: [
        "CloudTechnology",
        "CloudComputing",
        "TechLimitations",
        "ITInfrastructure",
        "DataSecurity",
        "einfonets",
        "CostManagement",
        "NetworkPerformance",
        "VendorLockIn",
        "Scalability",
        "DataPrivacy",
        "Compliance",
        "CloudManagement",
        "ITOperations",
      ],
      page_content: `<section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.5em; margin-bottom: 15px;">Introduction</h2>
            <p style="margin-bottom: 15px;">Cloud technology has revolutionized the way businesses operate, offering scalability, flexibility, and cost-efficiency. However, it's essential to understand the practical limitations and challenges associated with cloud adoption. In this article, we'll explore some common pitfalls that organizations may encounter when migrating to the cloud. For expert guidance on navigating these challenges, consider partnering with <a href="https://www.einfonets.com">einfonets</a>, a leading provider of cloud solutions tailored to your business needs.</p>
        </section>

        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.5em; margin-bottom: 15px;">1. Downtime and Reliability</h2>
            <p style="margin-bottom: 15px;">While cloud service providers strive for high availability, no system is immune to downtime. Issues such as network outages, hardware failures, and software bugs can disrupt cloud services, impacting business operations and causing inconvenience to users. Additionally, reliance on a single cloud provider may increase the risk of service interruptions if the provider experiences technical difficulties or maintenance windows. Partnering with a reliable cloud service provider like <a href="https://www.einfonets.com">einfonets</a> can mitigate some of these risks by ensuring redundancy and failover mechanisms.</p>
        </section>

        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.5em; margin-bottom: 15px;">2. Security Concerns</h2>
            <p style="margin-bottom: 15px;">Security remains a top concern for organizations migrating to the cloud. While reputable cloud providers implement robust security measures, data breaches, unauthorized access, and compliance issues are still risks that need to be addressed. Shared responsibility models, where the cloud provider secures the infrastructure and the customer secures their data and applications, can lead to confusion and gaps in security if not properly understood and implemented. Organizations must carefully assess their security requirements, implement additional safeguards as needed, and ensure compliance with industry regulations to mitigate security risks. <a href="https://www.einfonets.com">einfonets</a> offers advanced security solutions to help businesses protect their sensitive data and applications in the cloud.</p>
        </section>

        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.5em; margin-bottom: 15px;">3. Data Privacy and Compliance</h2>
            <p style="margin-bottom: 15px;">Storing data in the cloud raises concerns about data privacy and compliance with regulations such as GDPR, HIPAA, and PCI DSS. Organizations must ensure that their cloud providers adhere to relevant compliance standards and implement appropriate data protection measures to safeguard sensitive information. Data residency and sovereignty issues may also arise when data is stored in cloud data centers located in different jurisdictions, requiring organizations to navigate complex legal and regulatory landscapes.</p>
        </section>

        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.5em; margin-bottom: 15px;">4. Cost Management</h2>
            <p style="margin-bottom: 15px;">While cloud services offer scalability and cost-effectiveness, managing cloud costs can be challenging. Without proper monitoring and optimization, organizations may incur unexpected expenses due to overprovisioning, underutilized resources, or inefficient workload placement. Pricing models such as pay-as-you-go and resource-based billing can make it difficult to predict and control costs, especially for dynamic workloads with fluctuating resource demands. Effective cost management strategies, including workload optimization, rightsizing, and cloud cost analytics, are essential to control cloud spending and maximize ROI.</p>
        </section>

        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.5em; margin-bottom: 15px;">5. Network Performance and Latency</h2>
            <p style="margin-bottom: 15px;">Network performance and latency can impact the responsiveness and user experience of cloud-based applications. Organizations with high-performance or latency-sensitive workloads may encounter challenges when accessing cloud resources over the internet, especially in regions with limited connectivity or unreliable network infrastructure. To mitigate network-related issues, organizations can leverage content delivery networks (CDNs), edge computing, and hybrid cloud architectures to optimize data transfer and reduce latency.</p>
        </section>

        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.5em; margin-bottom: 15px;">6. Vendor Lock-In</h2>
            <p style="margin-bottom: 15px;">Vendor lock-in refers to the dependence on a single cloud provider for essential services and infrastructure. While cloud providers offer interoperability and data portability options, migrating between providers can be complex and costly. Organizations may find themselves locked into proprietary technologies, APIs, or management tools, limiting their ability to switch providers or negotiate favorable terms. To mitigate vendor lock-in risks, organizations should consider adopting multi-cloud or hybrid cloud strategies, leveraging open standards and APIs, and designing applications for portability and interoperability.</p>
        </section>

        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.5em; margin-bottom: 15px;">7. Performance and Scalability Trade-offs</h2>
            <p style="margin-bottom: 15px;">While cloud platforms offer scalability and elasticity to accommodate changing workloads, achieving optimal performance at scale can be challenging. Factors such as resource contention, noisy neighbors, and bottlenecks in shared infrastructure can degrade performance and affect user experience. Balancing performance requirements with scalability objectives requires careful capacity planning, performance testing, and optimization techniques, such as horizontal scaling, vertical scaling, and auto-scaling policies.</p>
        </section>

        <section style="margin-bottom: 40px;">
            <h2 style="font-size: 1.5em; margin-bottom: 15px;">8. Complexity of Management and Operations</h2>
            <p style="margin-bottom: 15px;">Managing and operating cloud environments can be complex, especially for organizations with limited cloud expertise or heterogeneous IT environments. Tasks such as provisioning resources, configuring networks, monitoring performance, and troubleshooting issues require specialized skills and tools. Cloud management platforms, automation frameworks, and managed services can help simplify day-to-day operations and reduce the burden on IT teams, but organizations must invest in training and upskilling to effectively manage their cloud infrastructure.</p>
        </section>
        <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and our cloud services, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
        `,
    },
  },
  {
    id: "196eee43-a45d-4b06-880f-2c59b4a3851d",
    title: "10 Essential Strategies for Optimizing Web Application Performance",
    written_on: "February 21, 2024",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "/images/blog/196eee43-a45d-4b06-880f-2c59b4a3851d_cover_img.jpg",
    read_time: "5",
    blog_details: {
      title_img:
        "/images/blog/196eee43-a45d-4b06-880f-2c59b4a3851d_title_img.jpg",
      hashtags: [
        "Web",
        "WebApp",
        "WebAppOptimizations",
        "WebPerformance",
        "PageSpeed",
        "Optimization",
        "CDN Networks",
        "WebTools",
        "FileCompression",
        "ImageOptimization",
        "ServerLogs",
        "Logs",
        "DevOps",
      ],
      page_content: ` <header>
        <h2 style="font-size: 1.5em; margin-bottom: 15px; margin-top:30px;">Optimizing Web Application Performance</h2>
        <p style="margin-bottom: 15px;">In the fast-paced world of web applications, performance is paramount. Users expect lightning-fast loading times and seamless interactions, and anything less can lead to frustration and abandonment. To ensure your web application meets these expectations, it's crucial to implement optimization strategies that enhance speed and efficiency. Here are ten essential tactics to optimize your web application's performance:</p>
    </header>
    <article style="padding: 20px;">
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">1. Use Key Metrics</h2>
        <p style="margin-bottom: 15px;">Begin by identifying key performance indicators (KPIs) such as page load time, time to first byte, and server response time. These metrics serve as benchmarks for performance evaluation and guide optimization efforts.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">2. Reduce File Caching</h2>
        <p style="margin-bottom: 15px;">Minimize file caching to prevent outdated content from being served to users. Implement caching policies that strike a balance between caching effectiveness and content freshness.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">3. Minimize the Number of HTTP Requests</h2>
        <p style="margin-bottom: 15px;">Each HTTP request adds overhead to page loading times. Consolidate and minify CSS, JavaScript, and other resources to reduce the number of requests required to render a page.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">4. Use Content Delivery Networks (CDNs)</h2>
        <p style="margin-bottom: 15px;">Leverage CDNs to distribute content across geographically distributed servers. By serving content from the nearest server to the user, CDNs reduce latency and improve overall performance.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">5. Upload Compressed Files</h2>
        <p style="margin-bottom: 15px;">Compress files such as images, CSS, and JavaScript to reduce their size before uploading them to your server. This minimizes bandwidth usage and accelerates content delivery to end-users.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">6. Optimize Images for Faster Loading</h2>
        <p style="margin-bottom: 15px;">Optimize images by resizing them to the required dimensions, choosing the appropriate file format, and compressing them without sacrificing quality. This significantly reduces image file sizes and improves loading times.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">7. Use Logs to Monitor Performance</h2>
        <p style="margin-bottom: 15px;">Implement logging mechanisms to capture performance data and identify bottlenecks. Analyze logs regularly to pinpoint areas for optimization and track the effectiveness of optimization efforts over time.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">8. Use a Browser Extension to Improve Performance</h2>
        <p style="margin-bottom: 15px;">Install browser extensions such as PageSpeed Insights or YSlow to analyze your web application's performance directly from your browser. These tools provide actionable insights and recommendations for performance optimization.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">9. Use a Reliable and Fast Web Hosting Service</h2>
        <p style="margin-bottom: 15px;">Choose a web hosting service with reliable infrastructure, high uptime guarantees, and fast server response times. A dependable hosting provider ensures consistent performance and minimizes downtime.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">10. Choose the Right Tools for Web App Performance</h2>
        <p style="margin-bottom: 15px;">Select performance monitoring and optimization tools that align with your specific requirements and technical stack. Whether it's APM (Application Performance Monitoring) tools, profiling libraries, or performance testing frameworks, the right tools streamline optimization efforts and facilitate continuous improvement.</p>

        <h2 style="font-size: 1.5em; margin-bottom: 15px; margin-top:30px;">Conclusion</h2>
        <p style="margin-bottom: 15px;">Optimizing web application performance is a multifaceted endeavor that requires careful attention to various factors such as file optimization, network optimization, and server configuration. By implementing the ten strategies outlined above, you can enhance your web application's speed, responsiveness, and overall user experience. Stay vigilant, monitor performance regularly, and adapt your optimization tactics as needed to keep your web application running smoothly in today's competitive digital landscape.</p>

        
    </article>
    <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and our cloud services, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
    `,
    },
  },
  {
    id: "93dc621a-d412-406d-833b-277a72be551c",
    title:
      "Fortifying Your Mobile App: A Comprehensive Guide to Ensuring Security",
    written_on: "March 15, 2024",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "/images/blog/93dc621a-d412-406d-833b-277a72be551c_cover_img.jpg",
    read_time: "7",
    blog_details: {
      title_img:
        "/images/blog/93dc621a-d412-406d-833b-277a72be551c_title_img.jpg",
      hashtags: [
        "Mobile",
        "MobileApp",
        "MobileAppSecurity",
        "einfonets",
        "innovate",
        "elevate",
        "dominate",
        "CyberAwarness",
        "SecureApps",
        "DeviceSecurity",
      ],
      page_content: ` <header>
        <h2 style="font-size: 1.5em; margin-bottom: 15px; margin-top:30px;">A Comprehensive Guide to Ensuring Security</h2>
        <p style="margin-bottom: 15px;">In today's interconnected world, mobile applications have become indispensable tools for businesses and individuals alike. However, with the convenience of mobile technology comes the responsibility of safeguarding sensitive data and ensuring the privacy of users. Mobile app security is not a luxury but a necessity in an environment where cyber threats loom large. To help you navigate the complexities of securing your mobile app, we've compiled a detailed checklist of essential security measures:</p>
    </header>
    <article style="padding: 20px;">
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">1. Enforce Strong Multi-Factor Authentication</h2>
        <p style="margin-bottom: 15px;">Multi-factor authentication adds an extra layer of security by requiring users to provide two or more forms of verification before granting access. This helps prevent unauthorized access and significantly reduces the risk of password guessing attacks.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">2. Encrypt Mobile Communications</h2>
        <p style="margin-bottom: 15px;">Encrypting mobile communications is essential for protecting data transmitted between the app and its servers. By employing encryption protocols, such as SSL/TLS, you can prevent eavesdropping and man-in-the-middle attacks, especially when users are connected to public WiFi or cellular networks.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">3. Patch App and OS Vulnerabilities</h2>
        <p style="margin-bottom: 15px;">Regularly updating your app and operating system is crucial for addressing known vulnerabilities and protecting against potential exploits. Failure to patch vulnerabilities promptly can leave your app susceptible to attacks like Stagefright for Android and XcodeGhost for iOS.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">4. Protect Against Device Theft</h2>
        <p style="margin-bottom: 15px;">Implementing measures to protect user data in the event of device theft or loss is paramount. Features such as remote wipe and device encryption can help ensure that sensitive information remains secure, even if the device falls into the wrong hands.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">5. Scan Mobile Apps for Malware</h2>
        <p style="margin-bottom: 15px;">Utilize robust scanning tools to detect and eliminate malware that may compromise the security of your app. Virtual sandboxing and signature-based scanning are effective techniques for identifying and removing malicious code.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">6. Secure App Data</h2>
        <p style="margin-bottom: 15px;">Avoid storing sensitive data on the device whenever possible. If storage is necessary, employ strong encryption to protect the data from unauthorized access. Additionally, ensure that proper data handling practices are followed to minimize the risk of data leakage.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">7. Secure the Platform</h2>
        <p style="margin-bottom: 15px;">Implement measures to detect jailbroken devices and prevent unauthorized access to third-party services. By securing the platform, you can enhance overall app security and mitigate the risk of unauthorized access to sensitive data.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">8. Prevent Data Leaks</h2>
        <p style="margin-bottom: 15px;">Segregating business and personal apps can help prevent data leakage and protect sensitive information. By separating work-related apps from personal apps, you can minimize the risk of accidental data exposure and maintain user privacy.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">9. Optimize Data Caching</h2>
        <p style="margin-bottom: 15px;">Securely store and encrypt cached data to prevent potential security breaches. Optimizing data caching helps improve app performance while ensuring that sensitive information remains protected from unauthorized access.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">10. Isolate Application Information</h2>
        <p style="margin-bottom: 15px;">Utilize techniques like mobile app wrapping to isolate and protect enterprise-deployed apps. By encapsulating the app with additional security measures, you can enhance app security and prevent unauthorized access to sensitive data.</p>

        <h2 style="font-size: 1.5em; margin-bottom: 15px;">11. Regular Security Audits and Penetration Testing</h2>
        <p style="margin-bottom: 15px;">This ensures that your app is continuously evaluated for vulnerabilities and weaknesses, allowing you to address them promptly before they can be exploited.</p>

        <h2 style="font-size: 1.5em; margin-bottom: 15px;">12. Stay Informed About Emerging Threats</h2>
        <p style="margin-bottom: 15px;">Remaining vigilant and staying informed about emerging threats allows you to adapt your security measures to evolving risks and ensure that your app remains resilient against new attack vectors.</p>

        <h2 style="font-size: 1.5em; margin-bottom: 15px; margin-top:30px;">Conclusion</h2>
        <p style="margin-bottom: 15px;">By diligently following this comprehensive checklist, you can fortify your mobile app against a wide range of security threats and protect the privacy of your users. Prioritizing mobile app security not only helps build trust and confidence among users but also safeguards your app's reputation and credibility in an increasingly competitive landscape. Remember, investing in security today can save you from costly breaches and reputational damage tomorrow.</p>

        <p>
        For professional assistance in implementing these security measures and ensuring the robustness of your mobile app, consider partnering with <a href="https://www.einfonets.com">einfonets</a>. <a href="https://www.einfonets.com">einfonets</a> specializes in mobile app development and security solutions, helping businesses safeguard their digital assets and maintain the trust of their customers.
        </p>

        
    </article>
    <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and our secure app development services, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
    `,
    },
  },
  {
    id: "8a68172a-fc5a-49cf-8b36-aa54418a998a",
    title: "React 19: A next generation update for enhanced web experience",
    written_on: "April 03, 2024",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "/images/blog/8a68172a-fc5a-49cf-8b36-aa54418a998a_cover_img.png",
    read_time: "7",
    blog_details: {
      title_img:
        "/images/blog/8a68172a-fc5a-49cf-8b36-aa54418a998a_title_img.png",
      hashtags: [
        "einfonets",
        "innovate",
        "elevate",
        "dominate",
        "Web",
        "WebApp",
        "React",
        "React 19",
        "New update",
      ],
      page_content: ` <header>
        <h2 style="font-size: 1.5em; margin-bottom: 15px; margin-top:30px;">React 19: A next gen update</h2>
        <p style="margin-bottom: 15px;">The new React 19 update is , the highly anticipated next iteration of the beloved JavaScript library that promises to redefine the landscape of web development. With React 19 on the horizon, developers worldwide are eager to explore its groundbreaking features and enhancements. From performance optimizations to cutting-edge functionalities, here's a sneak peek into what's in store with this latest release.</p>
    </header>
    <article style="padding: 20px;">
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">1. React Compiler</h2>
        <p style="margin-bottom: 15px;">The highlight of the show is the React's very own new compiler that
            according to the team is currently powering Instagram in production.
            This compiler aims to optimize React applications by automatically
            re-rendering only the necessary parts of the UI when state changes.</p>

        <p style="margin-bottom: 15px;">What does this mean, you won't need to use the useMemo or
            useCallback hook ever again instead it will be taken care of by the
            compiler itself meaning automatic memoization along with some
            javascript optimizations which we manually needed to do before as
            manual memoization is a compromise. It clutters up our code, is easy
            to get wrong, and requires extra work to keep up to date.</p>
            
        <p style="margin-bottom: 15px;">You can see the new compiler in action 
            <a href="https://www.youtube.com/watch?v=qOQClO3g8-Y">here</a> which
            the team showcased in last fall.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">2. Actions</h2>
        <p style="margin-bottom: 15px;">Introducing Actions, a new feature in React for managing data submission from the client to the server. With Actions, developers can define functions to handle synchronous or asynchronous data operations, simplifying form handling and database mutations.</p>

        <p style="margin-bottom: 15px;">Designed to streamline data submission and manipulation, developers can now effortlessly define and manage both synchronous and asynchronous data operations, simplifying form handling and database interactions.</p>

        <p style="margin-bottom: 15px;">With Actions, React empowers developers to create dynamic and responsive user interfaces, enhancing the overall user experience. Whether handling form submissions or executing database mutations, Actions provide a seamless and intuitive way to manage data flow in React applications.</p>

        <p style="margin-bottom: 15px;">The action function operates both synchronously and asynchronously. Whether defined on the client side with standard JavaScript or on the server using the 'use server' directive, React manages data submission's lifecycle. It offers hooks like useFormStatus and useFormState to access form action's current state and response effortlessly. Actions are now available in the Canary channel and will ship in the next release of React.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">3. New useOptimistic hook</h2>
        <p style="margin-bottom: 15px;">useOptimistic feature enables developers to apply temporary updates that automatically revert once the final state commits. For Actions, useOptimistic allows you to optimistically set the final state of data on the client, assuming successful submission, and then revert to the server-received data. Utilizing standard async/await functionality, useOptimistic seamlessly integrates with both client-side fetch operations and server-side Actions, ensuring consistent behavior across environments.</p>

        <p style="margin-bottom: 15px;">For instance, in a chat application, sending a message triggers an optimistic update, instantly displaying the message in the chat window. This enhances user experience by providing real-time feedback while the message is being sent to the server. In case of network delays or errors, the UI gracefully handles the situation, ensuring a smooth user interaction.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">4. New Features in React Canary</h2>
        <p style="margin-bottom: 15px;">React Canary now includes several exciting features such as React Server Components, Asset Loading, Document Metadata, Directives, and Actions. These enhancements provide greater control and efficiency in building React applications across different environments.</p>


      <h3 style="font-size: 1em; margin-bottom: 15px;">Directives:</h3>
        <p style="margin-bottom: 15px;">React introduces "use client" and "use server" directives, marking the division between client and server environments. "use client" generates a &lt;script&gt; tag for client-side interactivity, while "use server" creates a POST endpoint (like tRPC Mutations) for server-side logic. These directives enable seamless integration of client and server functionality in reusable components.</p>

        <h3 style="font-size: 1em; margin-bottom: 15px;">Document Metadata:</h3>
        <p style="margin-bottom: 15px;">With built-in support for rendering &lt;title&gt;, &lt;meta&gt;, and
            metadata &lt;link&gt; tags, React simplifies document metadata management. This feature works across various environments, including client-side code, SSR, and RSC. It mirrors functionalities of libraries like React Helmet, enhancing document management within React applications.</p>

        <h3 style="font-size: 1em; margin-bottom: 15px;">Asset Loading:</h3>
        <p style="margin-bottom: 15px;">Suspense integration enhances React's asset loading capabilities, allowing precise determination of content readiness. New Resource Loading APIs like preload and preinit offer finer control over resource loading and initialization. These improvements optimize performance and user experience in React applications.</p>

        <p style="margin-bottom: 15px;">Suspense is now seamlessly integrated with the loading lifecycle of various resources like stylesheets, fonts, and scripts. This allows React to accurately determine content readiness within elements such as &lt;style&gt;, &lt;link&gt;, and &lt;script&gt;. Additionally, to enhance control over resource loading and initialization, we've introduced new Resource Loading APIs like preload and preinit.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">5. The Next Major Version of React</h2>
        <p style="margin-bottom: 15px;">Get ready for React 19! This major version will include groundbreaking improvements like support for Web Components, making React even more versatile and powerful for developers.</p>
        
        <h2 style="font-size: 1.5em; margin-bottom: 15px;">6. Offscreen (renamed to Activity)</h2>
        <p style="margin-bottom: 15px;">Previously known as Offscreen, the Activity feature is undergoing research to refine its functionality and working towards creating a more dynamic and responsive user experience. Stay tuned for more updates!</p>
        
        <h3 style="font-size: 1em; margin-bottom: 15px;">You can read more about React 19
            <a href="https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024">
              here!
            </a></h3>

<h2 style="font-size: 1.5em; margin-bottom: 15px;">Conclusion</h2>
        <p style="margin-bottom: 15px;">The new React 19's update introduces compelling features such as the compiler and server actions, which have the potential to streamline development processes. This may impact the relevance of additional frameworks like NextJS. As React 19 continues to evolve, we remain committed to providing thorough coverage and insights. Keep abreast of our updates as we delve deeper into more React 19's features.</p>


        <h2 style="font-size: 1.2em; margin-bottom: 15px;">
        For professional assistance in creating modern web applications that are based on React 19 latest features do consider connecting with <a href="https://www.einfonets.com">einfonets</a>. <a href="https://www.einfonets.com">einfonets</a> specializes in creating modern day web applications that are up to date with the latest trends.
        </h2>
    </article>
    <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and our modern web app development services, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
    `,
    },
  },
  {
    id: "bd5fb310-55f6-4fea-b047-091f739b5cc8",
    title: "9 best tools, extensions and platforms needed by every sales team",
    written_on: "May 13, 2024",
    written_by: "Janmey Solanki",
    blog_cover_img:
      "/images/blog/bd5fb310-55f6-4fea-b047-091f739b5cc8_cover_img.png",
    read_time: "10",
    blog_details: {
      title_img:
        "/images/blog/bd5fb310-55f6-4fea-b047-091f739b5cc8_title_img.png",
      hashtags: [
        "einfonets",
        "innovate",
        "elevate",
        "dominate",
        "sales",
        "revenue",
        "ROI",
        "sales tools",
        "sales extensions",
        "sales platforms",
        "B2B DB",
      ],
      page_content: ` <header>
        <h2 style="font-size: 1.5em; margin-bottom: 15px; margin-top:30px;">9 best tools, extensions and platforms needed by every sales team</h2>
        <p style="margin-bottom: 15px;">Today we are going to talk about the 9 best tools and extensions that every sales team must have and use on a daily basis. These tools and extensions can help you boost productivity, streamline processes, and ultimately drive more revenue. These tools and extensions can help you find new prospect leads, find details of the prospect leads from various sources such as LinkedIn, manage customer relationships, or close deals.</p>
    </header>
    <h2>Outline</h2>
      <ol>
        <li>
          <a href="#hunter">Hunter</a>
        </li>

        <li>
          <a href="#agile-crm">Agile CRM</a>
        </li>

        <li>
          <a href="#discover">Discover org sales intelligence</a>
        </li>

        <li>
          <a href="#yesware">Yesware</a>
        </li>

        <li>
          <a href="#apollo-io">Apollo.io</a>
        </li>

        <li>
          <a href="#closely">Closely</a>
        </li>

        <li>
          <a href="#salesql">SalesQL</a>
        </li>

        <li>
          <a href="#crystal">Crystal</a>
        </li>

        <li>
          <a href="#linkout">LinkOut</a>
        </li>
      </ol>
      <br/>
      <br/>
      <section id="hunter">
        <h2>
          <a href="https://hunter.io">Hunter</a> (Free plan available)
        </h2>
        <p>
          Hunter is a all in one platform that helps you at all the stages from
          reaching out people to connecting with professionals. Some of the
          services it provides are:
          <ul>
            <li>
              <h5>
                <a href="https://hunter.io/b2b-database">Hunter Discover</a>
              </h5>
              <p>
                A B2B database where you can identify relevant leads based on
                your ideal customer profile. <br />
                <br />
                Company Discovery lets you filter by: <br />
                Headquarters location <br />
                Industry (you can choose from among 487 industries)
                <br /> Headcount
                <br /> Keywords (a very flexible way to search – each company in
                Hunter Discover is indexed with multiple keywords)
                <br /> and technologies used.
                <br />
                <br /> Use these filters to find companies that align with your
                ideal customer profile, then find the associated email addresses
                using the Domain Search.
              </p>
            </li>
            <li>
              <h5>
                <a href="https://hunter.io/domain-search">
                  Hunter Domain Search
                </a>
              </h5>
              <p>
                Find the best person to contact from a company name or website.
                The Domain Search is perfect for quickly finding out who to
                contact within a company. It surfaces publicly available email
                addresses with confidence scores, department filters, and
                detailed sources in just half a second.
              </p>
            </li>
            <li>
              <h5>
                <a href="https://hunter.io/domain-search">
                  Hunter Email Finder
                </a>
              </h5>
              <p>
                Type a name, get a verified email address. The high match rate
                will help you get the most from your lists. The Email Finder is
                all you need to connect with any professional. It puts all our
                data together — email formats, email addresses found on the web,
                and verification status — to find reliable contact information
                in seconds.
              </p>
            </li>
            <li>
              <h5>
                <a href="https://hunter.io/email-verifier">
                  Hunter Email Verifier
                </a>
              </h5>
              <p>
                The verifier helps you in avoiding bounces and protect your
                sender reputation.
              </p>
            </li>
            Along with these you can create campaigns and automations for cold
            emailing. All this available in the form of chrome extension as well
            you <a href="https://hunter.io/chrome">find</a> here.
          </ul>
        </p>
      </section>
      <br/>
      <br/>
      <section id="agile-crm">
        <h2>
          <a href="https://www.agilecrm.com">Agile CRM</a> (Free plan available)
        </h2>

        <p>
          Agile CRM does three things at the same time. Sales Enablement +
          Marketing Automation + Customer Service. The main three features of
          Agile CRM are:
          <ul>
            <li>
              <h5> A All-in-One CRM platform</h5>
              <p>
                It helps you in automating, sales, marketing and service from
                one platform. While maintaining consistent and robust messaging
                and avoiding data leaks. It has 500 apps for managing all the
                workflows and streamlining process
              </p>
            </li>
            <li>
              <h5>Affordable</h5>
              <p>
                Make the most of Agile's modern features & integrations, easy
                implementation and great support at an affordable price.
              </p>
            </li>
            <li>
              <h5>Modern Architecture</h5>
              <p>
                Cloud based SaaS service that is mobile-ready, fast, and simple
                to use.
              </p>
            </li>
          </ul>
          It has has a chrome extension that helps you with: Lead Capturing,
          Email and link tracking with notifications, Track upcoming tasks, Add
          and manage all Leads, Tasks and Deals, Search Contacts, and most
          widely used Email Templates for cold emailing & Tracking. You can
          checkout the extension 
          <a href="https://www.agilecrm.com/chrome-extension">here</a>.
        </p>
      </section>
      <br/>
      <br/>
      <section id="discover">
        <h2>
          <a href="https://discoverorg.com">Discover Org</a> (Trial available,
          Pricing not disclosed)
        </h2>
        <p>
          DiscoverOrg is one more platform where you can find B2B database. It
          helps you with driving sales efficiently and effectively, increase
          leads and pipleline, manage clean and enriching data, boost sales and
          teams productivity. It is only a three step process.
          <ul>
            <li>
              <h5>Defining your market</h5>
              <p>
                Create your buyer and account profiles to align sales and
                marketing efforts and enable ABM.
              </p>
            </li>
            <li>
              <h5>Identifying Top Targets</h5>
              <p>
                Find vital decision makers and accounts that fit to your
                Customer Profile with a few clicks.
              </p>
            </li>
            <li>
              <h5>Prioritize and Predict</h5>
              <p>
                Identify, score and rank opportunities by ideal fit and
                prosperity to buy
              </p>
            </li>
          </ul>
          You can take benefit of all this with their extension as well on the
          go providing Instant Access to the Most Accurate Prospect Intelligence
          While Browsing the Web. It works on (1) a LinkedIn or Twitter profile,
          (2) a company website, (3) Salesforce.com accounts and contact
          records, or (4) any webpage with a company or contact name. Checkit
          out 
          <a href="https://chromewebstore.google.com/detail/discoverorg-sales-intelli/jdanmmkadklcdnmmhodecjodjljkekja?pli=1">
            here
          </a>
        </p>
      </section>
      <br/>
      <br/>
      <section id="yesware">
        <h2>
          <a href="https://www.yesware.com">Yesware by Vendasta</a> (Free plan
          available)
        </h2>
        <p>
          Yesware is a go to tool for email campaining, automation and tracking.
          The benefit of yesware is that it works in your Gmail, Outlook inbox
          only rather then having any other external interface or interation
          streamling your processes. Know which emails are working. Know when
          leads are interested. Know how much follow up to do. Yesware offers a
          robust set of tools for your sales team to track email outreach
          activity, rapidly test what does and doesn't work, and share it all
          with your team to drive better results, faster. Works only in five
          steps:
          <ul>
            <li>
              Install Yesware for Outlook or Gmail and integrate your favorite
              apps
            </li>
            <li>
              Know when recipients read your emails, click on links, or view
              attachments
            </li>
            <li>
              Save top-performing emails as templates your whole team can re-use
            </li>
            <li>Schedule meetings without the back-and-forth emails</li>
            <li>Data on what's working = more closed-won</li>
          </ul>
          Yesware has a dozen more tools which can help you reach more leads and
          increase sales. Some of the most widely used tools are:
          <ul>
            <li>Email Tracking</li>
            <li>Multichannel Campaigns</li>
            <li>Email Templates and Meeting Scheduler</li>
          </ul>
          Check out all of the tools 
          <a href="https://www.yesware.com/feature">here</a> .
        </p>
      </section>
      <br/>
      <br/>
      <section id="apollo-io">
        <h2>
          <a href="https://www.apollo.io">Apollo.io</a> (Free plan available)
        </h2>
        <p>
          Apollo.io has a B2B database fueled with the most accurate data on
          275M contacts and 73M companies powered by their proprietary LIVING
          DATA NETWORK which has about 2 Million contributors and 650 Million
          touchpoints. There are four main keypoints that will lead to sales
          growth according to Apollo:
          <h5>Build Pipeline</h5>
          <ul>
            <li>
              Contacts and Account Search: Find the Right Leads and Companies
            </li>
            <li>Scores and Signals: Reach out to right leads</li>
            <li>Inbound Optimization: Shorten forms & better qualify leads</li>
            <li>Sales Engagement: Automate your outbound</li>
          </ul>
          <h5>Close Deals</h5>
          <ul>
            <li>Meetings: Prepare for, book & follow up on meetings</li>
            <li>
              Deal Management: Close deals with insights and recommendations
            </li>
            <li>
              Conversation Intelligence: Track, Record, & Analyze conversations
            </li>
          </ul>
          <h5>Improve Performance</h5>
          <ul>
            <li>Analytics: See what's working & where to improve</li>
            <li>Coaching: Give your team actionable feedbacks</li>
          </ul>
          <h5>Stramline Operations</h5>
          <ul>
            <li>Workflow engine: Automate tasks and move faster on leads</li>
            <li>Enrich & Cleanse: Automatically sync and enrich your CRM.</li>
          </ul>
          According to Apollo a million users have joined Apollo.io last year
          and is the fastest growing and most loved sales technology. You can do
          all these along with there extension as well. Find it 
          <a href="https://chromewebstore.google.com/detail/apolloio-free-b2b-phone-n/alhgpfoeiimagjlnfekdhkjlkiomcapa?pli=1">
            here
          </a>
          .
        </p>
      </section>
      <br/>
      <br/>
      <section id="closely">
        <h2>
          <a href="https://closelyhq.com">Closely</a> (Paid)
        </h2>
        <p>
          Next on the list we have Closely. If your main focus is on Linkedin
          Closely would be your way to go. Closely provides Multichannel
          automation campaigns which can be really helpful for simplifying and
          streamlining your intercations. Closely helps by saving about 40 hours
          , 7x times cheaper, and a decrease of 50% from prospecting to demo.
          Closely provides:
          <ul>
            <li>
              <h5>Appoint</h5>
              <p>
                Organize meetings with potential prospects via Closely Appoint.
              </p>
            </li>
            <li>
              <h5>Scanlist</h5>
              <p>
                A marketing assistant that scans your business contacts, writes
                personalized message sequences and creates outstanding marketing
                copies that are faster than other human AIs.
              </p>
            </li>
            <li>
              <h5>Lead Finder</h5>
              <p>
                Closely has a B2B contact database with about 132 million
                records so you can find your business contacts quickly and
                easily.
              </p>
            </li>
            <li>
              <h5>Linkedin Scraper</h5>
              <p>
                A Chrome Extension that helps with scanning profiles and
                directly exporting all the gathered data.
              </p>
            </li>
            <li>Linkedin Email Extractor</li>
            <p>
              Helps finding emails for any leads found on Linkedin, single or in
              bulk.
            </p>
            Try out all the features along with the Closely extension as well 
            <a href="https://chromewebstore.google.com/detail/closely-email-finder-li-d/gdhhcapaofinjmlambmbfhkicbpmidbn">
              here
            </a>
            .
          </ul>
        </p>
      </section>
      <br/>
      <br/>
      <section id="salesql">
        <h2>
          <a href="https://salesql.com">SalesQL</a> (Free plan available)
        </h2>
        <p>
          SalesQL is another platform that provides tools and extension that are
          focused on Linkedin prospecting. SalesQL lets you establish a fast and
          direct connection with your leads, contacts, and candidates, by
          finding their key contact details with one click. You can use SalesQL
          to see source email address of your Linkedin targets even if you
          haven't connected with them yet. SalesQL provides extensions for both
          Chrome and Microsoft Edge.
        </p>
      </section>
      <br/>
      <br/>
      <section id="crystal">
        <h2>
          <a href="https://www.crystalknows.com/">Crystal</a> (Free plan
          available)
        </h2>
        <p>
          Crystal (also known as Crystal Knows) helps sales reps communicate
          effectively with any buyer, based on their unique personality,
          motivations, and communication style. Crystal gives rich personality
          data and tools to deeply understand themselves, their colleagues, and
          their customers. Crystal provides Accurate personality data for every
          business professional via AI Analysis (Predictive analysis of publicly
          available data points that correlate with personality) and DISC
          Assessment (Proprietary, anonymized personality assessment results).
          <h5>In Linkedin and CRM</h5>
          <ul>
            <li>Predict anyone's personality of anyone with one click.</li>
            <li>Get personalized insights for calls, meetings, and demos.</li>
            <li>Build playbooks for every stage of the sales process.</li>
          </ul>
          <h5>In Gmail and Outlook</h5>
          <ul>
            <li>
              Automatically check the words, phrases, style, and tone of emails
              in real time.
            </li>
            <li>
              Optimize your greetings, calls-to-action, descriptions, value
              propositions, questions, sign-offs, and other sentences for each
              buyer personality type.
            </li>
          </ul>
          Check out the extension 
          <a href="https://chromewebstore.google.com/detail/crystal/nmaonghoefpmlfgaknnboiekjhfpmajh?hl=en">
            here
          </a>
          .
        </p>
      </section>
      <br/>
      <br/>
      <section id="linkout">
        <h2>
          <a
            href="https://chromewebstore.google.com
          /detail/linkout/ecdkbgmolfbemfanejfloiihpppchlep"
          >
            LinkOut
          </a>
          (Free plan available)
        </h2>

        <p>
          LinkOut helps you create Personalized LinkedIn Cold Messages in a
          Click. You can just visit a Linked-In profile and click the LinkOut
          extension in your browser to receive a personalized cold message that
          significantly increases the likelihood of getting a connect. You can
          checkout the extension 
          <a
            href="https://chromewebstore.google.com
          /detail/linkout/ecdkbgmolfbemfanejfloiihpppchlep"
          >
            here
          </a>
          .
        </p>
      </section>
      <br/>
      <br/>
      <h4>
        To conclude, any individual, group, team or firm can take benefit of
        these tools to increase their ROR as well as find prospect leads faster,
        and are genuine. From lead generation to email campaigns, they offer
        comprehensive solutions to streamline processes and boost productivity.
        With options for every budget, integrating these tools is essential for
        staying competitive in today's digital sales environment.
      </h4>
      <br/>
      <br/>
        <h2 style="font-size: 1.2em; margin-bottom: 15px;">
        For professional assistance on how to increase your sales and ROI do consider connecting with <a href="https://www.einfonets.com">einfonets</a>. <a href="https://www.einfonets.com">einfonets</a> specializes in helping customers increase their sales and revenue with modern methodologies and techniques.
        </h2>
      <br/>
      <br/>
    <footer style="text-align: center; background-color: #f4f4f4; padding: 20px;">
        <p>For more information about einfonets and our modern ways to increase sales and revenue, visit <a href="https://www.einfonets.com">www.einfonets.com</a></p>
        <p>Contact us: <a href="mailto:info@einfonets.com">info@einfonets.com</a> | +91 7016547685</p>
    </footer>
    `,
    },
  },
];
export const sortedBlogs = [...blogs].sort((a, b) => {
  const dateA = new Date(a.written_on);
  const dateB = new Date(b.written_on);
  return dateB - dateA;
});

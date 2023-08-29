export const blogs = [
  {
    id: "d6c2df98-5670-4146-86b6-f6674fdeaf80",
    title: "How to Show Image Loaders for native img tag and multiple images.",
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
                </div> `,
    },
  },
];

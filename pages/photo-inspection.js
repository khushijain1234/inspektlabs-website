import React, { useRef, useState } from 'react'
import styles from '../styles/PhotoInspection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { questions } from '../const/faq';



const PhotoInspection = ({ locale }) => {

  const scrollRef = useRef();
  const featuresScrollRef = useRef();

  const useCases = [
    {
      title: 'Angle Detection',
      text: 'Determines which part of the vehicle is captured(e.g. Front Right Door & Rear Left Bumper)'
    },
    {
      title: 'Part Detection',
      text: 'Recognizes specific car parts (e.g. Bumper, Fender, Hood) for targeted damage analysis'
    },
    {
      title: 'Model Identification',
      text: 'Automatically detects the vehicle make and model based on the image',
    },
    {
      title: 'Blur Score',
      text: 'Quantifies blurriness on a 0-5 scale to detect unclear image.'
    },
    {
      title: 'Brightness Score',
      text: 'Assess lighting conditions to prevent underexposed or overexposed image.'
    },
  ]

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = container.querySelector(`.${styles.useCaseItem}`).offsetWidth + 20; // Include margin/padding

    if (direction === 'left') {
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const scrollFeatures = (direction) => {
    const container = featuresScrollRef.current;
    const cardWidth = container.querySelector(`.${styles.blogItem}`).offsetWidth + 20; // Include margin/padding

    if (direction === 'left') {
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const photoAPIFeatures = [
    {
      img: '/img/damage-detection-feature.svg',
      title: 'Damage Detection',
      text: 'Detect 21 types of damages across metal, plastic, fiber, glass and rubber parts'
    },
    {
      img: '/img/fraud-detection-feature.svg',
      title: 'Fraud Detection',
      text: 'Specialised fraud detection using photos/videos e.g. old/prior damages, metadata analysis',
    },
    {
      img: '/img/damage-detection-feature.svg',
      title: 'Claim Assessment',
      text: "Claim estimation & review products customized for each market's repair practices"
    },
    {
      img: '/img/damage-detection-feature.svg',
      title: 'Text Scanning',
      text: 'Auto-read Odometer, VIN, License plate or any other text on the vehicle'
    },
    {
      img: '/img/damage-detection-feature.svg',
      title: 'Photo & Video Capture App for Vehicle Inspection',
      text: 'Web apps for high quality photo and video capture by the end customer'
    },
    {
      img: '/img/damage-detection-feature.svg',
      title: 'Real Time Guidance with Vehicle Inspection App',
      text: 'Real time feedback to customers on quality of captured photos/videos'
    }
  ]

  const QuestionSection = ({keyIndex, que, ans}) => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className={`${styles.questionModal} ${isOpen ? styles.openModal : ""}`} onClick={()=>setIsOpen(!isOpen)}>
          <p className={styles.questionIndex}>{String(keyIndex+1).padStart(2, '0')}</p>
          <div className={styles.question}>
              <p>{que}</p>
              <Image src={isOpen? '/img/shrink-icon.svg': '/img/expand-icon.svg'} alt="FAQ" width={36} height={36} objectFit='contain'/>
          </div>
          <div className={`${styles.answer} ${isOpen ? styles.open : ""}`}>
              {ans.map((item, index)=><p key={index}>{item}</p>)}
          </div>
        </div>
    )
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>

        {/* Featured Section */}
        <section className={styles.featured}>
          {/* <div className={styles.featuredVideo}>
          <video
            autoPlay
            muted
            loop
            preload='auto'
            playsInline
            className={styles.myVideo}
          >
            <source src='/img/home.webm' type='video/webm' />
            <source src='/img/home.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          </div> */}
          <div className={styles.grid}>
            <div className={styles.gridItem}>
              <h1 className={styles.featuredTitle}>
                  Photo Quality-<span className={styles.titleHighlights}>API</span>
              </h1>
              <p className={styles.featuredText}>
                Get real-time feedback on vehicle image to improve damage documentation accuracy and reduce assessment errors
              </p>
              {/* <div className={styles.btnContainer}>
                <div
                  className={styles.mainBtn}
                  onClick={() => (window.location.href = '/contact-us')}
                >
                  Accurate Inspection
                </div>
                <div
                  className={styles.mainBtn}
                  onClick={() => (window.location.href = '/contact-us')}
                >
                 Claims Settlement
                </div>
                <div
                  className={styles.mainBtn}
                  onClick={() => (window.location.href = '/contact-us')}
                >
                 Automated Feedback
                </div>
              </div> */}
            </div>
            <Image className={styles.photoQualityBg} src='/img/Photo-quality-api-background.svg' alt='Outlined car' width={400} height={300} />
            <div className={styles.uploadSection}>
              <h3>Upload the image & get real time feedback on car inspection</h3>
              <div className={styles.uploadButton}>Upload Image/Drag & Drop</div>
              <p>OR</p>
              <Link href={'/'}><a className={styles.pasteImage}>Paste Image/URL</a></Link>
              <p style={{fontSize:'14px'}}>Can't find image? Upload one of these</p>
              <div className={styles.inspectionImgExamples}>
                <Image src={'/img/inspection-img-example.svg'} width={50} height={50} alt='inspection img example' />
                <Image src={'/img/inspection-img-example.svg'} width={50} height={50} alt='inspection img example' />
                <Image src={'/img/inspection-img-example.svg'} width={50} height={50} alt='inspection img example' />
                <Image src={'/img/inspection-img-example.svg'} width={50} height={50} alt='inspection img example' />
              </div>
            </div>
          </div>
        </section>

        {/* Photo API Section */}
        <section className={styles.photoAPISection}>
          <div className={styles.photoAPIContainer}>
            <div className={styles.photoAPITitleContainer}>
              <h3>Photo API</h3>
              <p>By integrating seamlessly into your existing workflow, the API ensures that all necessary details are captured-eliminating incomplete, unclear, or low-quality images that can impact decision-making.</p>
            </div>
              <div className={styles.photoAPIFeatures}>
                <Image src={'/img/faster-claim-settlements.svg'} width={377} height={488} />
                <Image src={'/img/automated-feedbacks.svg'} width={377} height={488} />
                <Image src={'/img/accurate-inspection.svg'} width={377} height={488} />
              </div>
              <div className={styles.documentationButton}>API Documentation</div>
          </div>
        </section>

        {/* Capabilities & Use Case Section */}
        <section className={styles.useCaseSection}>
          <div className={styles.useCaseContainer}>
            <h3>Capabilities & Use Case</h3>
            <div className={styles.backgroundCarImg}>
              <Image src={'/img/mobile.svg'} width={1000} height={473} alt='mobile' />
            </div>
            <div className={styles.useCasesCarouselContainer}>
                <div className={`${styles.nav} ${styles.navLeft}`}>
                  <Image src={'/img/nav-left.svg'} width={50} height={50} alt="nav-left" onClick={() => scroll("left")}/>
                </div>
                <div className={styles.useCasesCaraouselContent} ref={scrollRef}>
                  {useCases.map((useCase) => (
                  <div className={styles.useCaseItem} key={useCase.id}>
                    <div className={styles.useCaseImg}>
                      <Image
                        src={'/img/angle-detection.svg'}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='center'
                        width={200}
                        height={150}
                        alt={useCase.title}
                      />
                    </div>
                    <div className={styles.useCaseContent}>
                      <p className={styles.useCaseTitle}>{useCase.title}</p>
                      <p className={styles.useCaseText}>{useCase.text}</p>
                    </div>
                    </div>
                  ))}
                </div>
                <div className={`${styles.nav} ${styles.navRight}`}>
                  <Image src={'/img/nav-right.svg'} width={50} height={50} alt="nav-right" onClick={() => scroll("right")}/>
                </div>
            </div>
            <p className={styles.useCaseSubHeading}>By integrating seamlessly into your existing workflow, the API ensures that all necessary details are captured-eliminating incomplete, unclear, or low-quality images that can impact decision-making.</p>
            <div className={styles.documentationButton}>Try the product</div>
          </div>
        </section>
        <section className={styles.vehiclesSupportedSection}>
          <div className={styles.vehiclesSupportedSubSection}>
            <h3 className={styles.vehicleSupportedHeading}>Works Best on</h3>
              <div className={styles.vehiclesSupportedContainer}>
                <div className={styles.carSection}>
                    <h3 className={styles.vehicleName}>Car</h3>
                    <Image className={styles.carImg} src={'/img/car-img.svg'} width={400} height={250} />
                </div>
                <div className={styles.otherSupportedVehicles}>
                  <div className={styles.vehicle}>
                    <h3 className={styles.vehicleName}>Heavy - Vehicle</h3>
                    <Image className={styles.whiteTruck} src={'/img/white-truck.svg'} width={350} height={230} />
                  </div>
                  <div className={styles.vehicle}>
                    <h3 className={styles.vehicleName}>Motor Bike</h3>
                    <Image className={styles.whiteTruck} src={'/img/bike.svg'} width={350} height={200} />
                  </div>
                </div>
              </div>
              <p className={styles.vehicleSupportedText}>By integrating seamlessly into your existing workflow, the API ensures that all necessary details are captured-eliminating incomplete, unclear, or low-quality images that can impact decision-making.</p>
              <div className={styles.documentationButton}>Try the product</div>
          </div>
        </section>

        <section className={styles.photoAPIFeatureSection}>
          <div className={styles.photoAPIFeatureContainer}>
            <h3 className={styles.vehicleSupportedHeading}>Also Check Out</h3>
            <div className={styles.blogCaraouselContainer}>
                <div className={`${styles.nav} ${styles.navLeft}`}>
                  <Image src={'/img/nav-left.svg'} width={50} height={50} alt="nav-left" onClick={() => scrollFeatures("left")}/>
                </div>
                <div className={styles.blogCaraouselContent} ref={featuresScrollRef}>
                  {photoAPIFeatures.map((post) => (
                  <div className={styles.blogItem} key={post.id}>
                    <div className={styles.blogImg}>
                      <Image
                        src={post.img}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt={post.title}
                      />
                    </div>
                    <div className={styles.blogContent}>
                      <p className={styles.blogTitle}>{post.title}</p>
                      <p className={styles.blogText}>{post.text}</p>
                    </div>
                    </div>
                  ))}
                </div>
                <div className={`${styles.nav} ${styles.navRight}`}>
                  <Image src={'/img/nav-right.svg'} width={50} height={50} alt="nav-right" onClick={() => scrollFeatures("right")}/>
                </div>
            </div>
          </div>
        </section>
        <section className={styles.faqSectionContainer}>
          <div className={styles.faqSection}>
            <div className={styles.faqTitleContainer}>
              <h1 className={styles.faqHeading}>Commonly asked questions</h1>
              <p className={styles.faqSubtitle}>The purpose of a FAQ is generally to provide information on frequent questions or concerns. However, the format is a useful means of organizing information, and text</p>
            </div>
            <div className={styles.questionContainer}>
                {questions["General"][locale].length > 4 ? (
                  <div className={styles.faqGridTwoCol}>
                    {(()=>{
                       const faqs = questions["General"][locale];
                       const half = Math.ceil(faqs.length / 2);
                       const left = faqs.slice(0, half);
                       const right = faqs.slice(half);

                       return(
                        <>
                        <div className={styles.faqColumn}>
                          {left.map((item,index)=>(
                            <QuestionSection keyIndex={index} que={item.Q} ans={item.A} />
                          ))}
                        </div>
                        <div className={styles.faqColumn}>
                          {right.map((item, index) => (
                            <QuestionSection keyIndex={index + half} que={item.Q} ans={item.A} />
                          ))}
                        </div>
                        </>
                       );
                    })()}
                  </div>
                ): (
                  <div className={styles.faqGridOneCol}>
                    {questions["General"][locale].map((item, index)=><QuestionSection keyIndex={index} que={item.Q} ans={item.A}/>)}
                  </div>
                )}
            </div>
            <div
              className={styles.viewMoreBtn}
              style={{width: "200px"}}
              onClick={() => (window.location.href = '/faq')}
            >
              View More
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PhotoInspection
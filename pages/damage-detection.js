import Image from 'next/image';
import SEO from '../components/SEO';
import styles from '../styles/DamageDetection.module.css';
import language from '../languages/damage-detection.json';

import { features } from '../const/damage-detection';
import { questions } from '../const/faq';
import { useRef, useState } from 'react';

export default function FraudDetection({ locale }) {

  const featuresScrollRef = useRef();

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

  const scrollFeatures = (direction) => {
    const container = featuresScrollRef.current;
    const cardWidth = container.querySelector(`.${styles.blogItem}`).offsetWidth + 20; // Include margin/padding

    if (direction === 'left') {
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };


  const coveredDamages = [
    {
      type: 'Car',
      img: '/img/damages-in-car.svg',
      damages: ['Metal/Plastic/Fibre Parts','Metal/Plastic/Fibre Parts','Metal/Plastic/Fibre Parts','Metal/Plastic/Fibre Parts'],
      imgWidth: '180',
      imgHeight: '88'
    },
    {
      type: 'Motor Bike',
      img: '/img/damages_in_bike.svg',
      damages: ['Glass Parts','Glass Parts','Glass Parts','Glass Parts'],
      imgWidth: '150',
      imgHeight: '90'
    },
    {
      type: 'Heavy Vehicle',
      img: '/img/damages_in_heavy_vehicles.svg',
      damages: ['Rubber Parts','Rubber Parts','Rubber Parts','Rubber Parts'],
      imgWidth: '135',
      imgHeight: '90'
    }
  ]
  return (
    <div className={styles.container}>
      <SEO
        title={language['seo title'][locale]}
        description={language['seo desc'][locale]}
        image='https://inspektlabs.com/img/car.png'
        url='https://inspektlabs.com/damage-detection/'
        keywords={language['seo keywords'][locale]}
        page='damage-detection'
      />

      {/* Main Body */}
      <main className={styles.main}>
        {/* Featured Section */}
        <section className={styles.featured}>
          <div className={styles.featuredContent}>
            {/* <Image
              src='/img/damage-detection.svg'
              alt='Damage Detection'
              width={100}
              height={100}
            /> */}
            <h1 className={styles.featuredTitle}>
              Damage Detection API
            </h1>
            <p className={styles.featuredText}>Automate vehicle inspection with A.I. Upload image of your vehicle and get a detailed report within seconds</p>
            <div className={styles.btnContainer}>
                <div
                  className={styles.mainBtn}
                  onClick={() => (window.location.href = '/contact-us')}
                >
                  Try Our Product
                </div>
                <div
                  className={styles.mainBtn}
                  onClick={() => (window.location.href = '/contact-us')}
                >
                  Request for a Demo
                </div>
              </div>
          </div>

          <div className={styles.featuredVideo}>
            <video
              autoPlay
              muted
              loop
              preload='auto'
              playsInline
              className={styles.myVideo}
            >
              <source src='/img/damage.webm' type='video/webm' />
              <source src='/img/damage.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Damage data Interpretation section */}
        <section className={styles.damageData}>
          <div className={styles.damageDataImg}>
            <Image src={'/img/damage-data-interpretation.svg'} layout='fill' objectFit='cover' objectPosition='center' alt='damage-data-interpretation' />
          </div>
        </section>

        {/* Damages Covered Section */}
        <section className={styles.coveredDamagesSection}>
          <div className={styles.coveredDamagesContainer}>
            <h2 className={styles.coveredDamagesHeading}>Types of Damages Covered</h2>
            <div className={styles.damagesSection}>
              {
                coveredDamages.map((damage)=>{
                  return(
                    <div className={styles.damage}>
                      <div className={styles.damageTypeHeading}>
                        {damage.type}
                        <div className={styles.damageTypeImg}>
                        <Image src={damage.img} width={damage.imgWidth} height={damage.imgHeight} alt={damage.type} />
                        </div>
                      </div>
                      <div className={styles.damageContent}>
                        {damage.damages.map(d=>{
                           return <p>{d} <Image src="/img/downArrow.png" alt="FAQ" width={20} height={10} className={styles.moreContentImg} objectFit='contain'/></p>
                        })}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>


        <section className={styles.photoAPIFeatureSection}>
          <div className={styles.photoAPIFeatureContainer}>
            <h3 className={styles.coveredDamagesHeading}>Also explore other features</h3>
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
              <h1 className={styles.coveredDamagesHeading}>Commonly asked questions</h1>
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

        {/* Features Section */}
        {/* <section className={styles.features}>


          <div className={styles.subFeature}>
            <h2 className={styles.subFeatureTitle}>
              {language['damage inspection'][locale]}
            </h2>
            <p className={styles.subFeatureText}>
              {language['undercarriage'][locale]}
            </p>
          </div>

          <div className={styles.featuresContainer}>
            {features.map((feature) => (
              <div className={styles.feature} key={feature.name[locale]}>
                <div className={styles.featureImg}>
                  <Image
                    src={`/img/${feature.img}`}
                    alt={feature.name[locale]}
                    width={60}
                    height={60}
                  />
                </div>
                <h3>{feature.name[locale]}</h3>
                {feature.items[locale].map((item) => (
                  <p key={item}>
                    <i className='fas fa-check'></i>&nbsp;&nbsp; {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </section> */}

        {/* Secondary Features */}
        {/* <section className={styles.secondaryFeatures}>
          <div>
            <div>
              <Image
                src={'/img/severity-score.svg'}
                alt='Severity Score'
                width={100}
                height={100}
              />
            </div>
            <p>{language['Severity score'][locale]}</p>
          </div>
          <div>
            <div>
              <Image
                src={'/img/predict-damage.svg'}
                alt='Predict Damage'
                width={100}
                height={100}
              />
            </div>
            <p>{language['probability'][locale]}</p>
          </div>
          <div>
            <div>
              <Image
                src={'/img/photo-video-capture.svg'}
                alt=''
                width={100}
                height={100}
              />
            </div>
            <p>{language['smartphone text'][locale]}</p>
          </div>
        </section> */}

        {/* FAQ Section */}
        {/* <section className={styles.faqSection}>
          <Image src="/img/faq-icon.svg" alt="FAQ" width={100} height={100} objectFit='contain'/>
          <h1 className={styles.mainHeading}>{language["Frequently Asked Questions"][locale]}</h1>
          <div className={styles.questionContainer}>
            <div className={styles.allQuestionContainer}>
                {questions["Damage Detection"][locale].map((item, index)=><QuestionSection key={index} que={item.Q} ans={item.A}/>)}
            </div>
          </div>
          <div
            className={styles.btnBlue}
            style={{width: "100px"}}
            onClick={() => (window.location.href = '/faq')}
          >
            {language['Read More'][locale]}
          </div>
        </section> */}
        {/* Misc Section */}
        {/* <section className={styles.miscSection}>
                    <h4>Flipkart Plus</h4>
                    <p>A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!</p>
                    <br/>
                    <p>What&apos;s more, you can even use the Flipkart supercoins for a number of exciting services, like:</p>
                    <p>An annual Zomato Gold membership</p>
                    <p>An annual Hotstar Premium membership</p>
                    <p>6 months Gaana plus subscription</p>
                    <p>Rupees 550 instant discount on flights on ixigo</p>
                    <p>Check out https://www.flipkart.com/plus/all-offers for the entire list. Terms and conditions apply.</p>
                    <br/>
                    <h4>No Cost EMI</h4>
                    <p>In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</p>
                    <br/>
                    <h4>EMI on Debit Cards</h4>
                    <p>Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.</p>
                    <br/>
                    <h4>Mobile Exchange Offers</h4>
                    <p>Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply.</p>
                    <br/>
                    <h4>No Cost EMI</h4>
                    <p>In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</p>
                    <br/>
                    <h4>EMI on Debit Cards</h4>
                    <p>Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.</p>
                    <br/>
                    <h4>Mobile Exchange Offers</h4>
                    <p>Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply.</p>
                </section> */}
      </main>
    </div>
  );
}

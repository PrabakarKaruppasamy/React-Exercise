import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  --Logo
 *  --Nav Items
 *
 * Body
 *   --Search
 *   --RestaurantContainer
 *       --RestaurantCard
 *           --Img
 *           --Name of Res, Star Rating, Cusines
 *
 * Footer
 *    --Copyright
 *    --Links
 *    --Address
 *    --Contact
 *
 *
 * ****** */

//React Element => Object => HTMLElement (render)

/**JSX - is not HTML in JS. JSX is HTML like syntax or xml like syntax
 *
 * JSX (transpiled before it reaches the JS Engine) - PARCEL - BABEL
 *
 * JSX ==> React.createElement ==> ReactElement-JS Object ==> HtmlElement (render)
 *
 **/

/**
 * React Component
 * Class based Component - OLD
 * Functional Component  - NEW
 *
 * ** */

/***
 * Header Component
 *
 */
const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s"
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  console.log("Probs......", props);
  const { resData } = props;
  console.log("Res Data......", props);

  const {cloudinaryImageId, name, cuisines, costForTwo, sla} = resData?.info

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        // src="https://cdn.pixabay.com/photo/2023/07/12/20/39/ai-generated-8123326_1280.png"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime}</h4>
    </div>
  );
};

const resList = [
  {
    "info": {
      "id": "587672",
      "name": "Chaayos Chai+Snacks=Relax",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_587672.JPG",
      "locality": "VILLAGE HIGH ROAD",
      "areaName": "Sholinganallur",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets"
      ],
      "avgRating": 4.4,
      "parentId": "281782",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-village-high-road-sholinganallur-chennai-587672",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "748065",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_748065.JPG",
      "locality": "OMR Semmanchey",
      "areaName": "Kancheepuram",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-king-omr-semmanchey-kancheepuram-chennai-748065",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "25881",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/250d7054-1254-4158-b1a5-67141ea2d51f_25881.JPG",
      "locality": "Shollinganalur",
      "areaName": "Sholinganallur",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "2",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 08:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-shollinganalur-sholinganallur-chennai-25881",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "18696",
      "name": "Namma Veedu Vasanta Bhavan",
      "cloudinaryImageId": "5b60157b13bd8ad6bca40482f3216c0a",
      "locality": "Velachery Main Road",
      "areaName": "Medavakkam",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "1263",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 5.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-19 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/namma-veedu-vasanta-bhavan-velachery-main-road-medavakkam-chennai-18696",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "31709",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "ev5guv3zjjdecvvmwgvi",
      "locality": "200 ft Road",
      "areaName": "Pallikaranai",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "22",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 47,
        "lastMileTravel": 10.4,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "10.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-200-ft-road-pallikaranai-chennai-31709",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "67801",
      "name": "Chai Kings",
      "cloudinaryImageId": "hea70vpxjbymdzaauyfd",
      "locality": "Thuraipakkam",
      "areaName": "Sri Sowdeswari Nagar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Beverages",
        "Snacks",
        "Bakery"
      ],
      "avgRating": 4.5,
      "parentId": "2627",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chai-kings-thuraipakkam-sri-sowdeswari-nagar-chennai-67801",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "393848",
      "name": "Sandy's Chocolate Laboratory",
      "cloudinaryImageId": "t1ppouixerdffb7ktiiu",
      "locality": "Injambakkam",
      "areaName": "Injambakkam",
      "costForTwo": "₹1200 for two",
      "cuisines": [
        "Desserts",
        "American",
        "European"
      ],
      "avgRating": 4.4,
      "parentId": "451439",
      "avgRatingString": "4.4",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 51,
        "lastMileTravel": 6.5,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "6.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-06-18 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      }
    },
    "analytics": {

    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sandys-chocolate-laboratory-injambakkam-chennai-393848",
      "type": "WEBLINK"
    }
  }
]
// {
//   name:"KFC",
//   cuisine:"Burger, Fast Food, Chicken 65",
//   rating:'4.4',
//   dtime:'30 Minutes'
// }
// ]

/**
 * Body Component
 *
 * * */
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resName="krithvik Foods"  cuisine="Briyani, South Indian, Asian" /> */}
        {/* <RestaurantCard resData = {resObj[0]} />
        <RestaurantCard resData = {resObj[1]} />
        <RestaurantCard resData = {resObj[2]} />
        <RestaurantCard resData = {resObj[3]} />
        <RestaurantCard resData = {resObj[4]} />
        <RestaurantCard resData = {resObj[5]} /> */}
        {/* <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard /> */}
        {resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}></RestaurantCard>)}
      </div>
    </div>
  );
};

/**
 * App component
 *
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<AppLayout />);

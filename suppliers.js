const suppliers = [
  {
    name: "Acentus",
    info_center_url: "/acentus",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1637088983263-QNSYHKN5FHTKN09IM5FF/acentus-logo.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "AdaptHealth",
    info_center_url: "/adapthealth",
    logo: "https://images.squarespace-cdn.com/content/5df13db27cfbe70b38ae20dd/1581106397243-1D3EHWO30YARCS5LY3FI/AdaptHealth-Logo-Retina%402x.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Advanced Cardio Services",
    info_center_url: "/advancedcardioservices",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/6000d57ec0a34e0e7f505ce4/1610667402692",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Advanced Diabetes Supply",
    info_center_url: "/ads",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1619652600904-0X6Q6ZK5CDPQFVV03QCL/ke17ZwdGBToddI8pDm48kEMsvuPhoiE6u8IrdWi0Rb1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIBqVSUppYsHZ7udTLAkSet-F3a_ZvcQjfK7vfmqAvRSU/Print-Logo-CMYK-02+%281%29.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "AeroCare",
    info_center_url: "/aerocare",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5e3dc4dcbba2f7558f9c8ad2/1581106397761/logo%402x.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Better Living Now",
    info_center_url: "/betterlivingnow",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1660061201448-KYWHFL5EARPNLRICNVU0/Better+Living+Now+-+color.png?format=2500w",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "BetterNight",
    info_center_url: "/betternight",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5fcfe9698157c143f19b277f/1607461227842/BetterNight+Logo.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Blackstone Medical Services",
    info_center_url: "/blackstonemedicalservices",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1626715084465-WCOE0XS2JVCV8QJBRYGL/blackstone_logo_5in_transparent+%281%29.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Byram Healthcare",
    info_center_url: "/byram",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1584371307847-FU00DLSLH7XC42SI8NU1/image-asset.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "CHC Solutions",
    info_center_url: "/chcsolutions",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1645743180890-3WIK1TSVDP2FAQ53EBUD/CHC_Logo.png?format=2500w",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "CCS Medical",
    info_center_url: "/ccsmedical",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1635970550214-7GVMXGBGOSPSMOK9NT5L/CCSMedBlueLogo-01+%281%29.png?format=2500w",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "CVS Pharmacy",
    info_center_url: "/cvs",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1652825667518-9IK0V6T8FBP3S6FU2ENB/CVS_Pharmacy_logo.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Deliver My Meds",
    info_center_url: "/delivermymeds",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1659367081542-YD4I7PO07FU9K9657UXR/Delivermymeds+logo.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Donaco Medical Supply",
    info_center_url: "/donaco",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1656517817492-2L32MRJ4VSQHNSG17AGQ/Donaco.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Edgepark",
    info_center_url: "/edgepark",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1635970948929-DGYJ6A362EZK3SLQA9UH/Edgepark-Logo-FullColor-200x66-002-.png?format=2500w",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Edwards Health Care Services",
    info_center_url: "/edwards",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1645726657180-QAMD29NUHDARAZREVMY9/5f94b015045c-ehcs.png?format=2500w",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Elite Medical Supply",
    info_center_url: "/elitemedicalsupply",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1656518983414-0HW3KGPYZEIW6CID2K7G/Elite+Medical+Supply.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Hillrom - Respiratory Health",
    info_center_url: "/hillrom",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1617302907786-1TB9W2YSUX1ASHKVRVDK/ke17ZwdGBToddI8pDm48kHwA_8TbtFOtDflQfOFA90IUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcT9d2YSbkvofiyQHn6rwFTJSqmAZ2qRa_mA90LY72gofOF8aXoFjWjjw97vtre2sU/Hillrom_Logo_2.jpg",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Home Care Delivered",
    info_center_url: "/homecaredelivered",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1642543194438-7ZHB2PQK26HAEV8O7CKS/home+care+delivered+logo.png?format=2500w",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Lincare",
    info_center_url: "/lincare",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5e3dc4dcd9c0b23f36ad50a0/1581106398040/lincare-logo%402x.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "NextGen Medical Supplies",
    info_center_url: "/nextgen",
    logo: "./assets/images/Supplier%20Logos/NextGen_logo.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "One Source Medical Group",
    info_center_url: "/onesourcemg",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1648436094450-3QCXZGT7NRE5QSTI2VQN/OneSourceLogoTransparent_3x_7433f6c2-61be-4adc-8a92-2e342e79d0be.png?format=2500w",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Optigen",
    info_center_url: "/optigen",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1611593163907-J4ZRXO2Q2E3K50MXH64W/ke17ZwdGBToddI8pDm48kJ-78OJc6H7u5CO8xQKN4ztZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwKXgxBN9ZzM1MmEgmD3okUEv6GuaJR6PB5VfVHhBmo1YOi6RwS_Ie-DmBvEyejWPc/Optigen-Logo_primary_RGB_150.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Premier Kids Care",
    info_center_url: "/premierkidscare",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629828571499-WXA50D2841E8MXUSD7KF/Premier+Kids+Care.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Pumps It",
    info_center_url: "/pumpsit",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1622824843584-DZI85P8ZA1KFJ9FAQY3L/ke17ZwdGBToddI8pDm48kH8rkxRt8Uk0AhTElAFV87wUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnEfHTgXc6EGrFhSe4J7gkl6RSnOoVdEvy7BWbVgdXZcFM_qgl4SjWGfOn1HFPVtrHQ/pumps_it_full_color.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Quest Health Solutions",
    info_center_url: "/questhealthsolutions",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1639074516032-Y753FA3R2X13C8UOAK4V/Quest+Health+Solutions+color+logo.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Quipt",
    info_center_url: "/quipt",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1643948326422-2LT1NGC4PE2Q1UKOPM4R/quiptlogo2.png?format=2500w",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Remote Cardiac Services",
    info_center_url: "/remotecardiacservices",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/6000b002a06cf2530325aca6/1610657893757",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "RespirTech",
    info_center_url: "/respirtech",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1617296936613-8U3APYPB4TS5X2NZ0863/ke17ZwdGBToddI8pDm48kLGRRbE8m0ibVJeuWTbj605Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIJmdvdaIohbpFIHAijmASgE8y_fracxAWUPHGfSfWJyY/respirtech-logo-vector.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Rotech Healthcare",
    info_center_url: "/rotech",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5faed6949d560157708063fa/1605293831254",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Smartvest",
    info_center_url: "/smartvest",
    logo: "https://images.squarespace-cdn.com/content/5df13db27cfbe70b38ae20dd/1641419931522-B1J9ETVYJZYDXL2DSEHE/smartvest.png?content-type=image%2Fpng",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "SNAP Diagnostics",
    info_center_url: "/snapdiagnostics",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1625090221333-MH22PC4JI5GEPYMIEKDK/snap+logo_color_2.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Total Medical Supply",
    info_center_url: "/tmscares",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1624371587683-RH8Y9NU7IQRUUPESAPT5/ke17ZwdGBToddI8pDm48kMVyVX8XUxayNJbVOdJaZIlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIgbki6MNGRgzx0xW1hTt9XWDMgAMUpLCmfgDLkBWejgk/TotalMedicalSupply_Logo_2016-Transparent-2.1+%282%29+%281%29.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "US MED",
    info_center_url: "/usmed",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1617222471082-OL767T00NAYXNKOT48N9/ke17ZwdGBToddI8pDm48kFk5EXQ5uRndA1WGE55u6MwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2drBgw1SBTOEwRtAfgiWpGebE3OM18_Zs35lRnXAqOtz4CjLISwBs8eEdxAxTptZAUg/image-asset.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "VirtuOx",
    info_center_url: "/virtuox",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1617295043666-GL5MJXMJWNL0INGZR0NZ/ke17ZwdGBToddI8pDm48kEK5QP-3egi0P6aYkA1m-aZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIHPRhHSnyE1Q0cel96dY_WjF0xvNgdP13utS2_pyieFk/VirtuOx-Logo.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Wellstart",
    info_center_url: "/wellstart",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1633443791235-ICPH6BEZ3RJKLXUZ1N2B/Wellstart.png",
    service_area: [ "AL", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "WA", "WV", "WI", "WY", ],
  },
  {
    name: "Advanced Home Medical",
    info_center_url: "/advancedhomemedical",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1628628509347-TJWAH6713918EPFAVSX7/download.png?format=2500w",
    service_area: ["OH"],
  },
  {
    name: "Advanced Medical Solutions",
    info_center_url: "/advancedmedicalsolutions",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5fcfdfdce21d50615a5825af/1607458843644",
    service_area: ["CO", "MI"],
  },
  {
    name: "Advanced Medical Supply",
    info_center_url: "/advancedmedicalsupply",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1613762816452-CE8FWHPD0ODY747CPXMR/ke17ZwdGBToddI8pDm48kBI9U6JRFVt353Ov_56lmRlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIQPIZhP9WB5dyam31QAcW3NiSP4U3uuzAJloai-xI_Po/Advanced+Medical+Supply.png",
    service_area: ["IL"],
  },
  {
    name: "Advanced Oxy Med",
    info_center_url: "/advancedoxymed",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1613756744991-FWSGVGN53C300UDGP3QL/ke17ZwdGBToddI8pDm48kL8OzN53rmjyjHh_r3I6IRNZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEDmLUMNQAOEbedkbbHe1Z6yYeR4I3QNEkzx4eKLkRuOjFvbuqF0GUInBxxtVhBOn4/image-asset.png",
    service_area: ["NY"],
  },
  {
    name: "Aeroflow",
    info_center_url: "/aeroflow",
    logo: "https://images.squarespace-cdn.com/content/5df13db27cfbe70b38ae20dd/1599588138346-TXQHTVPKTC0XYA4X0CJV/image-asset.png?content-type=image%2Fpng",
    service_area: ["NC"],
  },
  {
    name: "Alfa Healthcare Supply",
    info_center_url: "/alfahealthcare",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1662651178409-HYZMPN5WEPRBTWKW3V9E/Alfa+Logo+-+color.png?format=2500w",
    service_area: ["NY"],
  },
  {
    name: "All Med",
    info_center_url: "/allmed",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5f7cdda5dbdd505b43a9aa0f/1602020432214",
    service_area: ["WV"],
  },
  {
    name: "American HomePatient",
    info_center_url: "/americanhomepatient",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1584982539301-AEZORSTDAHT5XPZO15D0/ke17ZwdGBToddI8pDm48kBIJ00zdhxmVnHeG_YdFKxFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxEcopPM6t5jnOfBeDi6mAnUZKDJVDWoOrYOE0O2kqOGTl48n_4YA2fL0Yu78nO2q8/image-asset.jpeg",
    service_area: ["NC", "IA", "TX", "GA", "FL", "SC", "NE", "VA", "CO", "MO"],
  },
  {
    name: "Binson's",
    info_center_url: "/binsons",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1645575824396-RVLFYYKKO1AL93EVHEC8/Binsons_Logo_large.png?format=2500w",
    service_area: ["MI"],
  },
  {
    name: "Broadway Medical",
    info_center_url: "/broadwaymedical",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1639517881330-CZ6TWAZ7S3DC9PZOUMMH/Broadway+Medical.png?format=2500w",
    service_area: ["CA"],
  },
  {
    name: "Brotherston Homecare",
    info_center_url: "/brotherstonhomecare",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1622210982688-O64DU6H0UV4O5NE2O1ZR/ke17ZwdGBToddI8pDm48kM0n8oaOXdR1dfxnnbbpWkDlfiSMXz2YNBs8ylwAJx2qLijIv1YpVq4N1RMuCCrb3iJz4vYg48fcPCuGX417dnZ9O0ffBH_6LiVIUUcEwfj6ZQsTTLKn4k-xQ6Oj3ATqHAoyyEsAbPHhHcQMU6bWQFI/brotherston-logo-larger+%281%29.png",
    service_area: ["PA"],
  },
  {
    name: "Blackburn's",
    info_center_url: "/blackburns",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1613670266187-2W58FV8ZQ4SRW7IDTUTJ/ke17ZwdGBToddI8pDm48kGIkdR3rjYax1q6u51nlp34UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnM7EDaUadZ3ydUhA4C1MDLd_1u2QuN6sRutURNMUl6XFsuhn2Iqe_IZ908XhTMZ5lg/image-asset.jpeg",
    service_area: ["PA"],
  },
  {
    name: "CareLinc",
    info_center_url: "/carelinc",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1656516514808-3NCFD8ZCY9KKW40LSLV9/13383a4470f0-CareLinc.png",
    service_area: ["MI"],
  },
  {
    name: "Care100",
    info_center_url: "/care100",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1656531000123-EXRAZPA04NH7O7MAL0MN/Care100.png",
    service_area: ["NY", "NJ"],
  },
  {
    name: "Century Orthotics & Medical Equipment, LLC",
    info_center_url: "/century",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1642543606239-TDB2HO6JAKNJK56CZ9WN/269a818032f4-centurylogo.png",
    service_area: ["TX"],
  },
  {
    name: "Care Medical",
    info_center_url: "/cmga",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629376624953-TOK0KT8F2X2N6FRWNR7F/care+medical.png",
    service_area: ["GA"],
  },
  {
    name: "Coastal Med Tech",
    info_center_url: "/coastmedtech",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629376942153-EM7KHGT8W5HGHK1F5H8Z/Coastal+Med+Teh+new.png",
    service_area: ["ME"],
  },
  {
    name: "Cooley Medical",
    info_center_url: "/cooley",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629377047812-5EWFY02H5G9MMH9WKOQM/Cooley.png",
    service_area: ["KY"],
  },
  {
    name: "Cornerstone Health Systems",
    info_center_url: "/cornerstonehs",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1652825323007-AP5HYDX7PZ27XADBIZHE/Cornerstone+Health+Systems.png",
    service_area: ["TN"],
  },
  {
    name: "DASCO",
    info_center_url: "/dasco",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1659544175203-T2J1P16HR7C07TUBEY8H/dasco.png?format=2500w",
    service_area: ["IN", "KY", "MI", "OH", "WV"],
  },
  {
    name: "Diabetic Equipment and Supplies",
    info_center_url: "/des",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1627655805362-ZAPLQLX4OI167BRQHMD2/image+%288%29.png?format=2500w",
    service_area: ["IA", "SD"],
  },
  {
    name: "Delcrest Medical Products and Services",
    info_center_url: "/delcrest",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1652825759949-F9GSTMMDP6N1GWVA2SWO/Delcrest+Medical+Supplies.png",
    service_area: ["NJ"],
  },
  {
    name: "DME & Supplies",
    info_center_url: "/dme-and-supplies",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1661369800468-QIK16K6CU8CWV5CNQ164/image-asset.png?format=2500w",
    service_area: ["MD", "DC", "VA", "SC", "PA", "DE", "GA", "FL"],
  },
  {
    name: "Dome Home Care",
    info_center_url: "/domehomecare",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1613674102065-6GPD25I9TBY0HJDZB4AC/ke17ZwdGBToddI8pDm48kB_ehp5327MH0taN_YkBSCwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcpCMs-mb00zE1LrYQir7a12urYcNSPUU9L5ZxWjeNoUVS9Ss2kp5_VuCoONuUKE2b/image-asset.png",
    service_area: ["NY"],
  },
  {
    name: "Dynamic Medical Solutions",
    info_center_url: "/dynamicmedicalsolutions",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1656517444107-JYDEY278M8GRH9U4QSA3/Dynamic+Medical+Solutions.png",
    service_area: ["TX"],
  },
  {
    name: "The Drug Store Pharmacy & Home Medical Supplies",
    info_center_url: "/tdsp",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1652828809942-AU3CL9B394YET2VMED8Y/The+Drug+Store.png",
    service_area: ["OH"],
  },
  {
    name: "Eclipse Medical",
    info_center_url: "/eclipsemedical",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629749072355-T5EAVHCS90ZBJUI9830Z/eclipse.png",
    service_area: ["AR"],
  },
  {
    name: "Fredericksburg Medical Equipment",
    info_center_url: "/fme",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1642551098061-59DLOW0G0IRUBC1B80DX/Fredericksburg+Medical+Equipment+logo.png",
    service_area: ["TX"],
  },
  {
    name: "Frontier Home Medical",
    info_center_url: "/frontierhomemedical",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5f7f8c634be50c6b46b657f5/1602194576236",
    service_area: ["NE"],
  },
  {
    name: "George's Pharmacy and Medical Equipment",
    info_center_url: "/georgespharmacy",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1637532561324-S9AJ2GRNTG9FLXIGQU2J/GeorgesLogoETC_PandM_thinnerLine-website.png",
    service_area: ["KY", "IN", "OH"],
  },
  {
    name: "Greater Comfort DME",
    info_center_url: "/greatercomfortdme",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1652825054200-E0AHPSEAXIEF1SHYA11Q/Greater+Comfort+DME.png",
    service_area: ["MI"],
  },
  {
    name: "Halsom Home Care",
    info_center_url: "/halsom",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629377156139-BKRKDS9XFJWPJF2LLCEN/Halsom.png",
    service_area: ["OH"],
  },
  {
    name: "H&J Medical Supplies",
    info_center_url: "/hjmedicalsupplies",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1628196998261-T1RWR3LUMG6LT0S18XDV/H%26J+LOGO.png?format=2500w",
    service_area: ["NY"],
  },
  {
    name: "Health Care Solutions",
    info_center_url: "/healthcaresolutions",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1585662795238-XRHC2OBURLBE8XXNHHJ8/ke17ZwdGBToddI8pDm48kFM1Xthj-uNWzJzOjRrP2r1Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7bNalm2hBiow6Ud3tcGmvvGrvASIcSX6oe85O6UoO6c1nuVsY4CdKEjVtkSu60572A/image-asset.png",
    service_area: ["PA", "OH", "WV", "MI", "AL"],
  },
  {
    name: "Health Technology Resources",
    info_center_url: "/htr",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1622838854049-9SH2HZICVDMAXMX2LYYS/ke17ZwdGBToddI8pDm48kGtOA3C8zNCvOnts7bpcVvZZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGtbCIudqq4Wqg61zy5UsXOFUKz6jSffPJLxdvGYhz7Xhur-lC0WofN0YB1wFg-ZW0/HTR+logo.png",
    service_area: ["IL"],
  },
  {
    name: "Home Medical Products",
    info_center_url: "/hmp",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1622042411055-Q8XGBRGHG1VNJTB0C074/ke17ZwdGBToddI8pDm48kMfXUjBzARoOu-KX2fwDU48UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc2RYut5bO1iSrGaBNN5k-pVhDqO7VJBbIJq9VaJxNq9lHUOAqUoIuQNsnEw5dwEVv/%21+HMP_Logo_black+font+%28transparent%29+%281%29.png?format=2500w",
    service_area: ["TN"],
  },
  {
    name: "Home Medical Supplies",
    info_center_url: "/homemedicalsuppliesinc",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1643951222439-OB3E2MYI1VO6C3DXHAG0/hms_logo.png?format=2500w",
    service_area: ["CO"],
  },
  {
    name: "Hometown Respiratory",
    info_center_url: "/hometownrespiratory",
    service_area: ["TN"],
  },
  {
    name: "Independence Plus",
    info_center_url: "/independenceplus",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629489890216-KLD0LM2LDQ9M9DKXNST7/Independence-Plus-logo-2020.png",
    service_area: ["IN", "IL", "WI"],
  },
  {
    name: "J&L Medical Services",
    info_center_url: "/jandl",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5e4c149fb6e8306d01357d9f/1582050961257",
    service_area: ["CT"],
  },
  {
    name: "JQ Medical",
    info_center_url: "/jqmedical",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1648433408080-3PZAK413MT6DC9P3UX81/14806c76041f-Interim_Logo_png.png",
    service_area: [ "UT", "FL", "GA", "NC", "SC", "VA", "WV", "CO", "PA", "WA", "TN", "LA", "MS", "OH", "TX", "IL", ],
  },
  {
    name: "Kerrville Medical Equipment",
    info_center_url: "/kme",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1642543738376-J8WWZ7I5R85SK9YJVKQ2/kerrvile+medical+equipment+logo.png",
    service_area: ["TX"],
  },
  {
    name: "Legacy Oxygen",
    info_center_url: "/legacyoxygen",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1631025722716-0RMG32V4NV6FMIPN4GFA/legacy+oxygen+logo.png",
    service_area: ["KY"],
  },
  {
    name: "Mayhugh's Medical",
    info_center_url: "/mayhughsmedical",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1631025481029-WP64DS3AWPQN3WSMAZRM/mayhugh%27s+medical+logo.png",
    service_area: ["FL"],
  },
  {
    name: "Manor Respiratory Care",
    info_center_url: "/manorrespiratorycare",
    service_area: ["TN"],
  },
  {
    name: "Medical Necessities and Services",
    info_center_url: "/medicalnecessitiesandservices",
    service_area: ["TN"],
  },
  {
    name: "Medical Service Company",
    info_center_url: "/medicalserviceco",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1661199415638-WVWZYX3FG56KYH9NECAV/Medical+Supply+Company+Logo+-+color.png?format=2500w",
    service_area: ["OH", "NY", "PA", "IN", "MI", "WI", "KS"],
  },
  {
    name: "Medical West",
    info_center_url: "/medicalwest",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1584981088321-PMOD0Y1UC2D2XQMIKKR0/ke17ZwdGBToddI8pDm48kK0HGNZds4I6HYVtEy9p5MhZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-vqKDc-x_ky03E2QdamIYWQ032SDDbMOUsCUs_m0tVeUQ/image-asset.jpeg?format=2500w",
    service_area: ["MO"],
  },
  {
    name: "Mini Pharmacy",
    info_center_url: "/minipharmacy",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1660057480210-HMHSDYLO1NY89MDWY3XC/Mini+Pharmacy.png?format=2500w",
    service_area: ["AK", "AZ", "AR", "CA", "CO", "DE", "DC", "FL", "GA", "ID", "IL", "IN", "IA", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NV", "NH", "NJ", "NM", "NY", "NC", "OH", "SC", "TX", "TN",],
  },
  {
    name: "MYDMEDOC",
    info_center_url: "/mydmedoc",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1659046339947-K8TLI169XU0P9LLKF1B9/mydmedoc.png?format=2500w",
    service_area: ["FL", "GA", "MD", "NC", "OH", "PA"],
  },
  {
    name: "North Coast Home Care",
    info_center_url: "/northcoasthomecare",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1660060414403-731Z5KG2K751VLUS89LY/North+Coast+Home+Care+-+color.png?format=2500w",
    service_area: ["OR", "WA"],
  },
  {
    name: "Nunn's Home Medical Equipment",
    info_center_url: "/nunnshme",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1648434901766-R26ZLISSGTPVWEQVXQGZ/512098f99e17-NunnsLogoWhiteBG.jpg",
    service_area: ["NY"],
  },
  {
    name: "Orbit Medical",
    info_center_url: "/orbit",
    logo: "https://images.squarespace-cdn.com/content/5df13db27cfbe70b38ae20dd/1581104478378-8382GBHIR9SUE0Z1R5ID/orbit-medical-retina-1%402x.png",
    service_area: ["IL"],
  },
  {
    name: "Patient Aids",
    info_center_url: "/patientaids",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629377402305-8UZZ81EZ71LYSZ9L5L4Q/Patient+Aids.png",
    service_area: ["KY"],
  },
  {
    name: "Patient's Choice, LLC",
    info_center_url: "/patientschoice",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1613763010746-9NLQER3JLA86XOUY148I/ke17ZwdGBToddI8pDm48kBO94Y5snYfgdpV22C3jaD5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI2Bou2zq_Ka58ZClFVBJjCXPddkgjNNcHwtjwYDQVYKM/patients_choice.png",
    service_area: ["IL"],
  },
  {
    name: "Performance Home Medical",
    info_center_url: "/performancehomemedical",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1633551271586-5TZQZLC7CONWHJDQ9QWV/Performance+Home+Medical+logo.png?format=2500w",
    service_area: ["WA"],
  },
  {
    name: "Preferred Homecare",
    info_center_url: "/preferredhomecare",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5fcea4c2e0c378597cf5fee3/1607378145148",
    service_area: ["CO", "NV", "AZ"],
  },
  {
    name: "Prism Health Care Services",
    info_center_url: "/prism",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1633529206914-FPU2WNUU3E2LI9RZBWSW/PRISM_Logo_color.png?format=2500w",
    service_area: ["IL"],
  },
  {
    name: "Regional Home Care",
    info_center_url: "/regionalhc",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1659373838112-NVKKNLF5KHTB337OCEE7/RHC-signature-color.png",
    service_area: ["CT", "MA", "ME", "NH", "VT"],
  },
  {
    name: "Reliable Diabetes Care",
    info_center_url: "/reliablediabetescare",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629407098284-2BSHEO91SPNIB13R0SKC/Reliable.png",
    service_area: ["ME", "VT", "NH", "CT", "RI", "MA"],
  },
  {
    name: "Reliable Respiratory",
    info_center_url: "/reliablerespiratory",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1638290876956-5R22KM4TRURQRXRWI91J/reliable+respiratory.png",
    service_area: ["ME", "VT", "NH", "CT", "RI", "MA"],
  },
  {
    name: "Reliable Urology Care",
    info_center_url: "/reliableurologycare",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1648435801566-A0UF7AIDKQZWCZ173ZJ3/Reliable_Urology_Care_Logo.png",
    service_area: ["ME", "VT", "NH", "CT", "RI", "MA"],
  },
  {
    name: "Resource Medical Group",
    info_center_url: "/rmg",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629377559212-ADRJ6BAA6J47V8E3ZP2N/Resource.png",
    service_area: ["SC"],
  },
  {
    name: "Rick's Medical Supply",
    info_center_url: "/ricksmedical",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1652824849652-TXI1Q6WZTZWQ4MF6P2JA/Ricks+Medical+Supply.png",
    service_area: ["OR"],
  },
  {
    name: "Riverside Medical",
    info_center_url: "/riverside",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1629377761538-GE4FGXL3JEF8QYC11RMH/Riverside.png",
    service_area: ["TN"],
  },
  {
    name: "Shan Medical Equipment",
    info_center_url: "/shanmedical",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1659549259622-0W5BJA9J3BXNHDIY9WC6/Shan_Logo.png?format=2500w",
    service_area: ["MI"],
  },
  {
    name: "Saint Mary's Pharmacy and Home Medical",
    info_center_url: "/smpmedical",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5fce9035a845a4432e13c5c5/1607372875590",
    service_area: ["PA"],
  },
  {
    name: "Sierra Oxygen Services",
    info_center_url: "/sierraoxygenservices",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1656518698975-NZ37LWZNMYDY5LDGU6NO/Sierra+Oxygen+Services.png",
    service_area: ["NV"],
  },
  {
    name: "Sleepcair",
    info_center_url: "/sleepcair",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5f7ceb3e6bbcbb62f91e7864/1602022216205/Sleepcair+Logo+blue.png",
    service_area: ["KS"],
  },
  {
    name: "SleepData",
    info_center_url: "/sleepdata",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5fcfe9355fa26f4a9ee4e0fb/1607461176754/SleepData+Logo.png",
    service_area: ["CA"],
  },
  {
    name: "SleepWell",
    info_center_url: "/sleepwell",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1631025881048-OVR6HB330UMP83YQO9MY/sleepwell.png",
    service_area: ["GA"],
  },
  {
    name: "Southeast Diabetes, Inc",
    info_center_url: "/southeastdiabetes",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1637077439958-F6H5FZISC5AEL3PXQ73V/southeast+diabetes.png",
    service_area: ["AL", "FL", "GA", "MS", "TX", "VA", "IL", "IN", "LA"],
  },
  {
    name: "Specialty Medical Products",
    info_center_url: "/smp",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1648432594263-J7KI8DY8NBFXUYMVL02K/smplogo.png?format=2500w",
    service_area: ["DE", "MD", "NJ", "PA"],
  },
  {
    name: "SPC Home Medical Equipment",
    info_center_url: "/spc",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1648436386827-QFHTOYKJ4YCYCVRN1YNV/spclogo.png",
    service_area: ["MS", "TX", "LA"],
  },
  {
    name: "Sunrise Respiratory Care",
    info_center_url: "/sunriserespiratorycare",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1621549455148-OPHBUVFIA4PRS5F987E2/ke17ZwdGBToddI8pDm48kGJDGQ59gUCr99rYiPuop8hZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7T-j82ScS_xjTqFYGqFrT72lm6wKLIR3XJeCIt0J8Mp-r8M_36dlWfZOpLRIdYG0ww/Sunrise+Respiratory+Care.png",
    service_area: ["CA"],
  },
  {
    name: "SuperCare Health",
    info_center_url: "/supercare",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5f46bd83aa3cec4cd1fed150/1598471557763/Artboard+1%402x.png",
    service_area: ["CA", "NV", "NM"],
  },
  {
    name: "Tanglewood Medical Supplies",
    info_center_url: "/tanglewoodmedicalsupplies",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1613763212178-N02K6M4RB91FMQS6HMIG/ke17ZwdGBToddI8pDm48kCW9YxOQpz55JJ7L7-9lhHdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIBrt-D8A3neME_bmQMjpaKlpNUBSvlrBav9Jtfr7HjNg/tanglewood.png",
    service_area: ["TX"],
  },
  {
    name: "Thornton Medical",
    info_center_url: "/thorntonmedical",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1659309789283-X7GYNZ5D536RH4WCX9LM/41ab7686dd24-Thornton_Medical_Color_2017_logo.png",
    service_area: ["CO"],
  },
  {
    name: "United Medical",
    info_center_url: "/unitedmedical",
    logo: "https://images.squarespace-cdn.com/content/5df13db27cfbe70b38ae20dd/1598044694902-V1AVOZLDHDQPIY64QR9O/United+Medical.png",
    service_area: ["MS", "TN", "LA", "KY", "MO"],
  },
  {
    name: "Vero Health",
    info_center_url: "/verohealth",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1659987499690-IOHQJ9PEYMUR003HSQKI/Vero.png?format=2500w",
    service_area: ["TX", "PA", "NY", "NJ", "MI"],
  },
  {
    name: "Visiting Nurse Service of New York",
    info_center_url: "/vnsny",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5e3dc4dc0bc32d59a8567764/1581106397636/Visiting_Nurse_Service_of_New_York_Logo%402x.png?format=1500w",
    service_area: ["NY"],
  },
  {
    name: "Wells Drug Home Health Care",
    info_center_url: "/wellsdrug",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1660061937637-3X3QVVYFH9WDVGQ967JB/wells+drug+logo+-+color.png?format=2500w",
    service_area: ["NE"],
  },
  {
    name: "West Home Health Care",
    info_center_url: "/whh",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1623092045575-6EK0B6IYGTPVURSBVPL3/ke17ZwdGBToddI8pDm48kPzHBawqe7YWABmA_RaEYm9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PILIiq73QUMHxHdu6TceJmrh3Of6mCBMhwSWF69EAQ31k/west-home-health-care-logo.png",
    service_area: ["TX"],
  },
  {
    name: "Williams Bros. Health Care Pharmacy",
    info_center_url: "/williamsbros",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1649798016869-SGQC4NVPDDZ96PAIBW0G/Williams+Bros+Pharmacy+logo.png",
    service_area: ["IL", "IN", "KY"],
  },
  {
    name: "Wise Owl Medical Supply",
    info_center_url: "/wom",
    logo: "https://images.squarespace-cdn.com/content/v1/5df13db27cfbe70b38ae20dd/1650494302724-L84G1VSEZODWRURPQFSJ/Wise+Owl+Logo.png?format=2500w",
    service_area: ["TX"],
  },
  {
    name: "XMED",
    info_center_url: "/xmed",
    logo: "https://static1.squarespace.com/static/5df13db27cfbe70b38ae20dd/5e3dbd4e7ffea47838c4bc35/5e3dc4cb24ab2d12b9b86598/1582054511726/logo-default-223x59%25402x.jpg",
    service_area: ["TX"],
  },
];

// Sort suppliers alphabetically
const sortedSuppliers = suppliers.sort((a, b) => {
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }
});

// Create cards for all suppliers
function popSuppliers() {
  sortedSuppliers.forEach((supplier) => {
    let supplierLink = document.createElement("a");
    supplierList.append(supplierLink);
    supplierLink.outerHTML = `<a href="${supplier.info_center_url}" class="supplier-info-center-card">
    <div>
        ${supplier.logo ? `<img src="${supplier.logo}">`: ""}
      <div class="supplier-name">
        <h3>
          ${supplier.name}
        </h3>
      </div>
      <div class="supplier-info-center-card-learn-more">
        <p>Learn More</p>
      </div>
    </div>
  </a>`;
  });
}


// Remove all supplier cards and then recreate cards for suppliers in selected state
function selectState(state) {
  let supplierCards = document.querySelectorAll(".supplier-info-center-card");
  supplierCards.forEach((div) => {
    div.remove();
  });
  if (state == "All") {
    popSuppliers();
  } else {
    sortedSuppliers.forEach((supplier) => {
      if (supplier.service_area.includes(state)) {
        supplierLink = document.createElement("a");
        supplierList.append(supplierLink);
        supplierLink.outerHTML = `<a href="${supplier.info_center_url}" class="supplier-info-center-card">
      <div>
          <img src="${supplier.logo}">
        <div class="supplier-name">
          <h3>
            ${supplier.name}
          </h3>
        </div>
        <div class="supplier-info-center-card-learn-more">
          <p>Learn More</p>
        </div>
      </div>
    </a>`;
      }
    });
  }
}
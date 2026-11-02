/**
 * Prabhu Dental Clinic - Main Interactive Logic
 * Location: Saraswathipuram, Mysore
 * Featuring:
 * - Active Oval Pill Header Navigation with Instant Click Highlight
 * - Dynamic English & Kannada Bilingual System
 * - Live Clinic Status in both languages
 * - Interactive Form Prototype & Photo Lightbox
 */

let currentLang = 'en';

// Comprehensive Bilingual Translation Dictionary
const translations = {
  en: {
    // Top Bar
    "topbar.address": "388, 5th Cross, 14th Main, Near Bus Stop, Saraswathipuram, Mysore",
    "lang.choose": "Language:",
    "topbar.whatsapp": "WhatsApp: 9448984480",
    "topbar.hours": "Mon – Sat: 10:30 AM – 1:30 PM &bull; 5:00 PM – 9:00 PM | Sun: Prior Appointments Only",
    "hero.stat2_num": "2 MDS",

    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.doctors": "Our Doctors",
    "nav.treatments": "Treatments",
    "nav.specialities": "Specialities",
    "nav.team": "Our Team",
    "nav.legacy": "Clinic Legacy",
    "nav.gallery": "Gallery",
    "nav.appointment": "Appointment",
    "nav.faq": "FAQ",
    "nav.faq": "FAQ",
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.book_cta": "Book Appointment",

    // Brand
    "brand.clinic_name": "Prabhu Dental Clinic",
    "brand.clinic_name_caps": "PRABHU DENTAL CLINIC",

    // Hero Section
    "hero.pill": "Orthodontics & Periodontistry Clinic &bull; Saraswathipuram, Mysore",
    "hero.kpmea_badge": "Registered under Karnataka Private Medical Establishments (KPMEA) Act",
    "footer.kpmea": "Registered under Karnataka Private Medical Establishments (KPMEA) Act",
    "hero.title": 'PRABHU <span class="brand-red">DENTAL CLINIC</span>',
    "hero.specialty": "Orthodontics &amp; Periodontistry Clinic",
    "hero.desc": "Saraswathipuram, Mysore. Owned by husband and wife duo Dr. Mahesh H.V. M.D.S. (Periodontist &amp; Implantologist) and Dr. Ramya K.S. M.D.S. (Orthodontist and Dentofacial Orthopaedist). Continuing a legacy of dedicated dental care since 2012.",
    "hero.btn_appointment": "BOOK AN APPOINTMENT",
    "hero.btn_directions": "GET DIRECTIONS",
    "hero.stat1_label": "Continuing clinic legacy with Dr. M.G. Prabhu's blessings",
    "hero.stat2_label": "Periodontist &amp; Orthodontist Duo",
    "hero.stat3_num": "Claimed",
    "hero.stat3_label": "Claimed Clinic Profile in Saraswathipuram",
    "hero.caption_title": "Prabhu Dental Clinic",
    "hero.caption_sub": "388, 5th Cross, 14th Main, Saraswathipuram, Mysore",
    "hero.verified_badge": "Clinic Exterior",
    "hero.badge_loc_title": "Saraswathipuram",
    "hero.badge_loc_sub": "Near Bus Stop, Mysore",
    "hero.badge_timing_title": "Monday – Saturday",
    "hero.badge_timing_sub": "10:30 AM–1:30 PM, 5:00 PM–9:00 PM",
    "hero.badge_sunday_title": "Sunday",
    "hero.badge_sunday_sub": "Prior Appointments Only",
    "hero.badge_sparkle": "Specialist Care Duo",

    // About Section
    "about.tag": "About Prabhu Dental Clinic",
    "about.title": "Continuing a Legacy of Dental Care Since 2012",
    "about.subtitle": "Dedicated patient care, ethical practice, and continuous clinical betterment in Saraswathipuram, Mysore.",
    "about.flow_title": "Clinical Lineage & Evolution Path",
    "about.quote": "\"Clinic is owned by husband and wife duo <strong>Dr. Mahesh H.V. M.D.S. (Periodontist &amp; Implantologist)</strong> and <strong>Dr. Ramya K.S. M.D.S. (Orthodontist and dentofacial orthopaedist)</strong>. With the blessings of <strong>Dr. M.G. Prabhu</strong>, Dr. Mahesh and Dr. Ramya have taken over the clinic from him in the year <strong>2012</strong> and are continuing the same good work while aiming for further betterment and upgradation of the clinic in all ways for the benefit of the patients.<br><br>Carrying forward this trusted heritage in Saraswathipuram, Mysore, the clinic combines advanced clinical expertise with a gentle, patient-centric approach. Together, they offer comprehensive specialized dental care—from intricate periodontal therapies and implant restorations to modern orthodontic smile alignment—utilizing state-of-the-art dental technology, rigorous sterilization protocols, and ethical treatment standards designed for long-term oral health.\"<br><br><span class=\"about-kpmea-highlight\"><span class=\"about-kpmea-star\">*</span> <strong>Prabhu Dental Clinic is registered under the Karnataka Private Medical Establishments (KPMEA) Act</strong>, adhering strictly to recognized clinical, hygiene, and ethical healthcare standards.</span>",
    "about.pillar1_desc": "Husband and wife specialist duo owning and leading the clinic with specialized postgraduate expertise.",
    "about.pillar2_title": "Blessings of Dr. M.G. Prabhu",
    "about.pillar2_desc": "Carrying forward the honored legacy and trust established by Dr. M.G. Prabhu in Mysore.",
    "about.pillar3_title": "Taken Over in the Year 2012",
    "about.pillar3_desc": "Continuing the same good work while actively steering the clinic towards continuous progress.",
    "about.pillar4_title": "Betterment, Upgradation &amp; Patient Benefit",
    "about.pillar4_desc": "Aiming for further betterment and upgradation of the clinic in all ways for the benefit of the patients.",

    // Doctors Section
    "doctors.tag": "Specialist Clinicians",
    "doctors.title": "Our Doctors",
    "doctors.subtitle": "Husband and wife specialist team heading Prabhu Dental Clinic.",
    "doctors.co_owner": "Clinic Co-Owner",
    "doctors.spec_label": "Specialisation",
    "doctors.mahesh_spec": "Periodontist &amp; Implantologist",
    "doctors.ramya_spec": "Orthodontist and Dentofacial Orthopaedist",
    "doctors.consult_label": "Consultations:",
    "doctors.consult_days": "Mon – Sat &amp; Sun (Prior Appt.)",
    "doctors.btn_consult": "Request Consult",
    "doctors.btn_online_consult": "Online Consult",

    // Treatments Section
    "treatments.tag": "Clinical Treatments",
    "treatments.title": "Treatments",
    "treatments.subtitle": "Comprehensive restorative, cosmetic, and advanced dental procedures tailored to your smile.",
    "treatments.learn_more": "Learn more",
    "treatments.prev": "Previous",
    "treatments.next": "Next",
    // Treatments Back-Face Translations
    "treatments.overview": "Procedure Details",
    "treatments.back": "Back",
    "treatments.book_btn": "Book Appointment",
    "treatments.lbl_duration": "Duration",
    "treatments.lbl_comfort": "Comfort",
    "treatments.val_painless": "100% Gentle",
    "treatments.val_natural": "Natural Aesthetic",
    "treatments.val_instant": "Instant Result",
    "treatments.t1_p1": "Digital diagnostic checkup & low-radiation X-rays",
    "treatments.t1_p2": "Ultrasonic scaling & enamel-safe cavity fillings",
    "treatments.t1_p3": "Preventive fluoride care & routine dental wellness",
    "treatments.t1_dur": "30–45 Mins",
    "treatments.t2_p1": "Custom porcelain veneers & aesthetic composite bonding",
    "treatments.t2_p2": "Diastema (gap) closure & precision tooth contouring",
    "treatments.t2_p3": "Digital smile makeover tailored to facial aesthetics",
    "treatments.t2_dur": "1–2 Visits",
    "treatments.t3_p1": "Clear invisible aligners (discreet, removable & custom)",
    "treatments.t3_p2": "Modern ceramic & metallic braces for teens and adults",
    "treatments.t3_p3": "Malocclusion correction & dentofacial orthopaedics",
    "treatments.t3_dur": "6–18 Mos Plan",
    "treatments.t4_p1": "Biocompatible titanium screw implants for missing teeth",
    "treatments.t4_p2": "Immediate loading implants & full-arch fixed bridges",
    "treatments.t4_p3": "Preserves bone density and restores 100% bite strength",
    "treatments.t4_dur": "Permanent Fix",
    "treatments.t5_p1": "In-office laser LED cold-light whitening technology",
    "treatments.t5_p2": "Removes stubborn stains from tea, coffee & tobacco",
    "treatments.t5_p3": "Safely lightens teeth up to 6–8 shades in a single sitting",
    "treatments.t5_dur": "45 Mins Visit",
    "treatments.t6_p1": "Single-sitting rotary endodontics with 3D apex locator",
    "treatments.t6_p2": "Painless infection removal & bioceramic root sealing",
    "treatments.t6_p3": "Crown restoration to save your natural tooth for life",
    "treatments.t6_dur": "45–60 Mins",
    "treatments.t7_p1": "Gentle checkups, habit-breaking & caries prevention for kids",
    "treatments.t7_p2": "Painless cavity fillings & tooth-protecting pit sealants",
    "treatments.t7_p3": "Friendly, patient environment designed to eliminate dental fear",
    "treatments.t7_dur": "20–30 Mins",
    "treatments.t8_p1": "Deep subgingival scaling & root planing for gum disease",
    "treatments.t8_p2": "Laser periodontal therapy for bleeding gums & gingivitis",
    "treatments.t8_p3": "Gum grafting, pocket reduction & regenerative treatments",
    "treatments.t8_dur": "1–2 Sessions",
    "treatments.t9_p1": "Gentle compassionate dental examinations tailored for seniors",
    "treatments.t9_p2": "Dry mouth (xerostomia), root caries & sensitive gum management",
    "treatments.t9_p3": "Preventive oral healthcare suited to systemic medical conditions",
    "treatments.t9_dur": "30–45 Mins",
    "treatments.t10_p1": "Custom precision-fit complete & partial acrylic/flexible dentures",
    "treatments.t10_p2": "Implant-supported overdentures for maximum chewing stability",
    "treatments.t10_p3": "Natural smile restoration, quick relining & immediate repairs",
    "treatments.t10_dur": "3–4 Visits",

    "treatments.t1_title": "General Dentistry",
    "treatments.t1_sub": "The foundation of a healthy smile",
    "treatments.t1_desc": "Comprehensive preventive and restorative care for the whole family.",
    "treatments.t2_title": "Cosmetic Dentistry",
    "treatments.t2_sub": "Perfect the smile you have",
    "treatments.t2_desc": "Veneers, bonding, contouring, and smile makeovers designed around you.",
    "treatments.t3_title": "Orthodontics & Aligners",
    "treatments.t3_sub": "Straighter teeth at any age",
    "treatments.t3_desc": "Invisible aligners and modern braces for a healthier, more confident smile.",
    "treatments.t4_title": "Dental Implants",
    "treatments.t4_sub": "Permanent, natural-looking replacements",
    "treatments.t4_desc": "State-of-the-art implants that look, feel, and function like your natural teeth.",
    "treatments.t5_title": "Teeth Whitening",
    "treatments.t5_sub": "A brighter smile in one visit",
    "treatments.t5_desc": "Professional-grade whitening for dramatically whiter teeth, safely and quickly.",
    "treatments.t6_title": "Endodontics Treatment / Root Canal",
    "treatments.t6_sub": "Gentle, pain-free treatment",
    "treatments.t6_desc": "Advanced rotary techniques to save your tooth comfortably and efficiently.",
    "treatments.t7_title": "Paediatric Dentistry",
    "treatments.t7_sub": "Gentle care for little smiles",
    "treatments.t7_desc": "Gentle preventive and restorative treatments designed with patience for growing children.",
    "treatments.t8_title": "Periodontics & Gum Care",
    "treatments.t8_sub": "Healthy gums for lifelong teeth",
    "treatments.t8_desc": "Specialised periodontal treatments for gum health, bleeding prevention, and laser care.",
    "treatments.t9_title": "Geriatric Dental Care",
    "treatments.t9_sub": "Compassionate care for seniors",
    "treatments.t9_desc": "Dedicated gentle dental care for elderly patients, focusing on comfort, preservation, and overall wellness.",
    "treatments.t10_title": "Prosthodontics & Dentures",
    "treatments.t10_sub": "Restore your smile and bite",
    "treatments.t10_desc": "Custom full & partial dentures, bridges, and implant-supported overdentures for effortless chewing and speaking.",

    // Specialities Section
    "spec.tag": "Clinical Scope",
    "spec.title": "Specialities",
    "spec.subtitle": "Key dental specialities offered at Prabhu Dental Clinic by our doctors and specialist support team.",
    "spec.ortho_title": "Orthodontics",
    "spec.ortho_desc": "Specialised field focused on teeth alignment, dental corrections, and dentofacial orthopaedics.",
    "spec.ortho_lead": "In-House Orthodontist: Dr. Ramya K.S. (M.D.S.)",
    "spec.perio_title": "Periodontistry",
    "spec.perio_desc": "Specialised care dedicated to the prevention, diagnosis, and treatment of periodontal (gum) conditions.",
    "spec.perio_lead": "In-House Periodontist: Dr. Mahesh H.V. (M.D.S.)",
    "spec.implant_title": "Implantology",
    "spec.implant_desc": "Specialised dental implant treatments for the restoration and replacement of teeth.",
    "spec.implant_lead": "In-House Implantologist: Dr. Mahesh H.V. (M.D.S.)",
    "spec.surg_title": "Oral Surgery",
    "spec.surg_desc": "Specialist oral surgical care provided by our experienced specialist support team.",
    "spec.prostho_title": "Prosthodontics",
    "spec.prostho_desc": "Specialist prosthetic dental solutions and tooth restoration by experienced specialists.",
    "spec.pedia_title": "Pediatric Dentistry",
    "spec.pedia_desc": "Specialist dental care tailored specifically for children and young growing teeth.",
    "spec.specialist_support": "Specialist Support",

    // Team Section
    "team.tag": "Clinical Team",
    "team.title": "Our Team",
    "team.subtitle": "Experienced specialist panel and medical emergency tie-ups.",
    "team.associate_role": "Associate Dental Surgeon",
    "team.associate_deg": "B.D.S. &bull; Associate Dental Surgeon",
    "team.associate_bio": '"She has graduated in the year 2011 and is associated with us since 2013. She is a friendly and caring professional who regularly attends dental courses to keep abreast with latest developments in the field of dentistry."',
    "team.panel_title": "Specialist Care Panel",
    "team.panel_desc": "The clinic also has its own team of experienced specialists to fulfill the dental treatment needs of our patients:",
    "team.surg_sub": "Specialist surgical dental support.",
    "team.prostho_sub": "Specialist tooth restoration and prosthetics.",
    "team.pedia_sub": "Specialist dental care for children.",
    "team.emergency_title": "Medical Emergency Handling",
    "team.emergency_desc": '"In case of any medical emergency, prompt medical assistance and support are readily provided through our tie-up with a nearby reputed nursing home, alongside an associated physician."',

    // Legacy Section
    "legacy.tag": "Historical Lineage",
    "legacy.title": "Clinic Legacy",
    "legacy.subtitle": "A visual timeline of trusted dental care in Saraswathipuram, Mysore.",
    "legacy.prabhu_name": "Dr. M.G. Prabhu",
    "legacy.doctors_name": "Dr. Mahesh &amp; Dr. Ramya",
    "legacy.timeline_doctors": "Dr. Mahesh H.V. &amp; Dr. Ramya K.S.",
    "doctors.mahesh_name": "Dr. Mahesh H.V.",
    "doctors.ramya_name": "Dr. Ramya K.S.",
    "doctors.mds_deg": "M.D.S.",
    "spec.orbit_hub_sub": "Specialities Orbit",
    "spec.orbit_status": "Continuous Clockwise Orbit (Hover or Click Card to Focus)",
    "legacy.step1_badge": "Origin",
    "legacy.step1_desc": "The established clinical foundation and dental practice that laid the bedrock of patient care in Saraswathipuram.",
    "legacy.step2_badge": "Heritage",
    "legacy.step2_title": "Clinic Legacy",
    "legacy.step2_desc": "A respected heritage of trusted care and dental service built over time within the Mysore community.",
    "legacy.step3_badge": "Milestone",
    "legacy.step3_desc": "With the blessings of Dr. M.G. Prabhu, Dr. Mahesh and Dr. Ramya took over the clinic from him in the year 2012.",
    "legacy.step4_badge": "Leadership",
    "legacy.step4_desc": "Husband and wife specialist duo leading Periodontistry, Implantology, Orthodontics, and Dentofacial Orthopaedics.",
    "legacy.step5_badge": "Present & Future",
    "legacy.step5_title": "Continuing and Upgrading the Clinic",
    "legacy.step5_desc": "Continuing the same good work aiming for further betterment and upgradation of the clinic in all ways for the benefit of the patients.",

    // Gallery Section
    "gallery.tag": "Visual Overview",
    "gallery.title": "Gallery",
    "gallery.subtitle": "Featuring the actual clinic exterior photograph and clearly designated placeholders for upcoming client-provided clinic images.",
    "gallery.btn_view": "View Full Size",
    "gallery.item1_tag": "Real Photo",
    "gallery.item1_title": "Clinic Exterior",
    "gallery.item1_desc": "Actual exterior view of Prabhu Dental Clinic premises and signboard at 388, 5th Cross, 14th Main, Saraswathipuram, Mysore.",
    "gallery.item2_tag": "Facility",
    "gallery.item2_title": "Clinic Interior",
    "gallery.item2_desc": "Spotless interior corridor, welcoming consultation pathways, and modern clinic architecture.",
    "gallery.item3_tag": "Front Desk",
    "gallery.item3_title": "Reception",
    "gallery.item3_desc": "Patient greeting desk and comfortable consultation waiting lounge.",
    "gallery.item4_tag": "Clinical Area",
    "gallery.item4_title": "Treatment Room",
    "gallery.item4_desc": "Ergonomic dental operatory suite equipped for orthodontic and periodontal clinical procedures.",
    "gallery.item5_tag": "Clinicians",
    "gallery.item5_title": "Doctors",
    "gallery.item5_desc": "Doctor consultation desk and clinical discussion environment for patient evaluations.",
    "gallery.item6_tag": "Staff",
    "gallery.item6_title": "Team",
    "gallery.item6_desc": "Cohesive dental team and clinical specialists assisting with care.",
    "gallery.item7_tag": "Technology",
    "gallery.item7_title": "Equipment",
    "gallery.item7_desc": "Sterilized instrumentation and modern dental equipment supporting patient treatments.",

    // Appointment Section
    "app.tag": "Consultation Request",
    "app.title": "Appointment",
    "app.subtitle": "Frontend appointment request prototype for Prabhu Dental Clinic, Saraswathipuram, Mysore.",
    "app.plan_title": "Plan Your Clinic Visit",
    "app.plan_desc": "Fill out the request form with your preferred consultation date and dental concern.",
    "app.benefit1": "Consultations with Dr. Mahesh H.V. (MDS) or Dr. Ramya K.S. (MDS)",
    "app.benefit2": "Morning Session (10:30 AM – 01:30 PM)",
    "app.benefit3": "Evening Session (05:00 PM – 09:00 PM)",
    "app.benefit4": "Convenient location near Bus Stop, Saraswathipuram, Mysore",
    "app.timings_heading": "Clinic Timings",
    "app.timings_schedule": "Monday – Saturday:<br>10:30 AM – 01:30 PM<br>05:00 PM – 09:00 PM<br><br>Sunday:<br>Prior Appointments Only",
    "app.label_name": "Patient Name",
    "app.ph_name": "Patient full name",
    "app.label_mobile": "Mobile Number",
    "app.ph_mobile": "Mobile number",
    "app.label_mode": "Consultation Type",
    "app.opt_mode_offline": "In-Clinic Visit (Offline)",
    "app.opt_mode_online": "Online Video Consult (5:00 - 5:30 PM)",
    "app.opt_time_online": "05:00 PM - 05:30 PM (Online Consult Session)",
    "app.label_date": "Preferred Date",
    "app.label_time": "Preferred Time",
    "app.opt_time_select": "Select preferred session...",
    "app.opt_time_morning": "10:30 AM - 01:30 PM (Morning Session)",
    "app.opt_time_evening": "05:00 PM - 09:00 PM (Evening Session)",
    "app.label_reason": "Reason for Visit",
    "app.opt_reason_select": "Select specialty or reason...",
    "app.opt_general": "General Dental Consultation",
    "app.label_msg": "Message",
    "app.ph_msg": "Write any specific query or note...",
    "app.btn_submit": "REQUEST APPOINTMENT",
    "app.success_title": "Thank you. Your appointment request has been received.",
    "app.success_desc": "This is a prototype demonstration. Your requested details have been recorded for frontend presentation.",
    "app.btn_reset": "Submit Another Request",
    "app.modal_title": "Appointment Request Received!",
    "app.modal_subtitle": "Thank you for contacting Prabhu Dental Clinic. Your visit request has been recorded for our presentation prototype.",
    "app.modal_note": "This is a frontend demonstration prototype. No actual booking or payment was processed.",
    "app.modal_btn_close": "Close",

    
    // FAQ Section
    "faq.tag": "Frequently Asked Questions",
    "faq.title": "Dental FAQs & Care Insights",
    "faq.subtitle": "Answers to common queries regarding treatments, orthodontic aligners, implants, and routine dental wellness.",
    "faq.q1": "How often should I visit the dentist for a routine dental checkup?",
    "faq.a1": "It is recommended to have a professional dental checkup and routine cleaning every 6 months. Regular examinations allow early detection of tooth decay, gingival bleeding, or periodontal issues before they progress into complicated conditions.",
    "faq.q2": "Are dental implant treatments painful and how long do they last?",
    "faq.a2": "Dental implant procedures are performed under local anesthesia with minimal discomfort. With advanced 3D planning and gentle surgical techniques, recovery is fast. With proper daily oral hygiene and periodic checkups, dental implants are permanent solutions that last a lifetime.",
    "faq.q3": "What is the difference between traditional braces and clear invisible aligners?",
    "faq.a3": "Traditional braces use ceramic or metallic brackets and wires to gently shift teeth. Clear aligners are custom-made, transparent, and removable plastic trays that straighten teeth discreetly. Both are highly effective; Dr. Ramya K.S. (Orthodontist) will evaluate your smile and recommend the ideal option.",
    "faq.q4": "Why do my gums bleed when I brush or floss, and what should I do?",
    "faq.a4": "Bleeding gums are typically an early sign of gingivitis or accumulated plaque and tartar beneath the gumline. If ignored, it may develop into periodontitis. Professional scaling and periodontal evaluation by Dr. Mahesh H.V. (Periodontist) will restore healthy, firm gums.",
    "faq.q5": "Is a Root Canal Treatment (RCT) painful, and can my natural tooth be saved?",
    "faq.a5": "Modern root canal treatments are virtually pain-free thanks to effective local anesthesia and computerized rotary endodontics. An RCT removes infected pulp, thoroughly disinfects the root canals, and seals the tooth, allowing you to preserve your original natural tooth for decades under a protective crown.",
    "faq.q6": "How can I book an appointment, and are Sunday visits available?",
    "faq.a6": "You can request an appointment directly through our online appointment form or by messaging us on WhatsApp (+91 94489 84480). The clinic operates Monday through Saturday (10:30 AM–1:30 PM & 5:00 PM–9:00 PM), while Sundays are reserved exclusively for prior scheduled appointments.",

    
    // FAQ Section
    "faq.tag": "Frequently Asked Questions",
    "faq.title": "Dental FAQs & Care Insights",
    "faq.subtitle": "Answers to common queries regarding treatments, orthodontic aligners, implants, and routine dental wellness.",
    "faq.q1": "How often should I visit the dentist for a routine dental checkup?",
    "faq.a1": "It is recommended to have a professional dental checkup and routine cleaning every 6 months. Regular examinations allow early detection of tooth decay, gingival bleeding, or periodontal issues before they progress into complicated conditions.",
    "faq.q2": "Are dental implant treatments painful and how long do they last?",
    "faq.a2": "Dental implant procedures are performed under local anesthesia with minimal discomfort. With advanced 3D planning and gentle surgical techniques, recovery is fast. With proper daily oral hygiene and periodic checkups, dental implants are permanent solutions that last a lifetime.",
    "faq.q3": "What is the difference between traditional braces and clear invisible aligners?",
    "faq.a3": "Traditional braces use ceramic or metallic brackets and wires to gently shift teeth. Clear aligners are custom-made, transparent, and removable plastic trays that straighten teeth discreetly. Both are highly effective; Dr. Ramya K.S. (Orthodontist) will evaluate your smile and recommend the ideal option.",
    "faq.q4": "Why do my gums bleed when I brush or floss, and what should I do?",
    "faq.a4": "Bleeding gums are typically an early sign of gingivitis or accumulated plaque and tartar beneath the gumline. If ignored, it may develop into periodontitis. Professional scaling and periodontal evaluation by Dr. Mahesh H.V. (Periodontist) will restore healthy, firm gums.",
    "faq.q5": "Is a Root Canal Treatment (RCT) painful, and can my natural tooth be saved?",
    "faq.a5": "Modern root canal treatments are virtually pain-free thanks to effective local anesthesia and computerized rotary endodontics. An RCT removes infected pulp, thoroughly disinfects the root canals, and seals the tooth, allowing you to preserve your original natural tooth for decades under a protective crown.",
    "faq.q6": "How can I book an appointment, and are Sunday visits available?",
    "faq.a6": "You can request an appointment directly through our online appointment form or by messaging us on WhatsApp (+91 94489 84480). The clinic operates Monday through Saturday (10:30 AM–1:30 PM & 5:00 PM–9:00 PM), while Sundays are reserved exclusively for prior scheduled appointments.",

    // Location & Contact Section
    "loc.tag": "Find Prabhu Dental Clinic",
    "loc.title": "Location",
    "loc.subtitle": "Centrally situated in Saraswathipuram, Mysore.",
    "loc.label_address": "Address:",
    "loc.full_address": "388, 5th Cross, 14th Main,<br>Near Bus Stop,<br>Saraswathipuram, Saraswatipuram.,<br>Mysore",
    "loc.timings_title": "Clinic Timings",
    "loc.days": "MONDAY – SATURDAY",
    "loc.hours": "10:30 AM – 01:30 PM<br>05:00 PM – 09:00 PM",
    "loc.sunday_label": "SUNDAY",
    "loc.sunday_hours": "Prior Appointments Only",
    "loc.landmark": "Near Bus Stop, Saraswathipuram, Mysore",
    "loc.btn_directions": "GET DIRECTIONS",

    // Contact Section
    "contact.tag": "Direct Information",
    "contact.title": "Contact",
    "contact.subtitle": "Prabhu Dental Clinic, Saraswathipuram, Mysore.",
    "contact.details_title": "Contact Details",
    "contact.phone_label": "Contact Number:",
    "contact.emergency_label": "Emergency:",
    "contact.whatsapp_label": "WhatsApp:",
    "contact.email_label": "Email:",
    "contact.working_hours_title": "Working Hours",
    "contact.card1_title": "Prabhu Dental Clinic",
    "contact.quick_chat": "Quick Chat",
    "contact.whatsapp_btn": "WhatsApp",
    "loc.coordinates": "Coordinates: 12.302484, 76.627998",
    "loc.city": "Saraswathipuram, Mysore",
    "loc.hours_inline": "10:30 AM – 01:30 PM &bull; 05:00 PM – 09:00 PM",
    "loc.sunday_hours_inline": "Prior Appointments Only",
    "lightbox.title": "Prabhu Dental Clinic Exterior &amp; Signboard",

    // Footer
    "footer.nav_title": "Navigation",
    "footer.address_timings": "Clinic Address, Timings &amp; Contact",
    "footer.rights": "All rights reserved.",
    "footer.draft": "Local Presentation Draft",

    // Mobile Actions
    "mobile.book_visit": "Book Visit",
    "mobile.directions": "Directions"
  },

  kn: {
    // Top Bar
    "topbar.address": "388, 5ನೇ ಕ್ರಾಸ್, 14ನೇ ಮುಖ್ಯರಸ್ತೆ, ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "lang.choose": "ಭಾಷೆ:",
    "topbar.whatsapp": "ವಾಟ್ಸಾಪ್: 9448984480",
    "topbar.hours": "ಸೋಮ – ಶನಿ: ಬೆಳಿಗ್ಗೆ 10:30 – 1:30 &bull; ಸಂಜೆ 5:00 – 9:00 | ಭಾನು: ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮಾತ್ರ",

    // Navigation
    "nav.home": "ಮುಖಪುಟ",
    "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
    "nav.doctors": "ನಮ್ಮ ವೈದ್ಯರು",
    "nav.treatments": "ಚಿಕಿತ್ಸೆಗಳು",
    "nav.specialities": "ವಿಶೇಷತೆಗಳು",
    "nav.team": "ನಮ್ಮ ತಂಡ",
    "nav.legacy": "ಕ್ಲಿನಿಕ್ ಇತಿಹಾಸ",
    "nav.gallery": "ಗ್ಯಾಲರಿ",
    "nav.appointment": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್",
    "nav.faq": "ಪ್ರಶ್ನೋತ್ತರಗಳು",
    "nav.faq": "ಪ್ರಶ್ನೋತ್ತರಗಳು",
    "nav.location": "ಸ್ಥಳ & ವಿಳಾಸ",
    "nav.contact": "ಸಂಪರ್ಕ",
    "nav.book_cta": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",

    // Brand
    "brand.clinic_name": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್",
    "brand.clinic_name_caps": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್",

    // Hero Section
    "hero.pill": "ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್ ಮತ್ತು ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ರಿ ಕ್ಲಿನಿಕ್ &bull; ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "hero.kpmea_badge": "ಕರ್ನಾಟಕ ಖಾಸಗಿ ವೈದ್ಯಕೀಯ ಸಂಸ್ಥೆಗಳ (KPMEA) ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಕ್ಲಿನಿಕ್",
    "footer.kpmea": "ಕರ್ನಾಟಕ ಖಾಸಗಿ ವೈದ್ಯಕೀಯ ಸಂಸ್ಥೆಗಳ (KPMEA) ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಕ್ಲಿನಿಕ್",
    "hero.title": 'ಪ್ರಭು <span class="brand-red">ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್</span>',
    "hero.specialty": "ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್ ಮತ್ತು ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ರಿ ಕ್ಲಿನಿಕ್",
    "hero.desc": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು. ದಂಪತಿಗಳಾದ ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. ಎಂ.ಡಿ.ಎಸ್. (ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಇಂಪ್ಲಾಂಟಾಲಜಿಸ್ಟ್) ಹಾಗೂ ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. ಎಂ.ಡಿ.ಎಸ್. (ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೀಡಿಸ್ಟ್) ಅವರ ಮಾಲೀಕತ್ವದಲ್ಲಿದೆ. 2012 ರಿಂದ ದಂತ ಆರೈಕೆಯ ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸಿಕೊಂಡು ಬರುತ್ತಿದೆ.",
    "hero.stat2_num": "೨ ಎಂ.ಡಿ.ಎಸ್.",
    "hero.btn_appointment": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
    "hero.btn_directions": "ದಾರಿ ನಕ್ಷೆ ನೋಡಿ",
    "hero.stat1_label": "ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು ಅವರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ ಮುಂದುವರಿದ ಸೇವೆ",
    "hero.stat2_label": "ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್ ತಜ್ಞ ದಂಪತಿಗಳು",
    "hero.stat3_num": "ಪರಿಶೀಲಿತ",
    "hero.stat3_label": "ಸರಸ್ವತಿಪುರಂನಲ್ಲಿ ಪರಿಶೀಲಿಸಿದ ಕ್ಲಿನಿಕ್ ಪ್ರೊಫೈಲ್",
    "hero.caption_title": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್",
    "hero.caption_sub": "388, 5ನೇ ಕ್ರಾಸ್, 14ನೇ ಮುಖ್ಯರಸ್ತೆ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "hero.verified_badge": "ಕ್ಲಿನಿಕ್ ಮುಂಭಾಗ",
    "hero.badge_loc_title": "ಸರಸ್ವತಿಪುರಂ",
    "hero.badge_loc_sub": "ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಮೈಸೂರು",
    "hero.badge_timing_title": "ಸೋಮವಾರ – ಶನಿವಾರ",
    "hero.badge_timing_sub": "ಬೆಳಿಗ್ಗೆ 10:30–01:30, ಸಂಜೆ 05:00–09:00",
    "hero.badge_sunday_title": "ಭಾನುವಾರ",
    "hero.badge_sunday_sub": "ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮಾತ್ರ",
    "hero.badge_sparkle": "ತಜ್ಞ ವೈದ್ಯ ದಂಪತಿ",

    // About Section
    "about.tag": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ಬಗ್ಗೆ",
    "about.title": "2012 ರಿಂದ ದಂತ ಆರೈಕೆಯ ಪರಂಪರೆಯನ್ನು ಮುಂದುವರಿಸಿಕೊಂಡು ಬರುತ್ತಿದ್ದೇವೆ",
    "about.subtitle": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರಿನಲ್ಲಿ ಸಮರ್ಪಿತ ರೋಗಿ ಆರೈಕೆ, ನೈತಿಕ ಸೇವೆ ಮತ್ತು ನಿರಂತರ ಸುಧಾರಣೆ.",
    "about.flow_title": "ಕ್ಲಿನಿಕ್ ಇತಿಹಾಸ ಮತ್ತು ವಿಕಾಸ ಪಥ",
    "about.quote": "\"ಈ ಕ್ಲಿನಿಕ್ ದಂಪತಿಗಳಾದ <strong>ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. ಎಂ.ಡಿ.ಎಸ್. (ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಇಂಪ್ಲಾಂಟಾಲಜಿಸ್ಟ್)</strong> ಹಾಗೂ <strong>ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. ಎಂ.ಡಿ.ಎಸ್. (ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೀಡಿಸ್ಟ್)</strong> ಅವರ ಮಾಲೀಕತ್ವದಲ್ಲಿದೆ. <strong>ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು</strong> ಅವರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ, ಡಾ. ಮಹೇಶ್ ಮತ್ತು ಡಾ. ರಮ್ಯಾ ಅವರು <strong>2012</strong> ರಲ್ಲಿ ಅವರಿಂದ ಕ್ಲಿನಿಕ್ ಅನ್ನು ವಹಿಸಿಕೊಂಡಿದ್ದು, ಅದೇ ಉತ್ತಮ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸುತ್ತಾ ರೋಗಿಗಳ ಹಿತದೃಷ್ಟಿಯಿಂದ ಕ್ಲಿನಿಕ್‌ನ ಸರ್ವಾಂಗೀಣ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಸುಧಾರಣೆಗೆ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ.<br><br>ಮೈಸೂರಿನ ಸರಸ್ವತಿಪುರಂನಲ್ಲಿ ಈ ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸಿಕೊಂಡು ಹೋಗುತ್ತಾ, ಕ್ಲಿನಿಕ್ ಸುಧಾರಿತ ಚಿಕಿತ್ಸಾ ಪರಿಣತಿ ಮತ್ತು ಕಾಳಜಿಯುಕ್ತ ರೋಗಿ ಆರೈಕೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ಪಿರಿಯೊಡಾಂಟಲ್ ಚಿಕಿತ್ಸೆಗಳು, ಡೆಂಟಲ್ ಇಂಪ್ಲಾಂಟ್‌ಗಳು ಹಾಗೂ ಆಧುನಿಕ ಆರ್ಥೊಡಾಂಟಿಕ್ ಹಲ್ಲಿನ ಜೋಡಣೆ ಸೇರಿದಂತೆ ಸಮಗ್ರ ವಿಶೇಷ ದಂತ ಸೇವೆಗಳನ್ನು ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ನೈತಿಕ ಮಾನದಂಡಗಳೊಂದಿಗೆ ಒದಗಿಸಲಾಗುತ್ತಿದೆ.\"<br><br><span class=\"about-kpmea-highlight\"><span class=\"about-kpmea-star\">*</span> <strong>ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ಕರ್ನಾಟಕ ಖಾಸಗಿ ವೈದ್ಯಕೀಯ ಸಂಸ್ಥೆಗಳ (KPMEA) ಕಾಯ್ದೆಯಡಿ ಅಧಿಕೃತವಾಗಿ ನೋಂದಾಯಿಸಲ್ಪಟ್ಟಿದೆ</strong> ಮತ್ತು ಮಾನ್ಯತೆ ಪಡೆದ ಕ್ಲಿನಿಕಲ್ ಮತ್ತು ನೈರ್ಮಲ್ಯ ಮಾನದಂಡಗಳಿಗೆ ಬದ್ಧವಾಗಿದೆ.</span>",
    "about.pillar1_desc": "ವಿಶೇಷ ಸ್ನಾತಕೋತ್ತರ ನೈಪುಣ್ಯತೆಯೊಂದಿಗೆ ಕ್ಲಿನಿಕ್ ಮುನ್ನಡೆಸುತ್ತಿರುವ ತಜ್ಞ ದಂಪತಿಗಳು.",
    "about.pillar2_title": "ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು ಅವರ ಆಶೀರ್ವಾದ",
    "about.pillar2_desc": "ಮೈಸೂರಿನಲ್ಲಿ ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು ಅವರು ಸ್ಥಾಪಿಸಿದ ವಿಶ್ವಾಸಾರ್ಹ ಪರಂಪರೆಯನ್ನು ಮುಂದುವರಿಸುವುದು.",
    "about.pillar3_title": "2012 ರಲ್ಲಿ ಅಧಿಕಾರ ಸ್ವೀಕಾರ",
    "about.pillar3_desc": "ಉತ್ತಮ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸುತ್ತಾ ಕ್ಲಿನಿಕ್ ಅನ್ನು ನಿರಂತರ ಪ್ರಗತಿಯತ್ತ ಕೊಂಡೊಯ್ಯುವುದು.",
    "about.pillar4_title": "ಸುಧಾರಣೆ, ಉನ್ನತೀಕರಣ ಮತ್ತು ರೋಗಿಗಳ ಹಿತ",
    "about.pillar4_desc": "ರೋಗಿಗಳ ಗರಿಷ್ಠ ಪ್ರಯೋಜನಕ್ಕಾಗಿ ಕ್ಲಿನಿಕ್‌ನ ಎಲ್ಲಾ ವಿಭಾಗಗಳ ಆಧುನೀಕರಣ ಮತ್ತು ಗುಣಮಟ್ಟ ಹೆಚ್ಚಳ.",

    // Doctors Section
    "doctors.tag": "ತಜ್ಞ ವೈದ್ಯರು",
    "doctors.title": "ನಮ್ಮ ವೈದ್ಯರು",
    "doctors.subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ಅನ್ನು ಮುನ್ನಡೆಸುತ್ತಿರುವ ತಜ್ಞ ದಂಪತಿಗಳ ತಂಡ.",
    "doctors.co_owner": "ಕ್ಲಿನಿಕ್ ಸಹ-ಮಾಲೀಕರು",
    "doctors.spec_label": "ವಿಶೇಷತೆ",
    "doctors.mahesh_spec": "ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಇಂಪ್ಲಾಂಟಾಲಜಿಸ್ಟ್",
    "doctors.ramya_spec": "ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್ ಮತ್ತು ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೀಡಿಸ್ಟ್",
    "doctors.consult_label": "ಸಮಾಲೋಚನೆ:",
    "doctors.consult_days": "ಸೋಮವಾರ – ಶನಿವಾರ &amp; ಭಾನುವಾರ (ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್)",
    "doctors.btn_consult": "ಸಮಾಲೋಚನೆ ಪಡೆಯಿರಿ",
    "doctors.mahesh_name": "ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ.",
    "doctors.ramya_name": "ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್.",
    "doctors.mds_deg": "ಎಂ.ಡಿ.ಎಸ್.",
    "legacy.prabhu_name": "ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು",
    "legacy.doctors_name": "ಡಾ. ಮಹೇಶ್ &amp; ಡಾ. ರಮ್ಯಾ",
    "legacy.timeline_doctors": "ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. &amp; ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್.",

    // Treatments Section
    "treatments.tag": "ದಂತ ಚಿಕಿತ್ಸಾ ವಿಭಾಗಗಳು",
    "treatments.title": "ಚಿಕಿತ್ಸೆಗಳು",
    "treatments.subtitle": "ನಿಮ್ಮ ಸುಂದರ ನಗು ಮತ್ತು ದಂತ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಸುಧಾರಿತ ಚಿಕಿತ್ಸಾ ವಿಧಾನಗಳು.",
    "treatments.learn_more": "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    "treatments.prev": "ಹಿಂದಿನದು",
    "treatments.next": "ಮುಂದಿನದು",
    // Treatments Back-Face Kannada
    "treatments.overview": "ಚಿಕಿತ್ಸಾ ವಿವರಗಳು",
    "treatments.back": "ಹಿಂದಕ್ಕೆ",
    "treatments.book_btn": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
    "treatments.lbl_duration": "ಅವಧಿ",
    "treatments.lbl_comfort": "ಆರೈಕೆ",
    "treatments.val_painless": "ಸಂಪೂರ್ಣ ನೋವುರಹಿತ",
    "treatments.val_natural": "ನೈಸರ್ಗಿಕ ನೋಟ",
    "treatments.val_instant": "ತಕ್ಷಣದ ಫಲಿತಾಂಶ",
    "treatments.t1_p1": "ಡಿಜಿಟಲ್ ರೋಗನಿರ್ಣಯ ಪರೀಕ್ಷೆ ಮತ್ತು ಕಡಿಮೆ ವಿಕಿರಣ ಎಕ್ಸ್-ರೇ",
    "treatments.t1_p2": "ಅಲ್ಟ್ರಾಸಾನಿಕ್ ಕ್ಲೀನಿಂಗ್ ಮತ್ತು ಹಲ್ಲಿನ ಬಣ್ಣದ ಫಿಲ್ಲಿಂಗ್ಸ್",
    "treatments.t1_p3": "ಫ್ಲೋರೈಡ್ ಆರೈಕೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಕುಟುಂಬ ದಂತ ರಕ್ಷಣೆ",
    "treatments.t1_dur": "30–45 ನಿಮಿಷ",
    "treatments.t2_p1": "ಕಸ್ಟಮ್ ಪಿಂಗಾಣಿ ವಿನೀರ್ಸ್ ಮತ್ತು ಕಾಸ್ಮೆಟಿಕ್ ಬಾಂಡಿಂಗ್",
    "treatments.t2_p2": "ಹಲ್ಲುಗಳ ನಡುವಿನ ಅಂತರ ಸರಿಪಡಿಸುವಿಕೆ ಮತ್ತು ಹಲ್ಲಿನ ಮರುರೂಪೀಕರಣ",
    "treatments.t2_p3": "ನಿಮ್ಮ ಮುಖದ ಆಕರ್ಷಣೆಗೆ ತಕ್ಕಂತೆ ಡಿಜಿಟಲ್ ಸ್ಮೈಲ್ ಮೇಕೋವರ್",
    "treatments.t2_dur": "1–2 ಭೇಟಿಗಳು",
    "treatments.t3_p1": "ಕಾಣಿಸದ ಅದೃಶ್ಯ ಅಲೈನರ್ಸ್ (ಅನುಕೂಲಕರ & ತೆಗೆಯಬಹುದಾದ)",
    "treatments.t3_p2": "ಸೆರಾಮಿಕ್ ಮತ್ತು ಮೆಟಲ್ ಬ್ರೇಸ್‌ಗಳ ಮೂಲಕ ಹಲ್ಲುಗಳ ಜೋಡಣೆ",
    "treatments.t3_p3": "ಹಲ್ಲುಗಳ ವಕ್ರತೆ ತಿದ್ದುವಿಕೆ & ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೆಡಿಕ್ಸ್",
    "treatments.t3_dur": "6–18 ತಿಂಗಳು",
    "treatments.t4_p1": "ಕಳೆದುಹೋದ ಹಲ್ಲಿಗೆ ಟೈಟಾನಿಯಂ ಇಂಪ್ಲಾಂಟ್ ಬದಲಿ",
    "treatments.t4_p2": "ತಕ್ಷಣದ ಇಂಪ್ಲಾಂಟ್ ಮತ್ತು ಪೂರ್ಣ ದವಡೆ ಹಲ್ಲುಗಳ ಜೋಡಣೆ",
    "treatments.t4_p3": "ದವಡೆ ಮೂಳೆಯ ರಕ್ಷಣೆ ಮತ್ತು 100% ನೈಸರ್ಗಿಕ ಅಗಿಯುವ ಸಾಮರ್ಥ್ಯ",
    "treatments.t4_dur": "ಶಾಶ್ವತ ಪರಿಹಾರ",
    "treatments.t5_p1": "ಸುಧಾರಿತ ಎಲ್ಇಡಿ ಲೇಸರ್ ಕೋಲ್ಡ್-ಲೈಟ್ ವೈಟ್ನಿಂಗ್ ತಂತ್ರಜ್ಞಾನ",
    "treatments.t5_p2": "ಚಹಾ, ಕಾಫಿ ಮತ್ತು ತಂಬಾಕಿನ ಕಲೆಗಳ ಸಂಪೂರ್ಣ ನಿವಾರಣೆ",
    "treatments.t5_p3": "ಹಲ್ಲಿನ ಎನಾಮಲ್‌ಗೆ ಹಾನಿಯಾಗದಂತೆ 6–8 ಶೇಡ್ಸ್ ಹೊಳಪು",
    "treatments.t5_dur": "45 ನಿಮಿಷ ಭೇಟಿ",
    "treatments.t6_p1": "ಒಂದೇ ಭೇಟಿಯಲ್ಲಿ ಸುಧಾರಿತ ರೋಟರಿ ಎಂಡೋಡಾಂಟಿಕ್ಸ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಅಪೆಕ್ಸ್ ಲೊಕೇಟರ್",
    "treatments.t6_p2": "ಸಂಪೂರ್ಣ ಸೋಂಕು ನಿವಾರಣೆ & ಬಯೋಸೆರಾಮಿಕ್ ರೂಟ್ ಸೀಲಿಂಗ್",
    "treatments.t6_p3": "ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಜೀವಿತಾವಧಿವರೆಗೆ ಕಾಪಾಡುವ ಕ್ಯಾಪ್/ಕ್ರೌನ್",
    "treatments.t6_dur": "45–60 ನಿಮಿಷ",
    "treatments.t7_p1": "ಮಕ್ಕಳಿಗಾಗಿ ಪ್ರೀತಿಯಿಂದ ಕೂಡಿದ ಸೌಮ್ಯ ದಂತ ತಪಾಸಣೆ",
    "treatments.t7_p2": "ನೋವುರಹಿತ ಕ್ಯಾವಿಟಿ ಫಿಲ್ಲಿಂಗ್ಸ್ & ಫಿಶರ್ ಸೀಲಾಂಟ್ಸ್",
    "treatments.t7_p3": "ಮಕ್ಕಳಲ್ಲಿ ದಂತ ಚಿಕಿತ್ಸೆಯ ಭಯ ನಿವಾರಿಸುವ ಸ್ನೇಹಿ ವಾತಾವರಣ",
    "treatments.t7_dur": "20–30 ನಿಮಿಷ",
    "treatments.t8_p1": "ವಸಡು ಕಾಯಿಲೆಗಳಿಗೆ ಡೀಪ್ ಸ್ಕೇಲಿಂಗ್ ಮತ್ತು ರೂಟ್ ಪ್ಲಾನಿಂಗ್",
    "treatments.t8_p2": "ರಕ್ತಸ್ರಾವ ತಡೆಯಲು ಲೇಸರ್ ಪಿರಿಯೊಡಾಂಟಲ್ ಚಿಕಿತ್ಸೆ",
    "treatments.t8_p3": "ವಸಡು ಮರುಸ್ಥಾಪನೆ ಮತ್ತು ಹಲ್ಲುಗಳ ಬೇರು ಬಲಪಡಿಸುವ ವಿಧಾನ",
    "treatments.t8_dur": "1–2 ಭೇಟಿಗಳು",
    "treatments.t9_p1": "ಹಿರಿಯ ನಾಗರಿಕರಿಗಾಗಿ ವಿಶೇಷ ಕಾಳಜಿ ಮತ್ತು ಪ್ರೀತಿಯ ತಪಾಸಣೆ",
    "treatments.t9_p2": "ಒಣ ಬಾಯಿ (ಕ್ಸೆರೋಸ್ಟೊಮಿಯಾ), ಬೇರುಗಳ ಸೋಂಕು ಮತ್ತು ವಸಡು ಸಂವೇದನೆ ಆರೈಕೆ",
    "treatments.t9_p3": "ವಯಸ್ಸಿಗೆ ಸಂಬಂಧಿಸಿದ ಆರೋಗ್ಯ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಸೂಕ್ತವಾದ ದಂತ ಚಿಕಿತ್ಸೆ",
    "treatments.t9_dur": "30–45 ನಿಮಿಷ",
    "treatments.t10_p1": "ನಿಖರ ಅಳತೆಯ ಸಂಪೂರ್ಣ ಮತ್ತು ಭಾಗಶಃ ಕೃತಕ ಹಲ್ಲುಗಳ ಜೋಡಣೆ (ಡೆಂಚರ್ಸ್)",
    "treatments.t10_p2": "ಆಹಾರ ಸೇವನೆ ಸುಲಭವಾಗಿಸಲು ಇಂಪ್ಲಾಂಟ್ ಆಧಾರಿತ ಓವರ್‌ಡೆಂಚರ್ಸ್",
    "treatments.t10_p3": "ನೈಸರ್ಗಿಕ ನಗುವಿನ ಮರುಸ್ಥಾಪನೆ, ತ್ವರಿತ ಮರುಜೋಡಣೆ ಮತ್ತು ದುರಸ್ತಿ",
    "treatments.t10_dur": "3–4 ಭೇಟಿಗಳು",

    "treatments.t1_title": "ಜನರಲ್ ಡೆಂಟಿಸ್ಟ್ರಿ",
    "treatments.t1_sub": "ಆರೋಗ್ಯಕರ ನಗುವಿನ ಅಡಿಪಾಯ",
    "treatments.t1_desc": "ಇಡೀ ಕುಟುಂಬಕ್ಕೆ ಸಮಗ್ರ ರೋಗನಿರೋಧಕ ಮತ್ತು ಪುನಶ್ಚೇತನ ದಂತ ಆರೈಕೆ.",
    "treatments.t2_title": "ಕಾಸ್ಮೆಟಿಕ್ ಡೆಂಟಿಸ್ಟ್ರಿ",
    "treatments.t2_sub": "ನಿಮ್ಮ ನಗುವನ್ನು ಸುಂದರಗೊಳಿಸಿ",
    "treatments.t2_desc": "ವಿನೀರ್ಸ್, ಬಾಂಡಿಂಗ್, ಕಾಂಟೂರಿಂಗ್ ಮತ್ತು ಸುಂದರ ಸ್ಮೈಲ್ ಮೇಕೋವರ್ ಚಿಕಿತ್ಸೆಗಳು.",
    "treatments.t3_title": "ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್ & ಅಲೈನರ್ಸ್",
    "treatments.t3_sub": "ಯಾವುದೇ ವಯಸ್ಸಿನಲ್ಲಿ ನೇರವಾದ ಹಲ್ಲುಗಳು",
    "treatments.t3_desc": "ಆಧುನಿಕ ಬ್ರೇಸ್‌ಗಳು ಮತ್ತು ಅದೃಶ್ಯ ಅಲೈನರ್‌ಗಳ ಮೂಲಕ ಆತ್ಮವಿಶ್ವಾಸದ ನಗು.",
    "treatments.t4_title": "ಡೆಂಟಲ್ ಇಂಪ್ಲಾಂಟ್ಸ್",
    "treatments.t4_sub": "ಶಾಶ್ವತ, ನೈಸರ್ಗಿಕ ಹಲ್ಲಿನ ಬದಲಿ",
    "treatments.t4_desc": "ನೈಸರ್ಗಿಕ ಹಲ್ಲಿನಂತೆಯೇ ಕಾಣುವ ಮತ್ತು ಕಾರ್ಯನಿರ್ವಹಿಸುವ ಸುಧಾರಿತ ಇಂಪ್ಲಾಂಟ್ ಚಿಕಿತ್ಸೆ.",
    "treatments.t5_title": "ಹಲ್ಲುಗಳ ಬಿಳಿಮಾಡುವಿಕೆ",
    "treatments.t5_sub": "ಒಂದೇ ಭೇಟಿಯಲ್ಲಿ ಉಜ್ವಲ ನಗು",
    "treatments.t5_desc": "ಸುರಕ್ಷಿತ, ತ್ವರಿತ ಮತ್ತು ವೃತ್ತಿಪರ ಹಲ್ಲುಗಳ ಬಿಳಿಮಾಡುವಿಕೆ ಚಿಕಿತ್ಸೆ.",
    "treatments.t6_title": "ಎಂಡೊಡಾಂಟಿಕ್ಸ್ ಚಿಕಿತ್ಸೆ / ರೂಟ್ ಕೆನಾಲ್",
    "treatments.t6_sub": "ನೋವು ರಹಿತ ಮತ್ತು ಸೌಮ್ಯ ಚಿಕಿತ್ಸೆ",
    "treatments.t6_desc": "ಸುಧಾರಿತ ರೋಟರಿ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ನಿಮ್ಮ ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಸಂರಕ್ಷಿಸುವ ವಿಧಾನ.",
    "treatments.t7_title": "ಮಕ್ಕಳ ದಂತ ಚಿಕಿತ್ಸೆ",
    "treatments.t7_sub": "ಪುಟ್ಟ ಮಕ್ಕಳ ಮುದ್ದಾದ ನಗುವಿಗೆ ಆರೈಕೆ",
    "treatments.t7_desc": "ಬೆಳೆಯುತ್ತಿರುವ ಮಕ್ಕಳಿಗಾಗಿ ಪ್ರೀತಿ ಮತ್ತು ಸೌಮ್ಯತೆಯಿಂದ ಕೂಡಿದ ವಿಶೇಷ ದಂತ ಚಿಕಿತ್ಸೆ.",
    "treatments.t8_title": "ಪಿರಿಯೊಡಾಂಟಿಕ್ಸ್ & ವಸಡು ಆರೈಕೆ",
    "treatments.t8_sub": "ಆಜೀವ ಕಾಲ ಹಲ್ಲುಗಳಿಗೆ ಬಲವಾದ ಅಡಿಪಾಯ",
    "treatments.t8_desc": "ವಸಡು ಕಾಯಿಲೆಗಳ ಚಿಕಿತ್ಸೆ, ರಕ್ತಸ್ರಾವ ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ಲೇಸರ್ ವಸಡು ಆರೈಕೆ.",
    "treatments.t9_title": "ಹಿರಿಯ ನಾಗರಿಕರ ದಂತ ಆರೈಕೆ",
    "treatments.t9_sub": "ಹಿರಿಯರಿಗಾಗಿ ವಿಶೇಷ ಮತ್ತು ಸೌಮ್ಯ ಆರೈಕೆ",
    "treatments.t9_desc": "ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಆರಾಮದಾಯಕ, ಸುರಕ್ಷಿತ ಮತ್ತು ಕರುಣಾಪೂರ್ಣ ವಿಶೇಷ ದಂತ ಚಿಕಿತ್ಸೆಗಳು.",
    "treatments.t10_title": "ಪ್ರಾಸ್ಥೊಡಾಂಟಿಕ್ಸ್ & ಡೆಂಚರ್ಸ್",
    "treatments.t10_sub": "ನಿಮ್ಮ ನಗು ಮತ್ತು ಅಗಿಯುವ ಶಕ್ತಿಯ ಮರುಸ್ಥಾಪನೆ",
    "treatments.t10_desc": "ಸುಲಭವಾಗಿ ಮಾತನಾಡಲು ಮತ್ತು ಊಟ ಮಾಡಲು ಕಸ್ಟಮ್ ಕೃತಕ ಹಲ್ಲುಗಳು ಮತ್ತು ಫಿಕ್ಸೆಡ್ ಬ್ರಿಡ್ಜ್ ಚಿಕಿತ್ಸೆ.",

    // Specialities Section
    "spec.tag": "ಚಿಕಿತ್ಸಾ ವಿಭಾಗಗಳು",
    "spec.title": "ವಿಶೇಷ ಚಿಕಿತ್ಸೆಗಳು",
    "spec.subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್‌ನಲ್ಲಿ ನಮ್ಮ ವೈದ್ಯರು ಮತ್ತು ಪರಿಣಿತ ತಂಡದಿಂದ ಒದಗಿಸಲಾಗುವ ಪ್ರಮುಖ ದಂತ ಚಿಕಿತ್ಸೆಗಳು.",
    "spec.ortho_title": "ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್",
    "spec.ortho_desc": "ಹಲ್ಲುಗಳ ಜೋಡಣೆ, ದಂತ ತಿದ್ದುಪಡಿ ಮತ್ತು ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೀಡಿಕ್ಸ್ ಚಿಕಿತ್ಸೆ.",
    "spec.ortho_lead": "ಇನ್‌ಹೌಸ್ ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್: ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. (ಎಂ.ಡಿ.ಎಸ್.)",
    "spec.perio_title": "ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ರಿ",
    "spec.perio_desc": "ವಸಡುಗಳ ಆರೋಗ್ಯ ರಕ್ಷಣೆ, ರೋಗ ನಿರ್ಣಯ ಮತ್ತು ವಸಡು ಕಾಯಿಲೆಗಳ ಚಿಕಿತ್ಸೆ.",
    "spec.perio_lead": "ಇನ್‌ಹೌಸ್ ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್: ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. (ಎಂ.ಡಿ.ಎಸ್.)",
    "spec.implant_title": "ಇಂಪ್ಲಾಂಟಾಲಜಿ",
    "spec.implant_desc": "ಕಳೆದುಹೋದ ಹಲ್ಲುಗಳ ಬದಲಿಗಾಗಿ ಸುಧಾರಿತ ದಂತ ಇಂಪ್ಲಾಂಟ್ ಚಿಕಿತ್ಸೆಗಳು.",
    "spec.implant_lead": "ಇನ್‌ಹೌಸ್ ಇಂಪ್ಲಾಂಟಾಲಜಿಸ್ಟ್: ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. (ಎಂ.ಡಿ.ಎಸ್.)",
    "spec.surg_title": "ಓರಲ್ ಸರ್ಜರಿ",
    "spec.surg_desc": "ಅನುಭವಿ ತಜ್ಞರ ತಂಡದಿಂದ ಒದಗಿಸಲಾಗುವ ಬಾಯಿ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ಆರೈಕೆ.",
    "spec.prostho_title": "ಪ್ರಾಸ್ಥೊಡಾಂಟಿಕ್ಸ್",
    "spec.prostho_desc": "ಕೃತಕ ಹಲ್ಲುಗಳ ಜೋಡಣೆ ಮತ್ತು ದಂತ ಪುನರ್ನಿರ್ಮಾಣ ಚಿಕಿತ್ಸೆಗಳು.",
    "spec.pedia_title": "ಪೀಡಿಯಾಟ್ರಿಕ್ ಡೆಂಟಿಸ್ಟ್ರಿ",
    "spec.pedia_desc": "ಮಕ್ಕಳ ಮತ್ತು ಎಳೆಯ ಹಲ್ಲುಗಳ ವಿಶೇಷ ರಕ್ಷಣೆ ಹಾಗೂ ಚಿಕಿತ್ಸೆ.",
    "spec.specialist_support": "ತಜ್ಞರ ಸಹಯೋಗ",
    "spec.orbit_hub_sub": "ವಿಶೇಷ ಚಿಕಿತ್ಸಾ ವಲಯ",
    "spec.orbit_status": "ನಿರಂತರ ಪರಿಭ್ರಮಣೆ (ಗಮನಿಸಲು ಕಾರ್ಡ್ ಮೇಲೆ ಕರ್ಸರ್ ಇರಿಸಿ ಅಥವಾ ಕ್ಲಿಕ್ ಮಾಡಿ)",

    // Team Section
    "team.tag": "ಚಿಕಿತ್ಸಾ ತಂಡ",
    "team.title": "ನಮ್ಮ ತಂಡ",
    "team.subtitle": "ಅನುಭವಿ ತಜ್ಞರ ಸಮಿತಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ತುರ್ತು ಸೌಲಭ್ಯ.",
    "team.associate_role": "ಸಹಾಯಕ ದಂತ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕಿ",
    "team.associate_deg": "ಬಿ.ಡಿ.ಎಸ್. &bull; ಸಹಾಯಕ ದಂತ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕಿ",
    "team.associate_bio": '"ಅವರು 2011 ರಲ್ಲಿ ಪದವಿ ಪಡೆದಿದ್ದು, 2013 ರಿಂದ ನಮ್ಮೊಂದಿಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದ್ದಾರೆ. ರೋಗಿ ಸ್ನೇಹಿ ವೃತ್ತಿಪರರಾಗಿದ್ದು, ದಂತವೈದ್ಯಕೀಯ ಕ್ಷೇತ್ರದ ಇತ್ತೀಚಿನ ಬೆಳವಣಿಗೆಗಳ ಬಗ್ಗೆ ನಿರಂತರವಾಗಿ ತರಬೇತಿ ಪಡೆಯುತ್ತಿದ್ದಾರೆ."',
    "team.panel_title": "ತಜ್ಞರ ಸಮಿತಿ",
    "team.panel_desc": "ನಮ್ಮ ರೋಗಿಗಳ ಎಲ್ಲಾ ದಂತ ಚಿಕಿತ್ಸಾ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸಲು ಕ್ಲಿನಿಕ್ ತನ್ನದೇ ಆದ ಅನುಭವಿ ತಜ್ಞರ ತಂಡವನ್ನು ಹೊಂದಿದೆ:",
    "team.surg_sub": "ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ದಂತ ಆರೈಕೆ.",
    "team.prostho_sub": "ಹಲ್ಲುಗಳ ಪುನರ್ನಿರ್ಮಾಣ ಮತ್ತು ಪ್ರಾಸ್ಥೆಟಿಕ್ಸ್.",
    "team.pedia_sub": "ಮಕ್ಕಳ ವಿಶೇಷ ದಂತ ರಕ್ಷಣೆ.",
    "team.emergency_title": "ವೈದ್ಯಕೀಯ ತುರ್ತು ಸೇವೆ",
    "team.emergency_desc": '"ಯಾವುದೇ ವೈದ್ಯಕೀಯ ತುರ್ತು ಪರಿಸ್ಥಿತಿಯ ಸಂದರ್ಭದಲ್ಲಿ, ಕ್ಲಿನಿಕ್‌ನೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರುವ ವೈದ್ಯರು ಹಾಗೂ ಸಮೀಪದ ಪ್ರತಿಷ್ಠಿತ ನರ್ಸಿಂಗ್ ಹೋಮ್ ಸಹಯೋಗದ ಮೂಲಕ ತಕ್ಷಣದ ವೈದ್ಯಕೀಯ ನೆರವು ಮತ್ತು ತುರ್ತು ಆರೈಕೆಯನ್ನು ಒದಗಿಸಲಾಗುತ್ತದೆ."',

    // Legacy Section
    "legacy.tag": "ಪರಂಪರೆ ಮತ್ತು ಇತಿಹಾಸ",
    "legacy.title": "ಕ್ಲಿನಿಕ್ ಪರಂಪರೆ",
    "legacy.subtitle": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರಿನಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ದಂತ ಸೇವೆಯ ಸುವರ್ಣ ಹೆಜ್ಜೆಗಳು.",
    "legacy.step1_badge": "ಮೂಲ ಸ್ಥಾಪನೆ",
    "legacy.step1_desc": "ಸರಸ್ವತಿಪುರಂನಲ್ಲಿ ರೋಗಿಗಳ ಸೇವೆಯ ಭದ್ರ ಬುನಾದಿಯನ್ನು ಹಾಕಿದ ಪ್ರತಿಷ್ಠಿತ ದಂತ ಕ್ಲಿನಿಕ್.",
    "legacy.step2_badge": "ಪರಂಪರೆ",
    "legacy.step2_title": "ಕ್ಲಿನಿಕ್ ಪರಂಪರೆ",
    "legacy.step2_desc": "ಮೈಸೂರಿನ ಜನತೆಯ ನಡುವೆ ದಶಕಗಳಿಂದ ಬೆಳೆದುಬಂದ ವಿಶ್ವಾಸಾರ್ಹ ದಂತ ಸೇವಾ ಪರಂಪರೆ.",
    "legacy.step3_badge": "ಮೈಲಿಗಲ್ಲು",
    "legacy.step3_desc": "ಡಾ. ಎಂ.ಜಿ. ಪ್ರಭು ಅವರ ಆಶೀರ್ವಾದದೊಂದಿಗೆ, ಡಾ. ಮಹೇಶ್ ಮತ್ತು ಡಾ. ರಮ್ಯಾ ಅವರು 2012 ರಲ್ಲಿ ಕ್ಲಿನಿಕ್ ಅನ್ನು ವಹಿಸಿಕೊಂಡರು.",
    "legacy.step4_badge": "ನಾಯಕತ್ವ",
    "legacy.step4_desc": "ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ರಿ, ಇಂಪ್ಲಾಂಟಾಲಜಿ, ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್ ಮತ್ತು ಡೆಂಟೊಫೇಶಿಯಲ್ ಆರ್ಥೋಪೀಡಿಕ್ಸ್ ಮುನ್ನಡೆಸುತ್ತಿರುವ ತಜ್ಞ ದಂಪತಿಗಳು.",
    "legacy.step5_badge": "ಪ್ರಸ್ತುತ ಮತ್ತು ಭವಿಷ್ಯ",
    "legacy.step5_title": "ಕ್ಲಿನಿಕ್‌ನ ನಿರಂತರ ಉನ್ನತೀಕರಣ",
    "legacy.step5_desc": "ಅದೇ ಉತ್ತಮ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸುತ್ತಾ ರೋಗಿಗಳ ಅನುಕೂಲಕ್ಕಾಗಿ ಕ್ಲಿನಿಕ್‌ನ ನಿರಂತರ ಸುಧಾರಣೆ ಮತ್ತು ಉನ್ನತೀಕರಣ.",

    // Gallery Section
    "gallery.tag": "ಕ್ಲಿನಿಕ್ ಚಿತ್ರಣ",
    "gallery.title": "ಗ್ಯಾಲರಿ",
    "gallery.subtitle": "ಕ್ಲಿನಿಕ್‌ನ ನೈಜ ಮುಂಭಾಗದ ಛಾಯಾಚಿತ್ರ ಮತ್ತು ಒಳಾಂಗಣ ಸೌಲಭ್ಯಗಳ ನೋಟ.",
    "gallery.btn_view": "ದೊಡ್ಡದಾಗಿ ನೋಡಿ",
    "gallery.item1_tag": "ನೈಜ ಚಿತ್ರ",
    "gallery.item1_title": "ಕ್ಲಿನಿಕ್ ಮುಂಭಾಗ",
    "gallery.item1_desc": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರಿನ 388, 5ನೇ ಕ್ರಾಸ್, 14ನೇ ಮುಖ್ಯರಸ್ತೆಯಲ್ಲಿರುವ ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್‌ನ ನೈಜ ನೋಟ ಮತ್ತು ಬೋರ್ಡ್.",
    "gallery.item2_tag": "ಸೌಲಭ್ಯ",
    "gallery.item2_title": "ಕ್ಲಿನಿಕ್ ಒಳಾಂಗಣ",
    "gallery.item2_desc": "ಸ್ವಚ್ಛ ಮತ್ತು ಆಹ್ಲಾದಕರ ಒಳಾಂಗಣ ಕಾರಿಡಾರ್ ಹಾಗೂ ತಪಾಸಣಾ ಕೊಠಡಿಗಳು.",
    "gallery.item3_tag": "ಸ್ವಾಗತ ವಿಭಾಗ",
    "gallery.item3_title": "ಸ್ವಾಗತ ಕೌಂಟರ್",
    "gallery.item3_desc": "ರೋಗಿಗಳನ್ನು ಸ್ವಾಗತಿಸುವ ಡೆಸ್ಕ್ ಮತ್ತು ಆರಾಮದಾಯಕ ಕಾಯುವ ಕೋಣೆ.",
    "gallery.item4_tag": "ಚಿಕಿತ್ಸಾ ವಿಭಾಗ",
    "gallery.item4_title": "ಚಿಕಿತ್ಸಾ ಕೊಠಡಿ",
    "gallery.item4_desc": "ಆರ್ಥೊಡಾಂಟಿಕ್ ಮತ್ತು ಪಿರಿಯೊಡಾಂಟಲ್ ಚಿಕಿತ್ಸೆಗಳಿಗಾಗಿ ಸಜ್ಜುಗೊಂಡ ಸುಧಾರಿತ ಡೆಂಟಲ್ ಚೇರ್ ಮತ್ತು ಸೌಲಭ್ಯ.",
    "gallery.item5_tag": "ವೈದ್ಯರು",
    "gallery.item5_title": "ವೈದ್ಯರ ಕೊಠಡಿ",
    "gallery.item5_desc": "ರೋಗಿಗಳ ತಪಾಸಣೆ ಮತ್ತು ಚಿಕಿತ್ಸಾ ಚರ್ಚೆಗಾಗಿ ವೈದ್ಯರ ಕೊಠಡಿ.",
    "gallery.item6_tag": "ಸಿಬ್ಬಂದಿ",
    "gallery.item6_title": "ದಂತವೈದ್ಯಕೀಯ ತಂಡ",
    "gallery.item6_desc": "ಉತ್ತಮ ಸೇವೆ ನೀಡುವ ಸಮರ್ಪಿತ ದಂತವೈದ್ಯರು ಮತ್ತು ಸಹಾಯಕ ಸಿಬ್ಬಂದಿ.",
    "gallery.item7_tag": "ತಂತ್ರಜ್ಞಾನ",
    "gallery.item7_title": "ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳು",
    "gallery.item7_desc": "ಕ್ರಿಮಿನಾಶಕ ಉಪಕರಣಗಳು ಮತ್ತು ರೋಗಿಗಳ ಚಿಕಿತ್ಸೆಗೆ ಪೂರಕವಾದ ಸುಧಾರಿತ ಯಂತ್ರೋಪಕರಣಗಳು.",

    // Appointment Section
    "app.tag": "ಸಮಾಲೋಚನೆ ವಿನಂತಿ",
    "app.title": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್",
    "app.subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು - ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸುವಿಕೆ.",
    "app.plan_title": "ನಿಮ್ಮ ಭೇಟಿಯನ್ನು ಯೋಜಿಸಿ",
    "app.plan_desc": "ನಿಮ್ಮ ಅಪೇಕ್ಷಿತ ದಿನಾಂಕ ಮತ್ತು ದಂತ ಸಮಸ್ಯೆಯನ್ನು ನಮೂದಿಸಿ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ.",
    "app.benefit1": "ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. (ಎಂ.ಡಿ.ಎಸ್.) ಅಥವಾ ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. (ಎಂ.ಡಿ.ಎಸ್.) ಅವರೊಂದಿಗೆ ಸಮಾಲೋಚನೆ",
    "app.benefit2": "ಬೆಳಗಿನ ಅವಧಿ (ಬೆಳಿಗ್ಗೆ 10:30 – ಮಧ್ಯಾಹ್ನ 01:30)",
    "app.benefit3": "ಸಂಜೆಯ ಅವಧಿ (ಸಂಜೆ 05:00 – ರಾತ್ರಿ 09:00)",
    "app.benefit4": "ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದಾದ ಸ್ಥಳ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "app.timings_heading": "ಕ್ಲಿನಿಕ್ ಸಮಯ",
    "app.timings_schedule": "ಸೋಮವಾರ – ಶನಿವಾರ:<br>ಬೆಳಿಗ್ಗೆ 10:30 – ಮಧ್ಯಾಹ್ನ 01:30<br>ಸಂಜೆ 05:00 – ರಾತ್ರಿ 09:00<br><br>ಭಾನುವಾರ:<br>ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮಾತ್ರ",
    "app.label_name": "ರೋಗಿಯ ಹೆಸರು",
    "app.ph_name": "ರೋಗಿಯ ಪೂರ್ಣ ಹೆಸರು",
    "app.label_mobile": "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    "app.ph_mobile": "10 ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
    "app.label_date": "ಅಪೇಕ್ಷಿತ ದಿನಾಂಕ",
    "app.label_time": "ಅಪೇಕ್ಷಿತ ಸಮಯ",
    "app.opt_time_select": "ಅಪೇಕ್ಷಿತ ಅವಧಿಯನ್ನು ಆರಿಸಿ...",
    "app.opt_time_morning": "ಬೆಳಿಗ್ಗೆ 10:30 – ಮಧ್ಯಾಹ್ನ 01:30 (ಬೆಳಗಿನ ಅವಧಿ)",
    "app.opt_time_evening": "ಸಂಜೆ 05:00 – ರಾತ್ರಿ 09:00 (ಸಂಜೆಯ ಅವಧಿ)",
    "app.label_reason": "ಭೇಟಿಯ ಉದ್ದೇಶ / ಚಿಕಿತ್ಸೆ",
    "app.opt_reason_select": "ವಿಶೇಷತೆ ಅಥವಾ ಸಮಸ್ಯೆಯನ್ನು ಆರಿಸಿ...",
    "app.opt_general": "ಸಾಮಾನ್ಯ ದಂತ ಸಮಾಲೋಚನೆ",
    "app.label_msg": "ಸಂದೇಶ",
    "app.ph_msg": "ಯಾವುದೇ ನಿರ್ದಿಷ್ಟ ಮಾಹಿತಿ ಅಥವಾ ಟಿಪ್ಪಣಿ ಬರೆಯಿರಿ...",
    "app.btn_submit": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕೋರಿಕೆ ಸಲ್ಲಿಸಿ",
    "app.success_title": "ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕೋರಿಕೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ.",
    "app.success_desc": "ಇದು ಪ್ರದರ್ಶನ ಮಾದರಿಯಾಗಿದೆ. ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ದಾಖಲಿಸಲಾಗಿದೆ.",
    "app.btn_reset": "ಮತ್ತೊಂದು ಕೋರಿಕೆ ಸಲ್ಲಿಸಿ",
    "app.modal_title": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕೋರಿಕೆ ಸ್ವೀಕರಿಸಲಾಗಿದೆ!",
    "app.modal_subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಭೇಟಿಯ ಕೋರಿಕೆಯನ್ನು ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ದಾಖಲಿಸಲಾಗಿದೆ.",
    "app.modal_note": "ಇದು ಮುಂಗಡ ಪ್ರದರ್ಶನ ಮಾದರಿಯಾಗಿದೆ. ಯಾವುದೇ ನೈಜ ಬುಕಿಂಗ್ ಅಥವಾ ಪಾವತಿ ಪ್ರಕ್ರಿಯೆಯಲ್ಲ.",
    "app.modal_btn_close": "ಮುಚ್ಚಿ",

    
    // FAQ Section
    "faq.tag": "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೋತ್ತರಗಳು",
    "faq.title": "ದಂತ ಆರೋಗ್ಯದ ಬಗೆಗಿನ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು",
    "faq.subtitle": "ಚಿಕಿತ್ಸೆಗಳು, ಆರ್ಥೊಡಾಂಟಿಕ್ ಅಲೈನರ್‌ಗಳು, ಇಂಪ್ಲಾಂಟ್‌ಗಳು ಮತ್ತು ದಂತ ಆರೈಕೆಯ ಕುರಿತು ನಿಮ್ಮ ಸಂದೇಹಗಳಿಗೆ ಉತ್ತರಗಳು.",
    "faq.q1": "ನಿಯಮಿತ ತಪಾಸಣೆಗಾಗಿ ಎಷ್ಟು ಸಮಯಕ್ಕೊಮ್ಮೆ ದಂತವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಬೇಕು?",
    "faq.a1": "ಪ್ರತಿ 6 ತಿಂಗಳಿಗೊಮ್ಮೆ ನಿಯಮಿತ ದಂತ ತಪಾಸಣೆ ಮತ್ತು ಹಲ್ಲುಗಳ ಸ್ವಚ್ಛತೆ (ಕ್ಲೀನಿಂಗ್) ಮಾಡಿಸಿಕೊಳ್ಳುವುದು ಉತ್ತಮ. ಇದರಿಂದ ಹಲ್ಲು ಹುಳುಕು, ಒಸಡಿನ ರಕ್ತಸ್ರಾವ ಮುಂತಾದ ಸಮಸ್ಯೆಗಳನ್ನು ಆರಂಭಿಕ ಹಂತದಲ್ಲೇ ತಡೆಗಟ್ಟಬಹುದು.",
    "faq.q2": "ಡೆಂಟಲ್ ಇಂಪ್ಲಾಂಟ್ ಚಿಕಿತ್ಸೆ ನೋವುಂಟುಮಾಡುತ್ತದೆಯೇ? ಇದು ಎಷ್ಟು ಕಾಲ ಬಾಳಿಕೆ ಬರುತ್ತದೆ?",
    "faq.a2": "ಇಂಪ್ಲಾಂಟ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಲೋಕಲ್ ಅನಸ್ತೇಶಿಯಾ ಅಡಿಯಲ್ಲಿ ಅತ್ಯಂತ ನಿಖರವಾಗಿ ಮತ್ತು ನೋವಿಲ್ಲದೆ ನಡೆಸಲಾಗುತ್ತದೆ. ಸರಿಯಾದ ಆರೈಕೆ ಮತ್ತು ನಿಗದಿತ ತಪಾಸಣೆಗಳೊಂದಿಗೆ, ಇಂಪ್ಲಾಂಟ್‌ಗಳು ಜೀವಿತಾವಧಿಯವರೆಗೆ ಶಾಶ್ವತವಾಗಿ ಉಳಿಯುತ್ತವೆ.",
    "faq.q3": "ಸಾಂಪ್ರದಾಯಿಕ ಬ್ರೇಸ್‌ಗಳು ಮತ್ತು ಅದೃಶ್ಯ ಅಲೈನರ್‌ಗಳ (Aligners) ನಡುವಿನ ವ್ಯತ್ಯಾಸವೇನು?",
    "faq.a3": "ಸಾಂಪ್ರದಾಯಿಕ ಬ್ರೇಸ್‌ಗಳಲ್ಲಿ ತಂತಿಗಳು ಮತ್ತು ಬ್ರಾಕೆಟ್‌ಗಳನ್ನು ಬಳಸಲಾಗುತ್ತದೆ. ಕ್ಲಿಯರ್ ಅಲೈನರ್‌ಗಳು ಪಾರದರ್ಶಕವಾಗಿದ್ದು ಸುಲಭವಾಗಿ ತೆಗೆಯಬಹುದಾದ ಆಧುನಿಕ ಟ್ರೇಗಳಾಗಿವೆ. ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. (ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್) ನಿಮ್ಮ ಹಲ್ಲುಗಳ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಸೂಕ್ತ ಆಯ್ಕೆಯನ್ನು ಸೂಚಿಸುತ್ತಾರೆ.",
    "faq.q4": "ಹಲ್ಲುಜ್ಜುವಾಗ ಒಸಡುಗಳಿಂದ ರಕ್ತ ಬರುವುದು ಏಕೆ? ಇದಕ್ಕೆ ಏನು ಪರಿಹಾರ?",
    "faq.a4": "ಒಸಡುಗಳಿಂದ ರಕ್ತ ಬರುವುದು ಜಿಂಜೈವಿಟಿಸ್ ಅಥವಾ ಹಲ್ಲಿನ ಬುಡದಲ್ಲಿ ಪಾಚಿ/ಕಲ್ಮಶ ಸಂಗ್ರಹವಾಗಿರುವುದರ ಲಕ್ಷಣವಾಗಿದೆ. ತಜ್ಞ ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. ಅವರಿಂದ ಸ್ಕೇಲಿಂಗ್ ಮಾಡಿಸಿಕೊಳ್ಳುವುದರಿಂದ ಒಸಡುಗಳು ಪುನಃ ಆರೋಗ್ಯಕರವಾಗುತ್ತವೆ.",
    "faq.q5": "ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆ ನೋವಿನಿಂದ ಕೂಡಿರುತ್ತದೆಯೇ? ಇದರಿಂದ ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಉಳಿಸಬಹುದೇ?",
    "faq.a5": "ಆಧುನಿಕ ರೋಟರಿ ತಂತ್ರಜ್ಞಾನದಿಂದ ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆಯು ಸಂಪೂರ್ಣವಾಗಿ ನೋವುರಹಿತವಾಗಿರುತ್ತದೆ. ಸೋಂಕಿತ ಭಾಗವನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ ಕ್ಯಾಪ್ (ಕ್ರೌನ್) ಅಳವಡಿಸುವುದರಿಂದ ನಿಮ್ಮ ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಶಾಶ್ವತವಾಗಿ ಉಳಿಸಿಕೊಳ್ಳಬಹುದು.",
    "faq.q6": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡುವುದು ಹೇಗೆ? ಭಾನುವಾರ ಕ್ಲಿನಿಕ್ ತೆರೆದಿರುತ್ತದೆಯೇ?",
    "faq.a6": "ನಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ನ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಫಾರ್ಮ್ ಮೂಲಕ ಅಥವಾ ವಾಟ್ಸಾಪ್ (+91 94489 84480) ಮೂಲಕ ಸುಲಭವಾಗಿ ಭೇಟಿಯನ್ನು ನಿಗದಿಪಡಿಸಬಹುದು. ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗೆ ನಿಯಮಿತ ಸಮಯಗಳಲ್ಲಿ ಹಾಗೂ ಭಾನುವಾರದಂದು ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಪಡೆದವರಿಗೆ ಮಾತ್ರ ಚಿಕಿತ್ಸೆ ಲಭ್ಯವಿದೆ.",

    
    // FAQ Section
    "faq.tag": "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೋತ್ತರಗಳು",
    "faq.title": "ದಂತ ಆರೋಗ್ಯದ ಬಗೆಗಿನ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು",
    "faq.subtitle": "ಚಿಕಿತ್ಸೆಗಳು, ಆರ್ಥೊಡಾಂಟಿಕ್ ಅಲೈನರ್‌ಗಳು, ಇಂಪ್ಲಾಂಟ್‌ಗಳು ಮತ್ತು ದಂತ ಆರೈಕೆಯ ಕುರಿತು ನಿಮ್ಮ ಸಂದೇಹಗಳಿಗೆ ಉತ್ತರಗಳು.",
    "faq.q1": "ನಿಯಮಿತ ತಪಾಸಣೆಗಾಗಿ ಎಷ್ಟು ಸಮಯಕ್ಕೊಮ್ಮೆ ದಂತವೈದ್ಯರನ್ನು ಭೇಟಿ ಮಾಡಬೇಕು?",
    "faq.a1": "ಪ್ರತಿ 6 ತಿಂಗಳಿಗೊಮ್ಮೆ ನಿಯಮಿತ ದಂತ ತಪಾಸಣೆ ಮತ್ತು ಹಲ್ಲುಗಳ ಸ್ವಚ್ಛತೆ (ಕ್ಲೀನಿಂಗ್) ಮಾಡಿಸಿಕೊಳ್ಳುವುದು ಉತ್ತಮ. ಇದರಿಂದ ಹಲ್ಲು ಹುಳುಕು, ಒಸಡಿನ ರಕ್ತಸ್ರಾವ ಮುಂತಾದ ಸಮಸ್ಯೆಗಳನ್ನು ಆರಂಭಿಕ ಹಂತದಲ್ಲೇ ತಡೆಗಟ್ಟಬಹುದು.",
    "faq.q2": "ಡೆಂಟಲ್ ಇಂಪ್ಲಾಂಟ್ ಚಿಕಿತ್ಸೆ ನೋವುಂಟುಮಾಡುತ್ತದೆಯೇ? ಇದು ಎಷ್ಟು ಕಾಲ ಬಾಳಿಕೆ ಬರುತ್ತದೆ?",
    "faq.a2": "ಇಂಪ್ಲಾಂಟ್ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಲೋಕಲ್ ಅನಸ್ತೇಶಿಯಾ ಅಡಿಯಲ್ಲಿ ಅತ್ಯಂತ ನಿಖರವಾಗಿ ಮತ್ತು ನೋವಿಲ್ಲದೆ ನಡೆಸಲಾಗುತ್ತದೆ. ಸರಿಯಾದ ಆರೈಕೆ ಮತ್ತು ನಿಗದಿತ ತಪಾಸಣೆಗಳೊಂದಿಗೆ, ಇಂಪ್ಲಾಂಟ್‌ಗಳು ಜೀವಿತಾವಧಿಯವರೆಗೆ ಶಾಶ್ವತವಾಗಿ ಉಳಿಯುತ್ತವೆ.",
    "faq.q3": "ಸಾಂಪ್ರದಾಯಿಕ ಬ್ರೇಸ್‌ಗಳು ಮತ್ತು ಅದೃಶ್ಯ ಅಲೈನರ್‌ಗಳ (Aligners) ನಡುವಿನ ವ್ಯತ್ಯಾಸವೇನು?",
    "faq.a3": "ಸಾಂಪ್ರದಾಯಿಕ ಬ್ರೇಸ್‌ಗಳಲ್ಲಿ ತಂತಿಗಳು ಮತ್ತು ಬ್ರಾಕೆಟ್‌ಗಳನ್ನು ಬಳಸಲಾಗುತ್ತದೆ. ಕ್ಲಿಯರ್ ಅಲೈನರ್‌ಗಳು ಪಾರದರ್ಶಕವಾಗಿದ್ದು ಸುಲಭವಾಗಿ ತೆಗೆಯಬಹುದಾದ ಆಧುನಿಕ ಟ್ರೇಗಳಾಗಿವೆ. ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. (ಆರ್ಥೊಡಾಂಟಿಸ್ಟ್) ನಿಮ್ಮ ಹಲ್ಲುಗಳ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಿ ಸೂಕ್ತ ಆಯ್ಕೆಯನ್ನು ಸೂಚಿಸುತ್ತಾರೆ.",
    "faq.q4": "ಹಲ್ಲುಜ್ಜುವಾಗ ಒಸಡುಗಳಿಂದ ರಕ್ತ ಬರುವುದು ಏಕೆ? ಇದಕ್ಕೆ ಏನು ಪರಿಹಾರ?",
    "faq.a4": "ಒಸಡುಗಳಿಂದ ರಕ್ತ ಬರುವುದು ಜಿಂಜೈವಿಟಿಸ್ ಅಥವಾ ಹಲ್ಲಿನ ಬುಡದಲ್ಲಿ ಪಾಚಿ/ಕಲ್ಮಶ ಸಂಗ್ರಹವಾಗಿರುವುದರ ಲಕ್ಷಣವಾಗಿದೆ. ತಜ್ಞ ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. ಅವರಿಂದ ಸ್ಕೇಲಿಂಗ್ ಮಾಡಿಸಿಕೊಳ್ಳುವುದರಿಂದ ಒಸಡುಗಳು ಪುನಃ ಆರೋಗ್ಯಕರವಾಗುತ್ತವೆ.",
    "faq.q5": "ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆ ನೋವಿನಿಂದ ಕೂಡಿರುತ್ತದೆಯೇ? ಇದರಿಂದ ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಉಳಿಸಬಹುದೇ?",
    "faq.a5": "ಆಧುನಿಕ ರೋಟರಿ ತಂತ್ರಜ್ಞಾನದಿಂದ ರೂಟ್ ಕೆನಾಲ್ ಚಿಕಿತ್ಸೆಯು ಸಂಪೂರ್ಣವಾಗಿ ನೋವುರಹಿತವಾಗಿರುತ್ತದೆ. ಸೋಂಕಿತ ಭಾಗವನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಿ ಕ್ಯಾಪ್ (ಕ್ರೌನ್) ಅಳವಡಿಸುವುದರಿಂದ ನಿಮ್ಮ ನೈಸರ್ಗಿಕ ಹಲ್ಲನ್ನು ಶಾಶ್ವತವಾಗಿ ಉಳಿಸಿಕೊಳ್ಳಬಹುದು.",
    "faq.q6": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡುವುದು ಹೇಗೆ? ಭಾನುವಾರ ಕ್ಲಿನಿಕ್ ತೆರೆದಿರುತ್ತದೆಯೇ?",
    "faq.a6": "ನಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ನ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಫಾರ್ಮ್ ಮೂಲಕ ಅಥವಾ ವಾಟ್ಸಾಪ್ (+91 94489 84480) ಮೂಲಕ ಸುಲಭವಾಗಿ ಭೇಟಿಯನ್ನು ನಿಗದಿಪಡಿಸಬಹುದು. ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗೆ ನಿಯಮಿತ ಸಮಯಗಳಲ್ಲಿ ಹಾಗೂ ಭಾನುವಾರದಂದು ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಪಡೆದವರಿಗೆ ಮಾತ್ರ ಚಿಕಿತ್ಸೆ ಲಭ್ಯವಿದೆ.",

    // Location & Contact Section
    "loc.tag": "ಕ್ಲಿನಿಕ್ ವಿಳಾಸ",
    "loc.title": "ಸ್ಥಳ &amp; ವಿಳಾಸ",
    "loc.subtitle": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರಿನ ಕೇಂದ್ರ ಸ್ಥಳದಲ್ಲಿದೆ.",
    "loc.label_address": "ವಿಳಾಸ:",
    "loc.full_address": "388, 5ನೇ ಕ್ರಾಸ್, 14ನೇ ಮುಖ್ಯರಸ್ತೆ,<br>ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ,<br>ಸರಸ್ವತಿಪುರಂ, ಸರಸ್ವತೀಪುರಂ.,<br>ಮೈಸೂರು",
    "loc.timings_title": "ಕ್ಲಿನಿಕ್ ಸಮಯ",
    "loc.days": "ಸೋಮವಾರ – ಶನಿವಾರ",
    "loc.hours": "ಬೆಳಿಗ್ಗೆ 10:30 – ಮಧ್ಯಾಹ್ನ 01:30<br>ಸಂಜೆ 05:00 – ರಾತ್ರಿ 09:00",
    "loc.sunday_label": "ಭಾನುವಾರ",
    "loc.sunday_hours": "ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮಾತ್ರ",
    "loc.landmark": "ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "loc.btn_directions": "ದಾರಿ ನಕ್ಷೆ ನೋಡಿ",

    // Contact Section
    "contact.tag": "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    "contact.title": "ಸಂಪರ್ಕ",
    "contact.subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು.",
    "contact.details_title": "ಸಂಪರ್ಕ ವಿವರಗಳು",
    "contact.phone_label": "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ:",
    "contact.emergency_label": "ತುರ್ತು ಸಂಪರ್ಕ:",
    "contact.whatsapp_label": "ವಾಟ್ಸಾಪ್:",
    "contact.email_label": "ಇಮೇಲ್:",
    "contact.working_hours_title": "ಕೆಲಸದ ಸಮಯ",
    "contact.card1_title": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್",
    "contact.quick_chat": "ತ್ವರಿತ ಚಾಟ್",
    "contact.whatsapp_btn": "ವಾಟ್ಸಾಪ್",
    "loc.coordinates": "ಭೌಗೋಳಿಕ ನಿರ್ದೇಶಾಂಕಗಳು: 12.302484, 76.627998",
    "loc.city": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "loc.hours_inline": "ಬೆಳಿಗ್ಗೆ 10:30 – ಮಧ್ಯಾಹ್ನ 01:30 &bull; ಸಂಜೆ 05:00 – ರಾತ್ರಿ 09:00",
    "loc.sunday_hours_inline": "ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮಾತ್ರ",
    "lightbox.title": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ಮುಂಭಾಗ &amp; ನಾಮಫಲಕ",

    // Footer
    "footer.nav_title": "ಪುಟಗಳು",
    "footer.address_timings": "ಕ್ಲಿನಿಕ್ ವಿಳಾಸ, ಸಮಯ &amp; ಸಂಪರ್ಕ",
    "footer.rights": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "footer.draft": "ಸ್ಥಳೀಯ ಪ್ರಸ್ತುತಿ ಮಾದರಿ",

    // Mobile Actions
    "mobile.book_visit": "ಬುಕ್ ಮಾಡಿ",
    "mobile.directions": "ದಾರಿ ನಕ್ಷೆ"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initLanguageSwitcher();
  initStickyNavbar();
  initMobileMenu();
  initLiveClinicStatus();
  initAppointmentForm();
  initLightbox();
  initDateConstraints();
  initScrollReveal();
  initAboutCardsSlide();
  initSpecialitiesCircularOrbit();
  initTeamCardsSparkle();
  initLegacyTimelineScrollHighlight();
  initContactCardsHighlight();
  initTreatmentsCarousel();
  initMouseParallax();
  initTimelineProgress();
  initFaqAccordion();
  initFaqAccordion();
});

/**
 * 1. Bilingual Language Switcher (English <-> Kannada)
 */
function initLanguageSwitcher() {
  const savedLang = localStorage.getItem('prabhu_clinic_lang') || 'en';
  setLanguage(savedLang);

  document.querySelectorAll('.js-lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('prabhu_clinic_lang', lang);
  document.documentElement.lang = lang;

  if (lang === 'kn') {
    document.body.classList.add('lang-kn');
  } else {
    document.body.classList.remove('lang-kn');
  }

  // Update active state of language buttons (both desktop and mobile)
  document.querySelectorAll('.js-lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  // Trigger tactile spring switch animation on language container
  document.querySelectorAll('.lang-switch').forEach(sw => {
    sw.classList.remove('is-switching');
    void sw.offsetWidth; // trigger reflow
    sw.classList.add('is-switching');
    setTimeout(() => sw.classList.remove('is-switching'), 500);
  });

  // Translate all [data-i18n] text or HTML content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Translate placeholders for inputs
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Refresh live clinic status text with active language
  if (typeof window.refreshClinicStatus === 'function') {
    window.refreshClinicStatus();
  }
}

/**
 * 2. Live Clinic Open / Closed Status Calculation
 * Monday - Saturday:
 * - Shift 1: 10:30 AM to 01:30 PM (10:30 - 13:30)
 * - Shift 2: 05:00 PM to 09:00 PM (17:00 - 21:00)
 * Sunday: Closed
 */
function initLiveClinicStatus() {
  const statusBadges = document.querySelectorAll('.js-live-status');
  if (!statusBadges.length) return;

  function updateStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;

    const mMorningStart = 10 * 60 + 30; // 10:30 AM -> 630
    const mMorningEnd = 13 * 60 + 30;   // 01:30 PM -> 810
    const mEveningStart = 17 * 60;      // 05:00 PM -> 1020
    const mEveningEnd = 21 * 60;        // 09:00 PM -> 1260

    let statusText = '';
    let badgeClass = 'closed';

    if (day === 0) {
      // Sunday: 10:30 AM - 1:30 PM
      if (currentTimeInMinutes >= mMorningStart && currentTimeInMinutes < mMorningEnd) {
        badgeClass = 'open';
        statusText = currentLang === 'kn'
          ? 'ತೆರೆದಿದೆ • ಭಾನುವಾರದ ಬೆಳಗಿನ ಅವಧಿ ಮಧ್ಯಾಹ್ನ 1:30 ರವರೆಗೆ'
          : 'Open Now • Sunday Morning Session until 1:30 PM';
      } else if (currentTimeInMinutes < mMorningStart) {
        badgeClass = 'closed';
        statusText = currentLang === 'kn'
          ? 'ಈಗ ಮುಚ್ಚಿದೆ • ಇಂದು ಭಾನುವಾರ ಬೆಳಿಗ್ಗೆ 10:30 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
          : 'Closed Now • Opens Today (Sunday) at 10:30 AM';
      } else {
        badgeClass = 'closed';
        statusText = currentLang === 'kn'
          ? 'ಇಂದಿನ ಸೇವೆ ಮುಕ್ತಾಯ • ಸೋಮವಾರ ಬೆಳಿಗ್ಗೆ 10:30 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
          : 'Closed for the Day • Opens Monday at 10:30 AM';
      }
    } else {
      // Monday to Saturday
      if (currentTimeInMinutes >= mMorningStart && currentTimeInMinutes < mMorningEnd) {
        badgeClass = 'open';
        statusText = currentLang === 'kn'
          ? 'ತೆರೆದಿದೆ • ಬೆಳಗಿನ ಅವಧಿ ಮಧ್ಯಾಹ್ನ 1:30 ರವರೆಗೆ'
          : 'Open Now • Morning Session until 1:30 PM';
      } else if (currentTimeInMinutes >= mEveningStart && currentTimeInMinutes < mEveningEnd) {
        badgeClass = 'open';
        statusText = currentLang === 'kn'
          ? 'ತೆರೆದಿದೆ • ಸಂಜೆಯ ಅವಧಿ ರಾತ್ರಿ 9:00 ರವರೆಗೆ'
          : 'Open Now • Evening Session until 9:00 PM';
      } else if (currentTimeInMinutes < mMorningStart) {
        badgeClass = 'closed';
        statusText = currentLang === 'kn'
          ? 'ಈಗ ಮುಚ್ಚಿದೆ • ಇಂದು ಬೆಳಿಗ್ಗೆ 10:30 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
          : 'Closed Now • Opens Today at 10:30 AM';
      } else if (currentTimeInMinutes >= mMorningEnd && currentTimeInMinutes < mEveningStart) {
        badgeClass = 'closed';
        statusText = currentLang === 'kn'
          ? 'ಮಧ್ಯಾಹ್ನದ ವಿರಾಮ • ಇಂದು ಸಂಜೆ 5:00 ಕ್ಕೆ ಪುನಃ ತೆರೆಯುತ್ತದೆ'
          : 'Afternoon Break • Reopens Today at 5:00 PM';
      } else {
        badgeClass = 'closed';
        if (day === 6) {
          statusText = currentLang === 'kn'
            ? 'ಇಂದಿನ ಸೇವೆ ಮುಕ್ತಾಯ • ನಾಳೆ ಭಾನುವಾರ ಬೆಳಿಗ್ಗೆ 10:30 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
            : 'Closed for the Day • Opens Tomorrow (Sun) at 10:30 AM';
        } else {
          statusText = currentLang === 'kn'
            ? 'ಇಂದಿನ ಸೇವೆ ಮುಕ್ತಾಯ • ನಾಳೆ ಬೆಳಿಗ್ಗೆ 10:30 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
            : 'Closed for the Day • Opens Tomorrow at 10:30 AM';
        }
      }
    }

    statusBadges.forEach(badge => {
      badge.className = `status-badge ${badgeClass} js-live-status`;
      badge.innerHTML = `<span class="status-dot"></span><span>${statusText}</span>`;
    });
  }

  window.refreshClinicStatus = updateStatus;
  updateStatus();
  setInterval(updateStatus, 60000);
}

/**
 * 3. Sticky Navbar & Active Section Highlighting
 * Oval Pill navigation items with instant highlight on click and dynamic scrollspy
 */
function initStickyNavbar() {
  const header = document.querySelector('.main-header');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link[href^="#"]');
  const sections = document.querySelectorAll('section[id]');
  let isManualScrolling = false;
  let scrollTimeout = null;

  // Immediate highlight when user clicks an oval nav link
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetHref = link.getAttribute('href');
      if (!targetHref || targetHref === '#') return;

      const targetSection = document.querySelector(targetHref);
      if (targetSection) {
        e.preventDefault();

        // Highlight clicked oval immediately
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        isManualScrolling = true;
        clearTimeout(scrollTimeout);

        const navHeight = header ? header.offsetHeight : 80;
        const targetTop = targetSection.getBoundingClientRect().top + window.scrollY - navHeight + 5;

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });

        // Resume scrollspy after smooth scroll ends
        scrollTimeout = setTimeout(() => {
          isManualScrolling = false;
        }, 800);
      }
    });
  });

  // Dynamic ScrollSpy
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (isManualScrolling) return;

    let currentId = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        const matches = link.getAttribute('href') === `#${currentId}`;
        link.classList.toggle('active', matches);
      });
    }
  }, { passive: true });
}

/**
 * 4. Mobile Navigation Drawer
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link, .nav-menu .btn');

  if (!hamburger || !navMenu) return;

  function toggleMenu() {
    const isOpen = navMenu.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    hamburger.classList.add('is-active');
    hamburger.setAttribute('aria-expanded', 'true');
    navMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('is-active');
    hamburger.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
}

/**
 * 5. Date Constraints for Appointment Form
 */
function initDateConstraints() {
  const dateInput = document.getElementById('preferredDate');
  if (!dateInput) return;

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');

  // Prevent past dates
  dateInput.min = `${yyyy}-${mm}-${dd}`;
}

/**
 * 6. Appointment Request Form Demonstration
 */
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  const successBox = document.getElementById('appointmentSuccess');
  const resetBtn = document.getElementById('appointmentReset');
  const modeSelect = form ? form.consultationMode : null;
  const timeSelect = form ? form.preferredTime : null;

  if (!form || !successBox) return;

  // Sync time slot options based on consultation mode
  function syncTimeSlotsForMode(mode) {
    if (!timeSelect) return;
    const isOnline = mode && mode.toLowerCase().includes('online');
    if (isOnline) {
      // Find 5:00 - 5:30 PM online option
      let onlineOpt = Array.from(timeSelect.options).find(o => o.value.includes('5:00') && o.value.includes('5:30'));
      if (onlineOpt) {
        timeSelect.value = onlineOpt.value;
      }
    }
  }

  if (modeSelect) {
    modeSelect.addEventListener('change', function() {
      syncTimeSlotsForMode(this.value);
    });
  }

  // Wire up Doctor card consult buttons (Request Consult & Online Consult)
  document.querySelectorAll('.js-consult-trigger').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const mode = this.getAttribute('data-mode'); // 'online' or 'offline'
      const doctor = this.getAttribute('data-doctor');

      if (modeSelect) {
        if (mode === 'online') {
          const onlineOpt = Array.from(modeSelect.options).find(o => o.value.toLowerCase().includes('online'));
          if (onlineOpt) modeSelect.value = onlineOpt.value;
          syncTimeSlotsForMode('online');
        } else {
          const offlineOpt = Array.from(modeSelect.options).find(o => o.value.toLowerCase().includes('offline') || o.value.toLowerCase().includes('clinic'));
          if (offlineOpt) modeSelect.value = offlineOpt.value;
          if (timeSelect && timeSelect.value.includes('5:30')) {
            timeSelect.value = '';
          }
        }
      }

      if (doctor && form.patientMessage && !form.patientMessage.value) {
        form.patientMessage.value = (mode === 'online' ? 'Online Consultation request for ' : 'Consultation request for ') + doctor + '.';
      }

      const apptSec = document.getElementById('appointment');
      if (apptSec) {
        apptSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Real-time restriction: Patient Name field only accepts letters, spaces and dots (rejects numbers and special characters)
  if (form.patientName) {
    form.patientName.addEventListener('input', function() {
      this.value = this.value.replace(/[^a-zA-Z\u0C80-\u0CFF\s\.]/g, '');
    });
  }

  // Real-time restriction: Mobile Number field only accepts digits (rejects alphabets), max 10 digits
  if (form.mobileNumber) {
    form.mobileNumber.addEventListener('input', function() {
      this.value = this.value.replace(/\D/g, '').slice(0, 10);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.patientName.value.trim();
    const phone = form.mobileNumber.value.trim();
    const mode = form.consultationMode ? form.consultationMode.value : 'In-Clinic Visit (Offline)';
    const date = form.preferredDate.value;
    const timeSlot = form.preferredTime.value;
    const reason = form.reasonForVisit.value;

    if (!name || !phone || !date || !timeSlot || !reason) {
      const alertMsg = currentLang === 'kn'
        ? 'ದಯವಿಟ್ಟು * ಗುರುತಿಸಲಾದ ಎಲ್ಲಾ ಅಗತ್ಯ ಮಾಹಿತಿಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ'
        : 'Please fill in all required fields marked with *';
      alert(alertMsg);
      return;
    }

    // Name validation: must contain only letters, spaces and dots (no numbers or special characters)
    if (/[^A-Za-z\u0C80-\u0CFF\s\.]/.test(name) || !/[A-Za-z\u0C80-\u0CFF]/.test(name)) {
      const nameMsg = currentLang === 'kn'
        ? 'ದಯವಿಟ್ಟು ಸರಿಯಾದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ (ಕೇವಲ ಅಕ್ಷರಗಳನ್ನು ಬಳಸಿ, ಸಂಖ್ಯೆಗಳು ಅಥವಾ ವಿಶೇಷ ಚಿಹ್ನೆಗಳಲ್ಲ).'
        : 'Please enter a valid patient name (letters only, no numbers or special characters).';
      alert(nameMsg);
      form.patientName.focus();
      return;
    }

    const phoneClean = phone.replace(/\D/g, '');
    if (phoneClean.length !== 10) {
      const phoneMsg = currentLang === 'kn'
        ? 'ದಯವಿಟ್ಟು 10 ಅಂಕಿಗಳ ಸರಿಯಾದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.'
        : 'Please enter a valid 10-digit mobile number.';
      alert(phoneMsg);
      form.mobileNumber.focus();
      return;
    }

    // Sunday Check
    const selectedDateObj = new Date(date);
    if (selectedDateObj.getDay() === 0) {
      const sunMsg = currentLang === 'kn'
        ? 'ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್ ಭಾನುವಾರಗಳಂದು ಮುಚ್ಚಿರುತ್ತದೆ. ದಯವಿಟ್ಟು ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗಿನ ದಿನಾಂಕವನ್ನು ಆರಿಸಿ.'
        : 'Prabhu Dental Clinic is closed on Sundays. Please select a date from Monday to Saturday.';
      alert(sunMsg);
      form.preferredDate.focus();
      return;
    }

    // Collect optional message
    const message = form.patientMessage ? form.patientMessage.value.trim() : '';

    // Build WhatsApp message and open WhatsApp
    const waLines = [
      '🦷 *Appointment Request – Prabhu Dental Clinic*',
      '',
      '👤 *Patient Name:* ' + name,
      '📞 *Mobile:* ' + phone,
      '💻 *Consultation Mode:* ' + mode,
      '📅 *Preferred Date:* ' + date,
      '⏰ *Preferred Time:* ' + timeSlot,
      '🏥 *Reason for Visit:* ' + reason
    ];
    if (message) waLines.push('📝 *Message:* ' + message);
    waLines.push('', 'Kindly confirm the appointment at your earliest convenience.');
    window.open('https://wa.me/919448984480?text=' + encodeURIComponent(waLines.join('\n')), '_blank');

    // Display confirmed state in inline box
    form.style.display = 'none';
    successBox.classList.add('is-visible');

    const summaryTarget = document.getElementById('confirmationSummary');
    const modalSummaryTarget = document.getElementById('modalSummaryContent');
    const modal = document.getElementById('appointmentSuccessModal');
    const btnModalClose = document.getElementById('btnModalClose');

    const summaryHtml = currentLang === 'kn'
      ? `<strong>ರೋಗಿಯ ಹೆಸರು:</strong> ${escapeHtml(name)}<br>
         <strong>ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:</strong> ${escapeHtml(phone)}<br>
         <strong>ಸಮಾಲೋಚನೆ ವಿಧಾನ:</strong> ${escapeHtml(mode)}<br>
         <strong>ದಿನಾಂಕ & ಸಮಯ:</strong> ${escapeHtml(date)} (${escapeHtml(timeSlot)})<br>
         <strong>ವಿಶೇಷತೆ/ಉದ್ದೇಶ:</strong> ${escapeHtml(reason)}`
      : `<strong>Patient:</strong> ${escapeHtml(name)}<br>
         <strong>Mobile:</strong> ${escapeHtml(phone)}<br>
         <strong>Consultation Type:</strong> ${escapeHtml(mode)}<br>
         <strong>Requested Date & Slot:</strong> ${escapeHtml(date)} (${escapeHtml(timeSlot)})<br>
         <strong>Specialty/Reason:</strong> ${escapeHtml(reason)}`;

    if (summaryTarget) {
      summaryTarget.innerHTML = summaryHtml;
    }

    if (modalSummaryTarget) {
      modalSummaryTarget.innerHTML = summaryHtml;
    }

    // Trigger celebratory confirmation modal
    if (modal) {
      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';

      const closeModal = () => {
        modal.classList.remove('is-active');
        document.body.style.overflow = '';
      };

      btnModalClose?.addEventListener('click', closeModal, { once: true });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    }

    successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  resetBtn?.addEventListener('click', () => {
    form.reset();
    form.style.display = 'block';
    successBox.classList.remove('is-visible');
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/**
 * 7. Lightbox Modal for Clinic Exterior Image
 */
function initLightbox() {
  const modal = document.getElementById('galleryModal');
  const trigger = document.querySelectorAll('.js-open-lightbox');
  const closeBtn = document.querySelector('.js-close-lightbox');
  const modalImg = modal?.querySelector('.lightbox-image-wrap img');
  const modalTitle = modal?.querySelector('.lightbox-modal-caption strong');
  const modalDesc = modal?.querySelector('.lightbox-modal-caption p');

  if (!modal) return;

  trigger.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const card = item.closest('.gallery-card');
      const imgSrc = item.getAttribute('data-img') || card?.querySelector('img')?.getAttribute('src');
      const title = item.getAttribute('data-title') || card?.querySelector('.gallery-item-title')?.textContent;
      const desc = item.getAttribute('data-desc') || card?.querySelector('.gallery-item-desc')?.textContent;

      if (modalImg && imgSrc) modalImg.src = imgSrc;
      if (modalTitle && title) modalTitle.textContent = title;
      if (modalDesc && desc) modalDesc.textContent = desc;

      modal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  closeBtn?.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/**
 * 8. Professional Preloader Dismissal
 */
function initPreloader() {
  const preloader = document.getElementById('site-preloader');
  if (!preloader) return;

  function dismiss() {
    preloader.classList.add('is-loaded');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }

  // Dismiss swiftly on page load or fallback after 850ms
  if (document.readyState === 'complete') {
    setTimeout(dismiss, 350);
  } else {
    window.addEventListener('load', () => setTimeout(dismiss, 350));
    setTimeout(dismiss, 1200);
  }
}

/**
 * 9. Scroll Reveal Engine using IntersectionObserver
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  if (!revealElements.length) return;

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * 10. Desktop & Tablet Dynamic Cursor Physics Engine for Floating Dental Characters & Badges
 * Features:
 * - Generous, clearly visible cursor parallax (up to 45px - 75px translation)
 * - Local proximity repulsion & buoyant curiosity: teeth rotate, gently drift away, scale, and glow when cursor nears
 * - Smooth lerp spring physics without jitter
 * - Interactive click & tap burst creating dancing sparkle stars
 * - 3D depth tilt & perspective
 */
function initMouseParallax() {
  // A. Hero Visual Stage 3D Card Tilt
  const stage = document.querySelector('.hero-visual-stage');
  const card = document.querySelector('.hero-image-card');
  const decorBadge = document.querySelector('.hero-decor-badge-sparkle');

  if (stage && card && window.innerWidth >= 992) {
    let stageTicking = false;
    stage.addEventListener('mousemove', (e) => {
      if (stageTicking) return;
      stageTicking = true;
      requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(y / rect.height) * 10;
        const rotateY = (x / rect.width) * 10;

        card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
        if (decorBadge) {
          decorBadge.style.transform = `translate(${(x * 0.06).toFixed(1)}px, ${(y * 0.06).toFixed(1)}px)`;
        }
        stageTicking = false;
      });
    });

    stage.addEventListener('mouseleave', () => {
      card.style.transform = '';
      if (decorBadge) decorBadge.style.transform = '';
    });
  }

  // B. Global Interactive Dental Floating Elements (Mouse Cursor Response & Interactive Physics)
  const floatDoms = Array.from(document.querySelectorAll('.js-dental-float'));
  if (!floatDoms.length) return;

  // Initialize per-item tracking state
  const items = floatDoms.map(el => ({
    el: el,
    depth: parseFloat(el.getAttribute('data-depth') || 0.12),
    scrollSpeed: parseFloat(el.getAttribute('data-scroll') || 0.05),
    x: 0,
    y: 0,
    rx: 0,
    ry: 0,
    rz: 0,
    scale: 1,
    targetX: 0,
    targetY: 0,
    targetRx: 0,
    targetRy: 0,
    targetRz: 0,
    targetScale: 1
  }));

  let cursorScreenX = window.innerWidth / 2;
  let cursorScreenY = window.innerHeight / 2;
  let normX = 0;
  let normY = 0;
  let scrollY = window.pageYOffset || document.documentElement.scrollTop;
  let isTicking = false;

  // Helper to trigger physics loop
  function requestUpdate() {
    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(updateFloatPositions);
    }
  }

  // Track mouse coordinates across entire viewport
  function onPointerMove(e) {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    cursorScreenX = clientX;
    cursorScreenY = clientY;

    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    normX = (clientX - halfW) / (halfW || 1); // -1 to 1
    normY = (clientY - halfH) / (halfH || 1); // -1 to 1

    requestUpdate();
  }

  window.addEventListener('mousemove', onPointerMove, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });

  window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset || document.documentElement.scrollTop;
    requestUpdate();
  }, { passive: true });

  // Interactive Click & Tap Reaction (Jelly Bounce & Sparkle Stars Burst)
  floatDoms.forEach(el => {
    el.addEventListener('click', (e) => {
      const badge = el.querySelector('.dental-floating-character, .dental-floating-badge, .dental-mascot-ambient');
      if (badge) {
        badge.classList.remove('tooth-jelly-active');
        void badge.offsetWidth; // trigger reflow
        badge.classList.add('tooth-jelly-active');
      }
      spawnSparkleBurst(e.clientX, e.clientY);
    });
  });

  // Main animation frame physics step
  function updateFloatPositions() {
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const radius = 260; // Cursor interaction proximity radius in pixels

    let needsNextFrame = false;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const el = item.el;
      const rect = el.getBoundingClientRect();

      // Viewport culling for 60fps silky smooth rendering
      if (rect.bottom < -160 || rect.top > winH + 160) continue;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // 1. Subtle Ambient Cursor Parallax (Micro-displacement: 3px to 6px)
      const baseX = normX * (item.depth * 40);
      const baseY = normY * (item.depth * 35);

      // 2. Cursor Proximity Repulsion & Soft Curiosity Physics
      const dx = cursorScreenX - centerX;
      const dy = cursorScreenY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let repelX = 0;
      let repelY = 0;
      let tiltX = 0;
      let tiltY = 0;
      let tiltZ = 0;
      let scaleBoost = 0;

      if (dist < radius) {
        const force = Math.pow(1 - dist / radius, 1.4);
        const safeDist = dist || 1;

        // Gentle buoyant micro-drift away from cursor
        repelX = -(dx / safeDist) * force * 6;
        repelY = -(dy / safeDist) * force * 6;

        // Micro 3D Tilt facing towards cursor
        tiltX = (dy / radius) * 3 * force;
        tiltY = -(dx / radius) * 3 * force;
        tiltZ = (dx / radius) * 2 * force;
        scaleBoost = force * 0.03;

        if (!el.classList.contains('is-cursor-near')) {
          el.classList.add('is-cursor-near');
        }
      } else {
        if (el.classList.contains('is-cursor-near')) {
          el.classList.remove('is-cursor-near');
        }
      }

      // 3. Subtle Scroll-linked Parallax
      const scrollDrift = (centerY - winH / 2) * item.scrollSpeed * -0.015;

      // 4. Set Targets
      item.targetX = baseX + repelX;
      item.targetY = baseY + repelY + scrollDrift;
      item.targetRx = tiltX + (normY * -3 * item.depth);
      item.targetRy = tiltY + (normX * 3 * item.depth);
      item.targetRz = tiltZ + (normX * -2 * item.depth);
      item.targetScale = 1 + scaleBoost;

      // 5. Smooth Spring Lerp Interpolation
      const lerp = 0.10;
      item.x += (item.targetX - item.x) * lerp;
      item.y += (item.targetY - item.y) * lerp;
      item.rx += (item.targetRx - item.rx) * lerp;
      item.ry += (item.targetRy - item.ry) * lerp;
      item.rz += (item.targetRz - item.rz) * lerp;
      item.scale += (item.targetScale - item.scale) * lerp;

      // Apply 3D Transform
      el.style.transform = `translate3d(${item.x.toFixed(2)}px, ${item.y.toFixed(2)}px, 0) perspective(800px) rotateX(${item.rx.toFixed(2)}deg) rotateY(${item.ry.toFixed(2)}deg) rotateZ(${item.rz.toFixed(2)}deg) scale(${item.scale.toFixed(3)})`;

      // Check if motion is still active
      const diff = Math.abs(item.targetX - item.x) + Math.abs(item.targetY - item.y) + Math.abs(item.targetScale - item.scale);
      if (diff > 0.05) {
        needsNextFrame = true;
      }
    }

    if (needsNextFrame) {
      requestAnimationFrame(updateFloatPositions);
    } else {
      isTicking = false;
    }
  }

  // Cheerful Sparkle Particle Spawner
  function spawnSparkleBurst(x, y) {
    if (!x || !y) return;
    const colors = ['#C82333', '#F87171', '#FF6B6B', '#FFD166', '#FFFFFF'];
    const chars = ['✦', '★', '✧', '•'];
    for (let i = 0; i < 7; i++) {
      const p = document.createElement('span');
      p.className = 'dental-cursor-sparkle';
      p.textContent = chars[Math.floor(Math.random() * chars.length)];
      p.style.color = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      const angle = (Math.PI * 2 / 7) * i + (Math.random() - 0.5) * 0.4;
      const dist = 38 + Math.random() * 45;
      p.style.setProperty('--dx', (Math.cos(angle) * dist).toFixed(1) + 'px');
      p.style.setProperty('--dy', (Math.sin(angle) * dist).toFixed(1) + 'px');
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 900);
    }
  }

  // Trigger initial frame calculation
  requestUpdate();
}

/**
 * 11. Dynamic Timeline Scroll Progress Fill
 */
function initTimelineProgress() {
  const timeline = document.querySelector('.legacy-timeline');
  const fill = document.getElementById('timelineProgressFill');
  if (!timeline || !fill) return;

  function updateFill() {
    const rect = timeline.getBoundingClientRect();
    const windowH = window.innerHeight;
    if (rect.top < windowH && rect.bottom > 0) {
      const visible = Math.max(0, Math.min(rect.height, windowH * 0.7 - rect.top));
      const percentage = Math.min(100, Math.max(0, (visible / rect.height) * 100));
      fill.style.height = `${percentage}%`;
    }
  }

  window.addEventListener('scroll', updateFill, { passive: true });
  updateFill();
}



/**
 * 11. About Section: Flicker-Free Interactive Click Sparkle Feedback
 * Stable in-place click celebration without displacing card or altering layout.
 */
function initAboutCardsSlide() {
  const cards = document.querySelectorAll('.about-pillar-item, .legacy-node-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Create click burst particle at click location
      const rect = card.getBoundingClientRect();
      const spark = document.createElement('span');
      spark.className = 'dental-cursor-sparkle';
      spark.textContent = '✨';
      spark.style.left = (e.clientX || (rect.right - 20)) + 'px';
      spark.style.top = (e.clientY || (rect.top + rect.height / 2)) + 'px';
      spark.style.setProperty('--dx', '20px');
      spark.style.setProperty('--dy', '-18px');
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 800);
    });
  });
}


/**
 * 12. Specialities Section: Interactive Rotating and Sliding Circle Shapes
 * Clicking any speciality card triggers an energetic 360-degree rotation and slide.
 */
function initSpecialityCircleAnimation() {
  const cards = document.querySelectorAll('.speciality-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.remove('is-circle-spinning');
      void card.offsetWidth; // Force reflow
      card.classList.add('is-circle-spinning');

      // Sparkle stars burst from the circle shape
      const iconBox = card.querySelector('.speciality-icon-box');
      if (iconBox) {
        const rect = iconBox.getBoundingClientRect();
        const spark = document.createElement('span');
        spark.className = 'dental-cursor-sparkle';
        spark.textContent = '✨';
        spark.style.left = (rect.left + rect.width / 2) + 'px';
        spark.style.top = (rect.top + rect.height / 2) + 'px';
        spark.style.setProperty('--dx', '20px');
        spark.style.setProperty('--dy', '-22px');
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 900);
      }

      setTimeout(() => {
        card.classList.remove('is-circle-spinning');
      }, 1000);
    });
  });
}


/**
 * 12. Specialities Continuous Circular / Spiral Card Orbit Engine
 * - Arranges the 6 complete speciality cards along an elliptical circular path
 * - Cards move one after another clockwise around the center point
 * - Depth scaling: front card is larger and crisp, back cards are slightly smaller
 * - Hover pauses or slows the continuous motion
 * - Clicking any card rotates that card smoothly to the front center
 * - Previous & Next buttons rotate the carousel clockwise or counter-clockwise
 */
function initSpecialitiesCircularOrbit() {
  const stage = document.getElementById('specialitiesOrbitStage');
  const track = document.getElementById('specialitiesOrbitTrack');
  if (!stage || !track) return;

  const cards = track.querySelectorAll('.speciality-card');
  if (!cards.length) return;

  const totalCards = cards.length; // 6 cards
  const angleStep = (2 * Math.PI) / totalCards; // 60 degrees

  let baseAngle = 0; // Current base angle in radians
  let targetAngle = 0; // Target angle for smooth interpolation
  const normalSpeed = 0.0028; // Slow, premium, elegant speed
  let currentSpeed = normalSpeed;
  let isHovered = false;
  let hoveredCard = null;
  let lastTime = performance.now();

  // Hover detection on individual cards
  cards.forEach((card, idx) => {
    card.addEventListener('mouseenter', () => {
      isHovered = true;
      hoveredCard = card;
    });
    card.addEventListener('mouseleave', () => {
      isHovered = false;
      hoveredCard = null;
    });

    // Clicking a card smoothly rotates it to the front center (90 degrees = Math.PI / 2)
    card.addEventListener('click', (e) => {
      // Calculate card's current angle relative to circular path
      const cardCurrentAngle = (baseAngle + idx * angleStep) % (2 * Math.PI);
      let diff = (Math.PI / 2) - cardCurrentAngle;
      // Normalize diff to [-PI, PI] for shortest rotation
      while (diff > Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      targetAngle = baseAngle + diff;
    });
  });

  // Stage hover to slow or pause
  stage.addEventListener('mouseenter', () => { isHovered = true; });
  stage.addEventListener('mouseleave', () => { isHovered = false; hoveredCard = null; });

  // Navigation Buttons
  const btnPrev = document.getElementById('btnOrbitPrev');
  const btnNext = document.getElementById('btnOrbitNext');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      targetAngle -= angleStep; // counter-clockwise
    });
  }
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      targetAngle += angleStep; // clockwise
    });
  }

  // Calculate dynamic X and Y radii based on stage dimensions
  function getRadii() {
    const stageWidth = stage.offsetWidth;
    const stageHeight = stage.offsetHeight;
    if (stageWidth > 1024) {
      return { rx: Math.min(390, stageWidth * 0.38), ry: 200 };
    } else if (stageWidth > 768) {
      return { rx: Math.min(290, stageWidth * 0.36), ry: 165 };
    } else if (stageWidth > 480) {
      return { rx: Math.min(190, stageWidth * 0.34), ry: 145 };
    } else {
      // Mobile screens: compact ellipse keeping cards fully within view
      return { rx: Math.min(130, stageWidth * 0.32), ry: 175 };
    }
  }

  function render(time) {
    const dt = Math.min(32, time - lastTime);
    lastTime = time;

    // Smoothly decelerate when hovered or accelerate when free
    if (isHovered) {
      currentSpeed = currentSpeed * 0.88; // gently pause
    } else {
      currentSpeed += (normalSpeed - currentSpeed) * 0.08;
    }

    targetAngle += currentSpeed * (dt / 16.67);
    // Smooth interpolation to targetAngle (prevents jumps, provides silky spring)
    baseAngle += (targetAngle - baseAngle) * 0.08;

    const { rx, ry } = getRadii();
    const isMobile = window.innerWidth <= 600;

    cards.forEach((card, i) => {
      // Clockwise angle: baseAngle + i * angleStep
      const theta = baseAngle + i * angleStep;
      const x = Math.cos(theta) * rx;
      const y = Math.sin(theta) * ry;

      // Depth factor from y: -ry (back) to +ry (front)
      const depth = (y + ry) / (2 * ry); // 0 (back) to 1 (front)

      let scale = isMobile ? (0.80 + depth * 0.24) : (0.82 + depth * 0.25);
      let opacity = isMobile ? (0.70 + depth * 0.30) : (0.75 + depth * 0.25);
      let zIndex = Math.round(10 + depth * 40);

      // If this specific card is hovered, slightly lift it and keep it on top
      if (card === hoveredCard) {
        scale *= 1.05;
        opacity = 1.0;
        zIndex = 70;
      }

      // Subtle bank tilt along the curve
      const bankTilt = Math.sin(theta) * -3;

      card.style.zIndex = zIndex;
      card.style.opacity = opacity.toFixed(2);
      card.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) scale(${scale.toFixed(3)}) rotate(${bankTilt.toFixed(1)}deg)`;
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}


/**
 * 13. Our Team Section: Interactive Spark Cards Click Sparkle Shower
 * Clicking any team card triggers a sparkling light pop and bursts dancing star particles.
 */
function initTeamCardsSparkle() {
  const cards = document.querySelectorAll('#team .spark-card');
  if (!cards.length) return;

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      card.classList.remove('is-spark-popping');
      void card.offsetWidth; // Force reflow
      card.classList.add('is-spark-popping');

      // Spawn multi-directional golden & red sparkle stars from click point
      const rect = card.getBoundingClientRect();
      const clickX = e.clientX || (rect.left + rect.width / 2);
      const clickY = e.clientY || (rect.top + 30);

      const sparks = ['✨', '✦', '⭐', '✨'];
      sparks.forEach((symbol, i) => {
        const spark = document.createElement('span');
        spark.className = 'dental-cursor-sparkle';
        spark.textContent = symbol;
        spark.style.left = clickX + 'px';
        spark.style.top = clickY + 'px';
        spark.style.color = (i % 2 === 0) ? '#F59E0B' : '#C82333';
        
        const angle = (i * (Math.PI / 2)) + (Math.random() * 0.4 - 0.2);
        const dist = 35 + Math.random() * 25;
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;
        
        spark.style.setProperty('--dx', dx + 'px');
        spark.style.setProperty('--dy', dy + 'px');
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 900);
      });

      setTimeout(() => {
        card.classList.remove('is-spark-popping');
      }, 700);
    });
  });
}


/**
 * 14. Clinic Legacy Timeline: Active Scroll Tracking Highlight Engine
 * As the user scrolls down, each card highlights in its distinct vibrant clinic color,
 * and when you scroll past, it returns to resting state while the next card highlights!
 */
function initLegacyTimelineScrollHighlight() {
  const steps = document.querySelectorAll('#legacy .timeline-step');
  if (!steps.length) return;

  function onScroll() {
    const viewportHeight = window.innerHeight;
    const focusZone = viewportHeight * 0.48; // center reading focus line

    let closestStep = null;
    let closestDistance = Infinity;

    steps.forEach(step => {
      const rect = step.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const dist = Math.abs(cardCenter - focusZone);

      if (dist < closestDistance && rect.top < viewportHeight * 0.85 && rect.bottom > viewportHeight * 0.15) {
        closestDistance = dist;
        closestStep = step;
      }
    });

    steps.forEach(step => {
      if (step === closestStep) {
        step.classList.add('is-scroll-active');
      } else {
        step.classList.remove('is-scroll-active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll(); // initial check

  // Click on card also sets it as active
  steps.forEach(step => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('is-scroll-active'));
      step.classList.add('is-scroll-active');
    });
  });
}

/**
 * 15. Contact Cards: Dynamic Cursor Movement & Click-to-Highlight Engine
 * The highlight seamlessly MOVES from card to card as the cursor moves over them.
 * No card is statically stuck. Supports smooth hover tracking and tactile click.
 */
function initContactCardsHighlight() {
  const grid = document.querySelector('#contact .contact-cards-grid');
  const cards = document.querySelectorAll('#contact .contact-card-box');
  if (!cards.length) return;

  function activateCard(targetCard, triggerSparkles = false) {
    cards.forEach(card => {
      if (card === targetCard) {
        card.classList.add('is-card-highlighted');
        card.setAttribute('aria-pressed', 'true');
      } else {
        card.classList.remove('is-card-highlighted');
        card.setAttribute('aria-pressed', 'false');
      }
    });

    if (triggerSparkles) {
      const icon = targetCard.querySelector('.contact-card-icon');
      if (icon) {
        const rect = icon.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;

        for (let i = 0; i < 6; i++) {
          const star = document.createElement('span');
          star.className = 'dental-cursor-sparkle';
          star.textContent = ['✦', '✨', '⭐'][i % 3];
          const angle = (i / 6) * Math.PI * 2;
          const dist = 32 + Math.random() * 24;
          const tx = Math.cos(angle) * dist;
          const ty = Math.sin(angle) * dist;

          star.style.left = originX + 'px';
          star.style.top = originY + 'px';
          star.style.color = i % 2 === 0 ? '#C82333' : '#F59E0B';
          star.style.fontSize = (12 + Math.random() * 8) + 'px';
          star.style.setProperty('--sparkle-tx', `${tx}px`);
          star.style.setProperty('--sparkle-ty', `${ty}px`);
          document.body.appendChild(star);

          setTimeout(() => {
            if (star.parentNode) star.parentNode.removeChild(star);
          }, 900);
        }
      }
    }
  }

  // Dynamic Cursor Move: Moving cursor over any card immediately moves the highlight to it!
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      activateCard(card, false);
    });

    card.addEventListener('click', (e) => {
      if (e.target.closest('a') && !e.target.closest('.contact-card-icon')) {
        activateCard(card, true);
        return;
      }
      activateCard(card, true);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateCard(card, true);
      }
    });
  });

  // When cursor leaves the contact cards area, smoothly de-highlight so no card stays statically stuck
  if (grid) {
    grid.addEventListener('mouseleave', () => {
      cards.forEach(card => {
        card.classList.remove('is-card-highlighted');
        card.setAttribute('aria-pressed', 'false');
      });
    });
  }
}


/**
 * 16. Treatments Sequential Moving Cards Carousel & 3D Flip Engine
 * Seamless 1-8 infinite slider + interactive 3D flip card with clinical details,
 * dynamic cursor hover highlight, and flicker-free direct appointment booking.
 */
function initTreatmentsCarousel() {
  const track = document.getElementById('treatmentsTrack');
  const viewport = document.getElementById('treatmentsViewport');
  const prevBtns = document.querySelectorAll('.js-treat-prev');
  const nextBtns = document.querySelectorAll('.js-treat-next');
  const pagination = document.getElementById('treatmentsPagination');
  const counterEl = document.getElementById('treatmentsCounter');
  if (!track || !viewport) return;

  // Query only ORIGINAL cards (not clones)
  const originalCards = Array.from(track.querySelectorAll('.treatment-card-item:not(.is-clone)'));
  const totalCards = originalCards.length; // 8 cards
  if (!totalCards) return;

  // Append clone cards at the end to make all 8 slides visible and loop seamlessly
  track.querySelectorAll('.is-clone').forEach(el => el.remove());
  const cloneCount = 4;
  for (let i = 0; i < cloneCount; i++) {
    const clone = originalCards[i].cloneNode(true);
    clone.classList.add('is-clone');
    clone.classList.remove('is-active-spotlight');
    clone.classList.remove('is-flipped');
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  }

  let currentIndex = 0; // 0 to 7
  let autoTimer = null;
  const autoInterval = 3500; // 3.5s auto advance
  let isHovered = false;
  let isAnyCardFlipped = false;
  let isTransitioning = false;
  let hoveredCard = null;

  // Build pagination dots for all 8 cards
  if (pagination) {
    pagination.innerHTML = '';
    originalCards.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `treatment-dot ${idx === 0 ? 'active' : ''}`;
      dot.setAttribute('aria-label', `Go to treatment card ${idx + 1}`);
      dot.addEventListener('click', () => {
        unflipAllCards();
        goToCard(idx);
        restartAutoPlay();
      });
      pagination.appendChild(dot);
    });
  }

  function getCardStepSize() {
    const firstCard = track.querySelector('.treatment-card-item');
    if (!firstCard) return 380;
    const rect = firstCard.getBoundingClientRect();
    const gap = 28; // CSS flex gap
    return rect.width + gap;
  }

  function updateCarousel(instant = false) {
    const stepSize = getCardStepSize();
    const offset = currentIndex * stepSize;

    if (instant) {
      track.style.transition = 'none';
    } else {
      track.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
    }

    track.style.transform = `translateX(-${offset}px)`;

    // Calculate normalized active index (0 to 7)
    const normalizedIdx = currentIndex % totalCards;

    // Update active spotlight: if cursor is hovering a card, let the hovered card take spotlight
    const allCards = track.querySelectorAll('.treatment-card-item');
    allCards.forEach((card, idx) => {
      const cardNorm = idx % totalCards;
      if (hoveredCard) {
        card.classList.toggle('is-active-spotlight', card === hoveredCard);
      } else {
        if (cardNorm === normalizedIdx && !card.classList.contains('is-clone')) {
          card.classList.add('is-active-spotlight');
        } else {
          card.classList.remove('is-active-spotlight');
        }
      }
    });

    // Update pagination dots (all 8 dots)
    if (pagination) {
      const dots = pagination.querySelectorAll('.treatment-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === normalizedIdx);
      });
    }

    // Update live step counter (1 / 8 all the way to 8 / 8!)
    if (counterEl) {
      counterEl.textContent = `${normalizedIdx + 1} / ${totalCards}`;
    }
  }

  function goToCard(idx) {
    currentIndex = idx;
    updateCarousel();
  }

  function nextCard() {
    if (isTransitioning) return;
    currentIndex++;
    isTransitioning = true;
    updateCarousel(false);

    // If we advanced to index 8 (the clone matching card 1)
    if (currentIndex === totalCards) {
      // Counter immediately displays 1 / 8 and first dot active
      if (counterEl) counterEl.textContent = `1 / ${totalCards}`;
      if (pagination) {
        const dots = pagination.querySelectorAll('.treatment-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === 0));
      }
      setTimeout(() => {
        currentIndex = 0;
        updateCarousel(true); // Snap back to 0 with transition: none
        void track.offsetWidth; // Force reflow
        track.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)';
        isTransitioning = false;
      }, 650);
    } else {
      setTimeout(() => { isTransitioning = false; }, 650);
    }
  }

  function prevCard() {
    if (isTransitioning) return;
    if (currentIndex <= 0) {
      currentIndex = totalCards;
      updateCarousel(true);
      void track.offsetWidth;
      currentIndex = totalCards - 1;
      isTransitioning = true;
      updateCarousel(false);
      setTimeout(() => { isTransitioning = false; }, 650);
    } else {
      currentIndex--;
      isTransitioning = true;
      updateCarousel(false);
      setTimeout(() => { isTransitioning = false; }, 650);
    }
  }

  // Attach listeners to all Prev buttons (both side floating & bottom controls)
  prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      unflipAllCards();
      prevCard();
      restartAutoPlay();
    });
  });

  // Attach listeners to all Next buttons (both side floating & bottom controls)
  nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      unflipAllCards();
      nextCard();
      restartAutoPlay();
    });
  });

  // Dynamic Cursor Move Highlight + Hover Flip:
  // When cursor moves into ANY card, THAT card highlights AND flips immediately!
  track.querySelectorAll('.treatment-card-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
      hoveredCard = card;
      isHovered = true;
      // Spotlight
      track.querySelectorAll('.treatment-card-item').forEach(c => {
        c.classList.toggle('is-active-spotlight', c === card);
      });
      // Flip this card; unflip all others
      track.querySelectorAll('.treatment-card-item').forEach(c => {
        if (c !== card) c.classList.remove('is-flipped');
      });
      card.classList.add('is-flipped');
      isAnyCardFlipped = true;
    });

    card.addEventListener('mouseleave', () => {
      // Unflip this card when cursor leaves it
      card.classList.remove('is-flipped');
      isAnyCardFlipped = !!track.querySelector('.treatment-card-item.is-flipped');
    });
  });

  viewport.addEventListener('mouseleave', () => {
    hoveredCard = null;
    isHovered = false;
    // Unflip all cards and re-sync spotlight with current index
    unflipAllCards();
    const normalizedIdx = currentIndex % totalCards;
    track.querySelectorAll('.treatment-card-item').forEach((c, i) => {
      c.classList.toggle('is-active-spotlight', (i % totalCards) === normalizedIdx && !c.classList.contains('is-clone'));
    });
  });

  // Flip Card Logic
  function unflipAllCards() {
    track.querySelectorAll('.treatment-card-item.is-flipped').forEach(card => {
      card.classList.remove('is-flipped');
    });
    isAnyCardFlipped = false;
  }

  // Delegated click handling on track for flip buttons & book appointment buttons
  track.addEventListener('click', (e) => {
    // 1. Flip to back ("Learn more")
    const flipBtn = e.target.closest('.js-flip-card');
    if (flipBtn) {
      e.preventDefault();
      e.stopPropagation();
      const card = flipBtn.closest('.treatment-card-item');
      if (card) {
        // Unflip other cards first
        track.querySelectorAll('.treatment-card-item.is-flipped').forEach(c => {
          if (c !== card) c.classList.remove('is-flipped');
        });
        card.classList.toggle('is-flipped');
        isAnyCardFlipped = card.classList.contains('is-flipped');
      }
      return;
    }

    // 2. Unflip to front ("Back")
    const unflipBtn = e.target.closest('.js-unflip-card');
    if (unflipBtn) {
      e.preventDefault();
      e.stopPropagation();
      const card = unflipBtn.closest('.treatment-card-item');
      if (card) {
        card.classList.remove('is-flipped');
        isAnyCardFlipped = !!track.querySelector('.treatment-card-item.is-flipped');
      }
      return;
    }

    // 3. Book Appointment Button from back face
    const bookBtn = e.target.closest('.js-book-treatment');
    if (bookBtn) {
      e.preventDefault();
      const treatmentName = bookBtn.getAttribute('data-treatment') || '';
      const reasonSelect = document.getElementById('reasonForVisit');
      if (reasonSelect && treatmentName) {
        for (let opt of reasonSelect.options) {
          if (opt.text.toLowerCase().includes(treatmentName.toLowerCase()) || 
              treatmentName.toLowerCase().includes(opt.text.toLowerCase())) {
            reasonSelect.value = opt.value;
            break;
          }
        }
      }

      // Smooth scroll to appointment form
      const appSection = document.getElementById('appointment');
      if (appSection) {
        appSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (reasonSelect) {
            reasonSelect.focus();
            reasonSelect.style.borderColor = 'var(--primary)';
            reasonSelect.style.boxShadow = '0 0 0 4px rgba(200, 35, 51, 0.25)';
            setTimeout(() => {
              reasonSelect.style.borderColor = '';
              reasonSelect.style.boxShadow = '';
            }, 1800);
          }
        }, 600);
      }

      // Flip card back after slight delay
      setTimeout(() => { unflipAllCards(); }, 800);
      return;
    }
  });

  // Auto-play timer
  function startAutoPlay() {
    stopAutoPlay();
    autoTimer = setInterval(() => {
      // Only auto-advance if not hovered, and no card is flipped
      if (!isHovered && !isAnyCardFlipped) {
        nextCard();
      }
    }, autoInterval);
  }

  function stopAutoPlay() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  viewport.addEventListener('mouseenter', () => { isHovered = true; });

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  viewport.addEventListener('touchstart', (e) => {
    isHovered = true;
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      unflipAllCards();
      if (diff > 0) {
        nextCard();
      } else {
        prevCard();
      }
      restartAutoPlay();
    }
    setTimeout(() => { isHovered = false; }, 1000);
  }, { passive: true });

  window.addEventListener('resize', () => { updateCarousel(true); }, { passive: true });

  // Initial render
  updateCarousel(true);
  startAutoPlay();
}

/**
 * FAQ Accordion Interactive Toggle
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-accordion-trigger');
    const content = item.querySelector('.faq-accordion-content');
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-accordion-trigger');
          const otherContent = otherItem.querySelector('.faq-accordion-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle clicked item
      if (isExpanded) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

/**
 * FAQ Accordion Interactive Toggle
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-accordion-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-accordion-trigger');
    const content = item.querySelector('.faq-accordion-content');
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-accordion-trigger');
          const otherContent = otherItem.querySelector('.faq-accordion-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) otherContent.style.maxHeight = null;
        }
      });

      // Toggle clicked item
      if (isExpanded) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

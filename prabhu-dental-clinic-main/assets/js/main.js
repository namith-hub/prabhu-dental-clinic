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
  "en": {
    "topbar.address": "388, 5th Cross, 14th Main, Near Bus Stop, Saraswathipuram, Mysore",
    "lang.choose": "Language:",
    "topbar.whatsapp": "WhatsApp: 9448984480",
    "topbar.hours": "Mon – Sat: 10:30 AM – 1:30 PM &bull; 5:00 PM – 9:00 PM | Sun: Prior Appointments | Video Consult: 5:00 PM – 5:30 PM",
    "hero.stat2_num": "2 MDS",
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
    "nav.location": "Location",
    "nav.contact": "Contact",
    "nav.location_contact": "Location & Contact",
    "loc_contact.tag": "Visit & Connect",
    "loc_contact.title": "Location & Contact",
    "loc_contact.subtitle": "Centrally situated in Saraswathipuram, Mysore. Visit our modern clinic or connect with our care team directly.",
    "contact.btn_call": "Call Now",
    "app.label_email": "Email Address",
    "app.ph_email": "patient@example.com",
    "app.label_treatment": "Select Treatment",
    "app.btn_submit": "Submit Appointment",
    "nav.book_cta": "Book Appointment",
    "brand.clinic_name": "Prabhu Dental Clinic",
    "brand.clinic_name_caps": "PRABHU DENTAL CLINIC",
    "hero.pill": "Orthodontics & Periodontistry Clinic &bull; Saraswathipuram, Mysore",
    "hero.kpmea_badge": "Registered under Karnataka Private Medical Establishments (KPMEA) Act",
    "footer.kpmea": "Registered under Karnataka Private Medical Establishments (KPMEA) Act",
    "hero.title": "PRABHU <span class=\"brand-red\">DENTAL CLINIC</span>",
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
    "hero.badge_video_title": "Online Video Consultation",
    "hero.badge_video_sub": "5:00 PM – 5:30 PM",
    "hero.badge_sparkle": "Specialist Care Duo",
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
    "treatments.tag": "Clinical Treatments",
    "treatments.title": "Treatments",
    "treatments.subtitle": "Comprehensive restorative, cosmetic, and advanced dental procedures tailored to your smile.",
    "treatments.learn_more": "Learn more",
    "treatments.prev": "Previous",
    "treatments.next": "Next",
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
    "team.tag": "Clinical Team",
    "team.title": "Our Team",
    "team.subtitle": "Experienced specialist panel and medical emergency tie-ups.",
    "team.associate_role": "Associate Dental Surgeon",
    "team.associate_deg": "B.D.S. &bull; Associate Dental Surgeon",
    "team.associate_bio": "\"She has graduated in the year 2011 and is associated with us since 2013. She is a friendly and caring professional who regularly attends dental courses to keep abreast with latest developments in the field of dentistry.\"",
    "team.panel_title": "Specialist Care Panel",
    "team.panel_desc": "The clinic also has its own team of experienced specialists to fulfill the dental treatment needs of our patients:",
    "team.surg_sub": "Specialist surgical dental support.",
    "team.prostho_sub": "Specialist tooth restoration and prosthetics.",
    "team.pedia_sub": "Specialist dental care for children.",
    "team.emergency_title": "Medical Emergency Handling",
    "team.emergency_desc": "\"In case of any medical emergency, prompt medical assistance and support are readily provided through our tie-up with a nearby reputed nursing home, alongside an associated physician.\"",
    "legacy.tag": "Historical Lineage",
    "legacy.title": "Clinic Legacy",
    "legacy.subtitle": "A visual timeline of trusted dental care in Saraswathipuram, Mysore since 2007.",
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
    "gallery.tag": "Visual Tour",
    "gallery.title": "Photo Gallery",
    "gallery.subtitle": "Explore our modern clinic facilities and patient care moments in Saraswathipuram, Mysore.",
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
    "app.tag": "Consultation Request",
    "app.title": "Appointment",
    "app.subtitle": "Frontend appointment request prototype for Prabhu Dental Clinic, Saraswathipuram, Mysore.",
    "app.plan_title": "Plan Your Clinic Visit",
    "app.plan_desc": "Fill out the request form with your preferred consultation date and dental concern.",
    "app.benefit1": "Consultations with Dr. Mahesh H.V. (MDS) or Dr. Ramya K.S. (MDS)",
    "app.benefit2": "Morning Session (10:30 AM – 01:30 PM)",
    "app.benefit3": "Evening Session (05:00 PM – 09:00 PM)",
    "app.benefit_video": "Online Video Consultation (5:00 PM – 5:30 PM)",
    "app.benefit4": "Convenient location near Bus Stop, Saraswathipuram, Mysore",
    "app.timings_heading": "Clinic Timings",
    "app.timings_schedule": "Monday – Saturday:<br>10:30 AM – 01:30 PM<br>05:00 PM – 09:00 PM<br><br>Sunday:<br>Prior Appointments Only<br><br>Online Video Consultation:<br>5:00 PM – 5:30 PM",
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
    "faq.a6": "You can request an appointment directly through our online appointment form or by messaging us on WhatsApp (+91 94489 84480). The clinic operates Monday through Saturday (10:30 AM–1:30 PM &amp; 5:00 PM–9:00 PM), with Online Video Consultation available from 5:00 PM to 5:30 PM. Sundays are reserved exclusively for prior scheduled appointments.",
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
    "loc.video_label": "Online Video Consultation",
    "loc.video_hours": "5:00 PM – 5:30 PM",
    "loc.video_hours_inline": "5:00 PM – 5:30 PM",
    "loc.landmark": "Near Bus Stop, Saraswathipuram, Mysore",
    "loc.btn_directions": "GET DIRECTIONS",
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
    "footer.nav_title": "Navigation",
    "footer.address_timings": "Clinic Address, Timings &amp; Contact",
    "footer.rights": "All rights reserved.",
    "footer.draft": "Local Presentation Draft",
    "mobile.book_visit": "Book Visit",
    "mobile.directions": "Directions",
    "gallery.tab_clinic": "Clinic Photos",
    "gallery.tab_patient": "Patient Photos",
    "gallery.patient_consent_note": "All patient photographs and treatment experiences are documented and published with prior informed patient consent adhering to clinical privacy ethics.",
    "gallery.item_exterior_tag": "Exterior",
    "gallery.item_exterior_title": "Clinic Exterior & Signboard",
    "gallery.item_exterior_desc": "Prabhu Dental Clinic main entrance at 388, 5th Cross, 14th Main, Saraswathipuram, Mysore.",
    "gallery.item_reception_tag": "Front Desk",
    "gallery.item_reception_title": "Reception & Waiting Lounge",
    "gallery.item_reception_desc": "Welcoming reception and comfortable consultation waiting lounge.",
    "gallery.item_interior_tag": "Infrastructure",
    "gallery.item_interior_title": "Clinic Interior & Walkways",
    "gallery.item_interior_desc": "Hygienic, spotless corridors designed for patient comfort and accessibility.",
    "gallery.item_treatment_tag": "Operatory",
    "gallery.item_treatment_title": "Dental Treatment Room",
    "gallery.item_treatment_desc": "Ergonomic dental chair unit equipped for orthodontic and periodontal clinical procedures.",
    "gallery.item_equipment_tag": "Sterilization",
    "gallery.item_equipment_title": "Advanced Equipment & Autoclave",
    "gallery.item_equipment_desc": "Medical-grade Class-B autoclave sterilization unit and low-radiation digital radiography.",
    "gallery.item_consultation_tag": "Consultation",
    "gallery.item_consultation_title": "Doctors Consultation Room",
    "gallery.item_consultation_desc": "Doctor consultation desk and clinical discussion environment for patient evaluations.",
    "gallery.patient_item1_tag": "Treatment Care",
    "gallery.patient_item1_title": "Patient Dental Care & Treatment",
    "gallery.patient_item1_desc": "Modern gentle dental treatments and clinical procedures ensuring comfort and healthy smiles.",
    "gallery.patient_item2_tag": "Digital Diagnostics",
    "gallery.patient_item2_title": "Digital OPG Consultation & Smile Planning",
    "gallery.patient_item2_desc": "Clear, in-depth digital imaging and treatment discussion tailored to each patient's dental health.",
    "gallery.patient_item3_tag": "Senior Care",
    "gallery.patient_item3_title": "Senior Citizen Care & Smiles",
    "gallery.patient_item3_desc": "Dedicated, compassionate dental care restoring eating comfort and smile confidence for senior patients.",
    "gallery.patient_item4_tag": "Oral Examination",
    "gallery.patient_item4_title": "Clinical Consultation & Checkup",
    "gallery.patient_item4_desc": "Thorough dental evaluation and customized oral healthcare consultation in a gentle environment.",
    "gallery.patient_item5_tag": "Precision Care",
    "gallery.patient_item5_title": "Advanced Precision Dental Treatment",
    "gallery.patient_item5_desc": "Specialized dental procedure performed with magnification loupes and expert clinical assistance.",
    "gallery.patient_item6_tag": "Pediatric Care",
    "gallery.patient_item6_title": "Pediatric Gentle Visits & Care",
    "gallery.patient_item6_desc": "Gentle, friendly healthcare visits creating positive and cheerful clinic memories for young children.",
    "gallery.btn_view_more": "View More",
    "gallery.btn_view_less": "View Less",
    "gallery.placeholder_tag": "Upcoming Photo",
    "gallery.placeholder_badge": "Consent Verified"
  },
  "kn": {
    "topbar.address": "388, 5ನೇ ಕ್ರಾಸ್, 14ನೇ ಮುಖ್ಯರಸ್ತೆ, ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "lang.choose": "ಭಾಷೆ:",
    "topbar.whatsapp": "ವಾಟ್ಸಾಪ್: 9448984480",
    "topbar.hours": "ಸೋಮ – ಶನಿ: ಬೆಳಿಗ್ಗೆ 10:30 – 1:30 &bull; ಸಂಜೆ 5:00 – 9:00 | ಭಾನು: ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ | ವೀಡಿಯೊ ಸಮಾಲೋಚನೆ: ಸಂಜೆ 5:00 – 5:30",
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
    "nav.location": "ಸ್ಥಳ & ವಿಳಾಸ",
    "nav.contact": "ಸಂಪರ್ಕ",
    "nav.location_contact": "ಸ್ಥಳ ಮತ್ತು ಸಂಪರ್ಕ",
    "loc_contact.tag": "ಭೇಟಿ & ಸಂಪರ್ಕ",
    "loc_contact.title": "ಸ್ಥಳ ಮತ್ತು ಸಂಪರ್ಕ",
    "loc_contact.subtitle": "ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರಿನಲ್ಲಿರುವ ನಮ್ಮ ಕ್ಲಿನಿಕ್‌ಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ನಮ್ಮ ವೈದ್ಯಕೀಯ ತಂಡದೊಂದಿಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕ ಸಾಧಿಸಿ.",
    "contact.btn_call": "ಈಗ ಕರೆ ಮಾಡಿ",
    "app.label_email": "ಇಮೇಲ್ ವಿಳಾಸ",
    "app.ph_email": "patient@example.com",
    "app.label_treatment": "ಚಿಕಿತ್ಸೆ ಆಯ್ಕೆಮಾಡಿ",
    "app.btn_submit": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಸಲ್ಲಿಸಿ",
    "nav.book_cta": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
    "brand.clinic_name": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್",
    "brand.clinic_name_caps": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್",
    "hero.pill": "ಆರ್ಥೊಡಾಂಟಿಕ್ಸ್ ಮತ್ತು ಪಿರಿಯೊಡಾಂಟಿಸ್ಟ್ರಿ ಕ್ಲಿನಿಕ್ &bull; ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "hero.kpmea_badge": "ಕರ್ನಾಟಕ ಖಾಸಗಿ ವೈದ್ಯಕೀಯ ಸಂಸ್ಥೆಗಳ (KPMEA) ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಕ್ಲಿನಿಕ್",
    "footer.kpmea": "ಕರ್ನಾಟಕ ಖಾಸಗಿ ವೈದ್ಯಕೀಯ ಸಂಸ್ಥೆಗಳ (KPMEA) ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಕ್ಲಿನಿಕ್",
    "hero.title": "ಪ್ರಭು <span class=\"brand-red\">ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್</span>",
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
    "hero.badge_video_title": "ಆನ್‌ಲೈನ್ ವೀಡಿಯೊ ಸಮಾಲೋಚನೆ",
    "hero.badge_video_sub": "ಸಂಜೆ 5:00 – 5:30",
    "hero.badge_sparkle": "ತಜ್ಞ ವೈದ್ಯ ದಂಪತಿ",
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
    "treatments.tag": "ದಂತ ಚಿಕಿತ್ಸಾ ವಿಭಾಗಗಳು",
    "treatments.title": "ಚಿಕಿತ್ಸೆಗಳು",
    "treatments.subtitle": "ನಿಮ್ಮ ಸುಂದರ ನಗು ಮತ್ತು ದಂತ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಸುಧಾರಿತ ಚಿಕಿತ್ಸಾ ವಿಧಾನಗಳು.",
    "treatments.learn_more": "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",
    "treatments.prev": "ಹಿಂದಿನದು",
    "treatments.next": "ಮುಂದಿನದು",
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
    "team.tag": "ಚಿಕಿತ್ಸಾ ತಂಡ",
    "team.title": "ನಮ್ಮ ತಂಡ",
    "team.subtitle": "ಅನುಭವಿ ತಜ್ಞರ ಸಮಿತಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ತುರ್ತು ಸೌಲಭ್ಯ.",
    "team.associate_role": "ಸಹಾಯಕ ದಂತ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕಿ",
    "team.associate_deg": "ಬಿ.ಡಿ.ಎಸ್. &bull; ಸಹಾಯಕ ದಂತ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕಿ",
    "team.associate_bio": "\"ಅವರು 2011 ರಲ್ಲಿ ಪದವಿ ಪಡೆದಿದ್ದು, 2013 ರಿಂದ ನಮ್ಮೊಂದಿಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದ್ದಾರೆ. ರೋಗಿ ಸ್ನೇಹಿ ವೃತ್ತಿಪರರಾಗಿದ್ದು, ದಂತವೈದ್ಯಕೀಯ ಕ್ಷೇತ್ರದ ಇತ್ತೀಚಿನ ಬೆಳವಣಿಗೆಗಳ ಬಗ್ಗೆ ನಿರಂತರವಾಗಿ ತರಬೇತಿ ಪಡೆಯುತ್ತಿದ್ದಾರೆ.\"",
    "team.panel_title": "ತಜ್ಞರ ಸಮಿತಿ",
    "team.panel_desc": "ನಮ್ಮ ರೋಗಿಗಳ ಎಲ್ಲಾ ದಂತ ಚಿಕಿತ್ಸಾ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸಲು ಕ್ಲಿನಿಕ್ ತನ್ನದೇ ಆದ ಅನುಭವಿ ತಜ್ಞರ ತಂಡವನ್ನು ಹೊಂದಿದೆ:",
    "team.surg_sub": "ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ದಂತ ಆರೈಕೆ.",
    "team.prostho_sub": "ಹಲ್ಲುಗಳ ಪುನರ್ನಿರ್ಮಾಣ ಮತ್ತು ಪ್ರಾಸ್ಥೆಟಿಕ್ಸ್.",
    "team.pedia_sub": "ಮಕ್ಕಳ ವಿಶೇಷ ದಂತ ರಕ್ಷಣೆ.",
    "team.emergency_title": "ವೈದ್ಯಕೀಯ ತುರ್ತು ಸೇವೆ",
    "team.emergency_desc": "\"ಯಾವುದೇ ವೈದ್ಯಕೀಯ ತುರ್ತು ಪರಿಸ್ಥಿತಿಯ ಸಂದರ್ಭದಲ್ಲಿ, ಕ್ಲಿನಿಕ್‌ನೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರುವ ವೈದ್ಯರು ಹಾಗೂ ಸಮೀಪದ ಪ್ರತಿಷ್ಠಿತ ನರ್ಸಿಂಗ್ ಹೋಮ್ ಸಹಯೋಗದ ಮೂಲಕ ತಕ್ಷಣದ ವೈದ್ಯಕೀಯ ನೆರವು ಮತ್ತು ತುರ್ತು ಆರೈಕೆಯನ್ನು ಒದಗಿಸಲಾಗುತ್ತದೆ.\"",
    "legacy.tag": "ಪರಂಪರೆ ಮತ್ತು ಇತಿಹಾಸ",
    "legacy.title": "ಕ್ಲಿನಿಕ್ ಪರಂಪರೆ",
    "legacy.subtitle": "2007 ರಿಂದ ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರಿನಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹ ದಂತ ಸೇವೆಯ ಸುವರ್ಣ ಹೆಜ್ಜೆಗಳು.",
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
    "gallery.tag": "ಕ್ಲಿನಿಕ್ ಝಲಕ್",
    "gallery.title": "ಫೋಟೋ ಗ್ಯಾಲರಿ",
    "gallery.subtitle": "ನಮ್ಮ ಆಧುನಿಕ ಕ್ಲಿನಿಕ್ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ರೋಗಿಗಳ ಸುಂದರ ಕ್ಷಣಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
    "gallery.btn_view": "ದೊಡ್ಡದಾಗಿ ವೀಕ್ಷಿಸಿ",
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
    "app.tag": "ಸಮಾಲೋಚನೆ ವಿನಂತಿ",
    "app.title": "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್",
    "app.subtitle": "ಪ್ರಭು ಡೆಂಟಲ್ ಕ್ಲಿನಿಕ್, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು - ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸುವಿಕೆ.",
    "app.plan_title": "ನಿಮ್ಮ ಭೇಟಿಯನ್ನು ಯೋಜಿಸಿ",
    "app.plan_desc": "ನಿಮ್ಮ ಅಪೇಕ್ಷಿತ ದಿನಾಂಕ ಮತ್ತು ದಂತ ಸಮಸ್ಯೆಯನ್ನು ನಮೂದಿಸಿ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ.",
    "app.benefit1": "ಡಾ. ಮಹೇಶ್ ಹೆಚ್.ವಿ. (ಎಂ.ಡಿ.ಎಸ್.) ಅಥವಾ ಡಾ. ರಮ್ಯಾ ಕೆ.ಎಸ್. (ಎಂ.ಡಿ.ಎಸ್.) ಅವರೊಂದಿಗೆ ಸಮಾಲೋಚನೆ",
    "app.benefit2": "ಬೆಳಗಿನ ಅವಧಿ (ಬೆಳಿಗ್ಗೆ 10:30 – ಮಧ್ಯಾಹ್ನ 01:30)",
    "app.benefit3": "ಸಂಜೆಯ ಅವಧಿ (ಸಂಜೆ 05:00 – ರಾತ್ರಿ 09:00)",
    "app.benefit_video": "ಆನ್‌ಲೈನ್ ವೀಡಿಯೊ ಸಮಾಲೋಚನೆ (ಸಂಜೆ 5:00 – 5:30)",
    "app.benefit4": "ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ ಸುಲಭವಾಗಿ ತಲುಪಬಹುದಾದ ಸ್ಥಳ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "app.timings_heading": "ಕ್ಲಿನಿಕ್ ಸಮಯ",
    "app.timings_schedule": "ಸೋಮವಾರ – ಶನಿವಾರ:<br>ಬೆಳಿಗ್ಗೆ 10:30 – ಮಧ್ಯಾಹ್ನ 01:30<br>ಸಂಜೆ 05:00 – ರಾತ್ರಿ 09:00<br><br>ಭಾನುವಾರ:<br>ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಮಾತ್ರ<br><br>ಆನ್‌ಲೈನ್ ವೀಡಿಯೊ ಸಮಾಲೋಚನೆ:<br>ಸಂಜೆ 5:00 – 5:30",
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
    "faq.a6": "ನಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ನ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಫಾರ್ಮ್ ಮೂಲಕ ಅಥವಾ ವಾಟ್ಸಾಪ್ (+91 94489 84480) ಮೂಲಕ ಸುಲಭವಾಗಿ ಭೇಟಿಯನ್ನು ನಿಗದಿಪಡಿಸಬಹುದು. ಸೋಮವಾರದಿಂದ ಶನಿವಾರದವರೆಗೆ ನಿಯಮಿತ ಸಮಯಗಳಲ್ಲಿ (ಬೆಳಿಗ್ಗೆ 10:30–1:30 ಮತ್ತು ಸಂಜೆ 5:00–9:00) ಹಾಗೂ ಆನ್‌ಲೈನ್ ವೀಡಿಯೊ ಸಮಾಲೋಚನೆ ಸಂಜೆ 5:00 ರಿಂದ 5:30 ರವರೆಗೆ ಲಭ್ಯವಿರುತ್ತದೆ. ಭಾನುವಾರದಂದು ಮುಂಚಿತ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಪಡೆದವರಿಗೆ ಮಾತ್ರ ಚಿಕಿತ್ಸೆ ಲಭ್ಯವಿದೆ.",
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
    "loc.video_label": "ಆನ್‌ಲೈನ್ ವೀಡಿಯೊ ಸಮಾಲೋಚನೆ",
    "loc.video_hours": "ಸಂಜೆ 5:00 – 5:30",
    "loc.video_hours_inline": "ಸಂಜೆ 5:00 – 5:30",
    "loc.landmark": "ಬಸ್ ನಿಲ್ದಾಣದ ಹತ್ತಿರ, ಸರಸ್ವತಿಪುರಂ, ಮೈಸೂರು",
    "loc.btn_directions": "ದಾರಿ ನಕ್ಷೆ ನೋಡಿ",
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
    "footer.nav_title": "ಪುಟಗಳು",
    "footer.address_timings": "ಕ್ಲಿನಿಕ್ ವಿಳಾಸ, ಸಮಯ &amp; ಸಂಪರ್ಕ",
    "footer.rights": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    "footer.draft": "ಸ್ಥಳೀಯ ಪ್ರಸ್ತುತಿ ಮಾದರಿ",
    "mobile.book_visit": "ಬುಕ್ ಮಾಡಿ",
    "mobile.directions": "ದಾರಿ ನಕ್ಷೆ",
    "gallery.tab_clinic": "ಕ್ಲಿನಿಕ್ ಫೋಟೋಗಳು",
    "gallery.tab_patient": "ರೋಗಿಗಳ ಫೋಟೋಗಳು",
    "gallery.patient_consent_note": "ಎಲ್ಲಾ ರೋಗಿಗಳ ಛಾಯಾಚಿತ್ರಗಳು ಮತ್ತು ಚಿಕಿತ್ಸೆಯ ಅನುಭವಗಳನ್ನು ಅವರ ಪೂರ್ವ ಸಮ್ಮತಿಯೊಂದಿಗೆ ಗೌಪ್ಯತೆಯ ನಿಯಮಗಳ ಪ್ರಕಾರ ಪ್ರಕಟಿಸಲಾಗಿದೆ.",
    "gallery.item_exterior_tag": "ಹೊರಾಂಗಣ",
    "gallery.item_exterior_title": "ಕ್ಲಿನಿಕ್ ಹೊರಭಾಗ ಮತ್ತು ಸೈನ್‌ಬೋರ್ಡ್",
    "gallery.item_exterior_desc": "388, 5ನೇ ಕ್ರಾಸ್, 14ನೇ ಮೇನ್, ಸರಸ್ವತಿಪುರಂನಲ್ಲಿರುವ ಕ್ಲಿನಿಕ್ ಪ್ರವೇಶ ದ್ವಾರ.",
    "gallery.item_reception_tag": "ಸ್ವಾಗತ ಕೌಂಟರ್",
    "gallery.item_reception_title": "ರಿಸೆಪ್ಷನ್ & ವಿಶ್ರಾಂತಿ ಕೊಠಡಿ",
    "gallery.item_reception_desc": "ಸ್ವಾಗತಿಸುವ ರಿಸೆಪ್ಷನ್ ಮತ್ತು ರೋಗಿಗಳಿಗೆ ಆರಾಮದಾಯಕ ವಿಶ್ರಾಂತಿ ಕೊಠಡಿ.",
    "gallery.item_interior_tag": "ಒಳಾಂಗಣ",
    "gallery.item_interior_title": "ಕ್ಲಿನಿಕ್ ಒಳಾಂಗಣ",
    "gallery.item_interior_desc": "ಸ್ವಚ್ಛ ಮತ್ತು ಆರಾಮದಾಯಕವಾದ ಕ್ಲಿನಿಕ್‌ನ ಸುಸಜ್ಜಿತ ಒಳಾಂಗಣ.",
    "gallery.item_treatment_tag": "ಚಿಕಿತ್ಸಾ ಕೊಠಡಿ",
    "gallery.item_treatment_title": "ಅತ್ಯಾಧುನಿಕ ದಂತ ಚಿಕಿತ್ಸಾ ಘಟಕ",
    "gallery.item_treatment_desc": "ಆಧುನಿಕ ದಂತ ಚಿಕಿತ್ಸಾ ಕುರ್ಚಿ ಮತ್ತು ಸುಧಾರಿತ ಸಲಕರಣೆಗಳುಳ್ಳ ಕೊಠಡಿ.",
    "gallery.item_equipment_tag": "ಕ್ರಿಮಿಮುಕ್ತ ಘಟಕ",
    "gallery.item_equipment_title": "ಸುಧಾರಿತ ಉಪಕರಣಗಳು ಮತ್ತು ಆಟೋಕ್ಲೇವ್",
    "gallery.item_equipment_desc": "ಕ್ಲಾಸ್-ಬಿ ಆಟೋಕ್ಲೇವ್ ಕ್ರಿಮಿನಾಶಕ ಘಟಕ ಮತ್ತು ಡಿಜಿಟಲ್ ಎಕ್ಸ್-ರೇ ತಂತ್ರಜ್ಞಾನ.",
    "gallery.item_consultation_tag": "ಸಮಾಲೋಚನೆ",
    "gallery.item_consultation_title": "ವೈದ್ಯರ ಸಮಾಲೋಚನಾ ಕೊಠಡಿ",
    "gallery.item_consultation_desc": "ರೋಗಿಗಳೊಂದಿಗೆ ಚಿಕಿತ್ಸೆಯ ಬಗ್ಗೆ ಚರ್ಚಿಸಲು ಪ್ರತ್ಯೇಕ ಸಮಾಲೋಚನಾ ಕೊಠಡಿ.",
    "gallery.patient_item1_tag": "ಚಿಕಿತ್ಸಾ ಆರೈಕೆ",
    "gallery.patient_item1_title": "ರೋಗಿಗಳ ದಂತ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಆರೈಕೆ",
    "gallery.patient_item1_desc": "ಆರಾಮದಾಯಕ ಮತ್ತು ಆರೋಗ್ಯಕರ ಮುಗುಳುನಗೆಯನ್ನು ಖಚಿತಪಡಿಸುವ ಆಧುನಿಕ ದಂತ ಚಿಕಿತ್ಸೆಗಳು.",
    "gallery.patient_item2_tag": "ಡಿಜಿಟಲ್ ಪರೀಕ್ಷೆ",
    "gallery.patient_item2_title": "ಡಿಜಿಟಲ್ ಎಕ್ಸ್-ರೇ ಸಮಾಲೋಚನೆ ಮತ್ತು ಯೋಜನೆ",
    "gallery.patient_item2_desc": "ಪ್ರತಿಯೊಬ್ಬ ರೋಗಿಯ ದಂತ ಆರೋಗ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ವಿವರವಾದ ಡಿಜಿಟಲ್ ಇಮೇಜಿಂಗ್ ಮತ್ತು ಸಮಾಲೋಚನೆ.",
    "gallery.patient_item3_tag": "ಹಿರಿಯರ ಆರೈಕೆ",
    "gallery.patient_item3_title": "ಹಿರಿಯ ನಾಗರಿಕರ ದಂತ ಆರೈಕೆ",
    "gallery.patient_item3_desc": "ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ ಜಗಿಯುವ ಸೌಕರ್ಯ ಮತ್ತು ನಗುವಿನ ಆತ್ಮವಿಶ್ವಾಸವನ್ನು ಮರಳಿ ತರುವ ಪ್ರೀತಿಯ ಆರೈಕೆ.",
    "gallery.patient_item4_tag": "ದಂತ ಪರೀಕ್ಷೆ",
    "gallery.patient_item4_title": "ದಂತ ಸಮಾಲೋಚನೆ ಮತ್ತು ತಪಾಸಣೆ",
    "gallery.patient_item4_desc": "ಆರಾಮದಾಯಕ ವಾತಾವರಣದಲ್ಲಿ ವಿವರವಾದ ದಂತ ತಪಾಸಣೆ ಮತ್ತು ವೈಯಕ್ತಿಕ ಚಿಕಿತ್ಸಾ ಸಮಾಲೋಚನೆ.",
    "gallery.patient_item5_tag": "ನಿಖರ ಚಿಕಿತ್ಸೆ",
    "gallery.patient_item5_title": "ಸುಧಾರಿತ ನಿಖರ ದಂತ ಚಿಕಿತ್ಸೆ",
    "gallery.patient_item5_desc": "ಆಧುನಿಕ ಮ್ಯಾಗ್ನಿಫಿಕೇಶನ್ ಮತ್ತು ತಜ್ಞ ಸಿಬ್ಬಂದಿ ಸಹಯೋಗದೊಂದಿಗೆ ನಡೆಸಲಾಗುವ ಕ್ಲಿನಿಕಲ್ ಚಿಕಿತ್ಸೆ.",
    "gallery.patient_item6_tag": "ಮಕ್ಕಳ ಆರೈಕೆ",
    "gallery.patient_item6_title": "ಮಕ್ಕಳ ಪ್ರೀತಿಯ ದಂತ ಭೇಟಿ & ಆರೈಕೆ",
    "gallery.patient_item6_desc": "ಮಕ್ಕಳಿಗೆ ಭಯವಿಲ್ಲದ, ಪ್ರೀತಿಪೂರ್ವಕ ಮತ್ತು ಸೌಮ್ಯ ವಾತಾವರಣದಲ್ಲಿ ನೀಡಲಾಗುವ ಆರೋಗ್ಯ ಆರೈಕೆ.",
    "gallery.btn_view_more": "ಇನ್ನಷ್ಟು ವೀಕ್ಷಿಸಿ",
    "gallery.btn_view_less": "ಕಡಿಮೆ ತೋರಿಸಿ",
    "gallery.placeholder_tag": "ಮುಂದಿನ ಫೋಟೋ",
    "gallery.placeholder_badge": "ಸಮ್ಮತಿ ದೃಢೀಕರಿಸಲಾಗಿದೆ"
  },
  "hi": {
    "topbar.address": "388, 5वीं क्रॉस, 14वीं मेन, बस स्टॉप के पास, सरस्वतीपुरम, मैसूर",
    "lang.choose": "भाषा:",
    "topbar.whatsapp": "व्हाट्सएप: 9448984480",
    "topbar.hours": "सोम – शनि: 10:30 AM – 1:30 PM &bull; 5:00 PM – 9:00 PM | रवि: केवल पूर्व अपॉइंटमेंट | वीडियो परामर्श: 5:00 PM – 5:30 PM",
    "hero.stat2_num": "2 MDS",
    "nav.home": "होम",
    "nav.about": "हमारे बारे में",
    "nav.doctors": "हमारे डॉक्टर्स",
    "nav.treatments": "उपचार",
    "nav.specialities": "विशेषज्ञताएं",
    "nav.team": "हमारी टीम",
    "nav.legacy": "क्लिनिक विरासत",
    "nav.gallery": "गैलरी",
    "nav.appointment": "अपॉइंटमेंट",
    "nav.faq": "अक्सर पूछे जाने वाले सवाल",
    "nav.location": "स्थान",
    "nav.contact": "संपर्क",
    "nav.location_contact": "स्थान एवं संपर्क",
    "loc_contact.tag": "मुलाकात एवं संपर्क",
    "loc_contact.title": "स्थान एवं संपर्क",
    "loc_contact.subtitle": "सरस्वतीपुरम, मैसूर स्थित हमारे आधुनिक क्लिनिक में पधारें या हमारी देखभाल टीम से सीधे संपर्क करें।",
    "contact.btn_call": "अभी कॉल करें",
    "app.label_email": "ईमेल पता",
    "app.ph_email": "patient@example.com",
    "app.label_treatment": "उपचार चुनें",
    "app.btn_submit": "अपॉइंटमेंट सबमिट करें",
    "nav.book_cta": "अपॉइंटमेंट बुक करें",
    "brand.clinic_name": "प्रभु डेंटल क्लिनिक",
    "brand.clinic_name_caps": "प्रभु डेंटल क्लिनिक",
    "hero.pill": "ऑर्थोडॉन्टिक्स और पेरियोडोंटिक्स क्लिनिक &bull; सरस्वतीपुरम, मैसूर",
    "hero.kpmea_badge": "कर्नाटक निजी चिकित्सा प्रतिष्ठान (KPMEA) अधिनियम के तहत पंजीकृत",
    "footer.kpmea": "कर्नाटक निजी चिकित्सा प्रतिष्ठान (KPMEA) अधिनियम के तहत पंजीकृत",
    "hero.title": "प्रभु <span class=\"brand-red\">डेंटल क्लिनिक</span>",
    "hero.specialty": "ऑर्थोडॉन्टिक्स और पेरियोडोंटिक्स क्लिनिक",
    "hero.desc": "सरस्वतीपुरम, मैसूर। पति-पत्नी विशेषज्ञ जोड़ी डॉ. महेश एच.वी. M.D.S. (पेरियोडोंटिस्ट एवं इंप्लांटोलॉजिस्ट) और डॉ. रम्या के.एस. M.D.S. (ऑर्थोडॉन्टिस्ट एवं डेंटोफेशियल ऑर्थोपेडिस्ट) द्वारा संचालित। 2012 से समर्पित दंत चिकित्सा की विरासत को आगे बढ़ा रहे हैं।",
    "hero.btn_appointment": "अपॉइंटमेंट बुक करें",
    "hero.btn_directions": "दिशा-निर्देश प्राप्त करें",
    "hero.stat1_label": "डॉ. एम.जी. प्रभु के आशीर्वाद से क्लिनिक की विरासत जारी",
    "hero.stat2_label": "पेरियोडोंटिस्ट और ऑर्थोडॉन्टिस्ट विशेषज्ञ जोड़ी",
    "hero.stat3_num": "सत्यापित",
    "hero.stat3_label": "सरस्वतीपुरम में क्लिनिक प्रोफाइल",
    "hero.caption_title": "प्रभु डेंटल क्लिनिक",
    "hero.caption_sub": "388, 5वीं क्रॉस, 14वीं मेन, सरस्वतीपुरम, मैसूर",
    "hero.verified_badge": "क्लिनिक बाहरी दृश्य",
    "hero.badge_loc_title": "सरस्वतीपुरम",
    "hero.badge_loc_sub": "बस स्टॉप के पास, मैसूर",
    "hero.badge_timing_title": "सोमवार – शनिवार",
    "hero.badge_timing_sub": "10:30 AM–1:30 PM, 5:00 PM–9:00 PM",
    "hero.badge_sunday_title": "रविवार",
    "hero.badge_sunday_sub": "केवल पूर्व अपॉइंटमेंट",
    "hero.badge_video_title": "ऑनलाइन वीडियो परामर्श",
    "hero.badge_video_sub": "5:00 PM – 5:30 PM",
    "hero.badge_sparkle": "विशेषज्ञ देखभाल जोड़ी",
    "about.tag": "प्रभु डेंटल क्लिनिक के बारे में",
    "about.title": "2012 से दंत चिकित्सा की विरासत को आगे बढ़ाते हुए",
    "about.subtitle": "समर्पित रोगी देखभाल, नैतिक चिकित्सा और निरंतर क्लिनिकल सुधार - सरस्वतीपुरम, मैसूर।",
    "about.flow_title": "क्लिनिकल परंपरा और विकास यात्रा",
    "about.quote": "\"यह क्लिनिक पति-पत्नी विशेषज्ञ जोड़ी <strong>डॉ. महेश एच.वी. M.D.S. (पेरियोडोंटिस्ट एवं इंप्लांटोलॉजिस्ट)</strong> और <strong>डॉ. रम्या के.एस. M.D.S. (ऑर्थोडॉन्टिस्ट एवं डेंटोफेशियल ऑर्थोपेडिस्ट)</strong> के स्वामित्व में है। <strong>डॉ. एम.जी. प्रभु</strong> के आशीर्वाद से डॉ. महेश और डॉ. रम्या ने वर्ष <strong>2012</strong> में उनसे यह क्लिनिक संभाला और मरीजों के लाभ के लिए क्लिनिक को हर संभव तरीके से बेहतर एवं उन्नत बनाते हुए उसी सेवा भावना को निरंतर आगे बढ़ा रहे हैं।<br><br>सरस्वतीपुरम, मैसूर में इस प्रतिष्ठित विरासत को आगे बढ़ाते हुए, यह क्लिनिक आधुनिक विशेषज्ञता को सौम्य, रोगी-केंद्रित दृष्टिकोण के साथ जोड़ता है। दोनों मिलकर व्यापक विशिष्ट दंत देखभाल प्रदान करते हैं—जटिल पेरियोडोंटल थेरेपी और इंप्लांट रेस्टोरेशन से लेकर आधुनिक ऑर्थोडॉन्टिक स्माइल अलाइनमेंट तक—अत्याधुनिक डेंटल तकनीक, सख्त नसबंदी (स्टरलाइजेशन) प्रोटोकॉल और नैतिक उपचार मानकों का पालन करते हुए।\"<br><br><span class=\"about-kpmea-highlight\"><span class=\"about-kpmea-star\">*</span> <strong>प्रभु डेंटल क्लिनिक कर्नाटक निजी चिकित्सा प्रतिष्ठान (KPMEA) अधिनियम के तहत पंजीकृत है</strong>, जो मान्यता प्राप्त क्लिनिकल, स्वच्छता और नैतिक स्वास्थ्य सेवा मानकों का कड़ाई से पालन करता है।</span>",
    "about.pillar1_desc": "विशेषज्ञ स्नातकोत्तर विशेषज्ञता के साथ क्लिनिक का नेतृत्व करने वाली पति-पत्नी विशेषज्ञ जोड़ी।",
    "about.pillar2_title": "डॉ. एम.जी. प्रभु का आशीर्वाद",
    "about.pillar2_desc": "मैसूर में डॉ. एम.जी. प्रभु द्वारा स्थापित प्रतिष्ठित विरासत और विश्वास को आगे बढ़ाना।",
    "about.pillar3_title": "वर्ष 2012 में कार्यभार संभाला",
    "about.pillar3_desc": "क्लिनिक को निरंतर प्रगति की ओर ले जाते हुए उसी उत्कृष्ट सेवा को जारी रखना।",
    "about.pillar4_title": "सुधार, उन्नयन और रोगी लाभ",
    "about.pillar4_desc": "मरीजों के लाभ के लिए सभी तरीकों से क्लिनिक के निरंतर सुधार और आधुनिकीकरण का लक्ष्य।",
    "doctors.tag": "विशेषज्ञ चिकित्सक",
    "doctors.title": "हमारे डॉक्टर्स",
    "doctors.subtitle": "प्रभु डेंटल क्लिनिक का नेतृत्व करने वाली पति-पत्नी विशेषज्ञ टीम।",
    "doctors.co_owner": "क्लिनिक सह-संस्थापक",
    "doctors.spec_label": "विशेषज्ञता",
    "doctors.mahesh_name": "डॉ. महेश एच.वी.",
    "doctors.mahesh_deg": "B.D.S., M.D.S. (पेरियोडोंटिक्स)",
    "doctors.mahesh_spec": "पेरियोडोंटिस्ट एवं इंप्लांटोलॉजिस्ट",
    "doctors.mahesh_bio": "गम सर्जरी, डेंटल इंप्लांट्स, लेजर पेरियोडोंटिक्स और पुनर्योजी ऊतक प्रक्रियाओं में व्यापक विशेषज्ञता के साथ समर्पित विशेषज्ञ।",
    "doctors.ramya_name": "डॉ. रम्या के.एस.",
    "doctors.ramya_deg": "B.D.S., M.D.S. (ऑर्थोडॉन्टिक्स)",
    "doctors.ramya_spec": "ऑर्थोडॉन्टिस्ट एवं डेंटोफेशियल ऑर्थोपेडिस्ट",
    "doctors.ramya_bio": "बच्चों और वयस्कों दोनों के लिए इनविजिबल एलाइनर्स, मेटल/सिरेमिक ब्रेसेस, डेंटोफेशियल ऑर्थोपेडिक्स और स्माइल डिजाइनिंग में विशेषज्ञ।",
    "doctors.consult_label": "परामर्श समय:",
    "doctors.consult_days": "सोम – शनि और रवि (पूर्व अपॉइंटमेंट)",
    "doctors.btn_consult": "परामर्श का अनुरोध करें",
    "doctors.btn_online_consult": "ऑनलाइन परामर्श",
    "doctors.mds_deg": "M.D.S.",
    "treatments.tag": "क्लिनिकल उपचार",
    "treatments.title": "दंत उपचार सेवाएं",
    "treatments.subtitle": "आपकी मुस्कान के अनुरूप व्यापक रेस्टोरेटिव, कॉस्मेटिक और उन्नत दंत प्रक्रियाएं।",
    "treatments.learn_more": "और जानें",
    "treatments.prev": "पिछला",
    "treatments.next": "अगला",
    "treatments.back": "वापस",
    "treatments.overview": "प्रक्रिया का विवरण",
    "treatments.lbl_duration": "अवधि",
    "treatments.lbl_comfort": "आराम",
    "treatments.val_painless": "दर्द रहित तकनीक",
    "treatments.val_gentle": "सौम्य एवं आरामदायक",
    "treatments.val_natural": "प्राकृतिक सौंदर्य",
    "treatments.val_precision": "सटीक संरेखण",
    "treatments.val_permanent": "स्थायी समाधान",
    "treatments.val_sparkling": "तुरंत चमक",
    "treatments.val_kid_friendly": "बाल-अनुकूल",
    "treatments.val_expert": "विशेषज्ञ देखभाल",
    "treatments.val_instant": "तुरंत परिणाम",
    "treatments.book_btn": "अपॉइंटमेंट बुक करें",
    "treatments.badge_popular": "लोकप्रिय",
    "treatments.badge_laser": "उन्नत लेजर",
    "treatments.badge_specialist": "विशेषज्ञ प्रक्रिया",
    "treatments.badge_cosmetic": "कॉस्मेटिक",
    "treatments.badge_kids": "बाल चिकित्सा",
    "treatments.badge_routine": "नियमित",
    "treatments.badge_restorative": "रेस्टोरेटिव",
    "treatments.badge_gum": "मसूड़ों की देखभाल",
    "treatments.t1_title": "जनरल डेंटिस्ट्री और चेकअप",
    "treatments.t1_sub": "नियमित देखभाल और सफाई",
    "treatments.t1_desc": "व्यापक ओरल जांच, डिजिटल डेंटल एक्स-रे, अल्ट्रासोनिक टीथ स्केलिंग और कैविटी की रोकथाम।",
    "treatments.t1_p1": "डिजिटल इंट्राओरल कैमरा और कम रेडिएशन वाले आरवीजी एक्स-रे जांच",
    "treatments.t1_p2": "अल्ट्रासोनिक स्केलिंग और इनेमल-सुरक्षित डीप टीथ पॉलिशिंग",
    "treatments.t1_p3": "कैविटी रोकथाम के लिए फ्लोराइड थेरेपी और डेंटल सीलेंट",
    "treatments.t1_dur": "30–45 मिनट",
    "treatments.t2_title": "कॉस्मेटिक डेंटिस्ट्री और स्माइल डिजाइन",
    "treatments.t2_sub": "अपनी मुस्कान को संवारें",
    "treatments.t2_desc": "कस्टम सिरेमिक विनियर, टूथ-कलर्ड कम्पोजिट बॉन्डिंग और पूर्ण स्माइल मेकओवर।",
    "treatments.t2_p1": "अल्ट्रा-थिन कस्टम पोर्सिलेन व कम्पोजिट विनियर",
    "treatments.t2_p2": "गैप क्लोजर, चिप ठीक करने और टूथ रीशेपिंग के लिए कम्पोजिट बॉन्डिंग",
    "treatments.t2_p3": "फेस सिमिट्री और नेचुरल ब्यूटी के अनुरूप पूर्ण स्माइल मेकओवर",
    "treatments.t2_dur": "1–3 विज़िट",
    "treatments.t3_title": "ऑर्थोडॉन्टिक्स और ब्रेसेस",
    "treatments.t3_sub": "दांतों का सही संरेखण",
    "treatments.t3_desc": "डॉ. रम्या के.एस. (M.D.S. ऑर्थोडॉन्टिस्ट) द्वारा पारदर्शी एलाइनर्स, मेटल और सिरेमिक ब्रेसेस।",
    "treatments.t3_p1": "वयस्कों और किशोरों के लिए लगभग अदृश्य क्लियर एलाइनर्स",
    "treatments.t3_p2": "प्रीमियम अमेरिकन ऑर्थोडॉन्टिक्स मेटल एवं टूथ-कलर्ड सिरेमिक ब्रेसेस",
    "treatments.t3_p3": "जबड़े और चेहरे के सुधार के लिए डेंटोफेशियल ऑर्थोपेडिक्स",
    "treatments.t3_dur": "6–18 महीने",
    "treatments.t4_title": "डेंटल इंप्लांट्स",
    "treatments.t4_sub": "स्थायी दांत प्रतिस्थापन",
    "treatments.t4_desc": "डॉ. महेश एच.वी. (M.D.S. पेरियोडोंटिस्ट एवं इंप्लांटोलॉजिस्ट) द्वारा सुरक्षित टाइटेनियम इंप्लांट्स।",
    "treatments.t4_p1": "सिंगल, मल्टीपल टीथ और फुल-माउथ इंप्लांट रीहैबिलिटेशन",
    "treatments.t4_p2": "दीर्घकालिक स्थिरता के लिए विश्वस्तरीय टाइटेनियम और जिरकोनिया इंप्लांट्स",
    "treatments.t4_p3": "बोन ग्राफ्टिंग, साइनस लिफ्ट और कंप्यूटर-गाइडेड इंप्लांट सर्जरी",
    "treatments.t4_dur": "2–4 महीने",
    "treatments.t5_title": "टीथ व्हाइटनिंग",
    "treatments.t5_sub": "चमकदार सफेद मुस्कान",
    "treatments.t5_desc": "उन्नत इन-ऑफिस लेजर व्हाइटनिंग और सुरक्षित कस्टम टेक-होम किट।",
    "treatments.t5_p1": "एक ही 45 मिनट के सत्र में दांतों को 4-8 शेड तक सफेद बनाएं",
    "treatments.t5_p2": "इनेमल-सुरक्षित फॉर्मूलेशन जिससे शून्य या न्यूनतम संवेदनशीलता हो",
    "treatments.t5_p3": "लंबे समय तक चलने वाले परिणामों के लिए व्यक्तिगत टेक-होम मेंटेनेंस ट्रे",
    "treatments.t5_dur": "45–60 मिनट",
    "treatments.t6_title": "रूट कैनाल ट्रीटमेंट (RCT)",
    "treatments.t6_sub": "प्राकृतिक दांतों को बचाएं",
    "treatments.t6_desc": "संक्रमित पल्प और गंभीर दांत दर्द से राहत के लिए आधुनिक दर्द रहित सिंगल-सिटिंग रोटरी आरसीटी।",
    "treatments.t6_p1": "अत्याधुनिक एंडोमोटर सिस्टम से सिंगल-सिटिंग दर्द रहित आरसीटी",
    "treatments.t6_p2": "सटीक जड़ की सफाई के लिए डिजिटल एपेक्स लोकेटर तकनीक",
    "treatments.t6_p3": "ताकत और प्राकृतिक लुक के लिए कस्टम जिरकोनिया या पोर्सिलेन कैप",
    "treatments.t6_dur": "1–2 विज़िट",
    "treatments.t7_title": "पीडियाट्रिक (बाल) दंत चिकित्सा",
    "treatments.t7_sub": "बच्चों के लिए सौम्य देखभाल",
    "treatments.t7_desc": "बच्चों, शिशुओं और किशोरों के लिए खुशनुमा, तनाव-मुक्त और सौम्य दंत चिकित्सा।",
    "treatments.t7_p1": "दूध के दांतों के लिए कैविटी फिलिंग, पल्पोटॉमी और बाल क्राउन",
    "treatments.t7_p2": "दांतों को सड़न से बचाने के लिए फ्लोराइड वार्निश और पिट-फिशर सीलेंट",
    "treatments.t7_p3": "अंगूठा चूसने और जीभ से धकेलने की आदत सुधारने के उपकरण",
    "treatments.t7_dur": "30–45 मिनट",
    "treatments.t8_title": "पेरियोडोंटिक्स और मसूड़ों की देखभाल",
    "treatments.t8_sub": "स्वस्थ मसूड़े, मजबूत दांत",
    "treatments.t8_desc": "डॉ. महेश एच.वी. द्वारा मसूड़ों से खून आना, ढीले दांत और लेजर गम सर्जरी का विशेष इलाज।",
    "treatments.t8_p1": "मसूड़ों की सूजन और जिंजिवाइटिस के लिए डीप सबजिंजाइवल क्युरेटेज और रूट प्लानिंग",
    "treatments.t8_p2": "न्यूनतम असुविधा और तेजी से ठीक होने के लिए लेजर समर्थित मसूड़ों की सर्जरी",
    "treatments.t8_p3": "गम ग्राफ्टिंग, पॉकेट रिडक्शन और बोन पुनर्जनन उपचार",
    "treatments.t8_dur": "1–2 सत्र",
    "treatments.t9_title": "वरिष्ठ नागरिकों की दंत देखभाल",
    "treatments.t9_sub": "बुजुर्गों के लिए विशेष देखभाल",
    "treatments.t9_desc": "वरिष्ठ नागरिकों के लिए आरामदायक, सौम्य और समग्र स्वास्थ्य पर केंद्रित दंत चिकित्सा।",
    "treatments.t9_p1": "वरिष्ठ नागरिकों की आवश्यकताओं के अनुरूप सौम्य व संवेदनशील दंत जांच",
    "treatments.t9_p2": "मुंह सूखना (ज़ेरोस्टोमिया), जड़ की सड़न और संवेदनशील मसूड़ों का प्रबंधन",
    "treatments.t9_p3": "सिस्टमिक स्वास्थ्य स्थितियों (मधुमेह, बीपी) के अनुकूल निवारक देखभाल",
    "treatments.t9_dur": "30–45 मिनट",
    "treatments.t10_title": "प्रोस्थोडॉन्टिक्स और डेंचर्स",
    "treatments.t10_sub": "मुस्कान और चबाने की क्षमता लौटाएं",
    "treatments.t10_desc": "आसानी से चबाने और बोलने के लिए कस्टम पूर्ण व आंशिक डेंचर्स, ब्रिज और इंप्लांट-सपोर्टेड ओवरडेंचर्स।",
    "treatments.t10_p1": "कस्टम सटीक-फिट पूर्ण और आंशिक ऐक्रेलिक/फ्लेक्सिबल डेंचर्स",
    "treatments.t10_p2": "मजबूत चबाने की स्थिरता के लिए इंप्लांट-सपोर्टेड ओवरडेंचर्स",
    "treatments.t10_p3": "प्राकृतिक मुस्कान की बहाली, त्वरित रीलाइनिंग और तत्काल मरम्मत",
    "treatments.t10_dur": "3–4 विज़िट",
    "spec.tag": "क्लिनिक की मुख्य विशेषताएं",
    "spec.title": "विशिष्ट दंत चिकित्सा क्षेत्र",
    "spec.subtitle": "हमारी मुख्य विशेषज्ञताएं जो व्यक्तिगत, दीर्घकालिक परिणाम सुनिश्चित करती हैं।",
    "spec.ortho_title": "ऑर्थोडॉन्टिक्स और डेंटोफेशियल ऑर्थोपेडिक्स",
    "spec.ortho_lead": "डॉ. रम्या के.एस. (M.D.S.) द्वारा संचालित",
    "spec.ortho_desc": "दांतों के टेढ़ेपन, जबड़े के बेमेल और चेहरे के संतुलन के इलाज में विशेषज्ञता।",
    "spec.ortho_f1": "क्लियर इनविजिबल एलाइनर्स",
    "spec.ortho_f2": "सिरेमिक और मेटल ब्रेसेस",
    "spec.ortho_f3": "बच्चों के लिए जबड़ा सुधार उपकरण",
    "spec.ortho_f4": "वयस्क ऑर्थोडॉन्टिक्स और स्माइल रीशेपिंग",
    "spec.perio_title": "पेरियोडोंटिक्स और ओरल इंप्लांटोलॉजी",
    "spec.perio_lead": "डॉ. महेश एच.वी. (M.D.S.) द्वारा संचालित",
    "spec.perio_desc": "मसूड़ों की उन्नत बीमारियों का इलाज, मसूड़े की सर्जरी और अत्याधुनिक डेंटल इंप्लांट्स।",
    "spec.perio_f1": "डेंटल इंप्लांट सर्जरी",
    "spec.perio_f2": "लेजर पेरियोडोंटिक्स और फ्लैप सर्जरी",
    "spec.perio_f3": "बोन ग्राफ्टिंग और टिश्यू पुनर्जनन",
    "spec.perio_f4": "मसूड़ों से खून आना और पायरिया का इलाज",
    "spec.patient_care_title": "रोगी-प्रथम क्लिनिकल मानक",
    "spec.patient_care_lead": "सख्त स्टरलाइजेशन और सुरक्षा",
    "spec.patient_care_desc": "प्रत्येक मरीज के लिए उच्चतम अंतरराष्ट्रीय स्वच्छता मानकों का पालन।",
    "spec.patient_care_f1": "कक्षा-बी ऑटोक्लेव स्टरलाइजेशन",
    "spec.patient_care_f2": "डिजिटल लो-रेडिएशन आरवीजी एक्स-रे",
    "spec.patient_care_f3": "पारदर्शी परामर्श और स्पष्ट योजना",
    "spec.patient_care_f4": "आरामदायक, दर्द रहित प्रक्रियाएं",
    "spec.implant_title": "इंप्लांटोलॉजी",
    "spec.implant_desc": "दांतों की बहाली और प्रतिस्थापन के लिए विशेष डेंटल इंप्लांट उपचार।",
    "spec.implant_lead": "क्लिनिक के इंप्लांटोलॉजिस्ट: डॉ. महेश एच.वी. (M.D.S.)",
    "spec.surg_title": "ओरल सर्जरी",
    "spec.surg_desc": "हमारी अनुभवी विशेषज्ञ सहायता टीम द्वारा प्रदान की जाने वाली विशेषज्ञ ओरल सर्जिकल देखभाल।",
    "spec.prostho_title": "प्रोस्थोडॉन्टिक्स",
    "spec.prostho_desc": "अनुभवी विशेषज्ञों द्वारा कृत्रिम दंत समाधान और दांतों की बहाली।",
    "spec.pedia_title": "बाल दंत चिकित्सा (पीडियाट्रिक)",
    "spec.pedia_desc": "बच्चों और बढ़ते दांतों के लिए विशेष रूप से तैयार दंत चिकित्सा देखभाल।",
    "spec.specialist_support": "विशेषज्ञ सहायता",
    "spec.orbit_hub_sub": "विशेषज्ञता ऑर्बिट",
    "spec.orbit_status": "सतत दक्षिणावर्त चक्र (फोकस करने के लिए कार्ड पर होवर या क्लिक करें)",
    "team.tag": "क्लिनिकल और सपोर्ट टीम",
    "team.title": "हमारी टीम",
    "team.subtitle": "आपके आरामदायक और सौम्य दंत अनुभव के लिए समर्पित अनुभवी टीम।",
    "team.associate_role": "एसोसिएट डेंटल सर्जन",
    "team.associate_deg": "B.D.S.",
    "team.associate_bio": "सामान्य दंत प्रक्रियाओं, स्केलिंग, कंपोजिट रेस्टोरेशन और बाल दंत चिकित्सा में कुशल अनुभवी सर्जन।",
    "team.hygiene_role": "डेंटल हाइजीनिस्ट और असिस्टेंट",
    "team.hygiene_name": "प्रशिक्षित डेंटल सपोर्ट स्टाफ",
    "team.hygiene_bio": "स्टरलाइजेशन, चेयर-साइड असिस्टेंस और मरीज की देखभाल में पूरी तरह प्रशिक्षित समर्पित स्टाफ।",
    "team.reception_role": "क्लिनिक समन्वयक और रिसेप्शन",
    "team.reception_name": "रोगी देखभाल टीम",
    "team.reception_bio": "अपॉइंटमेंट शेड्यूलिंग, मरीजों के मार्गदर्शन और क्लिनिक में आपके सुखद अनुभव के लिए हमेशा तत्पर।",
    "team.panel_title": "विशेषज्ञ देखभाल पैनल",
    "team.panel_desc": "हमारे मरीजों की दंत उपचार आवश्यकताओं को पूरा करने के लिए क्लिनिक के पास अनुभवी विशेषज्ञों की अपनी टीम भी है:",
    "team.surg_sub": "विशेषज्ञ सर्जिकल दंत सहायता।",
    "team.prostho_sub": "विशेषज्ञ दांत बहाली और प्रोस्थेटिक्स।",
    "team.pedia_sub": "बच्चों के लिए विशेषज्ञ दंत देखभाल।",
    "team.emergency_title": "आपातकालीन चिकित्सा प्रबंधन",
    "team.emergency_desc": "\"किसी भी चिकित्सीय आपात स्थिति में, एक संबद्ध चिकित्सक के साथ-साथ पास के एक प्रतिष्ठित नर्सिंग होम के साथ हमारे सहयोग के माध्यम से त्वरित चिकित्सा सहायता और सहयोग आसानी से प्रदान किया जाता है।\"",
    "legacy.tag": "हमारी समृद्ध परंपरा",
    "legacy.title": "विश्वास, समर्पण और निरंतर प्रगति",
    "legacy.subtitle": "2007 से सरस्वतीपुरम, मैसूर में विश्वसनीय दंत चिकित्सा देखभाल की यात्रा।",
    "legacy.doctors_name": "डॉ. महेश एच.वी. &bull; डॉ. रम्या के.एस.",
    "legacy.prabhu_name": "डॉ. एम.जी. प्रभु",
    "legacy.step1_badge": "नींव",
    "legacy.step1_title": "डॉ. एम.जी. प्रभु द्वारा स्थापना",
    "legacy.step1_desc": "सरस्वतीपुरम, मैसूर में नैतिक और उच्च स्तरीय दंत चिकित्सा की मजबूत नींव रखी गई।",
    "legacy.step2_badge": "परंपरा का विस्तार",
    "legacy.step2_title": "वर्ष 2012 में कार्यभार संभाला",
    "legacy.step2_desc": "डॉ. एम.जी. प्रभु के आशीर्वाद से डॉ. महेश एच.वी. और डॉ. रम्या के.एस. ने क्लिनिक का दायित्व संभाला।",
    "legacy.step3_badge": "आधुनिकीकरण",
    "legacy.step3_title": "अत्याधुनिक तकनीक का समावेश",
    "legacy.step3_desc": "डिजिटल आरवीजी रेडियोलॉजी, एडवांस्ड रोटरी एंडोडॉन्टिक्स, लेजर पेरियोडोंटिक्स और ऑटोक्लेव सिस्टम।",
    "legacy.step4_badge": "निरंतर सेवा",
    "legacy.step4_title": "KPMEA पंजीकृत एवं समर्पित",
    "legacy.step4_desc": "कर्नाटक निजी चिकित्सा प्रतिष्ठान अधिनियम के तहत पंजीकृत होकर हजारों परिवारों की मुस्कान संवार रहे हैं।",
    "legacy.step5_badge": "वर्तमान और भविष्य",
    "legacy.step5_title": "क्लिनिक को आगे बढ़ाना और उन्नत करना",
    "legacy.step5_desc": "मरीजों के लाभ के लिए सभी तरीकों से क्लिनिक के निरंतर सुधार और आधुनिकीकरण के उद्देश्य से उसी उत्कृष्ट सेवा को जारी रखना।",
    "legacy.timeline_doctors": "विशेषज्ञ क्लिनिशियन जोड़ी",
    "gallery.tag": "क्लिनिक भ्रमण",
    "gallery.title": "फ़ोटो गैलरी",
    "gallery.subtitle": "सरस्वतीपुरम, मैसूर में हमारे आधुनिक क्लिनिक और रोगी देखभाल के पलों की झलकियां देखें।",
    "gallery.btn_view": "बड़ा करके देखें",
    "gallery.item1_tag": "बाहरी दृश्य",
    "gallery.item1_title": "क्लिनिक का मुख्य भवन",
    "gallery.item1_desc": "388, 5वीं क्रॉस, 14वीं मेन, सरस्वतीपुरम, मैसूर में स्थित क्लिनिक।",
    "gallery.item2_tag": "परामर्श कक्ष",
    "gallery.item2_title": "डॉक्टर्स कंसल्टेशन डेस्क",
    "gallery.item2_desc": "विस्तृत परामर्श और व्यक्तिगत उपचार योजना के लिए आधुनिक कक्ष।",
    "gallery.item3_tag": "ट्रीटमेंट ऑपरेटर",
    "gallery.item3_title": "आधुनिक डेंटल चेयर यूनिट",
    "gallery.item3_desc": "मरीजों के आराम के लिए एर्गोनॉमिक कुर्सियां और उन्नत डेंटल उपकरण।",
    "gallery.item4_tag": "रिसेप्शन",
    "gallery.item4_title": "स्वागत एवं प्रतीक्षा क्षेत्र",
    "gallery.item4_desc": "स्वच्छ, आरामदायक और शांत प्रतीक्षालय।",
    "gallery.item5_tag": "सुरक्षा मानक",
    "gallery.item5_title": "क्लास-बी ऑटोक्लेव स्टरलाइजेशन",
    "gallery.item5_desc": "मरीजों की 100% सुरक्षा के लिए सख्त बहु-स्तरीय नसबंदी प्रणाली।",
    "gallery.item6_tag": "विशेषज्ञ टीम",
    "gallery.item6_title": "डॉ. महेश और डॉ. रम्या",
    "gallery.item6_desc": "आपकी दंत स्वास्थ्य यात्रा में निरंतर समर्पित विशेषज्ञ डॉक्टर्स।",
    "gallery.item7_tag": "सपोर्ट टीम",
    "gallery.item7_title": "हमारा समर्पित स्टाफ",
    "gallery.item7_desc": "हर कदम पर आपके सुखद अनुभव को सुनिश्चित करने वाला विनम्र स्टाफ।",
    "app.tag": "ऑनलाइन बुकिंग",
    "app.title": "अपॉइंटमेंट बुक करें",
    "app.subtitle": "अपनी सुविधा अनुसार परामर्श बुक करें या सीधे व्हाट्सएप पर संपर्क करें।",
    "app.info_title": "क्लिनिक परामर्श समय",
    "app.info_subtitle": "सरस्वतीपुरम, मैसूर में स्थित प्रभु डेंटल क्लिनिक",
    "app.shift_weekdays": "सोमवार – शनिवार",
    "app.shift1_time": "10:30 AM – 1:30 PM",
    "app.shift2_time": "5:00 PM – 9:00 PM",
    "app.shift_sunday": "रविवार",
    "app.sunday_note": "केवल पूर्व अपॉइंटमेंट",
    "app.call_card_title": "कॉल द्वारा बुकिंग",
    "app.call_card_desc": "त्वरित सहायता और पूछताछ के लिए सीधे कॉल करें:",
    "app.wa_card_title": "व्हाट्सएप परामर्श",
    "app.wa_card_desc": "व्हाट्सएप पर तुरंत अपॉइंटमेंट अनुरोध भेजें:",
    "app.wa_card_btn": "व्हाट्सएप पर चैट करें",
    "app.badge_fast": "त्वरित पुष्टि",
    "app.form_heading": "अपॉइंटमेंट फॉर्म",
    "app.label_name": "मरीज का पूरा नाम",
    "app.ph_name": "उदा. राहुल शर्मा",
    "app.label_phone": "10-अंकों का मोबाइल नंबर",
    "app.ph_phone": "उदा. 9876543210",
    "app.label_mobile": "मोबाइल नंबर",
    "app.ph_mobile": "मोबाइल नंबर",
    "app.label_mode": "परामर्श का प्रकार",
    "app.opt_mode_offline": "क्लिनिक विज़िट (ऑफलाइन)",
    "app.opt_mode_online": "ऑनलाइन वीडियो परामर्श (5:00 - 5:30 PM)",
    "app.label_date": "पसंदीदा तारीख",
    "app.label_time": "पसंदीदा समय स्लॉट",
    "app.opt_select_slot": "-- समय स्लॉट चुनें --",
    "app.opt_time_select": "पसंदीदा सत्र चुनें...",
    "app.opt_time_morning": "10:30 AM - 01:30 PM (सुबह का सत्र)",
    "app.opt_time_evening": "05:00 PM - 09:00 PM (शाम का सत्र)",
    "app.opt_time_online": "05:00 PM - 05:30 PM (ऑनलाइन परामर्श सत्र)",
    "app.label_reason": "उपचार या समस्या",
    "app.opt_select_reason": "-- उपचार का प्रकार चुनें --",
    "app.opt_reason_select": "विशेषज्ञता या कारण चुनें...",
    "app.opt_general": "सामान्य दंत परामर्श",
    "app.opt_r1": "सामान्य चेकअप और परामर्श",
    "app.opt_r2": "दांत दर्द / इमरजेंसी",
    "app.opt_r3": "ऑर्थोडॉन्टिक्स / ब्रेसेस / एलाइनर्स",
    "app.opt_r4": "मसूड़ों का इलाज / पेरियोडोंटिक्स",
    "app.opt_r5": "डेंटल इंप्लांट्स",
    "app.opt_r6": "रूट कैनाल ट्रीटमेंट (RCT)",
    "app.opt_r7": "टीथ स्केलिंग और पॉलिशिंग",
    "app.opt_r8": "टीथ व्हाइटनिंग / कॉस्मेटिक डेंटिस्ट्री",
    "app.opt_r9": "बाल चिकित्सा (बच्चों के दांत)",
    "app.opt_r10": "डेंचर्स / प्रोस्थोडॉन्टिक्स",
    "app.opt_r11": "वरिष्ठ नागरिकों की दंत देखभाल",
    "app.opt_r12": "अन्य दंत समस्याएं",
    "app.label_message": "कोई अतिरिक्त संदेश या लक्षण (वैकल्पिक)",
    "app.ph_message": "उदा. पिछले दो दिनों से दाहिनी दाढ़ में दर्द है...",
    "app.label_msg": "संदेश",
    "app.ph_msg": "कोई विशेष प्रश्न या टिप्पणी लिखें...",
    "app.btn_submit": "अपॉइंटमेंट अनुरोध भेजें",
    "app.privacy_note": "आपकी जानकारी पूरी तरह गोपनीय रखी जाती है।",
    "app.success_title": "अपॉइंटमेंट अनुरोध प्राप्त हुआ!",
    "app.success_msg": "धन्यवाद! हमारे क्लिनिक समन्वयक जल्द ही आपकी बुकिंग की पुष्टि करेंगे।",
    "app.success_desc": "यह एक प्रोटोटाइप प्रदर्शन है। आपके द्वारा दर्ज विवरण रिकॉर्ड कर लिए गए हैं।",
    "app.success_cta_call": "क्लिनिक को कॉल करें",
    "app.success_cta_reset": "नया अपॉइंटमेंट बुक करें",
    "app.btn_reset": "दूसरा अनुरोध सबमिट करें",
    "app.plan_title": "अपनी क्लिनिक विज़िट की योजना बनाएं",
    "app.plan_desc": "अपनी पसंदीदा परामर्श तिथि और दंत समस्या के साथ अनुरोध फॉर्म भरें।",
    "app.benefit1": "डॉ. महेश एच.वी. (MDS) या डॉ. रम्या के.एस. (MDS) के साथ परामर्श",
    "app.benefit2": "सुबह का सत्र (10:30 AM – 01:30 PM)",
    "app.benefit3": "शाम का सत्र (05:00 PM – 09:00 PM)",
    "app.benefit_video": "ऑनलाइन वीडियो परामर्श (5:00 PM – 5:30 PM)",
    "app.benefit4": "बस स्टॉप, सरस्वतीपुरम, मैसूर के पास सुविधाजनक स्थान",
    "app.timings_heading": "क्लिनिक का समय",
    "app.timings_schedule": "सोमवार – शनिवार:<br>10:30 AM – 01:30 PM<br>05:00 PM – 09:00 PM<br><br>रविवार:<br>केवल पूर्व अपॉइंटमेंट<br><br>ऑनलाइन वीडियो परामर्श:<br>5:00 PM – 5:30 PM",
    "app.modal_title": "अपॉइंटमेंट अनुरोध प्राप्त हुआ!",
    "app.modal_subtitle": "प्रभु डेंटल क्लिनिक से संपर्क करने के लिए धन्यवाद। आपका विज़िट अनुरोध रिकॉर्ड कर लिया गया है।",
    "app.modal_note": "यह एक फ्रंटएंड प्रदर्शन प्रोटोटाइप है। कोई वास्तविक भुगतान या बुकिंग संसाधित नहीं की गई।",
    "app.modal_btn_close": "बंद करें",
    "faq.tag": "सामान्य प्रश्न",
    "faq.title": "अक्सर पूछे जाने वाले सवाल",
    "faq.subtitle": "क्लिनिक विज़िट और उपचार से जुड़े आम सवालों के स्पष्ट जवाब।",
    "faq.q1": "प्रभु डेंटल क्लिनिक के खुलने का समय क्या है?",
    "faq.a1": "क्लिनिक सोमवार से शनिवार सुबह 10:30 से 1:30 बजे तक और शाम 5:00 से रात 9:00 बजे तक खुला रहता है। ऑनलाइन वीडियो परामर्श शाम 5:00 से 5:30 बजे तक उपलब्ध है। रविवार को केवल पूर्व अपॉइंटमेंट के आधार पर परामर्श दिया जाता है।",
    "faq.q2": "क्या मुझे पहले से अपॉइंटमेंट बुक करना जरूरी है?",
    "faq.a2": "प्रतीक्षा समय से बचने के लिए पूर्व अपॉइंटमेंट की सलाह दी जाती है। हालांकि, आपातकालीन मामलों और वॉक-इन मरीजों का भी तुरंत ध्यान रखा जाता है।",
    "faq.q3": "क्लिनिक में कौन से विशेषज्ञ डॉक्टर्स उपलब्ध हैं?",
    "faq.a3": "क्लिनिक का नेतृत्व डॉ. महेश एच.वी. (M.D.S. पेरियोडोंटिस्ट एवं इंप्लांटोलॉजिस्ट) और डॉ. रम्या के.एस. (M.D.S. ऑर्थोडॉन्टिस्ट एवं डेंटोफेशियल ऑर्थोपेडिस्ट) करते हैं।",
    "faq.q4": "क्या रूट कैनाल ट्रीटमेंट (RCT) में दर्द होता है?",
    "faq.a4": "बिल्कुल नहीं! आधुनिक लोकल एनेस्थीसिया और डिजिटल रोटरी एंडोडॉन्टिक तकनीक से रूट कैनाल प्रक्रिया पूरी तरह आरामदायक और दर्द रहित होती है।",
    "faq.q5": "क्या दांतों के संरेखण के लिए क्लियर एलाइनर्स उपलब्ध हैं?",
    "faq.a5": "हाँ, डॉ. रम्या के.एस. पारदर्शी इनविजिबल एलाइनर्स के साथ-साथ पारंपरिक मेटल और सिरेमिक ब्रेसेस की पूरी श्रृंखला प्रदान करती हैं।",
    "faq.q6": "अपॉइंटमेंट कैसे बुक करें और क्या रविवार को परामर्श उपलब्ध है?",
    "faq.a6": "आप हमारे ऑनलाइन अपॉइंटमेंट फॉर्म या व्हाट्सएप (+91 94489 84480) के माध्यम से सीधे अपॉइंटमेंट का अनुरोध कर सकते हैं। क्लिनिक सोमवार से शनिवार (सुबह 10:30–1:30 और शाम 5:00–9:00) संचालित होता है, और ऑनलाइन वीडियो परामर्श शाम 5:00 से 5:30 बजे तक उपलब्ध है। रविवार केवल पूर्व-निर्धारित अपॉइंटमेंट के लिए आरक्षित है।",
    "faq.q7": "क्लिनिक का सटीक पता क्या है?",
    "faq.a7": "क्लिनिक 388, 5वीं क्रॉस, 14वीं मेन, सरस्वतीपुरम बस स्टॉप के पास, मैसूर - 570009 में स्थित है।",
    "loc.tag": "हमसे मिलें",
    "loc.title": "हमारा स्थान और संपर्क",
    "loc.subtitle": "सरस्वतीपुरम, मैसूर के प्रमुख केंद्र में आसानी से सुलभ स्थान।",
    "loc.badge_map": "गूगल मैप्स",
    "loc.card_title": "प्रभु डेंटल क्लिनिक",
    "loc.address": "388, 5वीं क्रॉस, 14वीं मेन, बस स्टॉप के पास, सरस्वतीपुरम, मैसूर, कर्नाटक 570009",
    "loc.directions_btn": "गूगल मैप्स पर रास्ता देखें",
    "loc.coordinates": "निर्देशांक: 12.302484, 76.627998",
    "loc.city": "सरस्वतीपुरम, मैसूर",
    "loc.hours_inline": "10:30 AM – 01:30 PM &bull; 05:00 PM – 09:00 PM",
    "loc.sunday_hours_inline": "केवल पूर्व अपॉइंटमेंट",
    "loc.badge_verified": "सत्यापित क्लिनिक स्थान",
    "loc.label_address": "पता:",
    "loc.full_address": "388, 5वीं क्रॉस, 14वीं मेन,<br>बस स्टॉप के पास,<br>सरस्वतीपुरम,<br>मैसूर",
    "loc.timings_title": "क्लिनिक का समय",
    "loc.days": "सोमवार – शनिवार",
    "loc.hours": "10:30 AM – 01:30 PM<br>05:00 PM – 09:00 PM",
    "loc.sunday_label": "रविवार",
    "loc.sunday_hours": "केवल पूर्व अपॉइंटमेंट",
    "loc.video_label": "ऑनलाइन वीडियो परामर्श",
    "loc.video_hours": "5:00 PM – 5:30 PM",
    "loc.video_hours_inline": "5:00 PM – 5:30 PM",
    "loc.landmark": "बस स्टॉप के पास, सरस्वतीपुरम, मैसूर",
    "loc.btn_directions": "दिशा-निर्देश प्राप्त करें",
    "contact.tag": "प्रत्यक्ष जानकारी",
    "contact.title": "संपर्क",
    "contact.subtitle": "प्रभु डेंटल क्लिनिक, सरस्वतीपुरम, मैसूर।",
    "contact.details_title": "संपर्क विवरण",
    "contact.card1_title": "प्रभु डेंटल क्लिनिक",
    "contact.direct_title": "सीधा संपर्क",
    "contact.phone_label": "फोन:",
    "contact.emergency_label": "आपातकालीन संपर्क:",
    "contact.whatsapp_label": "व्हाट्सएप:",
    "contact.email_label": "ईमेल:",
    "contact.working_hours_title": "कार्य समय",
    "contact.quick_chat": "त्वरित चैट",
    "contact.whatsapp_btn": "व्हाट्सएप",
    "lightbox.close": "बंद करें",
    "lightbox.title": "प्रभु डेंटल क्लिनिक बाहरी दृश्य एवं साइनबोर्ड",
    "mobile.call_btn": "कॉल करें",
    "mobile.wa_btn": "व्हाट्सएप",
    "mobile.book_visit": "विज़िट बुक करें",
    "mobile.directions": "दिशा-निर्देश",
    "footer.rights": "सर्वाधिकार सुरक्षित।",
    "footer.disclaimer": "इस वेबसाइट पर दी गई जानकारी केवल सामान्य जागरूकता और शैक्षिक उद्देश्यों के लिए है। किसी भी चिकित्सीय समस्या के लिए सीधे योग्य दंत चिकित्सक से परामर्श लें।",
    "footer.draft": "प्रभु डेंटल क्लिनिक - आधिकारिक वेबसाइट",
    "footer.kpmea_full": "कर्नाटक निजी चिकित्सा प्रतिष्ठान (KPMEA) अधिनियम के तहत पंजीकृत",
    "footer.nav_title": "नेविगेशन",
    "footer.address_timings": "क्लिनिक का पता, समय और संपर्क",
    "gallery.tab_clinic": "क्लिनिक फ़ोटो",
    "gallery.tab_patient": "मरीजों की फ़ोटो",
    "gallery.patient_consent_note": "सभी रोगी तस्वीरें और उपचार अनुभव क्लिनिकल गोपनीयता व नैतिक नियमों के तहत पूर्व सूचित सहमति के साथ प्रकाशित किए गए हैं।",
    "gallery.item_exterior_tag": "बाहरी दृश्य",
    "gallery.item_exterior_title": "क्लिनिक बाहरी दृश्य एवं साइनबोर्ड",
    "gallery.item_exterior_desc": "388, 5वीं क्रॉस, 14वीं मेन, सरस्वतीपुरम, मैसूर में क्लिनिक का मुख्य प्रवेश द्वार।",
    "gallery.item_reception_tag": "स्वागत कक्ष",
    "gallery.item_reception_title": "रिसेप्शन एवं प्रतीक्षालय",
    "gallery.item_reception_desc": "सुव्यवस्थित रिसेप्शन और मरीजों के लिए आरामदायक प्रतीक्षालय।",
    "gallery.item_interior_tag": "आंतरिक दृश्य",
    "gallery.item_interior_title": "क्लिनिक आंतरिक गलियारा",
    "gallery.item_interior_desc": "मरीजों की सुविधा और स्वच्छता के अनुरूप आधुनिक आंतरिक गलियारा।",
    "gallery.item_treatment_tag": "उपचार कक्ष",
    "gallery.item_treatment_title": "डेंटल ट्रीटमेंट रूम",
    "gallery.item_treatment_desc": "एर्गोनोमिक डेंटल चेयर और अत्याधुनिक ऑर्थोडॉन्टिक व पेरियोडोंटल उपकरणों से सुसज्जित कक्ष।",
    "gallery.item_equipment_tag": "स्टरलाइजेशन",
    "gallery.item_equipment_title": "उन्नत उपकरण और ऑटोक्लेव",
    "gallery.item_equipment_desc": "क्लास-बी ऑटोक्लेव नसबंदी प्रणाली और कम रेडिएशन वाली डिजिटल रेडियोलॉजी तकनीक।",
    "gallery.item_consultation_tag": "परामर्श कक्ष",
    "gallery.item_consultation_title": "डॉक्टर्स कंसल्टेशन रूम",
    "gallery.item_consultation_desc": "विस्तृत रोगी मूल्यांकन और स्माइल प्लानिंग के लिए समर्पित कंसल्टेशन डेस्क।",
    "gallery.patient_item1_tag": "उपचार व देखभाल",
    "gallery.patient_item1_title": "दंत चिकित्सा एवं रोगी देखभाल",
    "gallery.patient_item1_desc": "मरीजों के आराम और स्वस्थ मुस्कान को सुनिश्चित करने वाले आधुनिक दंत उपचार।",
    "gallery.patient_item2_tag": "डिजिटल डायग्नोस्टिक्स",
    "gallery.patient_item2_title": "डिजिटल एक्स-रे परामर्श एवं स्माइल प्लानिंग",
    "gallery.patient_item2_desc": "प्रत्येक रोगी की मौखिक स्थिति के अनुसार डिजिटल इमेजिंग और उपचार परामर्श।",
    "gallery.patient_item3_tag": "वरिष्ठ नागरिक देखभाल",
    "gallery.patient_item3_title": "वरिष्ठ नागरिक दंत देखभाल व मुस्कान",
    "gallery.patient_item3_desc": "वरिष्ठ नागरिकों के लिए खान-पान की सुविधा और मुस्कान का आत्मविश्वास लौटाने वाली करुणामयी देखभाल।",
    "gallery.patient_item4_tag": "मौखिक जांच",
    "gallery.patient_item4_title": "क्लिनिकल परामर्श एवं दंत परीक्षण",
    "gallery.patient_item4_desc": "शांत और सहज वातावरण में संपूर्ण मौखिक परीक्षण एवं व्यक्तिगत उपचार परामर्श।",
    "gallery.patient_item5_tag": "सटीक उपचार",
    "gallery.patient_item5_title": "उन्नत सटीक दंत चिकित्सा",
    "gallery.patient_item5_desc": "आधुनिक मैग्निफिकेशन लूप्स और विशेषज्ञ क्लिनिकल टीम के साथ किया जाने वाला दंत उपचार।",
    "gallery.patient_item6_tag": "बाल चिकित्सा",
    "gallery.patient_item6_title": "बच्चों की सौम्य विज़िट एवं देखभाल",
    "gallery.patient_item6_desc": "बच्चों के लिए तनाव-मुक्त, संवेदनशील और खुशनुमा माहौल में की जाने वाली स्वास्थ्य देखभाल।",
    "gallery.btn_view_more": "और देखें",
    "gallery.btn_view_less": "कम देखें",
    "gallery.placeholder_tag": "आगामी तस्वीर",
    "gallery.placeholder_badge": "सहमति सत्यापित"
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
  initGalleryTabs();
  initGalleryLoadMore();
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
    document.body.classList.remove('lang-hi');
  } else if (lang === 'hi') {
    document.body.classList.add('lang-hi');
    document.body.classList.remove('lang-kn');
  } else {
    document.body.classList.remove('lang-kn');
    document.body.classList.remove('lang-hi');
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
          : currentLang === 'hi'
          ? 'खुला है • रविवार का सुबह का सत्र दोपहर 1:30 बजे तक'
          : 'Open Now • Sunday Morning Session until 1:30 PM';
      } else if (currentTimeInMinutes < mMorningStart) {
        badgeClass = 'closed';
        statusText = currentLang === 'kn'
          ? 'ಈಗ ಮುಚ್ಚಿದೆ • ಇಂದು ಭಾನುವಾರ ಬೆಳಿಗ್ಗೆ 10:30 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
          : currentLang === 'hi'
          ? 'अभी बंद है • आज रविवार सुबह 10:30 बजे खुलेगा'
          : 'Closed Now • Opens Today (Sunday) at 10:30 AM';
      } else {
        badgeClass = 'closed';
        statusText = currentLang === 'kn'
          ? 'ಇಂದಿನ ಸೇವೆ ಮುಕ್ತಾಯ • ಸೋಮವಾರ ಬೆಳಿಗ್ಗೆ 10:30 ಕ್ಕೆ ತೆರೆಯುತ್ತದೆ'
          : currentLang === 'hi'
          ? 'आज की सेवा समाप्त • सोमवार सुबह 10:30 बजे खुलेगा'
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
        : currentLang === 'hi'
        ? 'कृपया * से चिह्नित सभी आवश्यक फ़ील्ड भरें'
        : 'Please fill in all required fields marked with *';
      alert(alertMsg);
      return;
    }

    // Name validation: must contain only letters, spaces and dots (no numbers or special characters)
    if (/[^A-Za-z\u0C80-\u0CFF\u0900-\u097F\s\.]/.test(name) || !/[A-Za-z\u0C80-\u0CFF\u0900-\u097F]/.test(name)) {
      const nameMsg = currentLang === 'kn'
        ? 'ದಯವಿಟ್ಟು ಸರಿಯಾದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ (ಕೇವಲ ಅಕ್ಷರಗಳನ್ನು ಬಳಸಿ, ಸಂಖ್ಯೆಗಳು ಅಥವಾ ವಿಶೇಷ ಚಿಹ್ನೆಗಳಲ್ಲ).'
        : currentLang === 'hi'
        ? 'कृपया सही रोगी का नाम दर्ज करें (केवल अक्षर, संख्याएं या विशेष वर्ण नहीं)।'
        : 'Please enter a valid patient name (letters only, no numbers or special characters).';
      alert(nameMsg);
      form.patientName.focus();
      return;
    }

    const email = form.patientEmail ? form.patientEmail.value.trim() : '';
    const phoneClean = phone.replace(/\D/g, '');
    if (phoneClean.length !== 10) {
      const phoneMsg = currentLang === 'kn'
        ? 'ದಯವಿಟ್ಟು 10 ಅಂಕಿಗಳ ಸರಿಯಾದ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.'
        : currentLang === 'hi'
        ? 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।'
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
        : currentLang === 'hi'
        ? 'प्रभु डेंटल क्लिनिक रविवार को नियमित रूप से बंद रहता है। कृपया सोमवार से शनिवार के बीच की तारीख चुनें।'
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
      ...(email ? ['✉️ *Email:* ' + email] : []),
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
         <strong>ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:</strong> ${escapeHtml(phone)}<br>${email ? '<strong>ಇಮೇಲ್:</strong> ' + escapeHtml(email) + '<br>' : ''}
         <strong>ಸಮಾಲೋಚನೆ ವಿಧಾನ:</strong> ${escapeHtml(mode)}<br>
         <strong>ದಿನಾಂಕ & ಸಮಯ:</strong> ${escapeHtml(date)} (${escapeHtml(timeSlot)})<br>
         <strong>ವಿಶೇಷತೆ/ಉದ್ದೇಶ:</strong> ${escapeHtml(reason)}`
      : currentLang === 'hi'
      ? `<strong>रोगी का नाम:</strong> ${escapeHtml(name)}<br>
         <strong>मोबाइल नंबर:</strong> ${escapeHtml(phone)}<br>${email ? '<strong>ईमेल:</strong> ' + escapeHtml(email) + '<br>' : ''}
         <strong>परामर्श का प्रकार:</strong> ${escapeHtml(mode)}<br>
         <strong>अनुरोधित तिथि व समय:</strong> ${escapeHtml(date)} (${escapeHtml(timeSlot)})<br>
         <strong>विशेषज्ञता/कारण:</strong> ${escapeHtml(reason)}`
      : `<strong>Patient:</strong> ${escapeHtml(name)}<br>
         <strong>Mobile:</strong> ${escapeHtml(phone)}<br>${email ? '<strong>Email:</strong> ' + escapeHtml(email) + '<br>' : ''}
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

/**
 * Gallery Category Tab Switcher (Clinic Photos <-> Patient Photos)
 */
function initGalleryTabs() {
  const tabs = document.querySelectorAll('.js-gallery-tab');
  const panels = document.querySelectorAll('.js-gallery-panel');
  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetCat = tab.getAttribute('data-gallery-tab');
      tabs.forEach(t => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      panels.forEach(panel => {
        const isMatch = panel.getAttribute('data-gallery-cat') === targetCat;
        panel.classList.toggle('is-active', isMatch);
        panel.style.display = isMatch ? 'block' : 'none';

        if (isMatch) {
          panel.querySelectorAll('.gallery-card:not(.gallery-card--hidden)').forEach(card => {
            card.classList.add('is-revealed');
          });
        }
      });
    });
  });
}

function initGalleryLoadMore() {
  const toggleButtons = document.querySelectorAll('.js-gallery-toggle-btn');
  if (!toggleButtons.length) return;

  toggleButtons.forEach(btn => {
    const category = btn.getAttribute('data-target');
    const panel = btn.closest('.js-gallery-panel') || document.querySelector(`.js-gallery-panel[data-gallery-cat="${category}"]`);
    if (!panel) return;

    const hiddenCards = panel.querySelectorAll('.js-gallery-hidden');
    const wrap = btn.closest('.gallery-more-wrap');

    if (!hiddenCards.length && wrap) {
      wrap.style.display = 'none';
      return;
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = btn.classList.contains('is-expanded');
      const textEl = btn.querySelector('.js-gallery-more-text');

      if (!isExpanded) {
        hiddenCards.forEach(card => {
          card.classList.remove('gallery-card--hidden');
          card.classList.add('gallery-card--revealed');
          card.classList.add('is-revealed');
        });
        btn.classList.add('is-expanded');
        btn.setAttribute('aria-expanded', 'true');
        if (textEl) {
          textEl.setAttribute('data-i18n', 'gallery.btn_view_less');
          textEl.textContent = (translations[currentLang] && translations[currentLang]['gallery.btn_view_less']) || 'View Less';
        }
      } else {
        hiddenCards.forEach(card => {
          card.classList.add('gallery-card--hidden');
          card.classList.remove('gallery-card--revealed');
        });
        btn.classList.remove('is-expanded');
        btn.setAttribute('aria-expanded', 'false');
        if (textEl) {
          textEl.setAttribute('data-i18n', 'gallery.btn_view_more');
          textEl.textContent = (translations[currentLang] && translations[currentLang]['gallery.btn_view_more']) || 'View More';
        }
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

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

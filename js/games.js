

const GAMES = [
  {
    id: 1,
    answer: "Ulcerative colitis",
    clues:     [
      "A 26-year-old man reports several months of crampy lower abdominal pain with frequent loose stools.",
      "He now has urgency, tenesmus, and intermittent passage of blood and mucus in the stool.",
      "He has lost 5 lb and says symptoms improve only briefly between flares.",
      "Exam shows mild diffuse lower abdominal tenderness without guarding, and labs show elevated ESR and CRP.",
      "Colonoscopy demonstrates continuous erythematous friable mucosa beginning in the rectum and extending proximally.",
      "Biopsy shows crypt abscesses with inflammation limited to the mucosa and submucosa."
    ],
    description: "Ulcerative colitis is an inflammatory bowel disease with continuous colonic inflammation that always involves the rectum. Typical findings include bloody diarrhea, urgency, and tenesmus. Disease is limited to the mucosa and submucosa and is associated with toxic megacolon and primary sclerosing cholangitis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 2,
    answer: "Orotic Aciduria",
    clues:     [
      "A 7-month-old infant is evaluated for poor feeding, failure to thrive, and developmental delay.",
      "He has severe pallor and has not improved despite iron supplementation.",
      "CBC shows megaloblastic anemia with normal vitamin B12 and folate levels.",
      "Serum ammonia is normal, and there is no history of liver dysfunction.",
      "Urine testing reveals markedly increased orotic acid excretion.",
      "The defect involves impaired UMP synthase activity in pyrimidine synthesis."
    ],
    description: "Orotic aciduria is a rare defect in de novo pyrimidine synthesis due to UMP synthase deficiency. It causes megaloblastic anemia, growth failure, and excess urinary orotic acid without hyperammonemia. Treatment is oral uridine supplementation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 3,
    answer: "Streptococcus pyogenes (Group A Strep) pharyngitis",
    clues:     [
      "A 10-year-old boy presents with acute sore throat and painful swallowing for 2 days.",
      "He has fever and headache but no cough or runny nose.",
      "Exam shows tonsillar exudates, palatal petechiae, and tender anterior cervical lymph nodes.",
      "A rapid antigen detection test from a throat swab is positive.",
      "He improves after penicillin treatment, and the family is counseled about preventing later complications.",
      "Untreated infection can lead to complications such as acute rheumatic fever, so prompt treatment is recommended."
    ],
    description: "Group A streptococcal pharyngitis classically presents with fever, sore throat, tonsillar exudates, and tender anterior cervical lymphadenopathy without viral upper respiratory symptoms. Treatment reduces symptom duration and lowers the risk of acute rheumatic fever.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 4,
    answer: "Epilepsy (chronic seizure disorder)",
    clues:     [
      "A 23-year-old woman reports repeated episodes of unprovoked loss of awareness over the last year.",
      "During some events she has rhythmic jerking of both arms followed by confusion and fatigue.",
      "There is no fever, no substance use, and no provoking metabolic abnormality on repeated evaluations.",
      "MRI brain is unrevealing, but EEG demonstrates recurrent epileptiform discharges.",
      "She is advised not to drive until events are controlled and is started on long-term antiseizure therapy.",
      "Her recurrent unprovoked events and epileptiform EEG findings support a chronic seizure disorder requiring long-term management."
    ],
    description: "Epilepsy is a chronic brain disorder characterized by recurrent unprovoked seizures. Evaluation focuses on distinguishing seizure type, identifying triggers or structural lesions, and selecting an antiseizure medication appropriate for the syndrome.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 5,
    answer: "Sickle Cell Anemia",
    clues:     [
      "A 14-year-old boy presents with severe pain in both legs and lower back after a recent viral illness.",
      "He has had multiple prior pain crises and several hospitalizations since childhood.",
      "Exam shows scleral icterus and tenderness over the long bones without swelling of a single joint.",
      "Labs reveal normocytic anemia, elevated reticulocyte count, elevated indirect bilirubin, and Howell-Jolly bodies on smear.",
      "Hemoglobin electrophoresis shows no hemoglobin A and predominance of hemoglobin S.",
      "The underlying mutation substitutes valine for glutamate in the beta-globin chain."
    ],
    description: "Sickle cell anemia is caused by a missense mutation in beta-globin that promotes polymerization of deoxygenated hemoglobin S. Patients develop chronic hemolysis, vaso-occlusive pain crises, autosplenectomy, and increased risk of encapsulated infections.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 6,
    answer: "Creutzfeldt-Jakob Disease (CJD)",
    clues:     [
      "A 67-year-old man develops rapidly progressive cognitive decline over 3 months.",
      "His family reports personality change, gait instability, and frequent startling jerks.",
      "Neurologic exam reveals myoclonus and worsening dementia without focal infectious signs.",
      "MRI shows cortical ribboning, and EEG demonstrates periodic sharp wave complexes.",
      "CSF testing is positive for 14-3-3 protein.",
      "The condition is caused by a misfolded protein that induces abnormal folding of normal prion protein."
    ],
    description: "Creutzfeldt-Jakob disease is a fatal prion disease causing rapidly progressive dementia, myoclonus, and ataxia. Diagnosis is supported by MRI, EEG, and CSF biomarkers. No curative therapy currently exists.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 7,
    answer: "Noncommunicating Hydrocephalus",
    clues:     [
      "A 2-month-old infant is brought in for increasing head size and poor feeding.",
      "Parents report irritability and intermittent downward deviation of the eyes.",
      "Exam shows a bulging fontanelle and rapidly increasing head circumference crossing percentiles.",
      "Ultrasound and MRI reveal enlarged lateral ventricles with obstruction at the cerebral aqueduct.",
      "No blood or infection is seen in the CSF pathways distal to the blockage.",
      "The ventricular enlargement is due to impaired CSF flow within the ventricular system."
    ],
    description: "Noncommunicating hydrocephalus results from physical obstruction of CSF flow, commonly at the aqueduct of Sylvius. Infants present with macrocephaly and signs of increased intracranial pressure; older patients often have headache, vomiting, and papilledema.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 8,
    answer: "Tuberous Sclerosis Complex",
    clues:     [
      "A 5-year-old girl is evaluated for seizures and delayed language development.",
      "Exam shows multiple hypopigmented ash-leaf macules and several facial angiofibromas.",
      "Her parents mention a history of infantile spasms earlier in life.",
      "Brain MRI demonstrates subependymal nodules and cortical tubers.",
      "Renal imaging reveals multiple angiomyolipomas.",
      "This autosomal dominant disorder involves mutations in tumor suppressor genes regulating mTOR signaling."
    ],
    description: "Tuberous sclerosis complex is an autosomal dominant neurocutaneous syndrome caused by TSC1 or TSC2 mutations. Common manifestations include seizures, intellectual disability, ash-leaf spots, facial angiofibromas, cortical tubers, and renal angiomyolipomas.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 9,
    answer: "Invasive Lobular Carcinoma",
    clues:     [
      "A 58-year-old woman notices a subtle area of fullness in the upper outer breast rather than a discrete hard lump.",
      "Screening mammography is less striking than expected despite persistent clinical concern.",
      "Core biopsy shows small uniform malignant cells infiltrating in single-file patterns.",
      "Immunohistochemistry demonstrates loss of E-cadherin expression.",
      "Further imaging suggests multifocal disease in the same breast.",
      "This breast cancer subtype commonly presents more diffusely than ductal carcinoma."
    ],
    description: "Invasive lobular carcinoma is characterized by loss of E-cadherin and malignant cells infiltrating in single-file arrangements. It may be harder to detect on imaging than ductal carcinoma and can present as diffuse thickening rather than a discrete mass.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 10,
    answer: "Spinal Epidural Abscess",
    clues:     [
      "A 49-year-old man presents with severe midline back pain that has progressed over several days.",
      "He has fever and a history of injection drug use.",
      "Exam reveals focal vertebral tenderness and new lower-extremity weakness.",
      "Inflammatory markers are elevated, and blood cultures later grow Staphylococcus aureus.",
      "MRI with contrast shows a rim-enhancing epidural collection compressing the spinal cord.",
      "Urgent decompression and IV antibiotics are required to prevent permanent neurologic injury."
    ],
    description: "Spinal epidural abscess classically presents with back pain, fever, and neurologic deficits, although all three may not appear initially. MRI is the diagnostic test of choice, and prompt neurosurgical evaluation plus IV antibiotics is critical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 11,
    answer: "Porphyria Cutanea Tarda",
    clues:     [
      "A 47-year-old man develops recurrent blistering lesions on the backs of his hands after sun exposure.",
      "He also has skin fragility, hyperpigmentation, and increased facial hair growth.",
      "Liver enzymes are mildly elevated, and he has a history of heavy alcohol use.",
      "Urine appears dark and shows elevated uroporphyrins.",
      "Testing reveals reduced activity of uroporphyrinogen decarboxylase.",
      "This is the most common porphyria and mainly causes photosensitivity rather than neurovisceral attacks."
    ],
    description: "Porphyria cutanea tarda results from decreased uroporphyrinogen decarboxylase activity. It presents with photosensitivity, blistering skin lesions, hypertrichosis, and tea-colored urine. Associations include hepatitis C, iron overload, and alcohol use.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 12,
    answer: "Anterior Spinal Artery Occlusion (Anterior cord syndrome)",
    clues:     [
      "A 68-year-old man develops sudden bilateral leg weakness after repair of an abdominal aortic aneurysm.",
      "He cannot move his legs well and has loss of pain and temperature sensation below the umbilicus.",
      "Vibration and proprioception remain intact.",
      "Urinary retention develops over the next several hours.",
      "MRI spine excludes compressive hematoma but supports ischemic injury to the anterior two-thirds of the cord.",
      "The syndrome affects corticospinal tracts and spinothalamic tracts while sparing dorsal columns."
    ],
    description: "Anterior spinal artery occlusion causes infarction of the anterior two-thirds of the spinal cord. Patients lose motor function and pain/temperature sensation below the lesion but retain vibration and proprioception carried in the dorsal columns.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 13,
    answer: "Delirium Tremens",
    clues:     [
      "A 52-year-old man is hospitalized 3 days after stopping heavy daily alcohol use.",
      "He becomes anxious, tremulous, and unable to sleep, then develops agitation and visual hallucinations.",
      "Vitals show fever, hypertension, and marked tachycardia.",
      "He is disoriented and diaphoretic with coarse tremor.",
      "Laboratory testing is nonspecific, and no infection is found.",
      "This severe withdrawal state requires benzodiazepines and close monitoring for autonomic instability."
    ],
    description: "Delirium tremens is the most severe form of alcohol withdrawal, usually occurring 48 to 96 hours after cessation. It causes tremor, hallucinations, delirium, and autonomic hyperactivity and can be fatal without prompt treatment.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 14,
    answer: "Norovirus Gastroenteritis",
    clues:     [
      "A 19-year-old college student develops abrupt vomiting and watery diarrhea about 1 day after attending a buffet.",
      "Multiple friends from the same event are sick with similar symptoms.",
      "He has mild diffuse abdominal cramps but no blood in the stool.",
      "Symptoms begin suddenly and improve within 2 days with oral rehydration.",
      "Stool cultures are negative for invasive bacterial pathogens.",
      "This highly contagious virus is a common cause of outbreaks on cruise ships, campuses, and nursing homes."
    ],
    description: "Norovirus is a frequent cause of acute viral gastroenteritis outbreaks. Patients develop abrupt-onset vomiting, watery diarrhea, and abdominal cramping. Management is supportive with hydration.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 15,
    answer: "Ischemic Stroke - Middle Cerebral Artery (MCA)",
    clues:     [
      "A 71-year-old woman suddenly develops facial droop and weakness of the right arm and leg.",
      "Her speech is fluent but nonsensical, and she does not follow commands.",
      "She has left gaze preference and right homonymous hemianopia.",
      "Noncontrast head CT shows no hemorrhage, and CT angiography identifies a large-vessel occlusion in the dominant hemisphere.",
      "The arm and face are affected more than the leg.",
      "This vascular territory commonly produces contralateral hemiparesis, sensory loss, and aphasia when the dominant side is involved."
    ],
    description: "Middle cerebral artery stroke is the most common large-vessel ischemic stroke syndrome. It classically causes contralateral face and arm deficits greater than leg deficits, visual field loss, and aphasia or neglect depending on hemisphere dominance.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 16,
    answer: "Orthostatic Hypotension",
    clues:     [
      "A 75-year-old man complains of dizziness and near-syncope when standing up from bed.",
      "He feels better after sitting or lying down for a minute.",
      "His symptoms began after intensification of antihypertensive therapy.",
      "Blood pressure drops from 138/78 supine to 108/64 standing, with mild compensatory tachycardia.",
      "Neurologic exam is otherwise normal and there is no focal deficit.",
      "The diagnosis is defined by a significant fall in blood pressure shortly after standing."
    ],
    description: "Orthostatic hypotension is a symptomatic fall in blood pressure after standing, often due to volume depletion, medications, or autonomic failure. Patients report lightheadedness, blurred vision, and presyncope that improve when supine.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 17,
    answer: "Internuclear Ophthalmoplegia",
    clues:     [
      "A 31-year-old woman presents with new diplopia when looking to the left.",
      "On exam, the right eye fails to adduct fully on left gaze.",
      "The left eye abducts with horizontal nystagmus.",
      "Convergence is preserved.",
      "MRI brain reveals demyelinating lesions in the brainstem.",
      "The lesion localizes to the medial longitudinal fasciculus."
    ],
    description: "Internuclear ophthalmoplegia is caused by damage to the medial longitudinal fasciculus. The affected eye cannot adduct during horizontal gaze, while the contralateral abducting eye shows nystagmus. In young adults it is strongly associated with multiple sclerosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 18,
    answer: "Paroxysmal Nocturnal Hemoglobinuria",
    clues:     [
      "A 34-year-old man reports episodes of dark morning urine, fatigue, and exertional dyspnea.",
      "He has had one prior unexplained hepatic vein thrombosis.",
      "Labs show hemolytic anemia with elevated LDH, low haptoglobin, and reticulocytosis.",
      "Coombs testing is negative.",
      "Flow cytometry shows absent CD55 and CD59 on blood cells.",
      "The disorder is caused by an acquired PIGA mutation that makes cells sensitive to complement-mediated lysis."
    ],
    description: "Paroxysmal nocturnal hemoglobinuria is an acquired stem-cell disorder due to PIGA mutation and loss of GPI-anchored complement regulators. It causes intravascular hemolysis, thrombosis in unusual sites, and sometimes pancytopenia.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 19,
    answer: "Post-Traumatic Stress Disorder (PTSD)",
    clues:     [
      "A 29-year-old veteran presents months after surviving an explosion during deployment.",
      "He has recurrent nightmares, intrusive daytime memories, and intense distress when hearing loud bangs.",
      "He avoids crowded places and conversations about the event.",
      "His partner reports irritability, hypervigilance, and poor sleep.",
      "Symptoms have persisted for more than 1 month and impair his ability to work.",
      "The disorder follows exposure to actual or threatened death, serious injury, or sexual violence."
    ],
    description: "Post-traumatic stress disorder involves intrusive recollections, avoidance, negative mood changes, and hyperarousal lasting more than 1 month after trauma exposure. First-line treatment commonly includes trauma-focused psychotherapy and SSRIs.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 20,
    answer: "LSD Intoxication",
    clues:     [
      "A 21-year-old man is brought from a music festival for bizarre behavior and panic.",
      "He reports seeing vivid colors and says the walls are breathing.",
      "Exam shows mydriasis, tachycardia, and heightened sensory perceptions without severe respiratory depression.",
      "He remains awake and intermittently anxious but is redirectable in a calm environment.",
      "Routine toxicology screens may not detect the ingested substance.",
      "This hallucinogen commonly causes visual distortions, depersonalization, and sympathetic activation."
    ],
    description: "LSD intoxication produces perceptual distortion, hallucinations, anxiety, and sympathetic stimulation. Treatment is supportive with reassurance and a low-stimulation environment; benzodiazepines may be used for severe agitation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 21,
    answer: "Anterograde Amnesia",
    clues:     [
      "A 45-year-old man can recall his childhood and details from years ago but cannot remember conversations from earlier today.",
      "He repeatedly asks the same questions during the clinic visit.",
      "Family notes the problem began after bilateral hippocampal injury from prolonged hypoxia.",
      "Language and procedural skills are largely intact.",
      "He can form habits during rehabilitation but cannot consciously recall learning sessions.",
      "The deficit reflects inability to form new long-term declarative memories."
    ],
    description: "Anterograde amnesia is impaired formation of new declarative memories after the onset of injury. It is classically associated with damage to the hippocampus, mammillary bodies, or related medial temporal structures.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 22,
    answer: "Immune Thrombocytopenia",
    clues:     [
      "A 28-year-old woman presents with easy bruising and scattered petechiae on her legs.",
      "She had a viral upper respiratory illness 2 weeks ago.",
      "CBC shows platelets of 14,000 per uL with otherwise normal hemoglobin and white cell count.",
      "Peripheral smear shows low platelets without schistocytes.",
      "She has mild gum bleeding but no splenomegaly.",
      "The disorder is caused by autoantibody-mediated platelet destruction, often against GPIIb/IIIa."
    ],
    description: "Immune thrombocytopenia is an autoimmune cause of isolated thrombocytopenia. Patients develop mucocutaneous bleeding, petechiae, and bruising. Treatment depends on severity and may include corticosteroids, IVIG, or thrombopoietin agonists.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 23,
    answer: "Metacarpal Neck Fracture (Boxer's Fracture)",
    clues:     [
      "A 19-year-old man presents after punching a wall during an argument.",
      "He has pain and swelling over the ulnar side of the dominant hand.",
      "Exam shows tenderness over the fifth metacarpal neck with loss of the normal knuckle contour.",
      "Neurovascular status is intact, and there is no rotational deformity on finger flexion.",
      "Hand radiographs show an angulated fracture of the fifth metacarpal neck.",
      "This injury is classically associated with striking a hard object using a closed fist."
    ],
    description: "A boxer's fracture is a fracture of the neck of the fifth metacarpal, usually caused by punching an object. Management depends on angulation and rotational deformity and may include ulnar gutter splinting.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 24,
    answer: "Minimal Change Disease",
    clues:     [
      "A 4-year-old boy is brought in for swelling around the eyes that is worse in the morning.",
      "Over several days he develops generalized edema and decreased urine output.",
      "Urinalysis shows 4+ protein with no hematuria, and serum albumin is low.",
      "Creatinine is normal and complement levels are normal.",
      "Kidney biopsy by light microscopy appears essentially normal, but electron microscopy shows diffuse podocyte foot process effacement.",
      "The child responds rapidly to corticosteroids."
    ],
    description: "Minimal change disease is the most common cause of nephrotic syndrome in children. It causes selective albuminuria, edema, hypoalbuminemia, and hyperlipidemia. Electron microscopy shows podocyte foot process effacement.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 25,
    answer: "Epidural Hematoma",
    clues:     [
      "A 17-year-old boy is brought to the emergency department after being struck in the side of the head during a game.",
      "He briefly loses consciousness, then seems normal for about an hour.",
      "He later develops worsening headache, vomiting, and progressive confusion.",
      "Exam reveals an enlarging ipsilateral pupil and hemiparesis.",
      "Head CT shows a biconvex hyperdense extra-axial collection that does not cross suture lines.",
      "The bleeding source is classically the middle meningeal artery after temporal bone trauma."
    ],
    description: "Epidural hematoma is an arterial bleed between the skull and dura, often due to middle meningeal artery injury. Patients may have a lucid interval followed by rapid deterioration. It is a neurosurgical emergency.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 26,
    answer: "Borrelia recurrentis (Relapsing Fever)",
    clues:     [
      "A 33-year-old refugee presents with recurrent episodes of fever, chills, and headache over 2 weeks.",
      "Each febrile episode lasts several days, then resolves before returning again.",
      "He reports crowded living conditions and body lice exposure during recent travel.",
      "Exam during fever shows tachycardia and hepatosplenomegaly.",
      "Peripheral smear during a febrile spell reveals spirochetes.",
      "The pattern is caused by antigenic variation of surface proteins leading to repeated bacteremia."
    ],
    description: "Louse-borne relapsing fever caused by Borrelia recurrentis produces recurrent febrile episodes because the organism changes its surface antigens over time. Treatment is with appropriate antibiotics, and a Jarisch-Herxheimer reaction may occur.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 27,
    answer: "Rubella Virus (German Measles)",
    clues:     [
      "A 7-year-old girl develops low-grade fever and a fine pink rash that begins on the face and spreads downward.",
      "Her mother noticed tender lumps behind the ears the day before the rash appeared.",
      "Exam shows posterior auricular and suboccipital lymphadenopathy.",
      "The child otherwise appears well, and symptoms resolve quickly.",
      "Serology is positive for rubella-specific IgM.",
      "Infection during pregnancy is associated with cataracts, deafness, and congenital heart disease."
    ],
    description: "Rubella usually causes a mild febrile exanthem with posterior auricular and suboccipital lymphadenopathy. Its major clinical importance is congenital rubella syndrome when infection occurs during pregnancy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 28,
    answer: "Hepatitis D Virus (HDV)",
    clues:     [
      "A 39-year-old man with chronic hepatitis B presents with worsening fatigue, jaundice, and right upper quadrant discomfort.",
      "Liver enzymes are markedly elevated beyond his prior baseline.",
      "Serology remains positive for HBsAg, and testing now reveals anti-HDV antibodies.",
      "He denies alcohol use and has no biliary obstruction on imaging.",
      "The infecting virus is defective and requires a helper virus to assemble and infect hepatocytes.",
      "Coinfection or superinfection with this virus can accelerate progression to cirrhosis."
    ],
    description: "Hepatitis D virus is a defective RNA virus that requires hepatitis B surface antigen for transmission and replication. Superinfection in a patient with chronic hepatitis B often causes severe hepatitis and worsened long-term outcomes.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 29,
    answer: "Herpes Simplex Virus 2 (HSV-2)",
    clues:     [
      "A 24-year-old woman presents with painful genital lesions and dysuria for 4 days.",
      "She also reports fever and tender inguinal lymph nodes.",
      "Exam shows multiple grouped vesicles and shallow ulcers on an erythematous base.",
      "PCR from a lesion is positive for herpes simplex virus.",
      "She is counseled that the virus remains latent in sacral sensory ganglia and may recur.",
      "This is the most common cause of recurrent genital herpes."
    ],
    description: "HSV-2 commonly causes painful genital vesicles and ulcers with tender lymphadenopathy and systemic symptoms during primary infection. The virus establishes latency in sacral ganglia and may reactivate periodically.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 30,
    answer: "Slipped Capital Femoral Epiphysis (SCFE)",
    clues:     [
      "A 13-year-old overweight boy presents with limping and gradually worsening hip pain over several weeks.",
      "He sometimes localizes the pain to the groin but more often points to the medial knee.",
      "On exam, the affected leg is held in external rotation and internal rotation is limited.",
      "Pain increases with passive internal rotation of the hip.",
      "Pelvic radiographs show posterior and inferior displacement of the femoral epiphysis relative to the neck.",
      "This condition is an adolescent growth-plate disorder associated with obesity and endocrine abnormalities."
    ],
    description: "SCFE is displacement of the femoral head relative to the femoral neck through the growth plate, usually in overweight adolescents. Knee pain can be the presenting complaint. Treatment is urgent orthopedic stabilization to prevent avascular necrosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 31,
    answer: "Unstable Angina",
    clues:     [
      "A 64-year-old man develops chest pressure while watching television, without exertion.",
      "He has had similar episodes for the past week, and they are becoming more frequent and lasting longer.",
      "The pain improves partially with nitroglycerin but recurs at rest.",
      "ECG during symptoms shows transient ST-segment depression, and serial troponins remain negative.",
      "He has diabetes, hypertension, and hyperlipidemia.",
      "This syndrome reflects myocardial ischemia without detectable infarction."
    ],
    description: "Unstable angina is part of the acute coronary syndrome spectrum and presents with new, worsening, or rest angina without troponin elevation. It usually results from plaque rupture with subtotal coronary occlusion.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 32,
    answer: "Exogenous thyrotoxicosis",
    clues:     [
      "A 34-year-old woman presents with palpitations, tremor, heat intolerance, and weight loss.",
      "She denies neck pain and has no eye findings or diffuse goiter on exam.",
      "Labs show elevated free T4 with suppressed TSH.",
      "Radioactive iodine uptake is very low.",
      "Serum thyroglobulin is decreased rather than increased.",
      "The condition is caused by ingestion of thyroid hormone rather than endogenous overproduction."
    ],
    description: "Exogenous thyrotoxicosis results from taking thyroid hormone, intentionally or unintentionally. It causes biochemical hyperthyroidism with low radioactive iodine uptake and low thyroglobulin levels.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 33,
    answer: "Progressive Multifocal Leukoencephalopathy (PML)",
    clues:     [
      "A 41-year-old man with advanced HIV develops progressive weakness and difficulty speaking over several weeks.",
      "He has no fever, meningismus, or mass-effect symptoms.",
      "MRI brain shows multifocal asymmetric nonenhancing white matter lesions without significant edema.",
      "CSF PCR is positive for JC virus.",
      "Neurologic deficits continue to worsen unless immune function improves.",
      "This demyelinating disease occurs mainly in severely immunocompromised patients."
    ],
    description: "PML is caused by reactivation of JC virus in immunocompromised patients. It produces progressive focal neurologic deficits with multifocal nonenhancing white matter lesions and has no specific antiviral therapy beyond immune restoration.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 34,
    answer: "Adenomyosis",
    clues:     [
      "A 42-year-old multiparous woman presents with worsening dysmenorrhea and heavy menstrual bleeding.",
      "She reports diffuse pelvic pressure rather than sharp focal pain.",
      "Bimanual exam reveals a uniformly enlarged, boggy, tender uterus.",
      "Pregnancy test is negative and there is no adnexal mass.",
      "MRI suggests endometrial tissue extending into the myometrium.",
      "This condition often coexists with leiomyomas and can cause menorrhagia."
    ],
    description: "Adenomyosis occurs when endometrial glands and stroma are present within the myometrium. It causes heavy, painful menses and a diffusely enlarged boggy uterus, most often in middle-aged multiparous women.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 35,
    answer: "Serous Cystadenoma",
    clues:     [
      "A 46-year-old woman is found to have an incidental ovarian cyst on imaging for renal colic.",
      "She has no weight loss, ascites, or constitutional symptoms.",
      "Ultrasound shows a thin-walled unilocular cyst filled with clear fluid.",
      "The contralateral ovary is normal and there are no papillary excrescences.",
      "Pathology later confirms a benign epithelial tumor.",
      "This is one of the most common benign ovarian neoplasms."
    ],
    description: "Serous cystadenoma is a benign ovarian epithelial tumor typically composed of a thin-walled cyst containing clear serous fluid. It is usually unilateral and lacks the invasive features of serous carcinoma.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 36,
    answer: "Poxvirus (Molluscum Contagiosum)",
    clues:     [
      "A 7-year-old boy has multiple small flesh-colored papules on the trunk and axillae.",
      "Each lesion is dome-shaped with a central umbilication.",
      "He is otherwise healthy, and the lesions are not painful.",
      "A sibling at home developed similar bumps after sharing towels.",
      "Curettage shows molluscum bodies within keratinocytes.",
      "The infection is caused by a DNA poxvirus spread by direct skin contact."
    ],
    description: "Molluscum contagiosum causes small, pearly, umbilicated papules, especially in children and immunocompromised adults. Lesions are usually self-limited but can spread through close contact and autoinoculation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 37,
    answer: "Benign Prostatic Hyperplasia (BPH)",
    clues:     [
      "A 68-year-old man reports urinary hesitancy, weak stream, nocturia, and incomplete emptying.",
      "He has no dysuria, fever, or weight loss.",
      "Digital rectal exam reveals a smooth, symmetrically enlarged prostate.",
      "Postvoid residual volume is elevated.",
      "Serum creatinine is normal, and urinalysis shows no infection.",
      "This common condition results from nodular hyperplasia in the periurethral transition zone."
    ],
    description: "BPH is a nonmalignant proliferation of prostatic glands and stroma that causes lower urinary tract symptoms in older men. Medical therapy often includes alpha-1 blockers and 5-alpha-reductase inhibitors.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 38,
    answer: "Focal Segmental Glomerulosclerosis (FSGS)",
    clues:     [
      "A 35-year-old man presents with progressive leg edema and foamy urine.",
      "He has obesity and a history of prior heroin use.",
      "Urinalysis shows heavy proteinuria and oval fat bodies.",
      "Serum albumin is low and cholesterol is elevated.",
      "Kidney biopsy shows sclerosis affecting segments of some glomeruli, and electron microscopy shows foot process effacement.",
      "This nephrotic syndrome is more common in adults and often responds poorly to steroids."
    ],
    description: "FSGS is a nephrotic syndrome characterized by segmental sclerosis in a subset of glomeruli. It is associated with HIV, heroin use, obesity, and adaptive hyperfiltration states and can progress to chronic kidney disease.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 39,
    answer: "1st Degree AV Block",
    clues:     [
      "A 58-year-old man is found to have a conduction abnormality during a routine ECG.",
      "He has no syncope or chest pain.",
      "His medications include a beta blocker for hypertension.",
      "ECG shows every P wave followed by a QRS complex, but the PR interval is prolonged beyond 200 ms.",
      "There are no dropped beats.",
      "This rhythm reflects delayed AV nodal conduction rather than failure of conduction."
    ],
    description: "First-degree AV block is a prolonged PR interval with one-to-one AV conduction. It is often asymptomatic and may be seen with increased vagal tone, medications, or structural heart disease.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 40,
    answer: "Carotid Sinus Hypersensitivity",
    clues:     [
      "A 78-year-old man has recurrent brief syncopal episodes while shaving or turning his neck.",
      "He recovers quickly once supine.",
      "Telemetry shows transient profound bradycardia during one episode.",
      "Carotid imaging reveals atherosclerotic disease but no acute stroke.",
      "Symptoms are reproduced during monitored carotid sinus massage.",
      "Exaggerated baroreceptor response causes reflex vagal activation and hypotension."
    ],
    description: "Carotid sinus hypersensitivity causes syncope or presyncope triggered by pressure on the carotid sinus, such as shaving or tight collars. It can produce marked bradycardia, hypotension, or both.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 41,
    answer: "Ganglion Cyst",
    clues:     [
      "A 27-year-old woman notices a small lump on the dorsum of her wrist.",
      "The mass fluctuates slightly in size and becomes more noticeable after repetitive use.",
      "It is smooth, cystic, and mildly tender but not warm or erythematous.",
      "Transillumination is positive.",
      "She has full wrist motion and no neurologic deficit.",
      "This lesion represents mucin-filled outpouching from a joint capsule or tendon sheath."
    ],
    description: "Ganglion cysts are benign synovial cysts commonly found on the dorsal wrist. They may be asymptomatic or cause discomfort with motion and can be observed, aspirated, or surgically excised if bothersome.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 42,
    answer: "Major depressive disorder",
    clues:     [
      "A 34-year-old woman presents with persistent low mood that has been present nearly every day for the past seven weeks.",
      "She reports profound fatigue, difficulty concentrating at work, and a loss of interest in hobbies she previously enjoyed.",
      "She has gained approximately 6 kg over two months and sleeps ten or more hours yet still feels unrefreshed.",
      "She describes feelings of worthlessness and excessive guilt about past decisions that she intellectually recognises are disproportionate.",
      "She denies any history of elevated mood, racing thoughts, or periods of unusually high energy.",
      "Her presentation meets criteria for five or more qualifying symptoms present for at least two weeks with impairment across multiple domains of functioning."
    ],
    description: "Major depressive disorder is a mood disorder characterised by at least two weeks of depressed mood or anhedonia, accompanied by neurovegetative symptoms and functional impairment. It has a lifetime prevalence of around 15–20%. First-line treatment combines antidepressant pharmacotherapy (typically an SSRI) and evidence-based psychotherapy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 43,
    answer: "Zollinger-Ellison syndrome",
    clues:     [
      "A 43-year-old man has recurrent severe peptic ulcer disease despite high-dose acid suppression.",
      "He also has chronic watery diarrhea and weight loss.",
      "Endoscopy shows multiple ulcers extending beyond the duodenal bulb.",
      "Fasting serum gastrin is markedly elevated.",
      "Secretin stimulation paradoxically increases gastrin levels.",
      "The syndrome is caused by a gastrin-secreting neuroendocrine tumor, often in the pancreas or duodenum."
    ],
    description: "Zollinger-Ellison syndrome is caused by a gastrinoma leading to marked gastric acid hypersecretion, refractory ulcers, and diarrhea. It can occur sporadically or as part of MEN1.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 44,
    answer: "Taenia solium (Neurocysticercosis)",
    clues:     [
      "A 29-year-old immigrant presents with a first generalized tonic-clonic seizure.",
      "He has chronic headaches but no fever or meningismus.",
      "Brain MRI shows multiple cystic lesions, some with an eccentric dot, at different stages of evolution.",
      "He reports living in a region with poor sanitation and likely exposure to contaminated food or water.",
      "Serology supports cysticercosis.",
      "Human ingestion of eggs leads to larval encystment in the brain and other tissues."
    ],
    description: "Neurocysticercosis is caused by tissue infection with Taenia solium larvae after ingestion of eggs. It is a major cause of seizures worldwide and often shows multiple cystic brain lesions on imaging.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 45,
    answer: "Ludwig's angina",
    clues:     [
      "A 35-year-old man presents to the emergency department with severe neck swelling and difficulty swallowing.",
      "He had a lower molar toothache for one week that he did not seek treatment for.",
      "Examination shows bilateral submandibular and sublingual swelling with a raised, woody-hard floor of the mouth.",
      "His voice is muffled and he is drooling; oxygen saturation is 94% on room air.",
      "CT neck demonstrates gas-forming infection spreading through the submandibular and sublingual spaces bilaterally.",
      "He is taken urgently to the operating theatre for airway securement and surgical drainage."
    ],
    description: "Ludwig's angina is a rapidly progressive, potentially fatal cellulitis of the submandibular and sublingual spaces, most often arising from an infected mandibular molar. The floor of the mouth becomes indurated and elevated, threatening the airway. Management requires immediate airway control, broad-spectrum IV antibiotics, and surgical drainage.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 46,
    answer: "Opioid Withdrawal",
    clues:     [
      "A 30-year-old man presents with diffuse body aches, yawning, abdominal cramps, and diarrhea.",
      "He stopped using heroin yesterday after several years of daily use.",
      "Exam shows mydriasis, piloerection, rhinorrhea, and tachycardia.",
      "He appears miserable but not sedated.",
      "There is no respiratory depression.",
      "This withdrawal syndrome is extremely uncomfortable but usually not life-threatening."
    ],
    description: "Opioid withdrawal causes lacrimation, rhinorrhea, yawning, diarrhea, piloerection, myalgias, and mydriasis after cessation of opioid use. Treatment may include buprenorphine, methadone, clonidine, and supportive care.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 47,
    answer: "Selective Mutism",
    clues:     [
      "A 6-year-old girl speaks normally with her parents and siblings at home.",
      "At school she remains silent, avoids eye contact, and communicates only by nodding or pointing.",
      "Her teacher says this pattern has lasted for months and interferes with class participation.",
      "Hearing and language evaluation are normal.",
      "She appears extremely shy in unfamiliar social situations but not globally developmentally delayed.",
      "This anxiety-related disorder is defined by failure to speak in specific settings despite ability to speak elsewhere."
    ],
    description: "Selective mutism is an anxiety disorder in which a child consistently fails to speak in certain social settings despite speaking normally in others. It commonly overlaps with social anxiety and should be distinguished from language or developmental disorders.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 48,
    answer: "Generalised anxiety disorder",
    clues:     [
      "A 29-year-old woman presents with excessive worry that she describes as difficult to control and present on most days for over six months.",
      "The worry covers multiple domains simultaneously — her job performance, her family's health, finances, and minor daily matters.",
      "She reports muscle tension, frequent headaches, and difficulty falling asleep due to racing thoughts.",
      "She feels irritable, on edge, and exhausted most of the time, even when nothing specific is wrong.",
      "Physical examination and thyroid function tests are entirely normal.",
      "Her symptoms cause significant occupational impairment and cannot be attributed to a substance, medication, or another psychiatric condition."
    ],
    description: "Generalised anxiety disorder is characterised by persistent, difficult-to-control worry across multiple life domains, lasting at least six months and accompanied by somatic symptoms such as muscle tension, irritability, and insomnia. It is among the most prevalent anxiety disorders. First-line treatments include SSRIs, SNRIs, and cognitive-behavioural therapy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 49,
    answer: "Acute Intermittent Porphyria",
    clues:     [
      "A 25-year-old woman presents with severe diffuse abdominal pain, constipation, and anxiety.",
      "She recently started a new antiseizure medication and has been eating very little.",
      "Exam shows tachycardia but no peritoneal signs.",
      "She also reports tingling in her hands and new proximal muscle weakness.",
      "Urine darkens after standing and testing shows elevated porphobilinogen.",
      "The disorder is caused by porphobilinogen deaminase deficiency and does not cause photosensitivity."
    ],
    description: "Acute intermittent porphyria causes episodic neurovisceral symptoms including abdominal pain, neuropathy, psychiatric changes, and autonomic instability. Attacks can be precipitated by drugs, fasting, and alcohol. Treatment includes hemin and glucose loading.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 50,
    answer: "Clonorchis sinensis (Chinese Liver Fluke)",
    clues:     [
      "A 46-year-old man presents with recurrent right upper quadrant discomfort and intermittent jaundice.",
      "He recently immigrated and reports frequent consumption of raw freshwater fish.",
      "Labs show eosinophilia and a cholestatic pattern of liver enzyme elevation.",
      "Ultrasound shows dilated intrahepatic bile ducts without gallstones.",
      "Stool examination reveals characteristic operculated ova.",
      "Chronic infection increases risk of cholangiocarcinoma."
    ],
    description: "Clonorchis sinensis is a liver fluke acquired from raw freshwater fish. It inhabits the biliary tree and causes inflammation, biliary obstruction, eosinophilia, and increased risk of cholangiocarcinoma.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 51,
    answer: "Ameloblastoma",
    clues:     [
      "A 30-year-old man presents with gradual painless swelling of the left posterior mandible over two years.",
      "He has noticed mild facial asymmetry but no pain, numbness, or loosening of teeth.",
      "Panoramic radiograph shows a multilocular radiolucent lesion with a soap-bubble appearance in the left mandibular molar region.",
      "The lesion has caused root resorption of adjacent molars and cortical expansion without perforation.",
      "CT confirms a locally aggressive lesion with thinning of the inferior cortex.",
      "Histopathology reveals epithelial islands with peripheral columnar cells showing reverse nuclear polarity and central stellate reticulum-like cells."
    ],
    description: "Ameloblastoma is the most common clinically significant odontogenic tumour. It arises from odontogenic epithelium and is locally aggressive with a high recurrence rate after conservative treatment. Resection with adequate margins is required; multicystic variants in the mandible have the highest recurrence potential.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 52,
    answer: "Acute mesenteric ischemia",
    clues:     [
      "A 72-year-old woman with atrial fibrillation develops sudden severe abdominal pain.",
      "She repeatedly says the pain is unbearable even though the abdomen is only mildly tender on exam.",
      "She has nausea and one loose stool but no prior similar episodes.",
      "Labs reveal metabolic acidosis with elevated lactate.",
      "CT angiography shows an abrupt occlusion of the superior mesenteric artery.",
      "This condition is a surgical emergency because bowel necrosis can develop rapidly."
    ],
    description: "Acute mesenteric ischemia often presents with pain out of proportion to the physical exam, classically from embolic occlusion of the superior mesenteric artery. Prompt diagnosis and revascularization are essential to prevent bowel infarction.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 53,
    answer: "Alpha-1 antitrypsin deficiency",
    clues:     [
      "A 39-year-old nonsmoker presents with progressive shortness of breath and decreased exercise tolerance.",
      "Pulmonary function testing shows airflow obstruction.",
      "CT chest demonstrates basilar-predominant panacinar emphysema.",
      "He also has mildly elevated liver enzymes.",
      "Serum alpha-1 antitrypsin level is low.",
      "The abnormal protein may accumulate in hepatocytes while failing to protect lung tissue from elastase."
    ],
    description: "Alpha-1 antitrypsin deficiency causes early emphysema, classically basilar and panacinar, especially in nonsmokers. Misfolded protein can also injure the liver, leading to hepatitis, cirrhosis, or hepatocellular carcinoma.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 54,
    answer: "Panic disorder",
    clues:     [
      "A 26-year-old man presents after a series of sudden, overwhelming episodes of intense fear that peak within minutes.",
      "During these episodes he experiences palpitations, shortness of breath, dizziness, chest tightness, and a feeling of impending doom.",
      "Cardiac evaluation including ECG, Holter monitor, and echocardiogram is entirely normal.",
      "He has begun avoiding public transport and crowded places because he fears having another episode away from help.",
      "Between attacks, he reports persistent anxiety about when the next episode will occur.",
      "The recurrent unexpected attacks and subsequent anticipatory anxiety and behavioural change together establish the diagnosis."
    ],
    description: "Panic disorder consists of recurrent unexpected panic attacks — abrupt surges of intense fear with multiple somatic and cognitive symptoms — followed by at least one month of anticipatory anxiety or maladaptive behavioural change. Medical causes must be excluded. CBT is highly effective; SSRIs are the pharmacological first-line.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 55,
    answer: "Attention Deficit Hyperactivity Disorder (ADHD)",
    clues:     [
      "An 8-year-old boy is brought in because he cannot stay seated, interrupts constantly, and loses school materials.",
      "Teachers report he makes careless mistakes and rarely finishes assignments.",
      "Symptoms are present both at home and at school and began years earlier.",
      "Hearing, vision, and intellectual assessment are normal.",
      "There is no history suggesting absence seizures or major mood disorder.",
      "The diagnosis requires persistent inattention and-or hyperactivity causing impairment in multiple settings."
    ],
    description: "ADHD is characterized by developmentally inappropriate inattention, hyperactivity, and impulsivity across more than one setting. Behavioral interventions and stimulant medications are common treatment approaches.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 56,
    answer: "Mycobacterium tuberculosis",
    clues:     [
      "A 42-year-old man has chronic cough, night sweats, weight loss, and intermittent fevers.",
      "He recently spent time in a crowded shelter and has a remote history of incarceration.",
      "Chest imaging shows upper-lobe cavitary lesions.",
      "Sputum smear demonstrates acid-fast bacilli.",
      "Nucleic acid testing confirms the organism.",
      "This pathogen survives within macrophages and requires prolonged multidrug therapy."
    ],
    description: "Mycobacterium tuberculosis causes chronic granulomatous infection, most often in the lungs. Reactivation disease classically affects the upper lobes and presents with cough, hemoptysis, fevers, night sweats, and weight loss.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 57,
    answer: "Dentigerous cyst",
    clues:     [
      "A 22-year-old man attends for a routine dental review and reports no symptoms.",
      "Panoramic radiograph incidentally reveals a well-defined unilocular radiolucency around the crown of an unerupted mandibular third molar.",
      "The lucency is attached to the cemento-enamel junction of the impacted tooth.",
      "There is mild displacement of adjacent teeth but no root resorption.",
      "The cyst wall is lined by non-keratinising stratified squamous epithelium two to four cells thick.",
      "The histological appearance confirms an odontogenic cyst arising from the reduced enamel epithelium."
    ],
    description: "A dentigerous cyst is the most common developmental odontogenic cyst, forming around the crown of an unerupted tooth by accumulation of fluid between the crown and the reduced enamel epithelium. It most frequently involves mandibular third molars. Treatment is enucleation with removal of the associated tooth.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 58,
    answer: "Mediastinitis",
    clues:     [
      "A 58-year-old man develops severe chest pain, fever, and shortness of breath after repeated forceful vomiting.",
      "He appears toxic and has pain radiating to the back.",
      "Exam reveals tachycardia and faint crepitus in the supraclavicular area.",
      "Chest CT shows mediastinal air and fluid tracking around the esophagus.",
      "Blood cultures later grow mixed oral flora.",
      "This condition often follows esophageal perforation and requires urgent broad-spectrum antibiotics and surgical evaluation."
    ],
    description: "Mediastinitis is a life-threatening infection of the mediastinum, often caused by esophageal perforation or postoperative infection. Patients present with severe chest pain, systemic toxicity, and imaging evidence of mediastinal inflammation or air.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 59,
    answer: "Diverticulitis",
    clues:     [
      "A 63-year-old woman presents with 2 days of left lower quadrant abdominal pain and fever.",
      "She has nausea and constipation but no gross blood in the stool.",
      "Exam shows focal left lower quadrant tenderness with mild guarding.",
      "Labs reveal leukocytosis.",
      "CT abdomen demonstrates focal sigmoid wall thickening with surrounding fat stranding.",
      "The process reflects inflammation of an outpouching that forms where vasa recta penetrate the colon wall."
    ],
    description: "Diverticulitis usually occurs when a colonic diverticulum becomes inflamed or microperforates, most often in the sigmoid colon. It presents with fever, leukocytosis, and left lower quadrant pain; CT is the preferred diagnostic test.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 60,
    answer: "Post-traumatic stress disorder",
    clues:     [
      "A 31-year-old male combat veteran presents eight months after returning from deployment with sleep disturbance, irritability, and difficulty concentrating.",
      "He reports intrusive daytime memories and vivid nightmares in which he re-experiences specific combat events.",
      "He actively avoids news, films, or conversations that remind him of his deployment and has become emotionally detached from his family.",
      "He describes a persistent negative belief that he is fundamentally changed and will never feel normal again.",
      "He is hypervigilant in public spaces and startles disproportionately to loud noises.",
      "His symptoms have persisted for more than one month, cause significant distress, and span all four core symptom clusters of intrusion, avoidance, negative cognition, and hyperarousal."
    ],
    description: "Post-traumatic stress disorder develops after exposure to actual or threatened death, serious injury, or sexual violence, and is characterised by intrusion, avoidance, negative alterations in cognition and mood, and marked hyperarousal. Trauma-focused CBT and EMDR are first-line psychological treatments; SSRIs are first-line pharmacotherapy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 61,
    answer: "Bullous Pemphigoid",
    clues:     [
      "A 76-year-old man develops intensely pruritic skin lesions over several weeks.",
      "He first had urticarial plaques, followed by large tense blisters on the trunk and flexor surfaces.",
      "Oral mucosal involvement is minimal.",
      "Skin biopsy with direct immunofluorescence shows linear IgG and C3 deposition along the basement membrane.",
      "The blisters are tense rather than flaccid and do not rupture as easily as in pemphigus vulgaris.",
      "Autoantibodies target hemidesmosomal proteins in the dermoepidermal junction."
    ],
    description: "Bullous pemphigoid is an autoimmune blistering disorder of older adults caused by antibodies against hemidesmosomal proteins. It produces pruritic urticarial plaques and tense bullae with linear basement-membrane immunofluorescence.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 62,
    answer: "Iron Deficiency Anemia",
    clues:     [
      "A 32-year-old woman presents with fatigue, reduced exercise tolerance, and cravings for ice.",
      "She reports heavy menstrual bleeding for many months.",
      "CBC shows microcytic anemia with elevated RDW.",
      "Ferritin is low, transferrin is high, and transferrin saturation is low.",
      "Peripheral smear shows hypochromic red cells and anisopoikilocytosis.",
      "This is the most common cause of anemia worldwide."
    ],
    description: "Iron deficiency anemia causes microcytic hypochromic anemia and commonly results from chronic blood loss, increased requirements, or poor intake. Typical findings include low ferritin, high total iron-binding capacity, and low transferrin saturation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 63,
    answer: "Oral squamous cell carcinoma",
    clues:     [
      "A 62-year-old man with a 40 pack-year smoking history presents with a painless ulcer on the left lateral tongue for six weeks.",
      "He also drinks approximately 30 units of alcohol per week.",
      "Examination reveals a 1.5 cm indurated ulcer with raised, rolled margins on the left lateral tongue.",
      "There is a firm, non-tender lymph node palpable in the left level II neck.",
      "Biopsy of the tongue lesion reveals an invasive carcinoma with prominent keratin pearl formation and intercellular bridges.",
      "Staging CT reveals the primary lesion and a single ipsilateral lymph node metastasis, consistent with T2 N1 M0 disease."
    ],
    description: "Oral squamous cell carcinoma is the most common oral malignancy, strongly associated with tobacco and alcohol use. It most frequently arises on the lateral tongue and floor of mouth. Prognosis depends on stage; early lesions are treated with surgery or radiotherapy, while advanced disease requires multimodal treatment.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 64,
    answer: "Sex Cord Thecoma",
    clues:     [
      "A 59-year-old postmenopausal woman presents with new vaginal bleeding.",
      "Pelvic ultrasound shows a unilateral solid ovarian mass.",
      "Endometrial biopsy reveals proliferative changes without obvious carcinoma.",
      "Tumor markers for epithelial ovarian cancer are not markedly elevated.",
      "The mass is composed of lipid-rich stromal cells that can produce estrogen.",
      "This ovarian sex cord-stromal tumor often causes hyperestrogenic symptoms."
    ],
    description: "An ovarian thecoma is a benign sex cord-stromal tumor that can secrete estrogen. Patients may present with postmenopausal bleeding or endometrial hyperplasia because of excess estrogen exposure.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 65,
    answer: "Endometrial Hyperplasia",
    clues:     [
      "A 48-year-old woman presents with irregular heavy uterine bleeding.",
      "She has obesity and longstanding anovulatory cycles.",
      "Transvaginal ultrasound shows a thickened endometrial stripe.",
      "Biopsy demonstrates crowded proliferative glands without stromal invasion.",
      "There is no pregnancy and no adnexal mass.",
      "Prolonged unopposed estrogen exposure is the main driver of this condition."
    ],
    description: "Endometrial hyperplasia is abnormal proliferation of endometrial glands caused by excess estrogen without adequate progesterone opposition. It can progress to endometrial carcinoma, especially when atypia is present.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 66,
    answer: "Bipolar I disorder",
    clues:     [
      "A 24-year-old man is brought to the emergency department by his family after three days of not sleeping and spending his life savings on a series of business ventures.",
      "He is speaking rapidly, jumping between topics, and is convinced he has discovered a revolutionary technology that will make him a billionaire.",
      "He is irritable when challenged and has been sending emails to strangers and companies at all hours of the night.",
      "His family reports he had a severe depressive episode two years ago requiring hospitalisation.",
      "There is no evidence of substance intoxication or a general medical cause for his behaviour.",
      "His current presentation meets criteria for a full manic episode — elevated or irritable mood with at least three qualifying symptoms lasting more than a week with marked functional impairment."
    ],
    description: "Bipolar I disorder is defined by the occurrence of at least one manic episode, which may or may not be preceded or followed by depressive episodes. Mania involves elevated or irritable mood, decreased need for sleep, grandiosity, pressured speech, and impulsive high-risk behaviour. Mood stabilisers (lithium, valproate) are the cornerstone of long-term management.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 67,
    answer: "Acromegaly",
    clues:     [
      "A 47-year-old man reports increasing shoe size and needing larger rings over several years.",
      "He also has headaches, snoring, and joint pain.",
      "Exam shows enlarged hands, prognathism, and oily skin.",
      "IGF-1 is elevated, and growth hormone fails to suppress after oral glucose load.",
      "MRI reveals a pituitary mass.",
      "Excess growth hormone after epiphyseal closure causes this syndrome."
    ],
    description: "Acromegaly is usually caused by a growth hormone-secreting pituitary adenoma. Patients develop acral enlargement, coarse facial features, diabetes risk, hypertension, cardiomyopathy, and sleep apnea.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 68,
    answer: "Trypanosoma brucei (African Sleeping Sickness)",
    clues:     [
      "A 31-year-old traveler returns from sub-Saharan Africa with intermittent fever, headache, and painful lymph nodes.",
      "Weeks later he develops somnolence, confusion, and a disrupted sleep-wake cycle.",
      "Exam reveals posterior cervical lymphadenopathy.",
      "Blood smear identifies flagellated protozoa.",
      "He recalls multiple insect bites while on safari.",
      "This disease is transmitted by the tsetse fly and can progress to meningoencephalitis."
    ],
    description: "African trypanosomiasis is caused by Trypanosoma brucei and transmitted by the tsetse fly. It begins with hemolymphatic symptoms and can progress to CNS disease with sleep disturbances and neuropsychiatric changes.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 69,
    answer: "Temporomandibular disorders",
    clues:     [
      "A 28-year-old woman presents with chronic jaw pain and headaches that are worse in the morning.",
      "Her partner reports that she grinds her teeth loudly at night.",
      "She notices a clicking sound when opening her mouth and limited maximum opening of approximately 32 mm.",
      "Palpation of the masseter and temporalis muscles reproduces her headache.",
      "MRI of the jaw joints shows anterior disc displacement with reduction on the symptomatic side.",
      "Her symptoms improve significantly with a hard acrylic occlusal splint worn at night."
    ],
    description: "Temporomandibular disorders encompass a group of conditions involving the TMJ, masticatory muscles, and associated structures. They are the most common cause of orofacial pain of non-dental origin. Management is largely conservative, including occlusal splints, physiotherapy, and behaviour modification.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 70,
    answer: "Central Post-Stroke Pain Syndrome (CPSP)",
    clues:     [
      "A 63-year-old woman develops burning severe pain on the left side of her body months after a right thalamic stroke.",
      "Light touch and even clothing contact are now extremely uncomfortable.",
      "Motor recovery has otherwise been reasonable.",
      "Exam shows allodynia and altered temperature sensation without a new lesion on imaging.",
      "Routine analgesics have provided little relief.",
      "This neuropathic pain syndrome results from injury to central somatosensory pathways."
    ],
    description: "Central post-stroke pain syndrome is a neuropathic pain disorder that can occur after lesions of the thalamus or other central sensory pathways. Patients experience burning pain, dysesthesia, and allodynia contralateral to the lesion.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 71,
    answer: "Parvovirus B19",
    clues:     [
      "A 6-year-old child develops mild fever followed by bright red cheeks and a lacy rash on the arms.",
      "Several classmates had similar illness recently.",
      "She otherwise looks well and is eating normally.",
      "Her pregnant teacher is concerned about exposure.",
      "The virus has tropism for erythroid precursors.",
      "In patients with hemolytic anemia, this infection can cause transient aplastic crisis."
    ],
    description: "Parvovirus B19 causes erythema infectiosum, or fifth disease, with a slapped-cheek appearance and lacy body rash. It can cause aplastic crisis in patients with chronic hemolysis and hydrops fetalis in pregnancy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 72,
    answer: "Obsessive-compulsive disorder",
    clues:     [
      "A 22-year-old woman presents with intrusive, unwanted thoughts about contamination that cause her significant distress.",
      "She spends two to three hours each day washing her hands and cleaning surfaces, which temporarily relieves the anxiety.",
      "She recognises that her fears are excessive and disproportionate but feels unable to stop the rituals.",
      "She has stopped using public facilities and is eating alone at university to avoid perceived contamination.",
      "A structured interview confirms the presence of both obsessions and compulsions, each causing marked distress and functional impairment.",
      "A validated clinician-administered symptom rating scale confirms severe symptom burden affecting multiple domains of daily life."
    ],
    description: "Obsessive-compulsive disorder is characterised by recurrent obsessions — intrusive, distressing thoughts — and compulsions — repetitive behaviours or mental acts performed to reduce anxiety. The person typically recognises the irrationality of the cycle. First-line treatment is exposure and response prevention (ERP) therapy, with SSRIs as pharmacological adjuncts.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 73,
    answer: "Chronic atrophic gastritis",
    clues:     [
      "A 62-year-old woman presents with fatigue, numbness in the feet, and glossitis.",
      "CBC shows macrocytic anemia.",
      "She has low vitamin B12, positive anti-parietal cell antibodies, and elevated gastrin levels.",
      "Endoscopy shows thinning of the gastric body mucosa.",
      "Biopsy reveals glandular atrophy and intestinal metaplasia.",
      "Loss of parietal cells leads to intrinsic factor deficiency and increased gastric cancer risk."
    ],
    description: "Chronic atrophic gastritis, often autoimmune, destroys parietal cells and can cause pernicious anemia, achlorhydria, and intestinal metaplasia. It is associated with increased risk of gastric adenocarcinoma and carcinoid tumors.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 74,
    answer: "Tetralogy of Fallot (ToF)",
    clues:     [
      "A 4-month-old infant has episodes of cyanosis that worsen during crying and feeding.",
      "The parents say bringing the knees to the chest seems to help.",
      "Exam reveals a harsh systolic ejection murmur at the left upper sternal border.",
      "Chest radiograph shows a boot-shaped heart.",
      "Echocardiography demonstrates right ventricular outflow obstruction, a large VSD, overriding aorta, and right ventricular hypertrophy.",
      "The cyanosis results from right-to-left shunting across the septal defect."
    ],
    description: "Tetralogy of Fallot consists of pulmonary stenosis, right ventricular hypertrophy, overriding aorta, and ventricular septal defect. Hypercyanotic spells improve with increased systemic vascular resistance, such as squatting or knee-chest positioning.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 75,
    answer: "Acute dentoalveolar abscess",
    clues:     [
      "A 24-year-old woman presents with severe throbbing pain and facial swelling centred on the lower left jaw.",
      "She reports the pain has been worsening over three days and she cannot sleep.",
      "The lower left first molar has a large carious cavity and the tooth is non-vital on electric pulp testing.",
      "Percussion of the tooth elicits exquisite tenderness and there is fluctuant swelling of the buccal sulcus.",
      "Periapical radiograph reveals periapical rarefaction with loss of lamina dura around the tooth root.",
      "Incision and drainage of the fluctuant swelling produces a substantial quantity of pus, and the tooth is subsequently extracted."
    ],
    description: "An acute dentoalveolar abscess arises when pulpal infection spreads through the root apex into the periapical tissues. It presents with severe pain, swelling, and systemic features if spreading. Treatment is drainage — either through the root canal or by extraction — combined with antibiotics when systemic involvement is present.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 76,
    answer: "Pneumocystis jirovecii (PCP) pneumonia",
    clues:     [
      "A 40-year-old man with untreated HIV presents with progressive shortness of breath and dry cough.",
      "He has low-grade fever and increasing dyspnea over 2 weeks rather than abrupt illness.",
      "Oxygen saturation falls with exertion.",
      "Chest CT shows diffuse bilateral ground-glass opacities.",
      "Induced sputum with silver stain reveals cup-shaped cysts.",
      "This opportunistic pneumonia is common when CD4 count falls below 200 per uL."
    ],
    description: "Pneumocystis jirovecii pneumonia causes subacute fever, dry cough, and hypoxemia in immunocompromised patients, especially those with advanced HIV. TMP-SMX is the treatment of choice and is also used for prophylaxis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 77,
    answer: "Klinefelter Syndrome",
    clues:     [
      "A 17-year-old boy is evaluated for delayed puberty and poor athletic performance.",
      "He is tall with disproportionately long legs and has small firm testes.",
      "Exam also shows gynecomastia and sparse facial hair.",
      "Labs reveal low testosterone with elevated LH and FSH.",
      "Semen analysis later shows infertility.",
      "Karyotype demonstrates an extra X chromosome."
    ],
    description: "Klinefelter syndrome is a 47,XXY aneuploidy causing primary testicular failure, tall stature, gynecomastia, infertility, and hypergonadotropic hypogonadism. Testosterone replacement is often indicated.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 78,
    answer: "Schizophrenia",
    clues:     [
      "A 21-year-old man is referred after a six-month decline in academic performance and social withdrawal.",
      "He tells the examining clinician that he can hear two voices commenting on his actions and sometimes arguing with each other.",
      "He believes his thoughts are being broadcast to strangers on the street and that a government organisation is monitoring him.",
      "His speech is difficult to follow — he shifts between unrelated topics and frequently loses the thread of his answers.",
      "His affect is flat and he shows little emotional responsiveness throughout the interview.",
      "The combination of persistent positive and negative symptoms lasting more than six months with significant functional decline establishes the diagnosis after exclusion of mood disorder and substance causes."
    ],
    description: "Schizophrenia is a chronic psychotic disorder characterised by positive symptoms (hallucinations, delusions, disorganised thinking), negative symptoms (blunted affect, alogia, avolition), and cognitive impairment. Onset typically occurs in early adulthood. Antipsychotic medication is the cornerstone of treatment; psychosocial rehabilitation and family support are essential adjuncts.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 79,
    answer: "Brenner Tumor",
    clues:     [
      "A 61-year-old woman undergoes evaluation of a solid incidental ovarian mass.",
      "She has mild pelvic pressure but no ascites or constitutional symptoms.",
      "Pathology shows nests of transitional-type epithelial cells within dense fibrous stroma.",
      "The lesion is unilateral and well circumscribed.",
      "Some patients have estrogenic manifestations, although many are asymptomatic.",
      "This uncommon ovarian tumor is usually benign."
    ],
    description: "Brenner tumors are uncommon ovarian epithelial tumors composed of transitional-like cells in fibrous stroma. Most are benign and found incidentally, though some produce estrogen.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 80,
    answer: "Atrioventricular Septal Defect (AVSD) / Endocardial Cushion Defect",
    clues:     [
      "A 2-month-old infant has poor feeding, tachypnea, and failure to gain weight.",
      "Exam shows a systolic murmur and signs of heart failure.",
      "The child has characteristic facial features of trisomy 21.",
      "Echocardiography reveals a common atrioventricular valve with defects in the lower atrial and upper ventricular septa.",
      "Pulmonary blood flow is increased.",
      "This congenital lesion arises from failure of endocardial cushion fusion."
    ],
    description: "AVSD, also called endocardial cushion defect, is strongly associated with Down syndrome. It creates left-to-right shunting and early heart failure unless repaired.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 81,
    answer: "Sjögren's syndrome",
    clues:     [
      "A 48-year-old woman presents with persistent dry mouth and dry eyes for the past two years.",
      "She has difficulty swallowing dry food and frequently wakes at night to drink water.",
      "Examination reveals bilateral painless parotid enlargement and a dry, lobulated tongue with loss of filiform papillae.",
      "She also reports joint pain in her hands and chronic fatigue.",
      "Blood tests reveal positive anti-Ro (SSA) and anti-La (SSB) antibodies.",
      "Minor salivary gland biopsy shows focal lymphocytic sialadenitis with a focus score of ≥1."
    ],
    description: "Sjögren's syndrome is a chronic autoimmune exocrinopathy primarily affecting the salivary and lacrimal glands, causing xerostomia and keratoconjunctivitis sicca. It may be primary or secondary to another autoimmune disease. Dental consequences include rampant caries and oral candidiasis due to reduced salivary flow.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 82,
    answer: "Neisseria gonorrhoeae cervicitis",
    clues:     [
      "A 22-year-old woman presents with pelvic discomfort and increased vaginal discharge.",
      "She reports dysuria and bleeding after intercourse.",
      "Exam shows a friable cervix with mucopurulent endocervical discharge.",
      "NAAT from a cervical swab is positive for a gram-negative diplococcus.",
      "Her partner recently had urethral burning.",
      "Untreated infection may ascend and cause pelvic inflammatory disease."
    ],
    description: "Gonococcal cervicitis commonly causes mucopurulent discharge, cervicitis, dysuria, and postcoital bleeding. It is diagnosed by NAAT and treated with ceftriaxone, with concurrent chlamydia coverage when indicated.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 83,
    answer: "Cardiac Tamponade",
    clues:     [
      "A 61-year-old man with metastatic lung cancer presents with progressive dyspnea and chest discomfort.",
      "He is tachycardic, hypotensive, and appears anxious.",
      "Jugular venous distention is present and heart sounds are distant.",
      "Blood pressure falls noticeably during inspiration.",
      "Bedside echocardiography shows a large pericardial effusion with diastolic collapse of the right atrium and ventricle.",
      "Urgent drainage is required because elevated pericardial pressure is impairing ventricular filling."
    ],
    description: "Cardiac tamponade occurs when pericardial pressure impairs cardiac filling and reduces cardiac output. Findings include hypotension, elevated JVP, muffled heart sounds, pulsus paradoxus, and echocardiographic chamber collapse.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 84,
    answer: "Borderline personality disorder",
    clues:     [
      "A 28-year-old woman presents after cutting her forearms, which she reports she does to 'feel something' when emotionally numb.",
      "She describes a lifelong pattern of intense relationships that rapidly alternate between idealising the other person and feeling completely let down by them.",
      "She reports chronic feelings of emptiness and an unstable sense of who she is, which shifts depending on who she is with.",
      "She has made two prior suicide attempts, both following perceived abandonment, and has a history of impulsive spending and binge eating.",
      "Her mood changes are rapid and intense — she can shift from content to furious to tearful within hours in response to interpersonal events.",
      "A thorough assessment confirms a pervasive and enduring pattern of affective instability, impulsivity, identity disturbance, and fear of abandonment beginning in early adulthood."
    ],
    description: "Borderline personality disorder is characterised by pervasive instability in interpersonal relationships, self-image, and affect, combined with marked impulsivity and recurrent self-harm. Dialectical behaviour therapy (DBT) is the best-evidenced treatment. The condition improves meaningfully over time with appropriate treatment.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 85,
    answer: "Enterococcal UTI",
    clues:     [
      "A 72-year-old hospitalized woman develops dysuria and fever after several days of Foley catheterization.",
      "Urinalysis shows pyuria, and urine culture grows gram-positive cocci in pairs and short chains.",
      "The organism grows in bile and high-salt conditions.",
      "It is intrinsically resistant to many cephalosporins.",
      "The patient recently received broad-spectrum antibiotics.",
      "This catheter-associated healthcare infection is caused by a nosocomial pathogen that commonly affects the urinary tract."
    ],
    description: "Enterococcal UTI is a common healthcare-associated infection, especially after urinary catheterization and recent antibiotic exposure. Enterococcus faecalis and Enterococcus faecium are important causes and are intrinsically resistant to many cephalosporins.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 86,
    answer: "Measles (Rubeola Virus)",
    clues:     [
      "A 5-year-old unvaccinated child presents with high fever, cough, conjunctivitis, and runny nose.",
      "One day later, tiny blue-white lesions appear on the buccal mucosa.",
      "A morbilliform rash then starts at the hairline and spreads downward.",
      "He appears ill and photophobic.",
      "Serology and PCR confirm the diagnosis.",
      "This paramyxovirus can lead to pneumonia, encephalitis, and later subacute sclerosing panencephalitis."
    ],
    description: "Measles presents with the three Cs of cough, coryza, and conjunctivitis, followed by Koplik spots and a cephalocaudal spreading rash. It is highly contagious and preventable by live attenuated vaccination.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 87,
    answer: "Oral candidiasis",
    clues:     [
      "A 68-year-old man wearing a full upper denture complains of soreness under his plate that has persisted for weeks.",
      "He is a type 2 diabetic on metformin and has recently completed a course of broad-spectrum antibiotics.",
      "Examination reveals erythematous, velvety mucosa covering the entire denture-bearing area of the hard palate.",
      "Wiping with a gauze produces no change to the erythematous surface.",
      "A smear from the palate stained with periodic acid-Schiff shows hyphae and budding yeast forms.",
      "The lesions resolve completely after two weeks of topical nystatin and improved denture hygiene."
    ],
    description: "Oral candidiasis is the most common oral fungal infection, caused predominantly by Candida albicans. Denture-related stomatitis is the most frequent clinical presentation. Predisposing factors include denture wearing, immunosuppression, xerostomia, and antibiotic use. Treatment involves antifungals and correction of predisposing factors.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 88,
    answer: "Breast Fat Necrosis",
    clues:     [
      "A 54-year-old woman notices a firm irregular breast mass weeks after minor chest trauma from a seatbelt injury.",
      "She is worried because the mass feels fixed and there is some surrounding skin retraction.",
      "Mammography shows a calcified lesion concerning at first glance.",
      "Core biopsy reveals necrotic adipocytes with foamy macrophages and multinucleated giant cells.",
      "No malignant cells are identified.",
      "This benign process commonly mimics carcinoma on exam and imaging."
    ],
    description: "Breast fat necrosis is a benign inflammatory reaction after trauma, surgery, or radiation. It can present as a firm irregular mass with calcifications and often requires biopsy to exclude malignancy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 89,
    answer: "Proctitis",
    clues:     [
      "A 26-year-old man presents with rectal pain, urgency, and mucus-streaked stools.",
      "He reports receptive anal intercourse and occasional scant bleeding with bowel movements.",
      "Exam reveals exquisite rectal tenderness without a perianal abscess.",
      "Flexible sigmoidoscopy shows inflamed rectal mucosa.",
      "Swabs are sent for sexually transmitted infections.",
      "Inflammation limited to the rectum commonly causes tenesmus and anorectal discomfort."
    ],
    description: "Proctitis is inflammation of the rectum and can be caused by inflammatory bowel disease, radiation, or sexually transmitted infections such as gonorrhea, chlamydia, HSV, and syphilis. Tenesmus and rectal pain are typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 90,
    answer: "Attention deficit hyperactivity disorder",
    clues:     [
      "A 35-year-old man presents requesting evaluation after his daughter was recently diagnosed and he recognised himself in the description.",
      "He reports a lifelong pattern of losing items, missing deadlines, and starting multiple tasks but rarely completing them.",
      "He frequently interrupts conversations, struggles to wait his turn, and makes impulsive decisions he later regrets.",
      "His difficulties were present throughout school and have continued despite above-average intelligence.",
      "His wife confirms the pattern: he is forgetful, easily distracted by irrelevant stimuli, and struggles to sit through long meetings.",
      "A structured rating scale and clinical interview confirm the presence of both inattentive and hyperactive-impulsive symptoms across at least two settings, persisting from childhood."
    ],
    description: "Attention deficit hyperactivity disorder is a neurodevelopmental disorder characterised by persistent inattention, hyperactivity, and impulsivity that impairs functioning across settings. It frequently persists into adulthood, though the presentation shifts toward predominantly inattentive features. Stimulant medications (methylphenidate, amphetamines) and CBT are first-line treatments.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 91,
    answer: "Multiple Myeloma",
    clues:     [
      "A 69-year-old man presents with back pain, fatigue, and recurrent respiratory infections.",
      "CBC shows normocytic anemia, and chemistry reveals elevated creatinine and calcium.",
      "Skeletal imaging shows punched-out lytic lesions in the vertebrae and skull.",
      "Serum protein electrophoresis identifies a monoclonal spike.",
      "Bone marrow biopsy demonstrates clonal plasma cells.",
      "This plasma cell neoplasm causes CRAB findings: hyperCalcemia, Renal injury, Anemia, and Bone lesions."
    ],
    description: "Multiple myeloma is a malignant plasma cell disorder characterized by monoclonal immunoglobulin production, lytic bone disease, renal injury, anemia, and recurrent infections. Diagnosis relies on marrow findings, paraprotein studies, and end-organ damage.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 92,
    answer: "Intellectual Disability",
    clues:     [
      "A 9-year-old child is evaluated for persistent academic and adaptive difficulties.",
      "He requires substantial assistance with age-appropriate self-care and communication tasks.",
      "Formal testing demonstrates significantly below-average intellectual functioning.",
      "Teachers note deficits in conceptual, social, and practical skills.",
      "Symptoms began during early childhood rather than after a later injury.",
      "The developmental team concludes that his lifelong deficits in both learning and adaptive functioning best explain the presentation."
    ],
    description: "Intellectual disability is defined by deficits in intellectual functioning and adaptive behavior beginning during the developmental period. Severity is based more on adaptive functioning than IQ alone.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 93,
    answer: "Pericoronitis",
    clues:     [
      "A 20-year-old woman presents with pain in the lower right jaw and difficulty opening her mouth fully.",
      "The pain has been worsening over four days and she is having trouble eating.",
      "Examination reveals a partially erupted lower right wisdom tooth with an overlying operculum.",
      "The operculum is erythematous, oedematous, and exquisitely tender; gentle pressure produces a small amount of pus.",
      "There is trismus with a maximum opening of 28 mm and tender submandibular lymphadenopathy.",
      "Panoramic radiograph confirms a partially impacted lower right third molar with insufficient space for eruption."
    ],
    description: "Pericoronitis is inflammation of the soft tissue overlying a partially erupted tooth, most commonly the mandibular third molar. Food and bacteria accumulate beneath the operculum, causing localised infection that can spread to adjacent fascial spaces. Acute management involves irrigation, antibiotics if systemic features are present, and eventual removal of the offending tooth.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 94,
    answer: "Primary (psychogenic) polydipsia",
    clues:     [
      "A 36-year-old woman with chronic psychiatric illness presents with confusion and headache.",
      "Staff at her facility report that she drinks water constantly throughout the day.",
      "Labs show hyponatremia with low serum osmolality and inappropriately dilute urine.",
      "She is euvolemic on exam.",
      "Water deprivation increases urine osmolality, unlike central diabetes insipidus.",
      "The problem is excessive free-water intake rather than inappropriate ADH secretion."
    ],
    description: "Primary polydipsia is excessive water intake that can lead to dilutional hyponatremia. It is often seen in psychiatric disease and is distinguished from diabetes insipidus by the ability to concentrate urine with water deprivation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 95,
    answer: "Esophageal Candidiasis",
    clues:     [
      "A 38-year-old man with advanced HIV presents with painful swallowing and retrosternal discomfort.",
      "He recently noticed white plaques in the mouth that scrape off.",
      "Endoscopy shows multiple white adherent plaques in the esophagus.",
      "Biopsy demonstrates budding yeast and pseudohyphae.",
      "He has had poor adherence to antiretroviral therapy.",
      "This opportunistic infection is an AIDS-defining condition when found in the esophagus."
    ],
    description: "Esophageal candidiasis causes odynophagia and dysphagia, especially in immunocompromised patients. Endoscopy shows white plaques, and treatment is usually systemic fluconazole.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 96,
    answer: "Social anxiety disorder",
    clues:     [
      "A 23-year-old graduate student presents with extreme distress whenever she has to speak in seminars or meet new people.",
      "She fears that she will say something embarrassing and that others will judge her negatively.",
      "Before social events she experiences nausea, trembling, and a dry mouth that she is convinced others notice.",
      "She has declined three job interviews because of anticipated social evaluation and avoids eating in public.",
      "Her difficulties have been present since secondary school and are not explained by a substance, medication, or another condition.",
      "Her fear, anxiety, and avoidance are disproportionate to any actual threat and have persisted for more than six months with significant occupational and social impairment."
    ],
    description: "Social anxiety disorder is characterised by marked fear or anxiety about social situations involving possible scrutiny by others, leading to avoidance or endurance with intense distress. It is one of the most common anxiety disorders. CBT with exposure is first-line; SSRIs and SNRIs are effective pharmacological treatments.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 97,
    answer: "Goodpasture Syndrome",
    clues:     [
      "A 24-year-old man presents with coughing up blood and dark urine.",
      "He has dyspnea and fatigue but no rash or joint swelling.",
      "Urinalysis shows red cell casts and proteinuria.",
      "Chest imaging demonstrates diffuse alveolar hemorrhage.",
      "Kidney biopsy shows crescentic glomerulonephritis with linear IgG deposition along the basement membrane.",
      "Autoantibodies target type IV collagen in pulmonary and glomerular basement membranes."
    ],
    description: "Goodpasture syndrome is an anti-glomerular basement membrane disease causing rapidly progressive glomerulonephritis and pulmonary hemorrhage. Treatment typically includes plasmapheresis, corticosteroids, and immunosuppression.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 98,
    answer: "Yolk Sac Tumor",
    clues:     [
      "A 3-year-old boy is brought in for a rapidly enlarging painless testicular mass.",
      "Scrotal ultrasound shows a solid intratesticular lesion.",
      "Serum alpha-fetoprotein is markedly elevated.",
      "Biopsy demonstrates Schiller-Duval bodies.",
      "There is no gynecomastia.",
      "This is the most common testicular tumor in young children."
    ],
    description: "Yolk sac tumor is a malignant germ cell tumor associated with elevated AFP and Schiller-Duval bodies. It is the most common testicular neoplasm in young boys and can also occur as an ovarian germ cell tumor.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 99,
    answer: "Recurrent aphthous stomatitis",
    clues:     [
      "A 19-year-old university student reports recurrent painful mouth ulcers since adolescence.",
      "She typically gets two or three ulcers at a time, each lasting seven to fourteen days before healing without scarring.",
      "The ulcers appear on non-keratinised mucosa — the inside of her lips, floor of mouth, and soft palate.",
      "There are no skin lesions, genital ulcers, or eye symptoms.",
      "Blood tests including full blood count, iron, folate, B12, and coeliac serology are all normal.",
      "The clinical pattern — recurrent, round, shallow, non-keratinised mucosa ulcers with a yellow-grey pseudomembrane — is diagnostic."
    ],
    description: "Recurrent aphthous stomatitis is the most common recurrent oral mucosal condition. Minor aphthae are the most frequent form: small, shallow, round ulcers on non-keratinised mucosa that heal within two weeks without scarring. The aetiology is multifactorial; haematinic deficiencies should be excluded. Treatment is symptomatic.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 100,
    answer: "Bronchial Carcinoid Tumor",
    clues:     [
      "A 33-year-old woman presents with recurrent focal wheezing and episodes of hemoptysis.",
      "She has been treated repeatedly for presumed asthma without improvement.",
      "CT chest reveals a well-circumscribed central endobronchial mass.",
      "Bronchoscopy biopsy shows nests of uniform neuroendocrine cells with salt-and-pepper chromatin.",
      "Octreotide scan is positive.",
      "This low-grade neuroendocrine tumor may cause cough, obstruction, or occasionally carcinoid syndrome."
    ],
    description: "Bronchial carcinoid tumors are neuroendocrine lung tumors that often present as central airway masses in younger patients. They may cause cough, recurrent pneumonia, wheezing, or hemoptysis and usually have a better prognosis than other lung cancers.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 101,
    answer: "Glomus Tumor",
    clues:     [
      "A 35-year-old woman has exquisite pain at the tip of one finger for many months.",
      "The pain is triggered by cold exposure and even light touch.",
      "Exam shows a tiny bluish subungual lesion.",
      "MRI confirms a small vascular mass beneath the nail bed.",
      "Surgical excision relieves the pain.",
      "This benign tumor arises from the specialized thermoregulatory glomus body."
    ],
    description: "Glomus tumors are small benign painful vascular tumors that classically occur under the fingernail. They cause severe point tenderness, cold sensitivity, and paroxysmal pain.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 102,
    answer: "Autism spectrum disorder",
    clues:     [
      "A 19-year-old man is referred for assessment after struggling significantly with the social demands of university life.",
      "He reports that he has never understood unwritten social rules and describes conversations as exhausting because he has to consciously work out what people mean.",
      "He has a narrow but intense focus on railway timetables, which he has memorised in detail since childhood, and becomes distressed when his daily routine is disrupted.",
      "His parents recall that as a toddler he did not point to share interest, preferred playing alone, and had delayed and unusual speech.",
      "Examination reveals limited spontaneous facial expression, infrequent eye contact, and occasional repetitive hand movements.",
      "A formal developmental and observational assessment confirms persistent deficits in social communication and restricted, repetitive patterns of behaviour with onset in early childhood."
    ],
    description: "Autism spectrum disorder is a neurodevelopmental condition characterised by persistent deficits in social communication and interaction, combined with restricted, repetitive behaviours and sensory sensitivities. It spans a wide range of ability. Early behavioural intervention improves outcomes; support is tailored to the individual's strengths and needs across the lifespan.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 103,
    answer: "Posterior Urethral Valves",
    clues:     [
      "A male newborn has poor urinary stream and a palpable distended bladder.",
      "Prenatal ultrasound showed bilateral hydronephrosis and oligohydramnios.",
      "After birth, serum creatinine rises and the infant has difficulty voiding.",
      "Voiding cystourethrogram demonstrates a dilated posterior urethra with obstruction.",
      "Both kidneys are affected because the blockage is distal to the bladder neck.",
      "This congenital condition occurs only in males and causes lower urinary tract obstruction."
    ],
    description: "Posterior urethral valves are congenital obstructing membranous folds in the posterior urethra of boys. They can cause prenatal hydronephrosis, bladder distention, renal dysfunction, and even pulmonary hypoplasia from oligohydramnios.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 104,
    answer: "Central Sleep Apnea",
    clues:     [
      "A 70-year-old man with systolic heart failure is referred for evaluation of witnessed breathing pauses during sleep.",
      "His partner notes a waxing and waning breathing pattern rather than loud snoring with choking.",
      "He is sleepy during the day but not markedly obese.",
      "Polysomnography shows repeated episodes of absent airflow without respiratory effort.",
      "Oxygen saturation fluctuates in a periodic pattern.",
      "This disorder results from impaired central respiratory drive rather than upper-airway collapse."
    ],
    description: "Central sleep apnea is characterized by intermittent cessation of both airflow and respiratory effort during sleep. It is associated with heart failure, stroke, opioid use, and other disorders affecting respiratory control.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 105,
    answer: "Odontogenic keratocyst",
    clues:     [
      "A 25-year-old man is referred for investigation of a painless swelling in the right posterior mandible.",
      "Panoramic radiograph shows a large unilocular radiolucency extending from the lower right second premolar to the angle of the mandible.",
      "The lesion has scalloped margins and has caused displacement but not resorption of adjacent tooth roots.",
      "Aspiration of the lesion yields a white, creamy fluid with a cholesterol-like appearance.",
      "Histopathology shows a thin, regular, parakeratinised epithelial lining with a corrugated surface and a palisaded basal layer.",
      "The pathologist notes that this lesion has a well-known tendency for recurrence after enucleation."
    ],
    description: "The odontogenic keratocyst is a developmental cyst with a characteristic thin, parakeratinised epithelial lining and high recurrence rate due to its active epithelium and tendency for daughter cysts. It may be associated with Gorlin syndrome (naevoid basal cell carcinoma syndrome) when multiple cysts are present. Thorough enucleation with adjunctive treatment is recommended.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 106,
    answer: "Cluster Headache",
    clues:     [
      "A 34-year-old man presents with excruciating unilateral orbital pain occurring nightly for the past week.",
      "Each episode lasts about 45 minutes and is associated with tearing and nasal congestion on the same side.",
      "He paces during attacks because the pain is unbearable.",
      "Between attacks he feels well.",
      "Alcohol reliably triggers an episode during this cluster period.",
      "This primary headache disorder is treated acutely with oxygen and triptans."
    ],
    description: "Cluster headache causes recurrent brief attacks of severe unilateral periorbital pain with autonomic symptoms such as lacrimation, rhinorrhea, and ptosis. Attacks often occur in clusters over weeks and are more common in men.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 107,
    answer: "Staphylococcus aureus cellulitis",
    clues:     [
      "A 51-year-old man develops a rapidly enlarging painful red area on the lower leg after scratching an insect bite.",
      "He has fever and chills.",
      "Exam shows warm, tender, ill-defined erythema without fluctuance.",
      "There is no crepitus or anesthesia.",
      "Blood tests show leukocytosis, and drainage from a small purulent focus grows gram-positive cocci in clusters.",
      "This common skin and soft tissue infection often follows minor breaks in the skin barrier."
    ],
    description: "Cellulitis due to Staphylococcus aureus causes painful erythema, warmth, swelling, and tenderness of the skin and subcutaneous tissue. Purulence increases suspicion for staphylococcal involvement, including MRSA depending on local risk factors.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 108,
    answer: "Bulimia nervosa",
    clues:     [
      "A 20-year-old woman presents with dental erosion and bilateral parotid gland swelling noticed by her dentist.",
      "She admits to binge eating episodes — consuming very large amounts of food in a short period — at least twice a week for the past six months.",
      "Following each binge, she induces vomiting and uses laxatives to compensate, driven by an intense fear of weight gain.",
      "Her weight is in the normal range and she has concealed her behaviour from family.",
      "She reports cuts on the knuckles of her right hand and erosion of her dental enamel on the palatal surfaces of her upper incisors.",
      "Her pattern of recurrent binge-purge cycles and the physical sequelae of repeated self-induced vomiting establish the diagnosis."
    ],
    description: "Bulimia nervosa is an eating disorder characterised by recurrent binge eating followed by compensatory behaviours such as self-induced vomiting, laxative use, or excessive exercise, driven by overvaluation of shape and weight. Physical signs include dental erosion, parotid hypertrophy, and Russell's sign. CBT is first-line; SSRIs reduce binge frequency.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 109,
    answer: "Lead Poisoning",
    clues:     [
      "A 5-year-old boy is brought in for abdominal pain, constipation, and behavioral changes.",
      "His family recently moved into an older home undergoing renovation.",
      "CBC shows microcytic anemia.",
      "Peripheral smear reveals basophilic stippling.",
      "Blood lead level is elevated.",
      "This toxin impairs heme synthesis and can cause neuropathy, encephalopathy, and nephropathy."
    ],
    description: "Lead poisoning causes abdominal pain, constipation, neurobehavioral issues, and microcytic anemia with basophilic stippling. Children are particularly vulnerable to cognitive effects, and treatment depends on blood lead level and symptoms.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 110,
    answer: "Endometrial Carcinoma",
    clues:     [
      "A 63-year-old postmenopausal woman presents with vaginal bleeding.",
      "She has obesity, hypertension, and long-standing diabetes.",
      "Transvaginal ultrasound shows an abnormally thickened endometrium.",
      "Endometrial biopsy demonstrates malignant gland-forming cells invading the stroma.",
      "She has no adnexal mass or ascites on initial imaging.",
      "This is the most common gynecologic malignancy in developed countries and is strongly linked to unopposed estrogen exposure."
    ],
    description: "Endometrial carcinoma typically presents with postmenopausal bleeding. Risk factors include obesity, chronic anovulation, estrogen therapy without progesterone, tamoxifen use, and hereditary cancer syndromes such as Lynch syndrome.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 111,
    answer: "Necrotising ulcerative gingivitis",
    clues:     [
      "A 22-year-old male student presents with severe gingival pain that has developed rapidly over 48 hours.",
      "He reports that he has been under significant examination stress, sleeping poorly, and smoking heavily.",
      "Examination reveals punched-out, cratered interdental papillae covered by a grey pseudomembrane.",
      "There is profuse bleeding on gentle probing and a characteristic foul fetor oris.",
      "He is also feverish with submandibular lymphadenopathy.",
      "Smear from the lesion shows a fusospirochaetal flora, consistent with a mixed anaerobic infection."
    ],
    description: "Necrotising ulcerative gingivitis is an acute, painful, destructive infection of the gingival tissues associated with fusospirochaetal bacteria. Predisposing factors include psychological stress, malnutrition, poor oral hygiene, and tobacco use. Treatment involves debridement, oral hygiene instruction, metronidazole, and management of predisposing factors.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 112,
    answer: "Meningocele",
    clues:     [
      "A newborn is noted to have a cystic midline lumbosacral mass.",
      "The infant moves both legs normally and has no obvious lower-extremity weakness.",
      "The sac transilluminates and is covered by skin.",
      "MRI shows herniation of the meninges through a vertebral defect without neural tissue in the sac.",
      "Prenatal folate supplementation had been inconsistent.",
      "This neural tube defect differs from myelomeningocele because the spinal cord does not protrude."
    ],
    description: "Meningocele is a form of spina bifida in which the meninges herniate through a vertebral defect, but neural tissue remains in the spinal canal. Neurologic deficits are often milder than in myelomeningocele.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 113,
    answer: "Squamous Cell Carcinoma of the Skin",
    clues:     [
      "A 72-year-old man presents with a slowly enlarging scaly lesion on the lower lip.",
      "He has a long history of outdoor work and cumulative sun exposure.",
      "The lesion is erythematous, hyperkeratotic, and ulcerates easily.",
      "Biopsy shows atypical squamous cells invading through the basement membrane with keratin pearls.",
      "There is no pigmentation and no palisading nuclei.",
      "This skin cancer is more likely than basal cell carcinoma to metastasize."
    ],
    description: "Cutaneous squamous cell carcinoma usually arises on chronically sun-exposed skin and can also develop from actinic keratoses. It presents as a scaly, erythematous, sometimes ulcerated nodule or plaque and has metastatic potential.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 114,
    answer: "Adjustment disorder",
    clues:     [
      "A 38-year-old man presents six weeks after being made redundant with low mood, poor sleep, and an inability to motivate himself.",
      "He had no prior psychiatric history and describes himself as generally resilient.",
      "His symptoms began directly after losing his job and he makes an explicit connection between the two.",
      "He does not meet the full symptom threshold for a depressive or anxiety disorder, but his distress is disproportionate to what others around him experienced after similar events.",
      "His functioning at home has deteriorated — he is increasingly withdrawn and has stopped exercising, which he previously found helpful.",
      "His emotional and behavioural symptoms developed within three months of the identifiable stressor and have not persisted beyond what is expected in the absence of ongoing adversity."
    ],
    description: "Adjustment disorder is a stress-response syndrome in which clinically significant emotional or behavioural symptoms develop in response to an identifiable stressor, within three months of onset. Symptoms are disproportionate to the stressor but do not meet criteria for another major disorder. Management includes supportive therapy and brief problem-focused interventions; prognosis is generally good.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 115,
    answer: "Thyroid medullary carcinoma",
    clues:     [
      "A 45-year-old woman presents with a firm thyroid nodule and chronic watery diarrhea.",
      "She has no symptoms of thyrotoxicosis.",
      "Serum calcitonin is markedly elevated.",
      "Subsequent pathology shows malignant cells with amyloid stroma.",
      "Family history is notable for endocrine tumors and pheochromocytoma.",
      "This malignancy arises from parafollicular C cells rather than follicular cells."
    ],
    description: "Medullary thyroid carcinoma is a neuroendocrine tumor of parafollicular C cells that secretes calcitonin. It may occur sporadically or as part of MEN2 syndromes and is associated with amyloid deposition in the tumor stroma.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 116,
    answer: "Subarachnoid Hemorrhage (SAH) / Berry Aneurysm Rupture",
    clues:     [
      "A 54-year-old woman develops the worst headache of her life while exercising.",
      "She vomits and briefly loses consciousness.",
      "On arrival she is photophobic with meningismus but no major focal deficit.",
      "Noncontrast CT head shows blood in the basal cisterns.",
      "CT angiography identifies a saccular aneurysm at the anterior communicating artery.",
      "This condition can be complicated by rebleeding, vasospasm, and hydrocephalus."
    ],
    description: "Subarachnoid hemorrhage from ruptured berry aneurysm presents with sudden thunderclap headache, neck stiffness, and vomiting. Urgent stabilization and aneurysm treatment are required, and nimodipine is used to reduce delayed cerebral ischemia from vasospasm.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 117,
    answer: "Acute appendicitis",
    clues:     [
      "A 19-year-old man presents with abdominal pain that began around the umbilicus earlier in the day.",
      "The pain has migrated to the right lower quadrant and is now sharper with movement.",
      "He has nausea, anorexia, and a low-grade fever.",
      "Exam shows localized tenderness at McBurney point with voluntary guarding.",
      "Labs show leukocytosis, and CT abdomen shows a dilated blind-ending tubular structure with surrounding fat stranding.",
      "The inflamed structure arises from the cecum and is the most common surgical cause of acute abdominal pain in young adults."
    ],
    description: "Acute appendicitis is inflammation of the vermiform appendix, usually from luminal obstruction. Migratory periumbilical to right lower quadrant pain, anorexia, fever, leukocytosis, and localized tenderness are classic features.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 118,
    answer: "Coxiella burnetii (Q Fever)",
    clues:     [
      "A 38-year-old veterinarian presents with fever, severe headache, and dry cough.",
      "He recently assisted with livestock births on a goat farm.",
      "Chest imaging shows atypical pneumonia, and liver enzymes are mildly elevated.",
      "Blood cultures remain negative.",
      "Serology supports infection by an obligate intracellular organism.",
      "This obligate intracellular organism acquired from animal birth products is not culturable by standard blood culture methods."
    ],
    description: "Coxiella burnetii is an obligate intracellular organism transmitted from livestock, especially during parturition. It causes Q fever, which may present with atypical pneumonia, hepatitis, or chronic culture-negative endocarditis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 119,
    answer: "Type 1 Diabetes Mellitus",
    clues:     [
      "A 13-year-old boy presents with several weeks of polyuria, polydipsia, and weight loss.",
      "He has nighttime urination and increasing fatigue.",
      "Finger-stick glucose is 312 mg-dL.",
      "Urinalysis shows glucosuria and ketonuria.",
      "Autoantibodies against pancreatic islet antigens are present.",
      "This disease results from autoimmune destruction of beta cells causing absolute insulin deficiency."
    ],
    description: "Type 1 diabetes mellitus is an autoimmune disease that destroys pancreatic beta cells and causes absolute insulin deficiency. It usually presents in childhood or adolescence with hyperglycemia, polyuria, polydipsia, and sometimes ketoacidosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 120,
    answer: "Atopic dermatitis",
    clues:     [
      "A 6-year-old boy has recurrent itchy rashes that worsen during winter.",
      "He has a history of asthma and seasonal allergies.",
      "Exam shows dry erythematous patches in the antecubital and popliteal fossae.",
      "The skin is thickened in areas he scratches frequently.",
      "No burrows, vesicles, or sharply demarcated plaques are present.",
      "The chronic relapsing eruption is associated with impaired skin barrier function and atopy."
    ],
    description: "Atopic dermatitis is a chronic pruritic inflammatory skin disease associated with atopy and skin barrier dysfunction. Flexural eczema, xerosis, and lichenification from scratching are typical findings.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 121,
    answer: "Pulmonary Valve Regurgitation",
    clues:     [
      "A 43-year-old woman with prior repair of congenital heart disease presents for follow-up.",
      "She has gradually worsening exercise intolerance and a decrescendo early diastolic murmur at the left upper sternal border.",
      "The murmur becomes louder with inspiration.",
      "Echocardiography shows backflow from the pulmonary artery into the right ventricle during diastole.",
      "Right ventricular dilation is developing over time.",
      "This lesion often follows pulmonary hypertension or prior surgical intervention on the outflow tract."
    ],
    description: "Pulmonary regurgitation is usually secondary to pulmonary hypertension or prior valve surgery and can lead to right ventricular dilation. Many mild cases are asymptomatic; severe chronic regurgitation causes exertional intolerance and right-sided failure.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 122,
    answer: "Premature Ventricular Contractions (PVCs)",
    clues:     [
      "A 46-year-old man complains of occasional skipped beats and thumps in the chest.",
      "Symptoms worsen after several cups of coffee and poor sleep.",
      "He has no syncope and no known structural heart disease.",
      "ECG monitoring shows early wide QRS complexes without preceding P waves followed by full compensatory pauses.",
      "Between episodes his rhythm is normal sinus.",
      "These ectopic beats originate in the ventricles rather than the atria."
    ],
    description: "PVCs are early ventricular depolarizations that produce palpitations and a compensatory pause. They are often benign in structurally normal hearts but become more concerning when frequent or associated with cardiomyopathy or ischemia.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 123,
    answer: "Croup",
    clues:     [
      "A 2-year-old boy is brought in with fever, runny nose, and a harsh cough.",
      "His parents describe the cough as barking and worse at night.",
      "He has inspiratory stridor when agitated but is comfortable at rest.",
      "Oxygen saturation is normal and drooling is absent.",
      "Neck radiograph shows symmetric subglottic narrowing.",
      "The illness is most commonly caused by parainfluenza virus causing upper airway inflammation."
    ],
    description: "Croup is viral laryngotracheitis that causes barking cough, hoarseness, and inspiratory stridor in young children. Parainfluenza virus is the most common cause.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 124,
    answer: "Primary hyperaldosteronism (Conn syndrome)",
    clues:     [
      "A 41-year-old woman has difficult-to-control hypertension despite two medications.",
      "She also reports muscle weakness and intermittent leg cramps.",
      "Labs show hypokalemia and metabolic alkalosis.",
      "Plasma aldosterone is elevated while renin is suppressed.",
      "CT adrenal imaging identifies a unilateral adrenal adenoma.",
      "Excess mineralocorticoid production causes sodium retention and renal potassium wasting."
    ],
    description: "Primary hyperaldosteronism causes hypertension, hypokalemia, and metabolic alkalosis due to autonomous aldosterone secretion, usually from an adrenal adenoma or bilateral hyperplasia. Screening uses the aldosterone-renin ratio.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 125,
    answer: "Keratosis Pilaris",
    clues:     [
      "A 15-year-old girl complains of rough bumps on the backs of her upper arms.",
      "The lesions are more noticeable during dry winter months.",
      "Exam shows numerous tiny follicular keratotic papules with mild surrounding erythema.",
      "They are not pustular, painful, or infectious appearing.",
      "She has a history of atopic dermatitis.",
      "This benign condition reflects keratin plugging of hair follicles."
    ],
    description: "Keratosis pilaris is a common benign skin condition causing rough follicular papules, especially on the upper arms and thighs. It is often associated with dry skin and atopy and improves with emollients and keratolytics.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 126,
    answer: "Gastroesophageal reflux disease",
    clues:     [
      "A 45-year-old man reports burning discomfort behind the sternum after meals.",
      "Symptoms are worse when lying down and after large fatty dinners.",
      "He has sour regurgitation into the back of his throat.",
      "There is no dysphagia, weight loss, anemia, or gastrointestinal bleeding.",
      "Upper endoscopy, performed because of long-standing symptoms, shows distal esophageal erosions.",
      "The pattern is driven by backflow of acidic gastric contents when the lower esophageal sphincter relaxes inappropriately."
    ],
    description: "Gastroesophageal reflux disease is caused by reflux of gastric contents into the esophagus, producing heartburn and regurgitation. Symptoms often worsen after meals or when lying down, and chronic disease can cause erosive esophagitis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 127,
    answer: "Anorexia Nervosa",
    clues:     [
      "A 17-year-old girl is brought in for weight loss, fatigue, and feeling cold all the time.",
      "She counts calories rigidly and exercises excessively despite being underweight.",
      "Her BMI is well below expected, and she expresses intense fear of gaining weight.",
      "Exam shows bradycardia, lanugo, and orthostatic hypotension.",
      "Labs may reveal electrolyte abnormalities from purging behaviors.",
      "This disorder is defined by restriction of intake leading to significantly low body weight and distorted body image."
    ],
    description: "Anorexia nervosa is an eating disorder marked by restriction of caloric intake, low body weight, fear of weight gain, and body image disturbance. Medical complications include arrhythmias, amenorrhea, osteopenia, and refeeding syndrome.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 128,
    answer: "Acute Dystonia",
    clues:     [
      "A 19-year-old man develops painful neck twisting and upward deviation of the eyes several hours after receiving an antipsychotic in the emergency department.",
      "He is frightened but fully conscious.",
      "There is no fever, rigidity, or autonomic instability.",
      "Exam shows sustained involuntary contractions of the neck muscles and extraocular muscles.",
      "Symptoms improve rapidly after diphenhydramine administration.",
      "This extrapyramidal reaction reflects dopamine blockade in the nigrostriatal pathway."
    ],
    description: "Acute dystonia is an early extrapyramidal side effect of dopamine-blocking medications. It presents with sustained muscle contractions such as torticollis or oculogyric crisis and is treated with anticholinergics or antihistamines.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 129,
    answer: "Acute myocardial infarction",
    clues:     [
      "A 58-year-old man develops crushing central chest pressure while climbing stairs.",
      "The pain radiates to his left arm and is associated with nausea and sweating.",
      "He has hypertension, diabetes, and a 35-pack-year smoking history.",
      "ECG shows ST-segment elevation in contiguous inferior leads.",
      "Troponin rises several hours after symptom onset.",
      "The event reflects acute coronary artery occlusion causing myocardial necrosis."
    ],
    description: "Acute myocardial infarction is myocardial necrosis from acute coronary ischemia, often due to plaque rupture and thrombosis. Chest pressure, radiation, diaphoresis, ischemic ECG changes, and elevated troponin support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 130,
    answer: "Superficial Spreading Melanoma",
    clues:     [
      "A 49-year-old man notices that a long-standing mole on his upper back has enlarged and changed color.",
      "It now has asymmetry, irregular borders, and multiple shades of brown and black.",
      "Dermatoscopy is concerning, and excisional biopsy is performed.",
      "Pathology shows atypical melanocytes spreading along the epidermis in a radial growth phase.",
      "There is intermittent bleeding after minor trauma.",
      "This is the most common melanoma subtype."
    ],
    description: "Superficial spreading melanoma is the most common form of melanoma and typically shows prolonged radial growth with irregular color and borders. Definitive diagnosis and staging depend on excisional biopsy and Breslow depth.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 131,
    answer: "Myelodysplastic Syndrome",
    clues:     [
      "A 73-year-old man presents with fatigue and recurrent infections.",
      "CBC shows anemia and neutropenia, and platelets are mildly decreased.",
      "Peripheral smear demonstrates dysplastic neutrophils and macrocytosis.",
      "Bone marrow biopsy is hypercellular with ineffective hematopoiesis.",
      "Cytogenetic abnormalities are identified.",
      "This clonal stem-cell disorder carries a risk of progression to acute myeloid leukemia."
    ],
    description: "Myelodysplastic syndrome is a clonal bone marrow disorder characterized by ineffective hematopoiesis, cytopenias, and dysplastic cell morphology. It is most common in older adults and may evolve into AML.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 132,
    answer: "Dry socket (alveolar osteitis)",
    clues:     [
      "A 30-year-old woman returns to the dental surgery four days after extraction of the lower right wisdom tooth.",
      "She reports that the initial pain had subsided but has now returned much worse, radiating to her ear and temple.",
      "She is a smoker and has been rinsing vigorously with mouthwash since the extraction.",
      "Examination of the socket reveals an empty alveolus with exposed bone; there is no blood clot present.",
      "The socket has a characteristic offensive odour and packing with Alvogyl provides immediate pain relief.",
      "No signs of spreading infection are present and the surrounding soft tissue is not indurated."
    ],
    description: "Alveolar osteitis (dry socket) is the most common complication after tooth extraction, occurring when the blood clot is lost or fails to form, leaving bone exposed. It typically presents three to four days post-extraction with severe pain radiating to the ear. Risk factors include lower third molar extraction, smoking, and oral contraceptive use. Treatment is irrigation and intra-alveolar dressing.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 133,
    answer: "Follicular Lymphoma",
    clues:     [
      "A 61-year-old woman presents with several months of painless enlarged cervical and axillary lymph nodes.",
      "She denies acute infectious symptoms but notes occasional night sweats.",
      "Excisional biopsy shows a nodular follicular pattern of small cleaved lymphocytes.",
      "Flow cytometry reveals a B-cell neoplasm.",
      "Cytogenetics demonstrate t(14;18) with BCL2 overexpression.",
      "This indolent lymphoma often presents with widespread painless lymphadenopathy."
    ],
    description: "Follicular lymphoma is an indolent B-cell non-Hodgkin lymphoma associated with BCL2 overexpression from t(14;18). Patients often present with painless generalized lymphadenopathy and recurrent relapses over time.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 134,
    answer: "Large Cell Carcinoma of the Lung",
    clues:     [
      "A 67-year-old heavy smoker presents with cough, weight loss, and chest discomfort.",
      "Imaging reveals a large peripheral lung mass.",
      "Biopsy shows poorly differentiated malignant cells lacking gland formation or keratinization.",
      "Immunostaining does not support adenocarcinoma or squamous differentiation.",
      "Mediastinal nodes are enlarged.",
      "This diagnosis is made when a non-small cell lung cancer remains undifferentiated after pathologic evaluation."
    ],
    description: "Large cell carcinoma is a poorly differentiated non-small cell lung carcinoma that lacks the features of adenocarcinoma or squamous cell carcinoma. It is strongly associated with smoking and may arise peripherally.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 135,
    answer: "Specific phobia",
    clues:     [
      "A 30-year-old man presents requesting help with an intense fear of vomiting that has been present since a gastroenteritis episode in his teens.",
      "He avoids eating outside his home, refuses to travel on public transport during winter, and has declined social invitations to restaurants for years.",
      "When he believes he might encounter someone who is unwell, he experiences immediate intense anxiety with nausea, dizziness, and a strong urge to escape.",
      "He acknowledges that his fear is excessive relative to any actual danger.",
      "He has not developed broader fears of social evaluation or developed panic attacks in non-phobic situations.",
      "His fear, avoidance, and functional impairment are circumscribed to the phobic stimulus and have persisted for more than six months."
    ],
    description: "Specific phobia is marked fear or anxiety about a specific object or situation that is out of proportion to the actual danger, leads to avoidance or distressed endurance, and causes significant impairment. Exposure therapy — specifically systematic desensitisation and in vivo exposure — is highly effective and is considered the treatment of choice.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 136,
    answer: "Intraparenchymal Hemorrhage (Intracerebral Hemorrhage)",
    clues:     [
      "A 66-year-old man with long-standing poorly controlled hypertension suddenly develops headache, vomiting, and left-sided weakness.",
      "He becomes progressively somnolent over the next hour.",
      "Blood pressure is 228-118 mmHg.",
      "Noncontrast head CT shows a hyperdense bleed in the right basal ganglia with surrounding edema.",
      "There is no history of trauma.",
      "Chronic hypertensive damage to small penetrating vessels is a common cause of this type of stroke."
    ],
    description: "Intracerebral hemorrhage commonly results from chronic hypertension causing rupture of small penetrating arteries. It presents with acute neurologic deficits, headache, vomiting, and decreased consciousness and is diagnosed by noncontrast CT.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 137,
    answer: "Post-Streptococcal Glomerulonephritis",
    clues:     [
      "A 9-year-old boy presents with tea-colored urine and facial puffiness 2 weeks after impetigo.",
      "His blood pressure is elevated, and urine output has decreased.",
      "Urinalysis shows red cell casts and mild proteinuria.",
      "Complement C3 is low.",
      "Kidney biopsy, if performed, would show subepithelial hump-shaped deposits.",
      "This nephritic syndrome follows infection with nephritogenic strains of group A streptococcus."
    ],
    description: "Post-streptococcal glomerulonephritis is an immune complex-mediated nephritic syndrome that occurs after pharyngitis or skin infection. Children develop hematuria, edema, hypertension, and low complement levels.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 138,
    answer: "Ectopic pregnancy",
    clues:     [
      "A 27-year-old woman presents with lower abdominal pain and light vaginal bleeding.",
      "Her last menstrual period was seven weeks ago.",
      "She reports shoulder tip discomfort and feels lightheaded when standing.",
      "Urine pregnancy test is positive, and pelvic exam shows cervical motion tenderness.",
      "Transvaginal ultrasound shows no intrauterine gestational sac despite a beta-hCG level above the discriminatory zone.",
      "Free pelvic fluid suggests bleeding from implantation outside the uterine cavity."
    ],
    description: "Ectopic pregnancy occurs when a fertilized ovum implants outside the uterine cavity, most often in the fallopian tube. Abdominal pain, vaginal bleeding, positive pregnancy test, and absence of an intrauterine pregnancy at an appropriate beta-hCG level are key clues.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 139,
    answer: "Dumping Syndrome",
    clues:     [
      "A 55-year-old woman develops abdominal cramping, diarrhea, and palpitations shortly after meals.",
      "She underwent partial gastrectomy 3 months ago.",
      "Symptoms are worst after high-carbohydrate foods.",
      "At other times she has tremor and diaphoresis 2 to 3 hours after eating.",
      "There is no evidence of infection or bowel obstruction.",
      "Rapid gastric emptying explains both the early osmotic symptoms and later postprandial hypoglycemia."
    ],
    description: "Dumping syndrome occurs after gastric surgery when food empties rapidly into the small bowel. Early symptoms are vasomotor and osmotic, while late symptoms reflect reactive hypoglycemia from excessive insulin release.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 140,
    answer: "Pyogenic Granuloma",
    clues:     [
      "A 24-year-old pregnant woman notices a rapidly growing red papule on her finger.",
      "It bleeds with minor trauma and has a friable surface.",
      "The lesion developed over just a few weeks.",
      "Excision shows a lobular proliferation of capillaries in granulation tissue.",
      "There is no atypical melanocytic growth.",
      "Despite the name, this lesion is neither infectious nor a true granuloma."
    ],
    description: "Pyogenic granuloma is a benign vascular lesion that appears as a rapidly growing friable papule prone to bleeding. It often occurs after trauma or during pregnancy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 141,
    answer: "Psoriasis",
    clues:     [
      "A 34-year-old man presents with a chronic rash on his elbows and knees.",
      "The lesions are well-demarcated erythematous plaques with thick silvery scale.",
      "He reports intermittent nail pitting.",
      "The rash improves somewhat with sunlight and worsens during stress.",
      "Scraping a plaque produces pinpoint bleeding.",
      "The disease is driven by immune-mediated keratinocyte hyperproliferation and commonly affects extensor surfaces."
    ],
    description: "Psoriasis is a chronic immune-mediated skin disease characterized by well-demarcated scaly plaques, often on extensor surfaces. Nail pitting and pinpoint bleeding after scale removal support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 142,
    answer: "Cingulate Herniation / Subfalcine Herniation",
    clues:     [
      "A 63-year-old man with a large frontal lobe mass becomes progressively lethargic.",
      "Neuroimaging shows midline shift with displacement of brain tissue beneath the falx cerebri.",
      "He develops weakness of the opposite leg.",
      "There is no immediate CN III palsy.",
      "Compression of the anterior cerebral artery territory is a key complication.",
      "This is the most common cerebral herniation syndrome."
    ],
    description: "Subfalcine, or cingulate, herniation occurs when brain tissue is pushed under the falx cerebri by a mass lesion. It may compress the anterior cerebral artery and cause contralateral leg weakness.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 143,
    answer: "Pulmonary Embolism (PE)",
    clues:     [
      "A 62-year-old woman develops sudden pleuritic chest pain and shortness of breath 1 week after hip surgery.",
      "She is tachycardic and mildly hypoxemic.",
      "Exam reveals swelling and tenderness of the left calf.",
      "ECG shows sinus tachycardia.",
      "CT pulmonary angiography demonstrates a filling defect in a segmental pulmonary artery.",
      "This condition usually arises when thrombus from the deep veins embolizes to the pulmonary circulation."
    ],
    description: "Pulmonary embolism presents with sudden dyspnea, pleuritic pain, tachycardia, and hypoxemia, especially in patients with recent immobilization, surgery, or malignancy. Diagnosis depends on clinical probability and confirmatory imaging.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 144,
    answer: "Bronchiolitis",
    clues:     [
      "A 5-month-old infant presents with cough, poor feeding, and low-grade fever in winter.",
      "He has tachypnea, nasal flaring, and diffuse wheezing.",
      "Several older siblings recently had cold symptoms.",
      "Chest examination reveals crackles and prolonged expiration.",
      "Viral testing detects respiratory syncytial virus.",
      "The disease affects the small airways of infants and is usually managed supportively."
    ],
    description: "Bronchiolitis is a common viral lower respiratory infection of infants, most often caused by respiratory syncytial virus. It presents with cough, wheeze, tachypnea, and feeding difficulty.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 145,
    answer: "Sick Sinus Syndrome",
    clues:     [
      "A 76-year-old woman has recurrent dizziness and several unexplained falls.",
      "Holter monitoring shows prolonged sinus pauses alternating with episodes of atrial tachyarrhythmia.",
      "She is not taking AV nodal blockers.",
      "Symptoms correlate with marked bradycardia.",
      "There is no acute myocardial infarction.",
      "This degenerative disorder reflects dysfunction of the sinoatrial node."
    ],
    description: "Sick sinus syndrome is a disorder of SA node dysfunction that causes symptomatic sinus bradycardia, pauses, or tachy-brady syndrome. Many patients eventually require pacemaker placement.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 146,
    answer: "Distributive Shock (Septic Shock)",
    clues:     [
      "A 67-year-old man with pneumonia becomes confused and hypotensive despite fluids.",
      "He is febrile with warm flushed skin and bounding pulses early in the course.",
      "Lactate is elevated, and vasopressors are started.",
      "Blood cultures later grow gram-negative rods.",
      "Systemic vascular resistance is low while cardiac output may initially be high.",
      "This shock state is driven by profound inflammatory vasodilation and capillary leak."
    ],
    description: "Septic shock is a distributive shock state caused by infection leading to vasodilation, capillary leak, and cellular dysfunction. Management includes source control, antibiotics, fluid resuscitation, and vasopressors.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 147,
    answer: "Irritable bowel syndrome",
    clues:     [
      "A 31-year-old woman has recurrent crampy abdominal pain for the past year.",
      "The pain improves after bowel movements.",
      "She alternates between constipation and loose stools.",
      "There is no weight loss, rectal bleeding, fever, nocturnal diarrhea, or anemia.",
      "Colonoscopy and inflammatory markers are normal.",
      "The diagnosis is based on chronic abdominal pain related to defecation with altered stool frequency or form."
    ],
    description: "Irritable bowel syndrome is a functional bowel disorder characterized by chronic abdominal pain associated with defecation and changes in stool frequency or form. Alarm features and objective inflammation should be absent.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 148,
    answer: "Primary Testicular Lymphoma",
    clues:     [
      "A 71-year-old man presents with a painless unilateral testicular enlargement.",
      "He has no fever or urinary symptoms.",
      "Ultrasound shows a diffuse infiltrative testicular mass.",
      "AFP and beta-hCG are not elevated.",
      "Pathology identifies diffuse large B-cell lymphoma.",
      "This is the most common testicular malignancy in elderly men."
    ],
    description: "Primary testicular lymphoma usually affects older men and most often represents diffuse large B-cell lymphoma. It presents as painless testicular enlargement and has a tendency for extranodal relapse.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 149,
    answer: "Hereditary Hemochromatosis",
    clues:     [
      "A 52-year-old man presents with fatigue, joint pain, and decreased libido.",
      "Exam reveals hepatomegaly and bronzed skin pigmentation.",
      "Labs show elevated ferritin and transferrin saturation.",
      "He also has new diabetes mellitus.",
      "Genetic testing identifies an HFE mutation.",
      "Excess intestinal iron absorption causes progressive iron deposition in multiple organs."
    ],
    description: "Hereditary hemochromatosis is an iron overload disorder most commonly caused by HFE mutations. Untreated disease can lead to cirrhosis, diabetes, cardiomyopathy, arthropathy, hypogonadism, and skin hyperpigmentation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 150,
    answer: "Preeclampsia",
    clues:     [
      "A 31-year-old woman at 33 weeks gestation presents with headache and swelling of her hands.",
      "Blood pressure is 162/104 mmHg on repeated measurements.",
      "She reports flashing lights in her vision and right upper quadrant discomfort.",
      "Urine testing shows significant proteinuria.",
      "Labs show thrombocytopenia and elevated liver enzymes.",
      "This pregnancy disorder is defined by new hypertension after 20 weeks with end-organ involvement."
    ],
    description: "Preeclampsia is new-onset hypertension after 20 weeks gestation with proteinuria or end-organ dysfunction. Headache, visual symptoms, right upper quadrant pain, thrombocytopenia, and elevated liver enzymes indicate severe features.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 151,
    answer: "Trigeminal Neuralgia",
    clues:     [
      "A 59-year-old woman reports sudden electric shock-like pain on the right side of her face.",
      "Attacks last seconds and are triggered by brushing her teeth or a light breeze.",
      "Neurologic exam is otherwise normal.",
      "MRI excludes mass lesion and shows vascular contact near the trigeminal root entry zone.",
      "Between attacks she is pain free.",
      "First-line therapy often includes carbamazepine."
    ],
    description: "Trigeminal neuralgia causes brief recurrent unilateral facial pain in the trigeminal distribution, often triggered by light touch. It is commonly due to vascular compression and is treated medically or, if refractory, surgically.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 152,
    answer: "Coccidioidomycosis",
    clues:     [
      "A 34-year-old construction worker in Arizona presents with fever, cough, and pleuritic chest pain.",
      "He also has tender red nodules on the shins.",
      "Chest imaging shows a focal infiltrate with hilar adenopathy.",
      "Serology is positive for Coccidioides species.",
      "The organism exists as arthroconidia in soil and forms spherules in tissue.",
      "This fungal infection is endemic to the desert southwest."
    ],
    description: "Coccidioidomycosis is an endemic fungal infection acquired by inhaling arthroconidia from desert soil. It can cause pneumonia, erythema nodosum, and disseminated disease in susceptible hosts.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 153,
    answer: "Atrial fibrillation",
    clues:     [
      "A 72-year-old woman reports intermittent palpitations and fatigue.",
      "Her pulse is irregularly irregular.",
      "She has a history of hypertension and enlarged left atrium on prior echocardiography.",
      "There are no consistent P waves on ECG.",
      "The ventricular response varies beat to beat.",
      "The rhythm increases risk of embolic stroke because of ineffective atrial contraction."
    ],
    description: "Atrial fibrillation is a supraventricular arrhythmia with chaotic atrial activity and an irregularly irregular ventricular rhythm. It increases thromboembolic stroke risk, especially in older patients with cardiovascular risk factors.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 154,
    answer: "Nephrogenic diabetes insipidus",
    clues:     [
      "A 42-year-old man on chronic lithium therapy reports excessive thirst and urination.",
      "He drinks water constantly and wakes multiple times overnight to void.",
      "Serum sodium is mildly elevated, and urine is persistently dilute.",
      "Water deprivation does not concentrate the urine.",
      "Desmopressin produces little change in urine osmolality.",
      "The collecting duct is unable to respond normally to ADH."
    ],
    description: "Nephrogenic diabetes insipidus is caused by renal resistance to ADH, often due to lithium, hypercalcemia, or hereditary defects. Patients develop polyuria, polydipsia, and dilute urine that does not respond well to desmopressin.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 155,
    answer: "Hepatic hemangioma",
    clues:     [
      "A 47-year-old woman is found to have an incidental liver lesion during ultrasound for gallbladder symptoms.",
      "She has no weight loss, jaundice, or abdominal tenderness.",
      "MRI shows a well-circumscribed vascular lesion with peripheral nodular enhancement and centripetal fill-in.",
      "Liver function tests are normal.",
      "The lesion is stable on repeat imaging.",
      "This is the most common benign tumor of the liver."
    ],
    description: "Hepatic hemangioma is a benign vascular liver lesion often discovered incidentally. Most are asymptomatic and require no treatment unless very large or symptomatic.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 156,
    answer: "Mucocele",
    clues:     [
      "A 16-year-old boy presents with a painless swelling on the inside of his lower lip that has been present for three weeks.",
      "He recalls biting his lip a few weeks ago and noticed the swelling appeared shortly afterwards.",
      "Examination reveals a smooth, fluctuant, translucent bluish swelling approximately 1 cm in diameter on the lower labial mucosa.",
      "The lesion transilluminates.",
      "Histopathology after excision shows a pool of mucin surrounded by granulation tissue without an epithelial lining.",
      "The pathological finding is consistent with a mucus extravasation phenomenon."
    ],
    description: "A mucocele is a common benign lesion of the oral mucosa arising from trauma to a minor salivary gland duct, leading to mucus extravasation into surrounding connective tissue. The lower lip is the most common site. Extravasation mucoceles have no epithelial lining (unlike retention cysts). Treatment is surgical excision including the associated minor salivary gland.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 157,
    answer: "Tricuspid Valve Regurgitation",
    clues:     [
      "A 58-year-old woman presents with progressive edema and abdominal fullness.",
      "Exam reveals elevated jugular venous pressure with prominent v waves and a holosystolic murmur at the left lower sternal border.",
      "The murmur becomes louder with inspiration.",
      "There is pulsatile hepatomegaly and mild ascites.",
      "Echocardiography shows incomplete closure of the tricuspid valve with systolic backflow into the right atrium.",
      "Functional disease is often caused by right ventricular dilation or pulmonary hypertension."
    ],
    description: "Tricuspid regurgitation produces a holosystolic murmur that increases with inspiration and can cause systemic venous congestion. Etiologies include pulmonary hypertension, endocarditis, carcinoid disease, and right ventricular dilation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 158,
    answer: "Seborrheic Keratosis",
    clues:     [
      "A 69-year-old man asks about several brown plaques that have appeared on his trunk over the years.",
      "They are waxy, slightly raised, and look as though they are stuck onto the skin.",
      "The lesions are not tender and rarely itch.",
      "Dermoscopy is benign, and no biopsy is needed for classic appearance.",
      "There is no ulceration, bleeding, or rapid destructive growth.",
      "This is a common benign epidermal proliferation in older adults."
    ],
    description: "Seborrheic keratoses are benign skin lesions with a waxy, stuck-on appearance. They are extremely common with aging and generally require no treatment unless irritated or cosmetically bothersome.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 159,
    answer: "Dysthymia",
    clues:     [
      "A 42-year-old woman presents describing herself as 'always a bit down' for as long as she can remember.",
      "She says she has never felt consistently well — not hopeless or suicidal, but never fully okay either.",
      "She reports low energy, poor concentration, low self-esteem, and a tendency to feel hopeless about the future.",
      "She has not had two consecutive months free of these symptoms in over three years.",
      "She has never experienced a full major depressive episode, and there is no evidence of a hypomanic or manic episode.",
      "A careful longitudinal history confirms a chronically depressed mood for at least two years with at least two accompanying neurovegetative symptoms."
    ],
    description: "Dysthymia (persistent depressive disorder) is a chronic low-grade depressive condition characterised by depressed mood present on most days for at least two years, accompanied by two or more neurovegetative symptoms. It carries substantial functional impairment despite appearing milder than major depression. Combined antidepressant therapy and psychotherapy offer the best outcomes.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 160,
    answer: "Chronic Pyelonephritis",
    clues:     [
      "A 43-year-old woman with a history of recurrent urinary tract infections develops slowly worsening kidney function.",
      "She reports intermittent flank discomfort over several years.",
      "Urinalysis shows mild proteinuria and leukocytes but no nephrotic-range protein loss.",
      "Imaging reveals asymmetric small kidneys with coarse corticomedullary scarring.",
      "There is a history of vesicoureteral reflux since childhood.",
      "The disease reflects recurrent ascending infection and scarring of the renal parenchyma."
    ],
    description: "Chronic pyelonephritis results from recurrent kidney infection or reflux nephropathy and leads to tubulointerstitial scarring. It can cause progressive renal insufficiency and uneven renal cortical scarring.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 161,
    answer: "Hypersensitivity Pneumonitis",
    clues:     [
      "A 48-year-old bird breeder develops cough, dyspnea, and fever several hours after cleaning his aviary.",
      "Symptoms improve when he is away from work and recur with re-exposure.",
      "Exam reveals inspiratory crackles without wheezing.",
      "CT chest shows diffuse ground-glass opacities and centrilobular nodules.",
      "Pulmonary function tests show a restrictive pattern with reduced diffusion capacity.",
      "This immune-mediated disease is caused by repeated inhalation of organic antigens."
    ],
    description: "Hypersensitivity pneumonitis is an inflammatory interstitial lung disease triggered by inhaled organic antigens such as bird proteins or mold. The key management step is antigen avoidance, with steroids used in selected cases.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 162,
    answer: "Anaphylaxis",
    clues:     [
      "A 16-year-old girl develops sudden flushing, itching, and shortness of breath minutes after eating dessert.",
      "She has diffuse urticaria and swelling of the lips.",
      "Her voice becomes hoarse and she feels tightness in her throat.",
      "Blood pressure is 82/48 mmHg and wheezing is heard bilaterally.",
      "Serum tryptase drawn shortly after the event is elevated.",
      "The reaction involves rapid mast cell mediator release with airway, skin, and cardiovascular involvement."
    ],
    description: "Anaphylaxis is a severe systemic hypersensitivity reaction causing rapid skin, airway, respiratory, and circulatory symptoms. It is most often triggered by foods, medications, or insect stings and requires urgent recognition.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 163,
    answer: "Retinopathy of Prematurity",
    clues:     [
      "A premature infant born at 27 weeks receives prolonged supplemental oxygen in the NICU.",
      "He is screened ophthalmologically because of very low birth weight and prematurity.",
      "The retina shows abnormal neovascularization at the junction of vascular and avascular retina.",
      "Later scarring can lead to retinal detachment if untreated.",
      "The disease results from oxygen-related disruption of normal retinal vascular development.",
      "Careful oxygen targeting reduces but does not eliminate the risk."
    ],
    description: "Retinopathy of prematurity occurs in very premature infants exposed to fluctuating oxygen levels. Abnormal retinal neovascularization can progress to fibrosis and retinal detachment, so regular screening is essential.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 164,
    answer: "Restrictive Cardiomyopathy",
    clues:     [
      "A 67-year-old woman presents with progressive exertional dyspnea and leg swelling.",
      "Jugular venous pressure is elevated, and an S4 is heard.",
      "Echocardiography shows preserved ejection fraction with biatrial enlargement and impaired diastolic filling.",
      "The ventricular walls are not markedly dilated.",
      "She has a history of infiltrative systemic disease.",
      "The main physiologic problem is impaired ventricular compliance rather than poor systolic contraction."
    ],
    description: "Restrictive cardiomyopathy causes heart failure from stiff ventricles and impaired filling, often with preserved systolic function early on. Common causes include amyloidosis, sarcoidosis, hemochromatosis, and endomyocardial fibrosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 165,
    answer: "Scabies",
    clues:     [
      "A 24-year-old college student has intense generalized itching that is worse at night.",
      "Several roommates have developed similar symptoms.",
      "Exam shows excoriated papules on the wrists, finger webs, waistline, and genital area.",
      "Thin serpiginous tracks are visible between several fingers.",
      "Skin scraping from a track reveals mites, eggs, and fecal pellets under microscopy.",
      "The infestation spreads through close skin contact and causes delayed hypersensitivity to mite antigens."
    ],
    description: "Scabies is an intensely pruritic mite infestation that commonly affects finger webs, wrists, waistline, and genital skin. Nocturnal itching, household spread, burrows, and microscopy findings are characteristic.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 166,
    answer: "Prepatellar Bursitis",
    clues:     [
      "A 46-year-old floor installer presents with swelling directly over the kneecap.",
      "He spends hours kneeling at work and denies a twisting injury.",
      "Exam shows a fluctuant tender collection superficial to the patella with preserved knee range of motion.",
      "There is no joint effusion.",
      "Aspiration yields inflammatory fluid from the bursa rather than the joint space.",
      "Chronic repetitive kneeling compresses and irritates the fluid-filled sac overlying the patella."
    ],
    description: "Prepatellar bursitis is inflammation of the bursa overlying the patella, often caused by repetitive kneeling or direct trauma. Septic bursitis should be considered if there is marked erythema, warmth, or systemic symptoms.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 167,
    answer: "Squamous Cell Carcinoma of the Bladder",
    clues:     [
      "A 58-year-old man from an endemic area presents with painless gross hematuria.",
      "He has no flank pain and no urinary frequency.",
      "Cystoscopy reveals an invasive bladder mass.",
      "Biopsy shows keratinizing malignant squamous cells.",
      "History is notable for chronic Schistosoma haematobium exposure.",
      "Chronic irritation and inflammation are important risk factors for this bladder cancer subtype."
    ],
    description: "Squamous cell carcinoma of the bladder is associated with chronic inflammation, especially Schistosoma haematobium infection or long-term irritation from catheters or stones. It often presents with painless hematuria.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 168,
    answer: "Acute otitis media",
    clues:     [
      "A 14-month-old girl has fever, irritability, and poor sleep after several days of nasal congestion.",
      "She repeatedly pulls at her right ear.",
      "Otoscopy shows a bulging erythematous tympanic membrane with decreased mobility.",
      "There is no swelling or tenderness behind the ear.",
      "Middle ear effusion is present on pneumatic otoscopy.",
      "The infection follows eustachian tube dysfunction after an upper respiratory illness."
    ],
    description: "Acute otitis media is infection of the middle ear, usually after viral upper respiratory infection. Bulging tympanic membrane with middle ear effusion is the key diagnostic finding.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 169,
    answer: "Focal Aware Seizure (Simple Partial Seizure)",
    clues:     [
      "A 29-year-old woman experiences repeated brief spells of jerking in the right hand.",
      "She remains fully conscious and can describe the event afterward.",
      "At times the movement spreads up the arm over seconds.",
      "There is no postictal confusion.",
      "EEG localizes epileptiform activity to the left motor cortex.",
      "This seizure type begins focally without impairment of awareness."
    ],
    description: "Focal aware seizures originate in one cerebral hemisphere and do not impair consciousness. Symptoms depend on the cortical region involved and may include motor, sensory, autonomic, or psychic phenomena.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 170,
    answer: "Hidradenitis Suppurativa",
    clues:     [
      "A 30-year-old woman presents with recurrent painful nodules in both axillae.",
      "Some lesions drain malodorous material and heal with scarring.",
      "She also has similar lesions in the groin.",
      "The problem has persisted for years with intermittent flares.",
      "Exam reveals sinus tracts and double comedones.",
      "This chronic inflammatory follicular disorder affects apocrine-bearing regions."
    ],
    description: "Hidradenitis suppurativa is a chronic inflammatory disorder of follicular occlusion in intertriginous areas such as the axillae and groin. It causes painful nodules, abscesses, sinus tracts, and scarring.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 171,
    answer: "Celiac disease",
    clues:     [
      "A 28-year-old woman has chronic bloating, diarrhea, and fatigue.",
      "She has iron deficiency anemia despite a balanced diet.",
      "Symptoms improve when she avoids wheat-containing foods.",
      "Serology shows positive tissue transglutaminase IgA antibodies.",
      "Duodenal biopsy shows villous atrophy with crypt hyperplasia and increased intraepithelial lymphocytes.",
      "The disorder is an immune reaction to gluten in a genetically susceptible patient."
    ],
    description: "Celiac disease is an immune-mediated enteropathy triggered by gluten. Diarrhea, bloating, iron deficiency, positive tissue transglutaminase IgA, and villous atrophy support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 172,
    answer: "CHARGE Syndrome",
    clues:     [
      "A newborn has cyanosis with feeding, abnormal external ears, and failure of newborn hearing screening.",
      "Exam also reveals a coloboma and choanal atresia.",
      "Cardiac imaging identifies a congenital heart defect.",
      "Genital hypoplasia is noted.",
      "Developmental delays become apparent during infancy.",
      "Mutation in a chromatin-remodeling gene underlies this congenital syndrome affecting multiple organ systems."
    ],
    description: "CHARGE syndrome is a congenital disorder often caused by CHD7 mutations. It is characterized by coloboma, heart defects, choanal atresia, growth/developmental delay, genital abnormalities, and ear anomalies.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 173,
    answer: "Alcohol Withdrawal",
    clues:     [
      "A 44-year-old man is hospitalized and becomes tremulous about 12 hours after his last drink.",
      "He has anxiety, diaphoresis, insomnia, and tachycardia.",
      "He remains oriented and is not hallucinating.",
      "There is mild hypertension but no fever.",
      "Symptoms improve after benzodiazepine administration.",
      "This syndrome results from abrupt cessation of chronic CNS depressant exposure."
    ],
    description: "Early alcohol withdrawal begins within hours of cessation and causes tremor, anxiety, autonomic hyperactivity, nausea, and insomnia. Severe complications include seizures and delirium tremens if not treated appropriately.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 174,
    answer: "Gestational diabetes",
    clues:     [
      "A 30-year-old pregnant woman is seen for routine screening at 27 weeks gestation.",
      "She has no prior history of diabetes.",
      "One-hour glucose challenge test is abnormal.",
      "A follow-up oral glucose tolerance test confirms elevated glucose values.",
      "Ultrasound later shows fetal growth above the expected percentile.",
      "The condition reflects glucose intolerance first recognized during pregnancy because of placental insulin resistance."
    ],
    description: "Gestational diabetes is glucose intolerance first recognized during pregnancy, driven by pregnancy-related insulin resistance. It is commonly detected by screening in the second trimester and increases risk of macrosomia and delivery complications.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 175,
    answer: "Wernicke-Korsakoff Syndrome",
    clues:     [
      "A 58-year-old man with alcohol use disorder presents with confusion and unsteady gait.",
      "Exam reveals horizontal nystagmus and impaired lateral gaze.",
      "He is given IV glucose before thiamine and then worsens.",
      "After partial recovery, he cannot form new memories and fills gaps with confabulation.",
      "The lesion affects mammillary bodies and related diencephalic structures.",
      "The underlying deficiency is thiamine depletion."
    ],
    description: "Wernicke encephalopathy presents with confusion, ataxia, and ophthalmoplegia due to thiamine deficiency. Untreated disease can evolve into Korsakoff syndrome with severe memory impairment and confabulation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 176,
    answer: "Congestive Heart Failure (CHF)",
    clues:     [
      "A 72-year-old man presents with progressive shortness of breath, orthopnea, and ankle swelling.",
      "He now needs three pillows to sleep and wakes up gasping at night.",
      "Exam shows bibasilar crackles, elevated JVP, and pitting edema.",
      "Chest x-ray demonstrates pulmonary vascular congestion and pleural effusions.",
      "BNP is elevated.",
      "This syndrome represents the inability of the heart to meet circulatory demands without elevated filling pressures."
    ],
    description: "Congestive heart failure is a clinical syndrome of impaired cardiac output and-or elevated filling pressures leading to pulmonary and systemic congestion. Symptoms include dyspnea, orthopnea, edema, and exercise intolerance.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 177,
    answer: "Aortic stenosis",
    clues:     [
      "A 76-year-old man has progressive exertional shortness of breath and chest tightness.",
      "He nearly faints while walking uphill.",
      "Carotid pulse upstroke is delayed and reduced.",
      "A harsh systolic crescendo-decrescendo murmur is heard at the right upper sternal border.",
      "Echocardiography shows calcified valve leaflets with a high transvalvular pressure gradient.",
      "The fixed outflow obstruction classically causes exertional angina, syncope, and heart failure."
    ],
    description: "Aortic stenosis is narrowing of the aortic valve causing fixed left ventricular outflow obstruction. Exertional angina, syncope, dyspnea, delayed carotid upstroke, and a systolic ejection murmur are classic.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 178,
    answer: "Absence Seizure",
    clues:     [
      "A 7-year-old girl has repeated brief staring spells during class.",
      "Episodes last about 10 seconds and end abruptly without confusion.",
      "She sometimes has eyelid fluttering but never falls.",
      "Hyperventilation during clinic reproduces an event.",
      "EEG shows generalized 3-Hz spike-and-wave activity.",
      "This generalized seizure disorder is treated with ethosuximide when isolated."
    ],
    description: "Absence seizures cause sudden brief lapses in awareness with immediate recovery and no postictal state. They are common in childhood and have a characteristic 3-Hz spike-and-wave EEG pattern.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 179,
    answer: "Acoustic Neuroma / Vestibular Schwannoma",
    clues:     [
      "A 52-year-old woman reports progressive unilateral hearing loss and tinnitus.",
      "She also has imbalance but little true vertigo.",
      "Audiometry confirms sensorineural hearing loss on the affected side.",
      "MRI with contrast shows a cerebellopontine angle mass.",
      "As it enlarges, facial numbness develops.",
      "This benign tumor arises from Schwann cells of CN VIII."
    ],
    description: "Vestibular schwannoma is a benign tumor of the vestibular branch of CN VIII that causes unilateral sensorineural hearing loss, tinnitus, and imbalance. Bilateral tumors suggest neurofibromatosis type II.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 180,
    answer: "Oral hairy leukoplakia",
    clues:     [
      "A 38-year-old man presents with a white lesion on the lateral border of his tongue that he noticed two months ago.",
      "He reports significant unintentional weight loss and recurrent oral thrush over the past year.",
      "The lesion cannot be wiped off and has a markedly corrugated, verrucous surface.",
      "It is painless and located bilaterally on the lateral tongue borders.",
      "Biopsy shows epithelial hyperplasia with koilocyte-like cells in the superficial layers; in situ hybridisation confirms Epstein-Barr virus.",
      "CD4 count is found to be 180 cells/μL, confirming underlying immunosuppression."
    ],
    description: "Oral hairy leukoplakia is a benign white lesion of the lateral tongue caused by EBV replication in immunosuppressed individuals, most commonly those with HIV infection. It is not premalignant but is an important clinical marker of immunosuppression. It does not require specific treatment but indicates the need for antiretroviral therapy evaluation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 181,
    answer: "Alport Syndrome",
    clues:     [
      "A 14-year-old boy presents with lifelong microscopic hematuria and progressive hearing difficulty.",
      "His maternal uncle developed kidney failure in early adulthood.",
      "Urinalysis now also shows increasing proteinuria.",
      "Ophthalmologic exam reveals anterior lenticonus.",
      "Kidney biopsy shows irregular thinning and splitting of the glomerular basement membrane.",
      "The disorder results from inherited defects in type IV collagen."
    ],
    description: "Alport syndrome is a hereditary nephritis caused by mutations affecting type IV collagen. It classically produces hematuria, sensorineural hearing loss, ocular abnormalities, and progressive renal failure.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 182,
    answer: "Complex Regional Pain Syndrome (CRPS)",
    clues:     [
      "A 38-year-old woman develops severe burning pain in the hand weeks after a distal radius fracture.",
      "The pain is far greater than expected and worsens with light touch.",
      "Her hand becomes swollen, cool, and mottled.",
      "Range of motion is limited despite fracture healing.",
      "Radiographs later show patchy osteopenia.",
      "This syndrome involves maladaptive pain amplification after trauma."
    ],
    description: "CRPS is a chronic pain disorder usually triggered by trauma or surgery and characterized by severe pain, allodynia, autonomic changes, swelling, and functional impairment. Early mobilization and multidisciplinary pain management are important.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 183,
    answer: "Somatic symptom disorder",
    clues:     [
      "A 50-year-old woman presents with chronic widespread pain, fatigue, and gastrointestinal symptoms for which no organic cause has been found after extensive investigation.",
      "She has seen multiple specialists over five years and has undergone two surgeries based on symptoms rather than objective findings.",
      "Despite normal test results, she remains convinced that something serious is being missed and spends hours each day reading about symptoms online.",
      "Her preoccupation with her symptoms causes significant distress and she has stopped working as a result.",
      "A thorough psychiatric evaluation confirms that she experiences disproportionate and persistent thoughts, feelings, and behaviours related to her physical symptoms.",
      "Her suffering is genuine and her symptoms are real, but the diagnostic pattern fits excessive health-related preoccupation in the absence of an explanatory medical condition."
    ],
    description: "Somatic symptom disorder is characterised by one or more distressing somatic symptoms accompanied by excessive thoughts, feelings, or behaviours related to those symptoms. Unlike previous formulations, it requires positive psychological criteria rather than merely the absence of medical explanation. Effective management involves regular scheduled appointments, CBT, and avoiding unnecessary further investigation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 184,
    answer: "Aortic Valve Regurgitation",
    clues:     [
      "A 56-year-old man complains of exertional dyspnea and awareness of forceful heartbeats when lying down.",
      "Blood pressure is 162-48 mmHg.",
      "Exam reveals a high-pitched early diastolic decrescendo murmur along the left sternal border.",
      "There are bounding peripheral pulses and head bobbing.",
      "Echocardiography demonstrates diastolic backflow from the aorta into the left ventricle.",
      "Chronic volume overload can eventually produce left ventricular dilation and heart failure."
    ],
    description: "Aortic regurgitation causes wide pulse pressure and a diastolic murmur due to retrograde flow into the left ventricle. Etiologies include bicuspid valve disease, aortic root dilation, infective endocarditis, and rheumatic disease.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 185,
    answer: "Acute Lymphoblastic Leukemia (ALL)",
    clues:     [
      "A 6-year-old boy presents with fatigue, bruising, and leg pain.",
      "Exam reveals pallor, petechiae, and hepatosplenomegaly.",
      "CBC shows anemia, thrombocytopenia, and circulating blasts.",
      "Bone marrow is packed with lymphoblasts that are TdT positive.",
      "Mediastinal widening may be present in T-cell disease.",
      "This is the most common childhood leukemia."
    ],
    description: "ALL is a malignant proliferation of lymphoid precursors and is the most common leukemia in children. It often presents with marrow failure, bone pain, lymphadenopathy, and hepatosplenomegaly.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 186,
    answer: "Diabetic ketoacidosis",
    clues:     [
      "A 21-year-old man with type 1 diabetes presents with vomiting, abdominal pain, and profound thirst.",
      "He missed several insulin doses during a febrile illness.",
      "He is tachypneic with deep, labored respirations and has dry mucous membranes.",
      "Point-of-care glucose is markedly elevated.",
      "Labs show high anion gap metabolic acidosis with positive serum ketones.",
      "The syndrome reflects insulin deficiency causing lipolysis, ketone production, dehydration, and acidemia."
    ],
    description: "Diabetic ketoacidosis is an acute complication of insulin deficiency marked by hyperglycemia, ketosis, dehydration, and high anion gap metabolic acidosis. Infection and missed insulin doses are common triggers.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 187,
    answer: "Mucoepidermoid carcinoma",
    clues:     [
      "A 45-year-old woman has a slowly enlarging painless mass near the angle of the jaw.",
      "The lesion arises from the parotid gland.",
      "Facial nerve function is mildly weak on the same side.",
      "Pathology shows a mixture of mucus-producing and squamoid cells.",
      "It is malignant rather than a benign pleomorphic adenoma.",
      "This is one of the most common malignant salivary gland tumors."
    ],
    description: "Mucoepidermoid carcinoma is a malignant salivary gland tumor composed of mucous and epidermoid cells, often arising in the parotid gland. Facial nerve dysfunction raises concern for malignancy in a parotid mass.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 188,
    answer: "Achondroplasia",
    clues:     [
      "A newborn has shortened proximal limbs with normal trunk length.",
      "The head is large with frontal bossing, and the midface is relatively small.",
      "Parents are of average height and had no prenatal concerns.",
      "Radiographs confirm rhizomelic limb shortening.",
      "Intelligence is normal.",
      "This common dwarfism syndrome is caused by activating mutation of FGFR3."
    ],
    description: "Achondroplasia is a disorder of endochondral bone growth caused by activating FGFR3 mutation. It leads to short-limbed dwarfism with frontal bossing and normal intellect.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 189,
    answer: "Impetigo",
    clues:     [
      "A 5-year-old boy develops a superficial rash around his nose and mouth.",
      "The lesions begin as small vesicles that rupture easily.",
      "Exam shows erosions covered by honey-colored crusts.",
      "He is otherwise well and afebrile.",
      "A bacterial culture grows Staphylococcus aureus.",
      "The contagious superficial infection most often affects young children and exposed skin."
    ],
    description: "Impetigo is a superficial bacterial skin infection, usually caused by Staphylococcus aureus or Streptococcus pyogenes. Honey-colored crusts around the face or extremities are classic.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 190,
    answer: "Cardiac Myxoma",
    clues:     [
      "A 46-year-old woman has exertional dyspnea and several recent episodes of near-syncope.",
      "She also reports intermittent fever, weight loss, and fatigue.",
      "A new early diastolic sound is heard and changes with body position.",
      "She recently had a transient ischemic event thought to be embolic.",
      "Echocardiography shows a pedunculated mass in the left atrium attached near the interatrial septum.",
      "This is the most common primary tumor of the adult heart."
    ],
    description: "Cardiac myxoma is the most common primary cardiac tumor in adults and usually arises in the left atrium near the fossa ovalis. It can cause constitutional symptoms, positional obstruction of the mitral valve, and systemic embolization.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 191,
    answer: "Turcot syndrome",
    clues:     [
      "A 16-year-old boy is found to have numerous colonic adenomatous polyps during evaluation of chronic rectal bleeding.",
      "Months later he develops headaches and vomiting.",
      "Brain MRI reveals a cerebellar mass.",
      "Family history is notable for hereditary gastrointestinal malignancy.",
      "This syndrome combines colorectal polyposis with CNS tumors.",
      "It is classically associated with APC or mismatch repair gene abnormalities depending on the subtype."
    ],
    description: "Turcot syndrome refers to the association of hereditary colorectal polyposis with primary CNS tumors, especially medulloblastoma or glioblastoma depending on the genetic background. It overlaps with APC-associated and Lynch-associated syndromes.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 192,
    answer: "Febrile seizure",
    clues:     [
      "A 20-month-old boy has a brief generalized convulsion while his temperature is 39.2 C.",
      "The event lasts two minutes and stops spontaneously.",
      "He returns to baseline shortly afterward.",
      "There is no neck stiffness, focal neurologic deficit, or prior seizure history outside of fever.",
      "Temperature is 39.2 C and exam suggests a viral upper respiratory infection.",
      "This benign childhood event occurs between 6 months and 5 years during a febrile illness."
    ],
    description: "Febrile seizure is a seizure associated with fever in a neurologically healthy child between 6 months and 5 years of age. Simple events are generalized, brief, and followed by full recovery.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 193,
    answer: "Infective Endocarditis",
    clues:     [
      "A 47-year-old man with a history of injection drug use presents with fever and malaise.",
      "A new systolic murmur is heard, and he has painful fingertip nodules and splinter hemorrhages.",
      "Blood cultures are repeatedly positive for Staphylococcus aureus.",
      "Echocardiography shows a mobile vegetation on the tricuspid valve.",
      "Urinalysis reveals microscopic hematuria from immune complex injury.",
      "This infection involves colonization of the endocardial surface and can embolize systemically or to the lungs."
    ],
    description: "Infective endocarditis is infection of the endocardial surface, usually involving a valve. Persistent bacteremia, new murmur, and vascular or immunologic phenomena are typical findings, and echocardiography is central to diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 194,
    answer: "Retinoblastoma",
    clues:     [
      "An 18-month-old child is brought in because one pupil appears white in flash photographs.",
      "Parents also noticed intermittent eye deviation.",
      "Funduscopic exam reveals a retinal mass.",
      "MRI confirms an intraocular tumor without optic nerve extension.",
      "The child has a family history of early-onset eye cancer.",
      "This tumor arises from biallelic loss of the RB tumor suppressor gene."
    ],
    description: "Retinoblastoma is the most common intraocular malignancy of childhood and presents with leukocoria or strabismus. Heritable cases involve germline RB mutation and are associated with bilateral disease and later osteosarcoma risk.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 195,
    answer: "Crohn's disease",
    clues:     [
      "A 24-year-old man has chronic diarrhea, abdominal pain, and weight loss.",
      "He reports intermittent low-grade fever and fatigue.",
      "Exam shows perianal fissures and a draining perianal tract.",
      "Colonoscopy reveals patchy areas of inflammation separated by normal mucosa.",
      "Biopsy shows transmural inflammation with noncaseating granulomas.",
      "The disease can affect any part of the gastrointestinal tract from mouth to anus."
    ],
    description: "Crohn's disease is an inflammatory bowel disease with patchy transmural inflammation that can involve any part of the gastrointestinal tract. Perianal disease, skip lesions, and granulomas are supportive features.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 196,
    answer: "Actinic Keratosis",
    clues:     [
      "A 68-year-old fair-skinned man has several rough scaly papules on the bald scalp.",
      "They are easier to feel than to see.",
      "The lesions are persistent but slow-growing.",
      "He has extensive cumulative sun exposure.",
      "Biopsy of one lesion shows atypical keratinocytes confined to the lower epidermis.",
      "These premalignant lesions can progress to squamous cell carcinoma."
    ],
    description: "Actinic keratoses are sun-induced premalignant lesions made of atypical keratinocytes. They occur on chronically sun-exposed skin and are treated because some progress to squamous cell carcinoma.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 197,
    answer: "Truncus Arteriosus",
    clues:     [
      "A newborn develops cyanosis and signs of heart failure within the first weeks of life.",
      "Echocardiography reveals a single large arterial trunk leaving the heart and overriding a VSD.",
      "Oxygen saturation is low despite increased pulmonary blood flow.",
      "There is no separate pulmonary artery originating from the right ventricle.",
      "The lesion results from failure of the truncus arteriosus to divide properly during development.",
      "This conotruncal anomaly is associated with 22q11 deletion syndromes."
    ],
    description: "Truncus arteriosus is a congenital defect in which a single arterial trunk gives rise to the systemic, coronary, and pulmonary circulations. It results from failed neural crest migration and requires early surgical repair.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 198,
    answer: "Pelvic inflammatory disease",
    clues:     [
      "A 22-year-old woman presents with lower abdominal pain and fever.",
      "She has new vaginal discharge and pain with intercourse.",
      "Pelvic examination shows cervical motion tenderness and bilateral adnexal tenderness.",
      "Pregnancy test is negative.",
      "Nucleic acid testing is positive for Chlamydia trachomatis.",
      "The infection ascends from the cervix to involve the upper reproductive tract."
    ],
    description: "Pelvic inflammatory disease is infection of the upper female reproductive tract, often associated with Chlamydia trachomatis or Neisseria gonorrhoeae. Pelvic pain, fever, discharge, cervical motion tenderness, and adnexal tenderness are typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 199,
    answer: "Binge-Eating Disorder",
    clues:     [
      "A 29-year-old woman reports repeated episodes of eating very large amounts of food in secret.",
      "She feels unable to stop during the episodes and is distressed afterward.",
      "Unlike bulimia, she does not regularly induce vomiting or misuse laxatives.",
      "Her weight has increased steadily over the last few years.",
      "The episodes occur at least weekly.",
      "This eating disorder is characterized by binge episodes without compensatory behaviors."
    ],
    description: "Binge-eating disorder involves recurrent binge episodes with loss of control and marked distress, but without recurrent inappropriate compensatory behaviors. It is associated with obesity and psychiatric comorbidity.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 200,
    answer: "Metabolic-Associated Fatty Liver Disease (MAFLD)",
    clues:     [
      "A 51-year-old man with obesity and type 2 diabetes is found to have mildly elevated ALT on routine labs.",
      "He drinks very little alcohol.",
      "Ultrasound shows increased hepatic echogenicity consistent with steatosis.",
      "There is no viral hepatitis.",
      "Liver biopsy, if done, may show steatosis with ballooning degeneration and inflammation.",
      "This liver disease is strongly linked to insulin resistance and metabolic syndrome."
    ],
    description: "MAFLD, formerly termed NAFLD, encompasses hepatic steatosis related to metabolic dysfunction. It can progress from simple steatosis to steatohepatitis, fibrosis, cirrhosis, and hepatocellular carcinoma.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 201,
    answer: "Acute pericarditis",
    clues:     [
      "A 29-year-old man develops sharp chest pain after a viral illness.",
      "The pain worsens when lying flat and improves when sitting forward.",
      "A scratchy sound is heard along the left sternal border.",
      "ECG shows diffuse concave ST-segment elevation with PR depression.",
      "Troponin is normal and echocardiography shows a small pericardial effusion.",
      "The syndrome reflects inflammation of the sac surrounding the heart."
    ],
    description: "Acute pericarditis is inflammation of the pericardium, commonly after viral infection. Pleuritic positional chest pain, friction rub, diffuse ST elevation, and PR depression are typical clues.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 202,
    answer: "Poliomyelitis",
    clues:     [
      "A 6-year-old unvaccinated child develops fever and sore throat followed by asymmetric leg weakness.",
      "Sensation remains intact despite profound motor deficits.",
      "Deep tendon reflexes are decreased in the affected limb.",
      "CSF shows a viral pattern, and stool PCR detects enterovirus.",
      "There is no upper motor neuron spasticity.",
      "The virus selectively damages anterior horn cells in the spinal cord."
    ],
    description: "Poliomyelitis is an enteroviral infection that can invade the central nervous system and destroy anterior horn cells, causing asymmetric flaccid paralysis. Vaccination has made the disease rare in most of the world.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 203,
    answer: "Pneumococcal Pneumonia (Streptococcus pneumoniae)",
    clues:     [
      "A 66-year-old man presents with abrupt fever, productive cough, and pleuritic chest pain.",
      "He produces rust-colored sputum.",
      "Exam shows focal crackles and bronchial breath sounds over the right lower lobe.",
      "Chest x-ray reveals lobar consolidation.",
      "Blood culture grows alpha-hemolytic gram-positive diplococci that are optochin sensitive.",
      "This is the most common cause of community-acquired lobar pneumonia."
    ],
    description: "Streptococcus pneumoniae classically causes abrupt-onset lobar pneumonia with fever, cough, pleuritic pain, and rusty sputum. It is also a common cause of otitis, sinusitis, and meningitis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 204,
    answer: "Burning mouth syndrome",
    clues:     [
      "A 61-year-old postmenopausal woman presents with a persistent, spontaneous oral discomfort described as scalding or rawness that has been present every day for eight months.",
      "The discomfort affects the tip of her tongue and anterior hard palate with no identifiable precipitating factor.",
      "Characteristically, the sensation is completely absent on waking and intensifies progressively throughout the day.",
      "Eating and drinking provide temporary relief from the symptoms.",
      "Oral examination is completely normal; haematinic levels, thyroid function, and blood glucose are all within normal limits.",
      "No contact allergen is identified on patch testing, and all other causes have been excluded."
    ],
    description: "Burning mouth syndrome is a chronic orofacial pain condition characterised by a spontaneous burning sensation in a clinically normal-appearing oral mucosa. It predominantly affects postmenopausal women. Diagnosis is one of exclusion after ruling out local factors, nutritional deficiencies, and systemic causes. Management includes reassurance, low-dose antidepressants, or cognitive-behavioural therapy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 205,
    answer: "Total Anomalous Pulmonary Venous Return (TAPVR)",
    clues:     [
      "A cyanotic newborn becomes more tachypneic shortly after birth.",
      "Echocardiography shows all pulmonary veins draining into the systemic venous circulation rather than the left atrium.",
      "An atrial septal defect is present and necessary for survival.",
      "Chest imaging may show a snowman silhouette in certain supracardiac forms.",
      "Pulmonary edema can be severe if venous return is obstructed.",
      "This congenital anomaly requires surgical correction."
    ],
    description: "TAPVR is a congenital defect in which pulmonary venous blood reaches the right side of the heart instead of the left atrium. An interatrial communication is necessary to maintain systemic output, and repair is surgical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 206,
    answer: "Nicotine Withdrawal",
    clues:     [
      "A 39-year-old man stopped smoking 2 days ago and now feels irritable and restless.",
      "He reports strong cravings, poor concentration, and increased appetite.",
      "Sleep has become fragmented.",
      "There is no intoxication, hallucination, or autonomic collapse.",
      "He asks for help because he is worried he will relapse.",
      "This syndrome commonly follows abrupt cessation of chronic tobacco use."
    ],
    description: "Nicotine withdrawal causes irritability, anxiety, increased appetite, concentration difficulty, insomnia, and craving after stopping tobacco. Behavioral support and pharmacotherapy such as nicotine replacement, varenicline, or bupropion improve quit success.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 207,
    answer: "Insomnia disorder",
    clues:     [
      "A 44-year-old woman presents with difficulty initiating and maintaining sleep that has been present on most nights for eight months.",
      "She reports lying awake for one to two hours each night with racing thoughts about the next day, then waking at 4 am and being unable to return to sleep.",
      "She spends more time in bed to compensate but reports feeling more tired than ever and regularly naps in the afternoon.",
      "Her daytime functioning is significantly impaired — she is irritable, makes errors at work, and has withdrawn from social activities.",
      "A sleep diary and actigraphy confirm low sleep efficiency below 70% on most nights.",
      "Her sleep difficulty occurs despite adequate opportunity, is not explained by another sleep disorder or medical condition, and causes clinically significant distress."
    ],
    description: "Insomnia disorder is defined by difficulty initiating or maintaining sleep, or early morning awakening, with associated daytime impairment, occurring at least three nights per week for at least three months. Cognitive-behavioural therapy for insomnia (CBT-I) is first-line and superior to pharmacotherapy in the long term. Sleep restriction and stimulus control are its core components.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 208,
    answer: "Brugada Syndrome",
    clues:     [
      "A 32-year-old man experiences nocturnal syncope without warning.",
      "His brother died suddenly at age 29.",
      "ECG shows coved ST elevation in leads V1 through V3 with a pseudo-right bundle branch block pattern.",
      "Echocardiography reveals no structural heart disease.",
      "Fever previously worsened his ECG changes.",
      "This inherited sodium channelopathy predisposes to ventricular arrhythmias and sudden death."
    ],
    description: "Brugada syndrome is an inherited arrhythmia syndrome characterized by ST-segment elevation in V1-V3 and risk of ventricular tachyarrhythmias. Management often includes ICD placement in high-risk patients.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 209,
    answer: "Thromboangiitis Obliterans (Buerger's Disease)",
    clues:     [
      "A 33-year-old man presents with hand pain and toe ulcers.",
      "He has smoked two packs per day since adolescence.",
      "Exam shows diminished distal pulses and ischemic changes of the fingers.",
      "Angiography demonstrates corkscrew collateral vessels in distal extremities.",
      "Autoimmune testing is unrevealing and diabetes is absent.",
      "Complete smoking cessation is the key treatment."
    ],
    description: "Buerger disease is a nonatherosclerotic segmental inflammatory thrombosing disease of small and medium vessels strongly linked to tobacco use. It causes distal ischemia, ulcers, and claudication in young smokers.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 210,
    answer: "Tension pneumothorax",
    clues:     [
      "A 29-year-old man becomes severely short of breath after a stab wound to the chest.",
      "He is hypotensive, tachycardic, and increasingly agitated.",
      "Breath sounds are absent on the injured side.",
      "The trachea is deviated away from the affected hemithorax.",
      "Bedside ultrasound shows absent lung sliding on the symptomatic side.",
      "Rising intrapleural pressure compresses venous return and causes obstructive shock."
    ],
    description: "Tension pneumothorax occurs when air accumulates under pressure in the pleural space, collapsing the lung and impairing venous return. Severe dyspnea, unilateral absent breath sounds, hypotension, and mediastinal shift are key clues.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 211,
    answer: "Embryonal Carcinoma",
    clues:     [
      "A 28-year-old man notices a painless enlarging testicular mass.",
      "Serum beta-hCG and AFP are elevated.",
      "Ultrasound shows a heterogeneous intratesticular lesion.",
      "Pathology reveals primitive anaplastic cells with hemorrhage and necrosis.",
      "The tumor is highly aggressive compared with seminoma.",
      "This is a nonseminomatous germ cell tumor of the testis."
    ],
    description: "Embryonal carcinoma is a malignant nonseminomatous germ cell tumor that typically affects young adult men. It often presents as a painful or painless testicular mass and may produce AFP and beta-hCG.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 212,
    answer: "Erythema Nodosum",
    clues:     [
      "A 26-year-old woman develops tender red nodules on both shins.",
      "She recently had diarrhea and abdominal pain.",
      "The lesions are warm and painful but do not ulcerate.",
      "Chest imaging and infectious workup are considered depending on context.",
      "This reaction pattern can be associated with sarcoidosis, inflammatory bowel disease, pregnancy, and some infections.",
      "The pathology is a septal panniculitis."
    ],
    description: "Erythema nodosum is an inflammatory condition of the subcutaneous fat that causes tender nodules, typically on the shins. It is a nonspecific reaction associated with several systemic diseases and medications.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 213,
    answer: "Herpes zoster",
    clues:     [
      "A 67-year-old woman develops burning pain on one side of her chest.",
      "Two days later, grouped vesicles appear over the same painful area.",
      "The eruption does not cross the midline.",
      "She had chickenpox as a child.",
      "PCR from a vesicle detects the same virus that causes chickenpox.",
      "The eruption follows a single dermatome because of reactivation from a sensory ganglion."
    ],
    description: "Herpes zoster is reactivation of varicella-zoster virus from a sensory ganglion. It causes a painful unilateral vesicular eruption in a dermatomal distribution and can lead to postherpetic neuralgia.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 214,
    answer: "Holiday Heart Syndrome (Alcohol-Induced Atrial Fibrillation)",
    clues:     [
      "A 41-year-old man develops palpitations the morning after a weekend binge.",
      "He has no known structural heart disease.",
      "ECG shows an irregularly irregular rhythm without discrete P waves.",
      "Electrolytes are normal and troponin is negative.",
      "Symptoms resolve spontaneously over the next day.",
      "This describes atrial fibrillation triggered by acute heavy alcohol intake."
    ],
    description: "Holiday heart syndrome refers to atrial arrhythmias, usually atrial fibrillation, precipitated by acute alcohol excess in patients without major structural heart disease. Management depends on hemodynamic stability and duration.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 215,
    answer: "Radial Neuropathy (Saturday Night Palsy)",
    clues:     [
      "A 36-year-old man wakes after sleeping heavily in a chair and cannot extend his wrist.",
      "He also has numbness over the dorsal first web space.",
      "Triceps strength is largely preserved.",
      "There is no neck pain or facial weakness.",
      "The lesion occurred after prolonged compression of the arm against a hard surface.",
      "This peripheral nerve injury classically causes wrist drop."
    ],
    description: "Radial neuropathy from compression in the spiral groove causes wrist and finger extension weakness with sensory loss over the dorsal radial hand. It is classically seen after prolonged external compression during intoxication or deep sleep.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 216,
    answer: "Pyloric stenosis",
    clues:     [
      "A 5-week-old boy has progressively worsening vomiting after feeds.",
      "The emesis is forceful and nonbilious.",
      "He remains hungry after vomiting and has poor weight gain.",
      "Exam reveals a small firm mass in the right upper abdomen.",
      "Labs show hypochloremic metabolic alkalosis.",
      "Ultrasound shows thickening and elongation of the gastric outlet muscle."
    ],
    description: "Pyloric stenosis is hypertrophy of the pyloric muscle causing gastric outlet obstruction in early infancy. Progressive nonbilious projectile vomiting, persistent hunger, an olive-like mass, and hypochloremic metabolic alkalosis are classic.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 217,
    answer: "Hemolytic Uremic Syndrome (Enterohemorrhagic E. coli / EHEC)",
    clues:     [
      "A 4-year-old child develops decreased urine output several days after a bloody diarrheal illness.",
      "The family recently attended a cookout where undercooked beef was served.",
      "Labs show anemia, thrombocytopenia, and rising creatinine.",
      "Peripheral smear reveals schistocytes.",
      "Stool testing identifies shiga toxin-producing E. coli.",
      "This thrombotic microangiopathy is a major cause of acute kidney injury in children."
    ],
    description: "Hemolytic uremic syndrome classically follows shiga toxin-producing diarrheal illness and causes microangiopathic hemolytic anemia, thrombocytopenia, and acute kidney injury. Management is supportive; antibiotics may worsen toxin release in EHEC infection.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 218,
    answer: "Peripheral Artery Disease (PAD)",
    clues:     [
      "A 67-year-old smoker reports calf pain after walking two blocks that resolves with rest.",
      "He has shiny hairless skin and diminished pedal pulses.",
      "An ankle-brachial index is 0.62.",
      "There is no acute neurologic deficit or venous swelling.",
      "The pain is reproducible at a similar walking distance.",
      "This syndrome reflects atherosclerotic narrowing of lower-extremity arteries causing intermittent claudication."
    ],
    description: "PAD is a manifestation of systemic atherosclerosis causing exertional limb ischemia and, in severe cases, rest pain or tissue loss. Smoking cessation, exercise therapy, and aggressive vascular risk reduction are essential.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 219,
    answer: "Acute cholecystitis",
    clues:     [
      "A 46-year-old woman presents with steady right upper quadrant pain that began after a fatty meal.",
      "The pain persists for several hours and radiates to the right shoulder.",
      "She has fever, nausea, and localized tenderness under the right costal margin.",
      "Inspiratory arrest occurs during deep palpation of the right upper quadrant.",
      "Ultrasound shows gallstones, gallbladder wall thickening, and pericholecystic fluid.",
      "The syndrome reflects inflammation from persistent obstruction of the cystic duct."
    ],
    description: "Acute cholecystitis is inflammation of the gallbladder, usually from cystic duct obstruction by a gallstone. Persistent right upper quadrant pain, fever, positive Murphy sign, and supportive ultrasound findings are typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 220,
    answer: "Squamous Cell Carcinoma of the Lung",
    clues:     [
      "A 69-year-old man with a heavy smoking history presents with cough and weight loss.",
      "CT chest shows a central hilar mass.",
      "Bronchoscopy biopsy reveals keratinizing malignant squamous cells.",
      "Serum calcium is elevated.",
      "There is cavitation within the mass.",
      "This lung cancer subtype is strongly linked to smoking and can secrete PTHrP."
    ],
    description: "Pulmonary squamous cell carcinoma typically arises centrally in smokers and may cavitate. It is associated with paraneoplastic hypercalcemia due to PTHrP secretion.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 221,
    answer: "Anemia of Chronic Disease",
    clues:     [
      "A 58-year-old woman with long-standing rheumatoid arthritis reports worsening fatigue.",
      "CBC shows mild normocytic anemia.",
      "Ferritin is normal to high, serum iron is low, and TIBC is low.",
      "Kidney function is normal.",
      "Inflammatory markers are elevated.",
      "Hepcidin-mediated iron sequestration contributes to this pattern."
    ],
    description: "Anemia of chronic disease is common in inflammatory, malignant, and chronic infectious states. It is typically normocytic or mildly microcytic and reflects hepcidin-driven iron sequestration and reduced erythropoiesis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 222,
    answer: "Endometriosis",
    clues:     [
      "A 32-year-old woman reports pelvic pain that worsens before and during menses.",
      "She also has deep pain with intercourse.",
      "She and her partner have tried to conceive for over a year without success.",
      "Pelvic exam reveals uterosacral ligament nodularity.",
      "Laparoscopy shows dark implants on the ovaries and pelvic peritoneum.",
      "The disorder involves endometrial-like tissue outside the uterine cavity that responds to hormonal cycling."
    ],
    description: "Endometriosis is the presence of endometrial-like tissue outside the uterine cavity. Cyclic pelvic pain, dyspareunia, infertility, and laparoscopic implants are classic features.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 223,
    answer: "Schizophreniform Disorder",
    clues:     [
      "A 22-year-old man presents with 2 months of auditory hallucinations, paranoid delusions, and disorganized speech.",
      "He has withdrawn from school and has poor self-care.",
      "Substance use evaluation is negative.",
      "Mood episodes have not predominated the course.",
      "Symptoms are too prolonged for brief psychotic disorder but have not lasted 6 months.",
      "This diagnosis sits temporally between brief psychotic disorder and schizophrenia."
    ],
    description: "Schizophreniform disorder has the same core psychotic features as schizophrenia but lasts between 1 and 6 months. Some patients later transition to schizophrenia or schizoaffective disorder.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 224,
    answer: "Retinitis Pigmentosa",
    clues:     [
      "A 17-year-old boy reports difficulty seeing in dim light.",
      "Over time he notices progressive tunnel vision.",
      "Funduscopic exam reveals black bone-spicule pigment deposits and attenuated retinal vessels.",
      "Visual fields are constricted.",
      "Family history reveals similar vision loss in multiple relatives.",
      "This inherited retinal degeneration classically begins with rod photoreceptor dysfunction."
    ],
    description: "Retinitis pigmentosa is an inherited retinal dystrophy causing night blindness and progressive peripheral visual loss. Fundus findings include bone-spicule pigmentation, attenuated vessels, and optic disc pallor.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 225,
    answer: "Aortic dissection",
    clues:     [
      "A 61-year-old man develops abrupt severe chest pain while lifting a heavy object.",
      "He describes the pain as tearing and radiating to the back.",
      "Blood pressure is markedly elevated and pulses are unequal between arms.",
      "A new diastolic murmur is heard along the left sternal border.",
      "CT angiography shows an intimal flap separating true and false lumens.",
      "The condition involves blood entering the medial layer of the aortic wall."
    ],
    description: "Aortic dissection occurs when blood enters the aortic media through an intimal tear, creating true and false lumens. Abrupt tearing chest or back pain, pulse deficits, hypertension, and CT angiography findings support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 226,
    answer: "Benign Paroxysmal Positional Vertigo (BPPV)",
    clues:     [
      "A 61-year-old woman experiences brief spinning sensations when rolling over in bed.",
      "Each episode lasts less than a minute.",
      "There is no hearing loss or focal neurologic deficit.",
      "Dix-Hallpike testing reproduces vertigo and a torsional nystagmus.",
      "Symptoms improve with canalith repositioning maneuvers.",
      "This condition is caused by displaced otoliths within a semicircular canal."
    ],
    description: "BPPV causes brief episodes of positional vertigo due to canalithiasis, most commonly in the posterior semicircular canal. The Epley maneuver is a standard treatment.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 227,
    answer: "Burkitt Lymphoma",
    clues:     [
      "A 9-year-old boy presents with rapidly enlarging abdominal distension and pain.",
      "Imaging reveals an ileocecal mass and mesenteric lymphadenopathy.",
      "Biopsy shows sheets of medium-sized B cells with numerous tingible-body macrophages, creating a starry-sky appearance.",
      "Ki-67 proliferation index is extremely high.",
      "Cytogenetics reveal a MYC translocation, classically t(8;14).",
      "This is an aggressive but potentially highly chemosensitive lymphoma."
    ],
    description: "Burkitt lymphoma is a high-grade B-cell lymphoma driven by MYC translocation. Endemic forms often involve the jaw, whereas sporadic forms frequently involve the abdomen, especially the ileocecal region.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 228,
    answer: "Warthin's tumour",
    clues:     [
      "A 65-year-old male smoker presents with a soft, painless swelling at the lower pole of his right parotid gland.",
      "He mentions he has a similar but smaller lump on the left side.",
      "The right swelling has been present for over a year and shows slow fluctuation in size.",
      "Ultrasound reveals bilateral well-defined parotid masses with mixed echogenicity and cystic areas.",
      "Technetium-99m pertechnetate scintigraphy shows bilateral hot spots in the parotid glands due to oncocyte uptake.",
      "Histopathology confirms a cystic tumour with a double layer of oncocytic epithelium overlying a dense lymphoid stroma."
    ],
    description: "Warthin's tumour (papillary cystadenoma lymphomatosum) is the second most common benign parotid tumour. It occurs almost exclusively in smokers, is bilateral in up to 10% of cases, and has a characteristic oncocytic epithelium with lymphoid stroma. Treatment is surgical excision; recurrence is rare.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 229,
    answer: "Escherichia coli (E. coli) prostatitis",
    clues:     [
      "A 61-year-old man presents with fever, dysuria, perineal pain, and urinary frequency.",
      "He appears ill and has a tender boggy prostate on gentle exam.",
      "Urinalysis shows pyuria and bacteriuria.",
      "Urine culture grows a lactose-fermenting gram-negative rod.",
      "He has no testicular swelling.",
      "This is the most common bacterial cause of acute prostatitis."
    ],
    description: "Acute bacterial prostatitis usually presents with fever, dysuria, pelvic pain, and a tender boggy prostate. E. coli is the most common pathogen, and prostatic massage is avoided during acute infection.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 230,
    answer: "Uterine Atony",
    clues:     [
      "A 31-year-old woman has heavy vaginal bleeding minutes after delivery.",
      "The placenta has already been delivered completely.",
      "Her uterus feels enlarged, soft, and boggy on exam.",
      "She received prolonged oxytocin augmentation during labor and delivered a large infant.",
      "Massage and uterotonic therapy improve the bleeding.",
      "This is the most common cause of postpartum hemorrhage."
    ],
    description: "Uterine atony is failure of the uterus to contract effectively after delivery, causing postpartum hemorrhage. Risk factors include uterine overdistension, prolonged labor, chorioamnionitis, and prior oxytocin exposure.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 231,
    answer: "Dissociative identity disorder",
    clues:     [
      "A 32-year-old woman is referred after repeatedly being unable to account for significant periods of time — sometimes days — with no memory of what occurred.",
      "Colleagues have described her acting in ways completely out of character and using a different name, which she has no recollection of.",
      "She reports frequently finding unfamiliar items in her home and receiving messages she has no memory of sending.",
      "She has a documented history of severe and prolonged childhood trauma.",
      "A structured dissociative interview identifies two additional distinct identity states with different names, ages, and behavioural repertoires.",
      "The presentation represents a disruption of identity characterised by two or more distinct personality states with recurrent amnesia, not attributable to a substance or neurological condition."
    ],
    description: "Dissociative identity disorder is characterised by the presence of two or more distinct personality states or identities, with recurrent amnesia between them, arising as a response to overwhelming childhood trauma. It is the most severe dissociative disorder. Treatment involves long-term trauma-focused psychotherapy aimed at stabilisation and integration.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 232,
    answer: "Primary sclerosing cholangitis (PSC)",
    clues:     [
      "A 36-year-old man presents with fatigue and pruritus.",
      "He has a known history of ulcerative colitis.",
      "Labs show elevated alkaline phosphatase and bilirubin.",
      "MRCP reveals multifocal strictures and dilatations of intrahepatic and extrahepatic bile ducts.",
      "Autoimmune markers may be present, but antimitochondrial antibodies are negative.",
      "This cholestatic disease increases the risk of cholangiocarcinoma."
    ],
    description: "PSC is a chronic cholestatic liver disease strongly associated with ulcerative colitis. Imaging classically shows a beaded biliary tree due to alternating strictures and dilations.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 233,
    answer: "Urothelial Carcinoma of the Bladder",
    clues:     [
      "A 67-year-old man presents with painless gross hematuria.",
      "He has a long smoking history.",
      "There is no dysuria or flank pain.",
      "Cystoscopy identifies a papillary bladder mass.",
      "Biopsy confirms malignant urothelial cells.",
      "This is the most common bladder cancer in developed countries."
    ],
    description: "Urothelial carcinoma usually presents with painless hematuria and is strongly associated with smoking, aromatic amine exposure, and cyclophosphamide. It can range from superficial papillary tumors to invasive disease.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 234,
    answer: "Acute asthma exacerbation",
    clues:     [
      "A 17-year-old girl presents with sudden shortness of breath and chest tightness after exposure to a cat.",
      "She has a history of recurrent wheezing that improves with an inhaler.",
      "Exam shows diffuse expiratory wheezing and prolonged expiration.",
      "She is using accessory muscles but can still speak in short phrases.",
      "Peak expiratory flow is markedly reduced from her personal best.",
      "The episode reflects reversible lower airway narrowing triggered by bronchial hyperresponsiveness."
    ],
    description: "Acute asthma exacerbation is worsening reversible airway obstruction caused by bronchial hyperresponsiveness and inflammation. Wheezing, chest tightness, reduced peak flow, and trigger exposure support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 235,
    answer: "Renal Cell Carcinoma",
    clues:     [
      "A 64-year-old man presents with intermittent gross hematuria and flank pain.",
      "He has lost weight and has a history of smoking.",
      "Abdominal CT shows a solid enhancing renal cortical mass.",
      "Labs reveal polycythemia.",
      "The tumor can extend into the renal vein.",
      "This kidney malignancy often arises from the proximal tubular epithelium."
    ],
    description: "Renal cell carcinoma classically presents with hematuria, flank pain, and a mass, though the full triad is uncommon. It is associated with smoking, obesity, hypertension, and paraneoplastic syndromes such as polycythemia.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 236,
    answer: "Kidney Stones (Nephrolithiasis)",
    clues:     [
      "A 37-year-old man presents with sudden severe right flank pain radiating to the groin.",
      "He cannot sit still and is nauseated.",
      "Urinalysis shows microscopic hematuria.",
      "Noncontrast CT shows a 4-mm ureteral stone near the ureterovesical junction.",
      "There is mild hydronephrosis.",
      "This syndrome is one of the most common causes of colicky flank pain."
    ],
    description: "Nephrolithiasis causes acute colicky flank pain, hematuria, and sometimes hydronephrosis. Management depends on stone size, location, symptoms, and whether obstruction or infection is present.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 237,
    answer: "Acne vulgaris",
    clues:     [
      "A 16-year-old boy presents with recurrent bumps on the face, chest, and upper back.",
      "The lesions include open and closed comedones.",
      "Some papules are inflamed and a few pustules are present.",
      "Symptoms worsen during periods of stress and heavy sweating.",
      "There are no burrows, honey-colored crusts, or sharply demarcated plaques.",
      "The condition involves follicular plugging, sebum production, Cutibacterium acnes, and inflammation."
    ],
    description: "Acne vulgaris is a common inflammatory disorder of pilosebaceous units. Comedones, inflammatory papules, pustules, and distribution on the face, chest, or back are typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 238,
    answer: "Cystic Fibrosis",
    clues:     [
      "A 3-year-old boy has recurrent sinopulmonary infections, greasy stools, and poor weight gain.",
      "Parents say his skin tastes salty.",
      "Exam reveals nasal polyps and digital clubbing later in childhood.",
      "Sweat chloride testing is elevated.",
      "Genetic testing identifies a CFTR mutation.",
      "This disorder causes thick secretions affecting the lungs, pancreas, and reproductive tract."
    ],
    description: "Cystic fibrosis is an autosomal recessive CFTR disorder causing chronic lung disease, pancreatic insufficiency, malabsorption, and infertility in most males. Newborn screening and sweat chloride testing aid diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 239,
    answer: "Necrotizing enterocolitis",
    clues:     [
      "A premature infant develops abdominal distension and feeding intolerance on day 10 of life.",
      "He becomes lethargic and has bloody stools.",
      "Exam shows a tense tender abdomen.",
      "Abdominal radiograph reveals pneumatosis intestinalis.",
      "Broad-spectrum antibiotics and bowel rest are started urgently.",
      "This disease primarily affects premature infants after enteral feeding is initiated."
    ],
    description: "Necrotizing enterocolitis is an inflammatory bowel necrosis of premature infants characterized by abdominal distension, feeding intolerance, bloody stools, and pneumatosis intestinalis. It is a neonatal emergency.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 240,
    answer: "Pertussis",
    clues:     [
      "A 3-month-old infant has repeated coughing spells after a week of mild runny nose.",
      "The episodes come in clusters and are followed by vomiting.",
      "The child is incompletely vaccinated.",
      "Between episodes, lung examination is relatively normal.",
      "Nasopharyngeal PCR supports the suspected toxin-mediated respiratory infection.",
      "The illness is caused by a toxin-producing organism that impairs ciliary clearance in the respiratory tract."
    ],
    description: "Pertussis is a respiratory infection caused by Bordetella pertussis. Paroxysmal coughing, post-tussive vomiting, incomplete vaccination, and a relatively normal exam between spells are classic.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 241,
    answer: "Hemophilia B (Christmas disease)",
    clues:     [
      "A 6-year-old boy develops recurrent hemarthroses after minor trauma.",
      "His maternal uncle had a similar bleeding disorder.",
      "PT is normal, but aPTT is prolonged.",
      "Mixing study corrects the abnormality.",
      "Factor assay shows low factor IX activity.",
      "This is an X-linked deficiency of a coagulation factor in the intrinsic pathway."
    ],
    description: "Hemophilia B is an X-linked deficiency of factor IX that causes deep tissue bleeding, hemarthroses, and prolonged aPTT with normal PT. Treatment is factor IX replacement.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 242,
    answer: "Dermatomyositis",
    clues:     [
      "A 49-year-old woman develops progressive difficulty climbing stairs and lifting objects overhead.",
      "She also has a violaceous rash around the eyelids and scaly papules over the knuckles.",
      "Muscle enzymes are elevated.",
      "Electromyography suggests an inflammatory myopathy.",
      "Biopsy shows perifascicular atrophy with perimysial inflammation.",
      "This condition can be associated with underlying malignancy in adults."
    ],
    description: "Dermatomyositis is an inflammatory myopathy characterized by proximal muscle weakness and distinctive skin findings such as heliotrope rash and Gottron papules. Adults should be evaluated for associated malignancy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 243,
    answer: "Hepatitis A virus infection",
    clues:     [
      "A 26-year-old man presents with fatigue, nausea, and right upper quadrant discomfort.",
      "He notices dark urine and yellowing of the eyes.",
      "Symptoms began three weeks after eating raw shellfish while traveling.",
      "Exam shows mild hepatomegaly and scleral icterus.",
      "Labs reveal markedly elevated aminotransferases with a hepatocellular pattern.",
      "Serology shows IgM antibody to a fecal-orally transmitted picornavirus."
    ],
    description: "Hepatitis A virus infection is an acute fecal-oral viral liver infection associated with contaminated food, water, or shellfish exposure. It causes fatigue, nausea, jaundice, dark urine, and hepatocellular aminotransferase elevation, and IgM serology supports recent infection.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 244,
    answer: "Melanocytic Nevus",
    clues:     [
      "A 28-year-old woman asks about a stable symmetric brown mole on her shoulder.",
      "It has been unchanged for years and has a uniform tan-brown color.",
      "Borders are smooth and regular.",
      "There is no bleeding, ulceration, or rapid growth.",
      "Excisional biopsy, if done, would show nests of benign melanocytes.",
      "This lesion is a common benign proliferation of melanocytes."
    ],
    description: "Melanocytic nevi are benign melanocyte proliferations that are usually symmetric, uniformly pigmented, and stable over time. Change in asymmetry, color, border, size, or symptoms raises concern for melanoma.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 245,
    answer: "Mitral Valve Prolapse (MVP)",
    clues:     [
      "A 28-year-old woman reports intermittent palpitations and atypical chest discomfort.",
      "A midsystolic click is heard followed by a late systolic murmur at the apex.",
      "Standing makes the click occur earlier.",
      "Echocardiography shows superior displacement of a redundant mitral leaflet into the left atrium during systole.",
      "She has a slender body habitus and joint hypermobility.",
      "This common valvular finding is often benign but can be associated with regurgitation."
    ],
    description: "Mitral valve prolapse is systolic billowing of one or both mitral leaflets into the left atrium. It commonly causes a midsystolic click and late systolic murmur and is often associated with myxomatous degeneration.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 246,
    answer: "Bacterial vaginosis",
    clues:     [
      "A 26-year-old woman reports thin gray vaginal discharge with an unpleasant odor.",
      "She has minimal itching and no pelvic pain.",
      "Symptoms are more noticeable after intercourse.",
      "Vaginal pH is above 4.5.",
      "Wet mount shows epithelial cells coated with bacteria.",
      "A whiff test releases a fishy amine odor after potassium hydroxide is added."
    ],
    description: "Bacterial vaginosis is caused by disruption of normal vaginal flora with overgrowth of anaerobic bacteria. Thin gray discharge, elevated pH, clue cells, and a fishy odor are typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 247,
    answer: "Post-MI Papillary Muscle Rupture",
    clues:     [
      "A 69-year-old man develops sudden severe shortness of breath 3 days after an inferior myocardial infarction.",
      "He is hypotensive with pulmonary edema.",
      "A new loud holosystolic murmur is heard best at the apex.",
      "Echocardiography shows flail mitral leaflet with acute severe regurgitation.",
      "He deteriorates rapidly into cardiogenic shock.",
      "The posteromedial papillary muscle is particularly vulnerable because of single-vessel blood supply."
    ],
    description: "Papillary muscle rupture is a mechanical complication of MI that causes acute severe mitral regurgitation, flash pulmonary edema, and shock. It typically occurs several days after infarction and requires urgent surgical management.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 248,
    answer: "Menopause",
    clues:     [
      "A 51-year-old woman reports 12 months without a menstrual period.",
      "She has hot flashes, night sweats, sleep disruption, and vaginal dryness.",
      "Pregnancy test is negative.",
      "FSH is elevated and estradiol is low.",
      "She asks whether the change is permanent.",
      "This normal physiologic transition is defined retrospectively after 12 months of amenorrhea."
    ],
    description: "Menopause reflects depletion of ovarian follicles leading to cessation of menses and reduced estrogen production. Vasomotor symptoms, urogenital symptoms, and long-term bone loss are common consequences.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 249,
    answer: "Stable angina",
    clues:     [
      "A 62-year-old man has predictable chest pressure when walking uphill.",
      "The discomfort resolves within minutes of rest.",
      "He has diabetes, hypertension, and hyperlipidemia.",
      "Resting ECG is normal.",
      "Exercise stress testing reproduces symptoms with horizontal ST depression.",
      "The pattern reflects fixed coronary narrowing that limits blood flow during exertion."
    ],
    description: "Stable angina is predictable exertional chest discomfort from myocardial ischemia due to fixed coronary artery stenosis. Symptoms improve with rest or nitroglycerin, and stress testing may show inducible ischemia.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 250,
    answer: "Roseola (HHV-6)",
    clues:     [
      "A 14-month-old child has 3 days of high fever with mild irritability.",
      "When the fever resolves, a pink blanching rash appears on the trunk and spreads outward.",
      "The child now looks well.",
      "Parents were worried about a febrile seizure during the fever.",
      "Exam shows no Koplik spots or conjunctivitis.",
      "This illness is classically caused by HHV-6 infection in infants and toddlers."
    ],
    description: "Roseola infantum causes several days of high fever followed by a trunk-predominant rash as the fever resolves. It is commonly caused by HHV-6 and may be associated with febrile seizures.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 251,
    answer: "Phyllodes Tumor",
    clues:     [
      "A 45-year-old woman notices a rapidly enlarging painless breast mass.",
      "The lesion is large, mobile, and well circumscribed.",
      "Core biopsy shows leaf-like stromal fronds lined by benign epithelium.",
      "Axillary nodes are not enlarged.",
      "The stromal component determines malignant potential.",
      "This fibroepithelial breast tumor can resemble a giant fibroadenoma."
    ],
    description: "Phyllodes tumors are fibroepithelial breast tumors with characteristic leaf-like architecture. Most are benign, but some recur locally or behave malignantly depending on stromal features.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 252,
    answer: "Pemphigus vulgaris",
    clues:     [
      "A 55-year-old woman presents with painful oral sores that have been present for four months, preventing her from eating comfortably.",
      "The oral lesions preceded any skin involvement.",
      "Examination reveals multiple irregularly shaped shallow erosions on the buccal mucosa, palate, and gingiva; intact blisters are rare.",
      "Pressing a finger on clinically normal-appearing mucosa adjacent to a lesion produces a new erosion.",
      "Direct immunofluorescence of perilesional mucosa shows intercellular IgG deposition in a chicken-wire pattern throughout the epithelium.",
      "Serology is positive for anti-desmoglein 3 antibodies."
    ],
    description: "Pemphigus vulgaris is a potentially life-threatening autoimmune blistering disease caused by IgG autoantibodies targeting desmogleins 1 and 3, leading to intraepithelial acantholysis. Oral involvement often precedes skin lesions and may be the sole site for months. Treatment requires systemic corticosteroids and steroid-sparing immunosuppressants.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 253,
    answer: "Acute pancreatitis",
    clues:     [
      "A 48-year-old man presents with severe epigastric pain radiating to the back after a weekend of heavy drinking.",
      "He is nauseated and vomiting.",
      "The pain improves slightly when he leans forward.",
      "Lipase is markedly elevated.",
      "CT imaging shows pancreatic inflammation without necrosis.",
      "This condition is most commonly caused by gallstones or alcohol use."
    ],
    description: "Acute pancreatitis causes sudden severe epigastric pain, often radiating to the back, with elevated pancreatic enzymes. Management is primarily supportive with fluids, analgesia, and treatment of the underlying cause.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 254,
    answer: "Gestational Hypertension",
    clues:     [
      "A 29-year-old primigravida at 33 weeks is noted to have new blood pressure readings around 148-94 mmHg.",
      "She has no headache, vision changes, or right upper quadrant pain.",
      "Urinalysis shows no proteinuria.",
      "Platelets, creatinine, and liver enzymes are normal.",
      "Fetal testing is reassuring.",
      "This diagnosis is made when hypertension begins after 20 weeks of gestation without severe features or proteinuria."
    ],
    description: "Gestational hypertension is new-onset hypertension after 20 weeks of pregnancy without proteinuria or end-organ dysfunction. It requires close follow-up because some patients progress to preeclampsia.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 255,
    answer: "Schizoaffective disorder",
    clues:     [
      "A 28-year-old woman has a five-year history of psychotic episodes and periods of severe depressed mood requiring hospitalisation.",
      "Review of her records shows that during two episodes she had prominent auditory hallucinations and persecutory delusions in the absence of any mood disturbance.",
      "During other periods, her psychotic symptoms co-occurred with a full depressive episode featuring suicidality.",
      "Her psychotic symptoms have been continuously present for over two weeks on at least two occasions without any concurrent mood episode.",
      "Antipsychotic monotherapy has never achieved full remission; she responds better to a combination of antipsychotic and antidepressant treatment.",
      "The longitudinal pattern of concurrent and independent mood and psychotic symptoms, with psychosis persisting beyond mood episodes, distinguishes her presentation from a primary mood disorder with psychotic features."
    ],
    description: "Schizoaffective disorder is characterised by an uninterrupted period of psychosis concurrent with a mood episode, combined with at least two weeks of delusions or hallucinations in the absence of prominent mood symptoms. It sits on a continuum between schizophrenia and mood disorders. Management requires both antipsychotic and mood-stabilising or antidepressant pharmacotherapy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 256,
    answer: "Loa loa (African Eye Worm) Infection",
    clues:     [
      "A 37-year-old missionary returns from West Africa with intermittent transient itchy swellings on the arms.",
      "He once saw a thin worm moving across the conjunctiva of one eye.",
      "Peripheral eosinophilia is present.",
      "Daytime blood smear reveals microfilariae.",
      "He recalls frequent bites from deerflies while abroad.",
      "This filarial infection is transmitted by Chrysops flies and can cause Calabar swellings."
    ],
    description: "Loa loa causes migratory angioedematous swellings and passage of adult worms across the conjunctiva. Diagnosis is supported by eosinophilia and daytime microfilaremia in exposed travelers.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 257,
    answer: "Conversion Disorder",
    clues:     [
      "A 24-year-old woman develops sudden inability to move her legs after witnessing a traumatic event.",
      "Neurologic exam findings are inconsistent across repeated testing.",
      "MRI of the brain and spine is normal.",
      "She does not appear intentionally deceptive.",
      "There is significant distress and functional impairment.",
      "This condition involves neurologic-type symptoms incompatible with recognized neurologic disease."
    ],
    description: "Conversion disorder, or functional neurologic symptom disorder, presents with motor or sensory symptoms that are inconsistent with known neurologic disease. Symptoms are not intentionally produced.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 258,
    answer: "Hypoglycemia",
    clues:     [
      "A 63-year-old man with diabetes is found confused and sweaty before lunch.",
      "He took his usual morning insulin but skipped breakfast.",
      "He is tremulous, tachycardic, and anxious.",
      "Point-of-care glucose is 42 mg/dL.",
      "Symptoms improve rapidly after oral glucose.",
      "The neuroglycopenic and adrenergic symptoms are caused by low circulating glucose."
    ],
    description: "Hypoglycemia causes adrenergic symptoms such as sweating, tremor, and palpitations, along with neuroglycopenic confusion or seizure when severe. It is commonly triggered by insulin or sulfonylureas, missed meals, or increased exertion.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 259,
    answer: "Thyroid papillary carcinoma",
    clues:     [
      "A 36-year-old woman is found to have a painless thyroid nodule.",
      "She had childhood neck irradiation for acne.",
      "Ultrasound shows a solid irregular lesion with microcalcifications.",
      "Fine-needle aspiration reveals cells with empty-appearing nuclei and nuclear grooves.",
      "Psammoma bodies are present on pathology.",
      "This is the most common thyroid cancer and usually spreads to cervical lymph nodes."
    ],
    description: "Papillary thyroid carcinoma is the most common thyroid malignancy and is associated with prior radiation exposure. Classic histology includes Orphan Annie eye nuclei, grooves, and psammoma bodies.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 260,
    answer: "Fibromyalgia",
    clues:     [
      "A 42-year-old woman reports widespread musculoskeletal pain for more than a year.",
      "She also has fatigue, poor sleep, and difficulty concentrating.",
      "Exam shows diffuse tenderness without synovitis or muscle weakness.",
      "ESR, CRP, CK, and thyroid studies are normal.",
      "She feels unrefreshed even after sleeping long hours.",
      "This pain-processing disorder is often managed with exercise, sleep optimization, and selected neuromodulating medications."
    ],
    description: "Fibromyalgia is characterized by chronic widespread pain, fatigue, nonrestorative sleep, and cognitive complaints without inflammatory or structural abnormalities. Treatment emphasizes exercise, behavioral strategies, and symptom-directed medications.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 261,
    answer: "Allergic contact dermatitis",
    clues:     [
      "A 41-year-old woman develops an intensely itchy rash on both earlobes.",
      "The rash began two days after wearing new earrings.",
      "Exam shows erythema, edema, and tiny vesicles limited to areas touching the metal.",
      "She had a similar reaction to a belt buckle years earlier.",
      "Patch testing is positive to nickel.",
      "The eruption is a delayed T-cell-mediated reaction to an external allergen."
    ],
    description: "Allergic contact dermatitis is a type IV hypersensitivity reaction that appears where an allergen touches the skin. Nickel, fragrances, preservatives, and plants are common triggers.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 262,
    answer: "Carcinoid Syndrome",
    clues:     [
      "A 59-year-old woman has episodic facial flushing, wheezing, and watery diarrhea.",
      "Symptoms are worse after alcohol and emotional stress.",
      "A systolic murmur is heard along the left lower sternal border.",
      "Urinary 5-HIAA is elevated.",
      "Liver imaging shows metastatic neuroendocrine lesions.",
      "Systemic symptoms occur when vasoactive amines bypass hepatic metabolism."
    ],
    description: "Carcinoid syndrome results from serotonin and other vasoactive mediators released by metastatic neuroendocrine tumors, typically after spread to the liver. It causes flushing, diarrhea, bronchospasm, and right-sided valvular fibrosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 263,
    answer: "Insulinoma",
    clues:     [
      "A 44-year-old woman has recurrent episodes of sweating, tremor, and confusion that improve quickly after eating.",
      "Several episodes occurred during fasting and one caused syncope.",
      "During a supervised fast, plasma glucose is low while insulin and C-peptide remain inappropriately high.",
      "Sulfonylurea screen is negative.",
      "Imaging localizes a pancreatic neuroendocrine tumor.",
      "This tumor causes endogenous hyperinsulinemic hypoglycemia."
    ],
    description: "Insulinoma is a pancreatic beta-cell tumor that causes fasting hypoglycemia with inappropriately high insulin and C-peptide levels. Whipple triad is classically present.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 264,
    answer: "Kawasaki disease",
    clues:     [
      "A 4-year-old boy has fever for six days despite antipyretics.",
      "He has bilateral nonpurulent conjunctival injection and cracked red lips.",
      "Exam shows a strawberry tongue, swollen hands, and a polymorphous rash.",
      "A tender cervical lymph node is enlarged on one side.",
      "Echocardiography is ordered to assess the coronary arteries.",
      "The medium-vessel vasculitis is treated early to reduce coronary aneurysm risk."
    ],
    description: "Kawasaki disease is an acute childhood medium-vessel vasculitis with prolonged fever, mucocutaneous inflammation, extremity changes, rash, and cervical lymphadenopathy. The major concern is coronary artery aneurysm.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 265,
    answer: "Otitis Externa",
    clues:     [
      "A 23-year-old swimmer presents with ear pain and itching.",
      "Pulling on the pinna worsens the pain.",
      "The external auditory canal is erythematous and edematous with debris.",
      "The tympanic membrane is difficult to visualize but not obviously bulging.",
      "There is no URI preceding the symptoms.",
      "This infection of the ear canal is commonly associated with water exposure and trauma from cotton swabs."
    ],
    description: "Otitis externa is an infection or inflammation of the external auditory canal, often caused by moisture and minor trauma. Pseudomonas and Staphylococcus aureus are common pathogens.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 266,
    answer: "Asbestosis",
    clues:     [
      "A 68-year-old retired shipyard worker develops slowly progressive exertional dyspnea.",
      "Exam shows bibasilar crackles and clubbing.",
      "Chest imaging reveals diffuse interstitial fibrosis and pleural plaques.",
      "Pulmonary function tests show restriction with reduced diffusion capacity.",
      "He smoked for many years.",
      "This occupational exposure increases the risk of bronchogenic carcinoma and mesothelioma."
    ],
    description: "Asbestosis is a fibrosing interstitial lung disease caused by asbestos exposure. Pleural plaques are classic, and smoking markedly increases the risk of bronchogenic carcinoma in exposed individuals.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 267,
    answer: "Anal fissure",
    clues:     [
      "A 33-year-old woman has severe pain during bowel movements.",
      "She notices small streaks of bright red blood on toilet paper.",
      "Symptoms began after several days of hard stools.",
      "Exam shows a linear tear in the posterior midline of the anal canal.",
      "Sphincter spasm makes the examination painful.",
      "The lesion is a mucosal split caused by local trauma from passage of hard stool."
    ],
    description: "Anal fissure is a painful linear tear in the anal canal, often caused by hard stool. Severe defecation pain and small-volume bright red bleeding are typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 268,
    answer: "Mammary Duct Ectasia",
    clues:     [
      "A 52-year-old multiparous woman presents with sticky green-brown nipple discharge.",
      "She has mild periareolar tenderness and nipple retraction.",
      "Imaging shows dilated subareolar ducts without a suspicious mass.",
      "Biopsy reveals dilated ducts with plasma cell-rich inflammation.",
      "She is worried about cancer, but no malignant cells are seen.",
      "This benign inflammatory condition usually affects perimenopausal women."
    ],
    description: "Mammary duct ectasia is a benign breast condition caused by dilation of subareolar ducts with chronic inflammation. It can cause nipple discharge, periareolar pain, and nipple inversion and may mimic malignancy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 269,
    answer: "Gigantism",
    clues:     [
      "A 12-year-old boy is referred for extreme linear growth crossing several height percentiles.",
      "He has large hands and feet and complains of headaches.",
      "Growth velocity has accelerated before epiphyseal closure.",
      "IGF-1 is elevated, and GH does not suppress with oral glucose.",
      "MRI shows a pituitary macroadenoma.",
      "Excess growth hormone before closure of growth plates causes this condition."
    ],
    description: "Gigantism results from growth hormone excess in childhood before epiphyseal closure. It causes excessive linear growth and often shares other features with acromegaly.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 270,
    answer: "Vulvovaginal candidiasis",
    clues:     [
      "A 32-year-old woman has intense vulvar itching and burning.",
      "She recently completed antibiotics for sinusitis.",
      "Exam shows vulvar erythema and thick white discharge.",
      "Vaginal pH is normal.",
      "Microscopy after potassium hydroxide preparation shows budding yeast with pseudohyphae.",
      "The infection is caused by overgrowth of a yeast that commonly colonizes the vagina."
    ],
    description: "Vulvovaginal candidiasis causes pruritus, vulvar erythema, burning, and thick white discharge with normal vaginal pH. Microscopy can show budding yeast and pseudohyphae.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 271,
    answer: "Toxic Megacolon",
    clues:     [
      "A 29-year-old man with ulcerative colitis presents with severe abdominal pain, bloody diarrhea, and fever.",
      "He is tachycardic and appears toxic.",
      "His abdomen is distended and diffusely tender.",
      "Abdominal radiograph shows marked colonic dilation greater than 6 cm.",
      "Inflammatory markers are elevated.",
      "This is a life-threatening complication of severe colitis with risk of perforation."
    ],
    description: "Toxic megacolon is acute nonobstructive colonic dilation associated with systemic toxicity, often complicating inflammatory bowel disease or infectious colitis. Management includes bowel rest, resuscitation, and urgent surgical evaluation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 272,
    answer: "Human Papillomavirus (HPV) Laryngeal Papillomatosis",
    clues:     [
      "A 5-year-old child has progressive hoarseness and intermittent noisy breathing.",
      "There is no fever or acute upper respiratory infection.",
      "Laryngoscopy shows multiple papillary wart-like growths on the vocal cords.",
      "The child's mother had a history of genital warts during pregnancy.",
      "Biopsy confirms squamous papillomas.",
      "This recurrent respiratory papillomatosis is commonly associated with low-risk HPV types 6 and 11."
    ],
    description: "Laryngeal papillomatosis is caused by HPV infection of the respiratory epithelium and leads to recurrent papillomas causing hoarseness and airway symptoms. It may require repeated surgical management.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 273,
    answer: "Mitral regurgitation",
    clues:     [
      "A 69-year-old woman reports progressive fatigue and shortness of breath.",
      "A blowing holosystolic murmur is heard at the cardiac apex.",
      "The murmur radiates toward the left axilla.",
      "She has a displaced apical impulse and signs of left atrial enlargement.",
      "Echocardiography shows systolic backflow from the left ventricle into the left atrium.",
      "Chronic volume overload can eventually cause pulmonary congestion and atrial arrhythmias."
    ],
    description: "Mitral regurgitation is backward flow from the left ventricle into the left atrium during systole. A holosystolic apical murmur radiating to the axilla and echocardiographic backflow are key findings.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 274,
    answer: "Atrial Septal Defect (ASD)",
    clues:     [
      "A 14-year-old girl is evaluated for exercise intolerance and a heart murmur.",
      "Exam shows a systolic ejection murmur at the left upper sternal border with fixed wide splitting of S2.",
      "Echocardiography reveals a defect in the interatrial septum with left-to-right shunting.",
      "Right atrial and right ventricular enlargement are present.",
      "She has no cyanosis.",
      "This congenital lesion increases pulmonary blood flow and may present late if small."
    ],
    description: "ASD causes left-to-right shunting at the atrial level and often presents with fixed split S2 and increased flow murmur across the pulmonary valve. Large unrepaired defects can eventually lead to pulmonary hypertension and paradoxical emboli.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 275,
    answer: "Avoidant Personality Disorder",
    clues:     [
      "A 31-year-old man wants close relationships but avoids social situations because he fears criticism and rejection.",
      "He turns down promotions that would require interacting with new people.",
      "He describes himself as socially inept and inferior.",
      "There are no psychotic symptoms or cognitive deficits.",
      "He is distressed by his isolation rather than indifferent to it.",
      "This cluster C personality disorder is characterized by pervasive social inhibition and hypersensitivity to negative evaluation."
    ],
    description: "Avoidant personality disorder involves social inhibition, feelings of inadequacy, and hypersensitivity to criticism despite a desire for relationships. It differs from schizoid personality disorder, in which patients usually do not desire close relationships.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 276,
    answer: "Sialolithiasis",
    clues:     [
      "A 40-year-old man presents with recurrent painful swelling under his tongue, particularly at mealtimes.",
      "The swelling appears when he starts eating and resolves within an hour of finishing the meal.",
      "Examination between meals is unremarkable, but a firm, mildly tender lump is palpable in the floor of the mouth along the submandibular duct.",
      "Bimanual palpation of the left submandibular gland reveals a firm swelling.",
      "Plain occlusal radiograph of the floor of the mouth shows a radiopaque calcification along the course of the submandibular duct.",
      "Ultrasound confirms a calculus within the left submandibular duct causing proximal ductal dilatation."
    ],
    description: "Sialolithiasis is the most common disease of the salivary glands, with the submandibular gland and its duct affected in 80% of cases. Stones form by mineralisation of organic debris and cause obstructive sialadenitis. Small duct stones may be milked out or removed endoscopically; stones causing recurrent gland infection may necessitate gland removal.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 277,
    answer: "Dyslexia",
    clues:     [
      "An 8-year-old boy with normal intelligence struggles to decode words and read fluently.",
      "He has difficulty matching sounds to symbols and frequently guesses at unfamiliar words.",
      "Vision and hearing testing are normal.",
      "He performs well in conversation and nonreading tasks.",
      "The problem has caused academic underachievement despite appropriate instruction.",
      "This specific learning disorder primarily affects reading accuracy and fluency."
    ],
    description: "Dyslexia is a specific learning disorder involving difficulty with word recognition, decoding, and spelling despite normal intelligence and adequate educational opportunity. Early educational support is important.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 278,
    answer: "Hepatocellular carcinoma (HCC)",
    clues:     [
      "A 63-year-old man with cirrhosis presents with weight loss and worsening right upper quadrant pain.",
      "His alpha-fetoprotein is elevated.",
      "Ultrasound surveillance identifies a liver mass, and triple-phase CT shows arterial enhancement with venous washout.",
      "He has chronic hepatitis C.",
      "There is no primary tumor identified elsewhere.",
      "This is the most common primary malignant tumor of the liver."
    ],
    description: "Hepatocellular carcinoma usually arises in cirrhotic livers and is linked to viral hepatitis, alcohol-related liver disease, and metabolic liver disease. Surveillance in high-risk patients is important for early detection.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 279,
    answer: "Agoraphobia",
    clues:     [
      "A 36-year-old woman has not left her house unaccompanied for over a year following a fainting episode on the underground.",
      "She fears situations where escape would be difficult or help unavailable if she became acutely unwell.",
      "The feared situations cluster consistently: public transport, open spaces, shops, crowds, and being outside her home alone.",
      "When forced into these situations, she experiences intense anxiety and a strong urge to escape.",
      "She does not have a primary fear of social evaluation — she is comfortable in social gatherings when held at her own home.",
      "Her fear and avoidance span two or more of the defined agoraphobic situation clusters, have been present for more than six months, and cause significant restriction of daily life."
    ],
    description: "Agoraphobia is marked fear and avoidance of at least two of five defined situational clusters — public transport, open spaces, enclosed places, crowds, or being outside alone — driven by fear of being unable to escape or get help if incapacitated. It may occur with or without panic disorder. CBT with graduated exposure is first-line treatment.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 280,
    answer: "Turner Syndrome",
    clues:     [
      "A 15-year-old girl is evaluated for short stature and absent menses.",
      "Exam shows a broad chest, widely spaced nipples, and webbed neck.",
      "She has no breast development, and gonadotropins are elevated.",
      "Echocardiography reveals coarctation of the aorta.",
      "Karyotype confirms monosomy X.",
      "This condition causes streak ovaries and primary ovarian insufficiency."
    ],
    description: "Turner syndrome is caused by complete or partial monosomy X and presents with short stature, gonadal dysgenesis, and characteristic physical findings. Associated anomalies include bicuspid aortic valve, coarctation, and horseshoe kidney.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 281,
    answer: "Broken-heart syndrome (takotsubo cardiomyopathy)",
    clues:     [
      "A 63-year-old woman develops crushing chest pain shortly after learning of a family tragedy.",
      "ECG shows ST-segment changes, and troponin is mildly elevated.",
      "Coronary angiography reveals no obstructive coronary disease.",
      "Echocardiography shows apical ballooning of the left ventricle.",
      "Symptoms improve over days to weeks.",
      "This transient cardiomyopathy is triggered by catecholamine surge after intense stress."
    ],
    description: "Takotsubo cardiomyopathy mimics acute coronary syndrome but features transient left ventricular dysfunction without obstructive coronary disease. It is often precipitated by emotional or physical stress.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 282,
    answer: "Bacterial meningitis",
    clues:     [
      "A 20-year-old college student presents with fever, severe headache, and vomiting.",
      "He is confused and complains that bright light worsens the pain.",
      "Exam shows neck stiffness and a nonblanching purpuric rash on the legs.",
      "Lumbar puncture shows elevated opening pressure and cloudy cerebrospinal fluid.",
      "Cerebrospinal fluid has neutrophilic pleocytosis, low glucose, and high protein.",
      "The syndrome reflects acute infection of the meninges requiring immediate antimicrobial therapy."
    ],
    description: "Bacterial meningitis is an acute infection of the meninges causing fever, headache, altered mental status, and neck stiffness. Cerebrospinal fluid typically shows neutrophils, low glucose, and high protein.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 283,
    answer: "Infantile Strawberry Hemangioma",
    clues:     [
      "A 4-month-old infant has a bright red raised lesion on the cheek that has enlarged rapidly over the last several weeks.",
      "It is soft and compressible without ulceration.",
      "The child is otherwise healthy.",
      "Parents are worried because it is growing quickly.",
      "The lesion is expected to involute gradually over years.",
      "This is a benign capillary proliferation of infancy."
    ],
    description: "Infantile hemangiomas are common benign vascular tumors that proliferate during infancy and usually involute over time. Treatment is reserved for lesions causing ulceration, functional compromise, or disfigurement.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 284,
    answer: "Esophageal Adenocarcinoma",
    clues:     [
      "A 61-year-old man presents with progressive dysphagia, first to solids and then to liquids.",
      "He has chronic reflux symptoms and central obesity.",
      "Endoscopy shows a distal esophageal mass arising in Barrett mucosa.",
      "Biopsy demonstrates gland-forming malignant cells.",
      "He has unintentionally lost 20 lb.",
      "This cancer is strongly associated with chronic GERD and Barrett esophagus."
    ],
    description: "Esophageal adenocarcinoma usually arises in the distal esophagus from Barrett metaplasia. Chronic reflux and obesity are major risk factors, and progressive dysphagia is a typical presentation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 285,
    answer: "Urticaria",
    clues:     [
      "A 30-year-old man develops sudden itchy raised lesions across the trunk and arms.",
      "Individual lesions appear and disappear within several hours.",
      "The plaques are edematous, pink, and blanch with pressure.",
      "He recently started an antibiotic for sinus symptoms.",
      "There is no skin peeling, bruising, mucosal erosion, or fixed scaling.",
      "The transient wheals result from superficial dermal edema driven by mast cell mediators."
    ],
    description: "Urticaria consists of transient pruritic wheals caused by superficial dermal edema. It is often triggered by foods, medications, infections, or physical stimuli.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 286,
    answer: "Mycoplasma pneumoniae",
    clues:     [
      "A 19-year-old college student presents with persistent dry cough and low-grade fever.",
      "Chest x-ray shows diffuse patchy infiltrates that seem worse than the exam findings.",
      "He also has mild bullous myringitis.",
      "Cold agglutinins are positive.",
      "Sputum Gram stain does not reveal typical organisms.",
      "This atypical pneumonia is caused by an organism lacking a cell wall."
    ],
    description: "Mycoplasma pneumoniae causes atypical walking pneumonia, often in younger patients living in close quarters. Because it lacks a cell wall, beta-lactam antibiotics are ineffective.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 287,
    answer: "Midgut Volvulus",
    clues:     [
      "A 2-week-old infant suddenly develops bilious vomiting and abdominal distension.",
      "He becomes lethargic and difficult to console.",
      "Abdominal radiographs are concerning for obstruction.",
      "Upper GI series shows abnormal position of the duodenojejunal junction with corkscrew appearance.",
      "The bowel is at risk of ischemia from twisting around the mesenteric vessels.",
      "This surgical emergency usually occurs in the setting of intestinal malrotation."
    ],
    description: "Midgut volvulus is twisting of the bowel around a narrow mesenteric base, typically due to malrotation. It presents with bilious emesis in neonates and requires urgent surgery to prevent bowel necrosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 288,
    answer: "Scarlet fever",
    clues:     [
      "A 9-year-old child presents with fever, sore throat, and headache.",
      "Exam shows tonsillar exudates and tender anterior cervical lymph nodes.",
      "A fine rough rash spreads from the neck to the trunk.",
      "The rash is accentuated in skin folds and feels like sandpaper.",
      "The tongue is red with prominent papillae after an initial white coating.",
      "The syndrome is caused by an erythrogenic toxin from group A streptococcal infection."
    ],
    description: "Scarlet fever is a toxin-mediated syndrome associated with group A streptococcal pharyngitis. Fever, sore throat, sandpaper rash, Pastia lines, and strawberry tongue are typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 289,
    answer: "Testicular Torsion",
    clues:     [
      "A 16-year-old boy presents with sudden severe unilateral scrotal pain and nausea.",
      "Exam shows a high-riding testis with horizontal lie.",
      "The cremasteric reflex is absent on the affected side.",
      "Color Doppler ultrasound shows reduced blood flow.",
      "There is no urethral discharge or fever.",
      "This is a urologic emergency caused by twisting of the spermatic cord."
    ],
    description: "Testicular torsion causes abrupt scrotal pain due to twisting of the spermatic cord and ischemia. Testicular salvage depends on rapid recognition and surgical detorsion.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 290,
    answer: "Extramammary Paget Disease",
    clues:     [
      "A 68-year-old woman has a chronic itchy erythematous plaque on the vulva.",
      "Topical antifungal treatment has repeatedly failed.",
      "The lesion is sharply demarcated and eczematous.",
      "Biopsy reveals large pale malignant cells within the epidermis.",
      "There is concern for associated adnexal or underlying malignancy.",
      "This is a rare intraepithelial adenocarcinoma of apocrine-rich skin."
    ],
    description: "Extramammary Paget disease presents as a chronic eczematous lesion of apocrine-rich anogenital or axillary skin. Diagnosis requires biopsy because it can mimic dermatitis or fungal infection.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 291,
    answer: "Small bowel obstruction",
    clues:     [
      "A 67-year-old man presents with crampy abdominal pain, vomiting, and bloating.",
      "He has not passed stool or gas since yesterday.",
      "He had an open abdominal surgery years earlier.",
      "Exam shows abdominal distension with high-pitched bowel sounds.",
      "CT shows dilated proximal loops with a transition point and collapsed distal bowel.",
      "Adhesions are the most common cause in patients with prior laparotomy."
    ],
    description: "Small bowel obstruction causes crampy abdominal pain, vomiting, distension, and obstipation. Prior abdominal surgery raises concern for adhesive obstruction, and CT can show a transition point.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 292,
    answer: "Biliary colic / Cholelithiasis",
    clues:     [
      "A 41-year-old woman has episodic right upper quadrant pain after fatty meals.",
      "Each episode lasts about an hour and then resolves completely.",
      "She has no fever or jaundice.",
      "Ultrasound shows gallstones without gallbladder wall thickening.",
      "Liver enzymes and bilirubin are normal.",
      "Transient obstruction of the cystic duct explains the pain."
    ],
    description: "Biliary colic occurs when gallstones transiently obstruct the cystic duct, causing episodic postprandial right upper quadrant pain. It differs from acute cholecystitis by the absence of persistent inflammation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 293,
    answer: "Pilocytic Astrocytoma",
    clues:     [
      "A 10-year-old child develops headaches, morning vomiting, and gait instability.",
      "MRI reveals a cystic cerebellar mass with an enhancing mural nodule.",
      "Pathology shows bipolar cells with Rosenthal fibers.",
      "The tumor is well circumscribed rather than diffusely infiltrative.",
      "Complete resection is often curative.",
      "This is a low-grade astrocytoma commonly seen in children."
    ],
    description: "Pilocytic astrocytoma is a WHO grade 1 astrocytoma often arising in the cerebellum of children. It is typically well circumscribed and associated with excellent prognosis after resection.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 294,
    answer: "Trichomoniasis",
    clues:     [
      "A 24-year-old woman presents with vaginal discharge and vulvar irritation.",
      "The discharge is yellow-green and frothy.",
      "She has discomfort with urination and pain during intercourse.",
      "Exam shows punctate cervical hemorrhages.",
      "Wet mount shows motile flagellated organisms.",
      "The sexually transmitted infection requires treatment of both the patient and sexual partners."
    ],
    description: "Trichomoniasis is a sexually transmitted infection caused by Trichomonas vaginalis. Frothy discharge, vulvar irritation, strawberry cervix, and motile organisms on wet mount are classic clues.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 295,
    answer: "Allergic Conjunctivitis",
    clues:     [
      "A 17-year-old girl develops bilateral itchy red eyes every spring.",
      "Symptoms are accompanied by sneezing and clear rhinorrhea.",
      "There is watery discharge but no purulence.",
      "Exam shows conjunctival injection and chemosis.",
      "Visual acuity is normal and there is no pain with eye movement.",
      "This condition is driven by type I hypersensitivity."
    ],
    description: "Allergic conjunctivitis presents with bilateral itchy watery eyes, conjunctival redness, and seasonal or environmental triggers. Treatment includes allergen avoidance, antihistamines, and mast cell stabilizers.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 296,
    answer: "Syringomyelia",
    clues:     [
      "A 29-year-old woman develops progressive numbness over both shoulders and hands.",
      "She burns herself while cooking but does not feel it.",
      "Strength and reflexes later decline in the hands.",
      "Vibration and proprioception are preserved.",
      "MRI reveals a fluid-filled cavity within the cervical spinal cord.",
      "This lesion classically causes a cape-like loss of pain and temperature sensation."
    ],
    description: "Syringomyelia is a cystic cavity within the spinal cord that often damages crossing spinothalamic fibers first. Patients develop cape-like loss of pain and temperature, followed by hand weakness and atrophy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 297,
    answer: "Hypertrophic cardiomyopathy",
    clues:     [
      "A 19-year-old athlete has exertional lightheadedness and near-syncope.",
      "His father died suddenly at age 34.",
      "Exam reveals a harsh systolic murmur along the left sternal border.",
      "The murmur becomes louder with standing and softer with squatting.",
      "Echocardiography shows asymmetric septal thickening with dynamic outflow obstruction.",
      "The inherited condition increases risk of sudden death during intense exertion."
    ],
    description: "Hypertrophic cardiomyopathy is commonly caused by sarcomere mutations leading to asymmetric septal hypertrophy and dynamic outflow obstruction. Exertional syncope, family history of sudden death, and murmur changes with preload are classic.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 298,
    answer: "Bernard-Soulier Syndrome",
    clues:     [
      "A 12-year-old boy has lifelong easy bruising, epistaxis, and prolonged bleeding after dental work.",
      "Platelet count is mildly decreased and the platelets are unusually large on smear.",
      "Bleeding time is prolonged.",
      "Ristocetin testing is abnormal and does not correct with normal plasma.",
      "Coagulation studies are otherwise normal.",
      "This inherited disorder results from deficiency of platelet GPIb."
    ],
    description: "Bernard-Soulier syndrome is a platelet adhesion defect caused by GPIb deficiency. It presents with mucocutaneous bleeding, thrombocytopenia, and giant platelets.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 299,
    answer: "Mycosis fungoides (Cutaneous T-Cell Lymphoma)",
    clues:     [
      "A 58-year-old man has had slowly enlarging itchy scaly patches on the trunk for years.",
      "Topical steroids gave only partial relief.",
      "Some lesions have progressed from patches to plaques.",
      "Skin biopsy shows epidermotropic atypical T cells with cerebriform nuclei.",
      "Pautrier microabscesses are noted on pathology.",
      "This is the most common cutaneous T-cell lymphoma."
    ],
    description: "Mycosis fungoides is a cutaneous T-cell lymphoma that typically progresses from patches to plaques and tumors over time. It often resembles eczema or psoriasis early in the course.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 300,
    answer: "Leukoplakia",
    clues:     [
      "A 55-year-old man who smokes a pipe is referred for assessment of a white patch on the floor of his mouth noticed incidentally.",
      "The patch has been present for at least six months and is asymptomatic.",
      "Examination reveals a 2 cm homogeneous white plaque on the right floor of mouth that cannot be wiped off.",
      "There are no red components and no induration on palpation.",
      "All other potential causes — including candida, trauma, and lichenoid reaction — have been clinically excluded.",
      "Biopsy shows epithelial hyperkeratosis with mild dysplasia; the subepithelial tissue shows a chronic inflammatory infiltrate."
    ],
    description: "Leukoplakia is defined clinically as a white patch that cannot be characterised as any other definable lesion and carries a risk of malignant transformation. Risk is higher with dysplasia on biopsy, non-homogeneous surface, floor-of-mouth or ventral tongue location, and tobacco use. Management depends on degree of dysplasia; high-grade lesions require excision.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 301,
    answer: "Familial Chylomicronemia Syndrome (Type 1 dyslipidemia)",
    clues:     [
      "A 9-year-old boy presents with recurrent episodes of pancreatitis.",
      "He has eruptive xanthomas over the extensor surfaces.",
      "Fasting serum appears milky, and triglycerides are extremely elevated.",
      "There is no obesity or insulin resistance.",
      "Genetic testing shows absent lipoprotein lipase activity.",
      "This disorder causes marked chylomicron accumulation from childhood."
    ],
    description: "Familial chylomicronemia syndrome is usually caused by lipoprotein lipase or ApoC-II deficiency. It leads to severe hypertriglyceridemia, eruptive xanthomas, lipemia retinalis, and pancreatitis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 302,
    answer: "Interventricular Septal Rupture",
    clues:     [
      "A 70-year-old man worsens suddenly 4 days after an anterior myocardial infarction.",
      "He becomes hypotensive and dyspneic.",
      "A new harsh holosystolic murmur is heard at the lower left sternal border.",
      "A palpable thrill is present.",
      "Echocardiography demonstrates a left-to-right shunt through the interventricular septum.",
      "This mechanical complication can rapidly cause cardiogenic shock."
    ],
    description: "Ventricular septal rupture is a catastrophic post-MI complication that usually occurs several days after infarction. It produces acute left-to-right shunting, a new harsh murmur, and hemodynamic collapse.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 303,
    answer: "Narcissistic personality disorder",
    clues:     [
      "A 40-year-old male executive is referred by an occupational physician following multiple complaints from staff about his management style.",
      "He describes himself as uniquely talented and believes ordinary workplace rules should not apply to him.",
      "He speaks at length about his achievements and becomes visibly angered when he perceives insufficient recognition from colleagues.",
      "He acknowledges no empathy for a staff member who recently disclosed a family bereavement and is puzzled that others found his response callous.",
      "He frequently exploits junior colleagues for personal advantage while maintaining he is simply 'playing the game better than they do'.",
      "A structured personality assessment confirms a pervasive pattern of grandiosity, need for admiration, and lack of empathy beginning in early adulthood and present across multiple contexts."
    ],
    description: "Narcissistic personality disorder is characterised by a pervasive pattern of grandiosity, need for admiration, and lack of empathy. Individuals often have a fragile underlying self-esteem that makes them highly sensitive to perceived criticism. Long-term psychotherapy is the primary treatment; there is no approved pharmacotherapy for the core features.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 304,
    answer: "Primary adrenal insufficiency (Addison's Disease)",
    clues:     [
      "A 39-year-old woman presents with fatigue, weight loss, and dizziness.",
      "She also reports salt craving and abdominal discomfort.",
      "Exam shows diffuse hyperpigmentation, especially in skin creases.",
      "Labs reveal hyponatremia, hyperkalemia, and eosinophilia.",
      "Morning cortisol is low and ACTH is elevated.",
      "This disorder reflects destruction of the adrenal cortex."
    ],
    description: "Primary adrenal insufficiency causes deficient cortisol and aldosterone production. Common findings include hypotension, hyperpigmentation, hyponatremia, hyperkalemia, and elevated ACTH.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 305,
    answer: "Stevens-Johnson Syndrome (SJS)",
    clues:     [
      "A 27-year-old woman develops fever and sore throat 1 week after starting a new anticonvulsant.",
      "She then develops painful dusky macules and blistering skin lesions.",
      "Oral mucosa and conjunctiva are extensively involved.",
      "Nikolsky sign is positive.",
      "Skin biopsy shows full-thickness epidermal necrosis.",
      "This severe mucocutaneous reaction is often medication triggered."
    ],
    description: "SJS is a severe immune-mediated mucocutaneous reaction usually triggered by medications or infection. It causes epidermal necrosis, blistering, and prominent mucosal involvement and requires immediate withdrawal of the offending agent.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 306,
    answer: "Acute pyelonephritis",
    clues:     [
      "A 24-year-old woman presents with fever, chills, and right flank pain.",
      "She has dysuria and urinary frequency for the past two days.",
      "Exam shows costovertebral angle tenderness on the right.",
      "Urinalysis is positive for leukocyte esterase, nitrites, and white blood cell casts.",
      "Urine culture grows Escherichia coli.",
      "The infection has ascended from the lower urinary tract to involve the renal parenchyma."
    ],
    description: "Acute pyelonephritis is infection of the kidney, usually from ascending gram-negative urinary pathogens. Fever, flank pain, urinary symptoms, costovertebral angle tenderness, and pyuria support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 307,
    answer: "Acute Promyelocytic Leukemia (APL)",
    clues:     [
      "A 34-year-old woman presents with fatigue, bruising, and gum bleeding.",
      "CBC shows pancytopenia with circulating abnormal promyelocytes.",
      "Coagulation studies suggest disseminated intravascular coagulation.",
      "Bone marrow shows promyelocytes with multiple Auer rods.",
      "Cytogenetics reveal t(15;17).",
      "This leukemia responds to all-trans retinoic acid."
    ],
    description: "APL is a subtype of AML caused by PML-RARA fusion. It is highly associated with DIC and is treated with ATRA and arsenic-based regimens.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 308,
    answer: "Crigler-Najjar syndrome type 1",
    clues:     [
      "A newborn develops profound unconjugated hyperbilirubinemia within days of birth.",
      "There is no evidence of hemolysis or biliary obstruction.",
      "Phototherapy offers only partial temporary benefit.",
      "Phenobarbital does not lower bilirubin.",
      "Neurologic symptoms raise concern for kernicterus.",
      "This condition reflects complete absence of UDP-glucuronosyltransferase activity."
    ],
    description: "Crigler-Najjar type 1 is a severe inherited unconjugated hyperbilirubinemia caused by complete UGT deficiency. It presents in infancy and carries high risk of kernicterus without aggressive management.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 309,
    answer: "Tinea corporis",
    clues:     [
      "A 12-year-old wrestler has an itchy circular rash on the forearm.",
      "The lesion has a scaly raised border and central clearing.",
      "Several teammates have similar skin findings.",
      "Potassium hydroxide preparation from the active edge shows branching septate hyphae.",
      "The scalp, nails, and groin are not involved.",
      "This superficial dermatophyte infection affects glabrous skin."
    ],
    description: "Tinea corporis is a dermatophyte infection of non-hair-bearing body skin. It classically forms annular scaly plaques with central clearing and a more active raised border.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 310,
    answer: "Anencephaly",
    clues:     [
      "Prenatal ultrasound reveals absence of a large portion of the cranial vault and cerebral hemispheres.",
      "Maternal serum alpha-fetoprotein is elevated.",
      "The infant is born without forebrain structures compatible with long-term survival.",
      "Polyhydramnios complicated the pregnancy.",
      "Folate supplementation had not been taken before conception.",
      "This neural tube defect results from failure of rostral neuropore closure."
    ],
    description: "Anencephaly is a fatal neural tube defect caused by failure of closure of the anterior neuropore. It is associated with elevated AFP and can be reduced by periconceptional folate supplementation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 311,
    answer: "Chronic Obstructive Pulmonary Disease (COPD)",
    clues:     [
      "A 65-year-old smoker presents with chronic cough, sputum production, and progressive dyspnea.",
      "He has a prolonged expiratory phase and decreased breath sounds.",
      "Pulmonary function tests show a reduced FEV1/FVC ratio.",
      "Symptoms persist despite treatment of several presumed bronchitis flares.",
      "Chest imaging shows hyperinflation.",
      "This chronic airflow limitation is usually caused by smoking-related emphysema and chronic bronchitis."
    ],
    description: "COPD is a progressive obstructive lung disease characterized by persistent airflow limitation. Smoking is the most common cause, and exacerbations are common triggers of hospitalization.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 312,
    answer: "Intussusception",
    clues:     [
      "A 9-month-old infant has sudden episodes of severe crying with legs drawn to the abdomen.",
      "Between episodes, the child becomes sleepy but temporarily settles.",
      "Stool later appears dark red and mixed with mucus.",
      "Exam suggests a sausage-shaped mass in the right upper abdomen.",
      "Ultrasound shows a target-shaped bowel lesion.",
      "The obstruction occurs when one segment of bowel telescopes into an adjacent segment."
    ],
    description: "Intussusception is telescoping of one bowel segment into another, causing intermittent abdominal pain, vomiting, and sometimes currant-jelly stool. Ultrasound commonly shows a target sign.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 313,
    answer: "Hepatitis A Virus (HAV)",
    clues:     [
      "A 22-year-old student develops fever, malaise, nausea, and jaundice.",
      "Several people at a restaurant outbreak had similar symptoms.",
      "Liver enzymes are markedly elevated.",
      "Serology shows anti-HAV IgM positivity.",
      "There is no chronic liver disease history.",
      "This virus spreads by the fecal-oral route and does not cause chronic infection."
    ],
    description: "HAV causes acute self-limited hepatitis transmitted by the fecal-oral route, often in foodborne outbreaks. Vaccination and immune globulin are key preventive tools.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 314,
    answer: "Vitiligo",
    clues:     [
      "A 24-year-old woman notices expanding depigmented patches on the hands and around the mouth.",
      "The lesions are sharply demarcated and asymptomatic.",
      "Wood lamp exam accentuates the pigment loss.",
      "She has autoimmune thyroid disease.",
      "There is no scale or inflammation.",
      "This condition is caused by autoimmune destruction of melanocytes."
    ],
    description: "Vitiligo is an acquired depigmenting disorder caused by loss of melanocytes. It is associated with autoimmune disease and classically presents with well-demarcated chalk-white patches.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 315,
    answer: "Gastric ulcer",
    clues:     [
      "A 59-year-old man reports gnawing epigastric pain and early satiety.",
      "The pain worsens shortly after meals.",
      "He uses ibuprofen daily for chronic knee pain.",
      "Fecal occult blood testing is positive and hemoglobin is mildly low.",
      "Upper endoscopy shows a discrete ulcer crater in the stomach.",
      "Biopsy is obtained from the lesion edge to exclude malignancy and test for Helicobacter pylori."
    ],
    description: "Gastric ulcer is a peptic ulcer located in the stomach, often associated with NSAID use or Helicobacter pylori. Epigastric pain, bleeding, anemia, and endoscopic ulceration support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 316,
    answer: "Takayasu Arteritis",
    clues:     [
      "A 28-year-old woman presents with fatigue, arm claudication, and dizziness.",
      "Blood pressure is much lower in the left arm than in the right.",
      "The left radial pulse is weak.",
      "Inflammatory markers are elevated.",
      "Angiography reveals narrowing of the aortic arch branches.",
      "This large-vessel vasculitis is sometimes called pulseless disease."
    ],
    description: "Takayasu arteritis is a granulomatous large-vessel vasculitis affecting the aorta and its major branches, usually in young women. It causes constitutional symptoms, pulse deficits, bruits, and limb ischemia.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 317,
    answer: "Chondroblastoma",
    clues:     [
      "A 16-year-old boy presents with gradually worsening knee pain.",
      "Pain is localized to the end of a long bone near the joint.",
      "X-ray shows a well-defined lytic lesion in the epiphysis of the proximal tibia.",
      "Pathology reveals chondroblasts with chicken-wire calcification.",
      "The patient is skeletally immature.",
      "This benign bone tumor typically arises in the epiphysis."
    ],
    description: "Chondroblastoma is a rare benign epiphyseal bone tumor that usually affects adolescents. It presents with joint pain and a lytic epiphyseal lesion on imaging.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 318,
    answer: "Ovarian torsion",
    clues:     [
      "A 25-year-old woman develops sudden severe unilateral pelvic pain.",
      "She has nausea and repeated vomiting.",
      "She is undergoing ovarian stimulation for infertility treatment.",
      "Pelvic exam shows right adnexal tenderness.",
      "Ultrasound shows an enlarged ovary with reduced venous flow.",
      "The emergency is caused by twisting of the adnexa around its vascular pedicle."
    ],
    description: "Ovarian torsion is twisting of the ovary and adnexa, causing acute unilateral pelvic pain, nausea, and risk of ischemic injury. Enlarged ovaries or ovarian masses increase risk.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 319,
    answer: "Tinea Capitis",
    clues:     [
      "A 7-year-old child presents with patchy scalp hair loss and itching.",
      "There is fine scale and several broken hairs near the scalp surface.",
      "A posterior cervical lymph node is enlarged.",
      "KOH preparation from plucked hairs demonstrates fungal elements.",
      "Topical therapy alone has failed.",
      "This dermatophyte infection of the scalp requires systemic treatment."
    ],
    description: "Tinea capitis is a dermatophyte infection of the scalp causing alopecia, scale, and broken hairs. Oral antifungal therapy is required because the infection involves the hair shaft.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 320,
    answer: "Nicotine Intoxication",
    clues:     [
      "A toddler is brought in after chewing several nicotine gum pieces.",
      "He develops vomiting, pallor, tachycardia, and agitation.",
      "Soon after, he becomes lethargic.",
      "No opioid signs are present.",
      "The family also uses concentrated vaping liquid at home.",
      "This toxidrome reflects excessive stimulation followed by blockade at nicotinic receptors."
    ],
    description: "Nicotine intoxication can cause nausea, vomiting, agitation, tachycardia, hypertension, and later neurologic depression or seizures. Young children are especially vulnerable to gum, patches, and vaping liquid exposures.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 321,
    answer: "Supraventricular tachycardia",
    clues:     [
      "A 28-year-old woman has sudden episodes of rapid regular palpitations.",
      "Episodes start and stop abruptly.",
      "During one episode, pulse is 180 beats per minute and blood pressure is stable.",
      "ECG shows a narrow-complex regular tachycardia without clearly visible P waves.",
      "Vagal maneuvers terminate the rhythm.",
      "The arrhythmia is commonly caused by a reentry circuit above the ventricles."
    ],
    description: "Supraventricular tachycardia is a regular narrow-complex tachycardia arising above the ventricles, often from a reentry circuit. Abrupt onset and termination, palpitations, and response to vagal maneuvers are typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 322,
    answer: "Hemangioblastoma",
    clues:     [
      "A 34-year-old man presents with headache, ataxia, and vomiting.",
      "MRI shows a cystic cerebellar lesion with an enhancing mural nodule.",
      "The tumor is highly vascular.",
      "He also has multiple renal cysts and a family history of CNS tumors.",
      "Polycythemia is present from excess erythropoietin production.",
      "This tumor is strongly associated with von Hippel-Lindau disease."
    ],
    description: "Hemangioblastoma is a benign but highly vascular CNS tumor often found in the cerebellum. It may occur sporadically or with von Hippel-Lindau syndrome and can produce erythropoietin.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 323,
    answer: "Anterior Uveitis (Iritis)",
    clues:     [
      "A 29-year-old man presents with a painful red eye and photophobia.",
      "Vision is mildly blurred.",
      "Exam shows perilimbal injection and constricted pupil.",
      "There is no purulent discharge and intraocular pressure is not markedly elevated.",
      "He has a history of ankylosing spondylitis.",
      "This inflammation involves the iris and ciliary body."
    ],
    description: "Anterior uveitis causes painful photophobic red eye and is associated with HLA-B27 diseases, sarcoidosis, infection, and autoimmune disorders. Prompt ophthalmologic treatment helps prevent complications.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 324,
    answer: "Cleft palate",
    clues:     [
      "A newborn is noted at delivery to have difficulty latching and feeding.",
      "Physical examination reveals a midline defect in the hard and soft palate visible on direct inspection.",
      "The upper lip is intact.",
      "A paediatric feeding team is consulted and a specially shaped teat is used to facilitate feeding.",
      "Assessment by a multidisciplinary cleft team confirms an isolated posterior cleft without associated craniofacial syndrome.",
      "Surgical repair of the palate is planned between 6 and 12 months of age to facilitate normal speech development."
    ],
    description: "Cleft palate results from failure of fusion of the palatine shelves during the 7th to 12th weeks of embryonic development. It may occur alone or with cleft lip and is associated with several syndromes. Management requires a coordinated multidisciplinary approach including surgery, speech therapy, orthodontics, and otolaryngology for associated middle ear disease.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 325,
    answer: "Central Cord Syndrome (CCS)",
    clues:     [
      "A 73-year-old man falls and hyperextends his neck.",
      "He develops more weakness in the arms than in the legs.",
      "Sensation is variably impaired below the lesion.",
      "He has preexisting cervical spondylosis.",
      "MRI shows cord edema without complete transection.",
      "This is the most common incomplete spinal cord injury syndrome."
    ],
    description: "Central cord syndrome usually follows hyperextension injury in patients with cervical spondylosis. It produces greater motor impairment in the upper extremities than in the lower extremities.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 326,
    answer: "Narcolepsy",
    clues:     [
      "A 21-year-old college student reports vivid visual experiences just as she wakes up.",
      "She knows they are not real after a few moments.",
      "Episodes are frightening but brief.",
      "She also has excessive daytime sleepiness and occasional sleep paralysis.",
      "Neurologic exam is normal.",
      "This sleep disorder often includes REM-related phenomena such as hypnopompic hallucinations and sleep paralysis."
    ],
    description: "Narcolepsy causes excessive daytime sleepiness and may include cataplexy, sleep paralysis, and hypnagogic or hypnopompic hallucinations. Symptoms reflect dysregulation of REM sleep.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 327,
    answer: "Acute stress disorder",
    clues:     [
      "A 25-year-old woman presents four days after witnessing a fatal road traffic accident in which a pedestrian was struck directly in front of her.",
      "She reports intrusive images of the moment of impact that occur involuntarily throughout the day.",
      "She describes a sense of unreality — feeling detached from her own body and as though events around her are happening at a distance.",
      "She is unable to recall several minutes of the immediate aftermath of the event.",
      "She has been unable to return to work and avoids all driving routes near the scene.",
      "Her presentation includes intrusive, dissociative, and avoidance symptoms emerging within three days of the traumatic event and persisting for less than one month."
    ],
    description: "Acute stress disorder presents with intrusive, dissociative, avoidance, and arousal symptoms within three days to one month of exposure to a traumatic event. Dissociative features are prominent compared to PTSD. Early trauma-focused CBT reduces the risk of progression to PTSD; the majority of individuals recover without formal treatment.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 328,
    answer: "Alcohol Use Disorder",
    clues:     [
      "A 46-year-old man continues drinking despite repeated DUIs and worsening liver disease.",
      "He has tried to cut down several times but cannot.",
      "Family relationships and work performance are deteriorating.",
      "He spends much of the day obtaining, using, or recovering from alcohol.",
      "Tolerance has increased over the years.",
      "This diagnosis reflects a maladaptive pattern of alcohol use causing impairment and loss of control."
    ],
    description: "Alcohol use disorder is diagnosed by a problematic pattern of alcohol use leading to clinically significant impairment or distress. Severity depends on the number of criteria met, including craving, tolerance, and continued use despite harm.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 329,
    answer: "Intermittent Explosive Disorder",
    clues:     [
      "A 19-year-old man has repeated episodes of disproportionate verbal and physical aggression.",
      "Outbursts are impulsive and last only minutes.",
      "He feels remorse afterward.",
      "There is no substance intoxication, mania, or psychosis.",
      "Daily functioning is impaired because of fights and property damage.",
      "This disorder is characterized by recurrent impulsive aggressive outbursts out of proportion to provocation."
    ],
    description: "Intermittent explosive disorder involves recurrent impulsive aggressive outbursts that are grossly disproportionate to the trigger. Diagnosis requires excluding substance, neurologic, and other psychiatric causes.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 330,
    answer: "Heat stroke",
    clues:     [
      "A 28-year-old runner collapses during a summer race.",
      "He is confused, flushed, and unable to answer questions coherently.",
      "Rectal temperature is 41.1 C.",
      "Skin may be hot and either dry or sweaty depending on the setting.",
      "Labs later show rhabdomyolysis and acute kidney injury.",
      "The emergency is defined by severe hyperthermia with central nervous system dysfunction."
    ],
    description: "Heat stroke is life-threatening hyperthermia with central nervous system dysfunction. Exertional cases can occur in athletes and may present with sweating, rhabdomyolysis, and multiorgan injury.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 331,
    answer: "Thyroglossal duct cyst",
    clues:     [
      "A 9-year-old child has a midline neck mass just below the hyoid bone.",
      "It elevates when the child protrudes the tongue.",
      "The lesion intermittently becomes infected.",
      "Ultrasound confirms a cystic structure and a normal thyroid gland in the neck.",
      "There is no lateral neck involvement.",
      "This congenital remnant arises from persistence of the thyroglossal tract."
    ],
    description: "A thyroglossal duct cyst is a midline congenital neck cyst that moves with swallowing or tongue protrusion. Definitive treatment is surgical excision with the Sistrunk procedure.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 332,
    answer: "Peptic ulcer disease",
    clues:     [
      "A 49-year-old man presents with burning epigastric pain.",
      "The discomfort sometimes wakes him at night and temporarily improves with food.",
      "He has been taking NSAIDs daily for knee pain.",
      "Endoscopy reveals a duodenal ulcer without perforation.",
      "Testing is positive for Helicobacter pylori.",
      "This disease results from mucosal injury caused by acid-peptic activity overwhelming mucosal defenses."
    ],
    description: "Peptic ulcer disease most commonly results from H. pylori infection or NSAID use. It can present with epigastric pain and is complicated by bleeding, perforation, or gastric outlet obstruction.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 333,
    answer: "Cellulitis",
    clues:     [
      "A 54-year-old man presents with a painful red area on the lower leg.",
      "The redness has expanded over two days and the area feels warm.",
      "He has fever and a small fissure between the toes.",
      "Exam shows diffuse poorly demarcated erythema without fluctuance.",
      "Ultrasound shows no drainable abscess.",
      "The infection involves deeper dermis and subcutaneous tissue, often after a break in the skin barrier."
    ],
    description: "Cellulitis is a bacterial infection of deeper dermis and subcutaneous tissue, usually caused by streptococci or Staphylococcus aureus. Warmth, tenderness, swelling, fever, and poorly demarcated erythema are typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 334,
    answer: "Down Syndrome (Trisomy 21)",
    clues:     [
      "A newborn is noted to have hypotonia and a flat facial profile.",
      "Exam shows upslanting palpebral fissures, a single palmar crease, and sandal-gap toes.",
      "Echocardiography identifies an atrioventricular septal defect.",
      "Later the child is at increased risk for leukemia and early-onset Alzheimer disease.",
      "Karyotype confirms trisomy 21.",
      "This is the most common chromosomal cause of intellectual disability."
    ],
    description: "Down syndrome is caused by an extra copy of chromosome 21, most often due to meiotic nondisjunction. It is associated with characteristic facies, hypotonia, congenital heart disease, GI anomalies, and hematologic risk.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 335,
    answer: "Ascending Cholangitis",
    clues:     [
      "A 62-year-old woman presents with fever, jaundice, and right upper quadrant pain.",
      "She is hypotensive and mildly confused.",
      "Labs show elevated bilirubin and alkaline phosphatase.",
      "Ultrasound demonstrates biliary ductal dilation.",
      "ERCP reveals a common bile duct stone with purulent drainage.",
      "This infection occurs when biliary obstruction becomes infected."
    ],
    description: "Ascending cholangitis is an infection of the biliary tree usually caused by obstruction from choledocholithiasis. Charcot triad and Reynolds pentad are classic, and urgent biliary decompression is often required.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 336,
    answer: "Acute bacterial conjunctivitis",
    clues:     [
      "A 5-year-old child wakes with one eye stuck shut by thick discharge.",
      "The conjunctiva is red and irritated.",
      "Discharge becomes purulent again soon after wiping.",
      "There is no photophobia, severe pain, or change in vision.",
      "Several classmates have had similar eye infections.",
      "The superficial infection commonly spreads by hand-to-eye contact in school-aged children."
    ],
    description: "Acute bacterial conjunctivitis causes conjunctival injection with purulent discharge and eyelid crusting. Vision is usually preserved, and severe pain or photophobia should prompt concern for other diagnoses.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 337,
    answer: "Illness Anxiety Disorder",
    clues:     [
      "A 33-year-old man repeatedly seeks evaluation for fear that he has cancer despite minimal symptoms.",
      "Extensive prior testing has been reassuring.",
      "He spends hours checking his body and searching online for diseases.",
      "He is highly anxious about health but does not have prominent somatic complaints.",
      "The preoccupation has lasted more than 6 months.",
      "This disorder centers on fear of serious illness rather than severe physical symptoms."
    ],
    description: "Illness anxiety disorder is excessive preoccupation with having or acquiring a serious illness despite little or no somatic symptom burden. Reassurance offers only transient relief.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 338,
    answer: "Diffuse esophageal spasm (DES)",
    clues:     [
      "A 50-year-old woman has intermittent chest pain and dysphagia to both solids and liquids.",
      "Episodes are unpredictable and sometimes triggered by hot or cold beverages.",
      "Cardiac workup is negative.",
      "Barium swallow shows a corkscrew appearance of the esophagus.",
      "Manometry demonstrates uncoordinated, simultaneous contractions.",
      "This motility disorder can mimic angina."
    ],
    description: "Diffuse esophageal spasm causes episodic noncardiac chest pain and dysphagia due to disordered esophageal contractions. Nitrates and calcium channel blockers may help symptoms.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 339,
    answer: "Functional constipation",
    clues:     [
      "A 36-year-old woman reports infrequent bowel movements for the past eight months.",
      "Stools are hard and require straining.",
      "She often feels incomplete evacuation after using the bathroom.",
      "There is no weight loss, rectal bleeding, anemia, or family history of colon cancer.",
      "Thyroid testing, calcium level, and medication review do not reveal a secondary cause.",
      "The chronic bowel pattern occurs without structural disease or alarm features."
    ],
    description: "Functional constipation is chronic difficult or infrequent defecation without an identifiable structural or metabolic cause. Hard stools, straining, incomplete evacuation, and absence of alarm features support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 340,
    answer: "Medial Epicondylitis (Golfer's Elbow)",
    clues:     [
      "A 44-year-old recreational golfer develops pain over the inner elbow.",
      "Symptoms worsen with wrist flexion and forearm pronation.",
      "There is focal tenderness just distal to the medial epicondyle.",
      "Neurologic exam is normal.",
      "No acute fracture is seen on radiographs.",
      "This is an overuse tendinopathy of the common flexor tendon origin."
    ],
    description: "Medial epicondylitis is a tendinopathy caused by repetitive wrist flexion and pronation. Treatment is usually conservative with activity modification, physical therapy, and anti-inflammatory measures.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 341,
    answer: "Status Epilepticus",
    clues:     [
      "A 48-year-old man is brought in actively convulsing for more than 10 minutes.",
      "He does not regain consciousness between episodes.",
      "Point-of-care glucose is normal.",
      "Airway protection and benzodiazepine therapy are initiated immediately.",
      "Second-line antiseizure medication is required because seizures persist.",
      "This neurologic emergency is defined by prolonged seizure activity or recurrent seizures without recovery."
    ],
    description: "Status epilepticus is a medical emergency requiring immediate stabilization and rapid treatment to prevent neuronal injury. Continuous seizures or failure to recover between seizures meet criteria.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 342,
    answer: "Placenta previa",
    clues:     [
      "A 34-year-old pregnant woman at 32 weeks develops painless bright red vaginal bleeding.",
      "She has had a prior cesarean delivery.",
      "The uterus is soft and nontender.",
      "Fetal heart tracing is initially reassuring.",
      "Transvaginal ultrasound shows placental tissue covering the internal cervical os.",
      "Digital cervical examination is avoided until placental location is confirmed."
    ],
    description: "Placenta previa occurs when placental tissue covers or approaches the internal cervical os. It classically causes painless third-trimester bleeding, and ultrasound should confirm placental location before digital examination.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 343,
    answer: "Glucose-6-phosphate dehydrogenase (G6PD) Deficiency",
    clues:     [
      "A 23-year-old man develops jaundice and dark urine after taking trimethoprim-sulfamethoxazole.",
      "He has back pain and fatigue.",
      "Labs show hemolytic anemia with elevated LDH and low haptoglobin.",
      "Peripheral smear shows bite cells and Heinz bodies on supravital staining.",
      "He is otherwise healthy between episodes.",
      "This X-linked enzyme deficiency impairs protection against oxidative stress."
    ],
    description: "G6PD deficiency causes episodic oxidative hemolysis after triggers such as sulfa drugs, antimalarials, infection, or fava beans. It is one of the most common enzyme deficiencies worldwide.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::01_Biochem::06_Metabolism::17_Glucose-6-phosphate_dehydrogenase_deficiency::*G6PD_Deficiency",
    ankiStep2: "#AK_Step2_v12::#FirstAid::07_Hematology::04_Red_Blood_Cell_Disorders::05_G6PD_Deficiency"
  },
  {
    id: 344,
    answer: "Bronchiectasis",
    clues:     [
      "A 47-year-old woman has chronic productive cough with large volumes of purulent sputum.",
      "She reports repeated pneumonias over many years.",
      "Exam shows crackles and digital clubbing.",
      "High-resolution CT reveals permanently dilated thick-walled bronchi.",
      "Sputum cultures often grow Pseudomonas.",
      "This chronic airway disease results from recurrent infection and inflammation destroying bronchial walls."
    ],
    description: "Bronchiectasis is irreversible bronchial dilation caused by chronic infection and inflammation. Patients present with chronic productive cough, recurrent infections, and characteristic CT findings.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 345,
    answer: "Ventricular tachycardia",
    clues:     [
      "A 70-year-old man with prior myocardial infarction presents with palpitations and dizziness.",
      "He is hypotensive and diaphoretic.",
      "ECG shows a regular wide-complex rhythm at 170 beats per minute.",
      "Atrioventricular dissociation is present.",
      "The rhythm arises from scarred ventricular myocardium.",
      "In an unstable patient, synchronized cardioversion is required immediately."
    ],
    description: "Ventricular tachycardia is a wide-complex rhythm originating from the ventricles, often in patients with structural heart disease or prior infarction. Hemodynamic instability requires urgent synchronized cardioversion.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 346,
    answer: "Leptospirosis (Leptospira interrogans)",
    clues:     [
      "A 29-year-old man develops fever, myalgias, and headache after wading through floodwater.",
      "He has marked calf tenderness and conjunctival suffusion.",
      "Days later he becomes jaundiced and develops acute kidney injury.",
      "Serology confirms infection by a spirochete.",
      "He reports rat exposure near his workplace.",
      "This zoonosis is transmitted through water contaminated with animal urine."
    ],
    description: "Leptospirosis is a spirochetal infection acquired from water contaminated by animal urine. Severe disease, called Weil disease, can cause jaundice, renal failure, and hemorrhage.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 347,
    answer: "Pleomorphic adenoma",
    clues:     [
      "A 43-year-old woman notices a painless slow-growing mass near the angle of the jaw.",
      "The lesion is mobile and facial nerve function is intact.",
      "Imaging localizes the mass to the parotid gland.",
      "Pathology shows a mixture of epithelial and mesenchymal-like stromal elements.",
      "The capsule is incomplete, so careful excision is needed to avoid recurrence.",
      "This is the most common benign salivary gland tumor."
    ],
    description: "Pleomorphic adenoma is the most common benign salivary gland tumor, usually arising in the parotid. It contains epithelial and stromal components and can recur if not completely excised.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 348,
    answer: "Erythroplakia",
    clues:     [
      "A 67-year-old retired pipe smoker is referred with a red patch on the left floor of mouth, present for three months.",
      "He also has a history of heavy alcohol consumption.",
      "Examination reveals a 1.5 cm velvety, bright red patch that cannot be attributed to any other cause.",
      "The lesion is soft on palpation with no induration.",
      "Toluidine blue staining of the lesion shows intense uptake.",
      "Biopsy shows severe epithelial dysplasia, and the pathologist notes areas suspicious for early carcinoma in situ."
    ],
    description: "Erythroplakia is a red oral mucosal patch that cannot be attributed to any other cause. It has a significantly higher rate of severe dysplasia or invasive carcinoma on biopsy than leukoplakia, making it the highest-risk potentially malignant oral lesion. All lesions should be biopsied; surgical excision and long-term surveillance are essential.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 349,
    answer: "Crigler-Najjar syndrome type 2",
    clues:     [
      "A 12-year-old boy is evaluated for chronic unconjugated hyperbilirubinemia.",
      "He has intermittent jaundice but normal liver enzymes and no hemolysis.",
      "Phenobarbital lowers the bilirubin level.",
      "Neurologic injury has not occurred.",
      "Family history is notable for mild similar findings.",
      "This disorder results from partial rather than complete UGT deficiency."
    ],
    description: "Crigler-Najjar type 2 is a milder inherited unconjugated hyperbilirubinemia due to partial UDP-glucuronosyltransferase deficiency. It responds to phenobarbital and carries far less kernicterus risk than type 1.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 350,
    answer: "Rosacea",
    clues:     [
      "A 44-year-old woman has chronic facial redness with intermittent flushing.",
      "She develops papules and pustules on the cheeks and nose but no comedones.",
      "Hot drinks and alcohol worsen symptoms.",
      "Exam shows telangiectasias on the central face.",
      "Topical metronidazole is prescribed.",
      "This chronic inflammatory facial dermatosis often affects adults with fair skin."
    ],
    description: "Rosacea causes central facial flushing, persistent erythema, telangiectasias, and inflammatory papules or pustules. Trigger avoidance and topical or oral therapies are commonly used.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 351,
    answer: "Body dysmorphic disorder",
    clues:     [
      "A 19-year-old man presents requesting rhinoplasty, which two surgeons have declined to perform because they see no abnormality.",
      "He reports spending four to five hours each day checking his nose in mirrors, photographs, and reflective surfaces.",
      "He wears a hat pulled low and avoids frontal photographs; he has dropped out of college to avoid being seen by peers.",
      "He acknowledges that others do not see the defect he perceives but is unable to accept their reassurance.",
      "He has no delusional beliefs in other domains and does not describe depressed mood as the primary driver of his distress.",
      "His preoccupation with a perceived slight defect in appearance causes clinically significant distress and impairment and occupies more than one hour per day."
    ],
    description: "Body dysmorphic disorder is characterised by preoccupation with one or more perceived defects in physical appearance that are not observable or appear slight to others, leading to repetitive behaviours such as mirror checking, camouflaging, and reassurance-seeking. It carries high rates of suicidality. CBT with ERP and SSRIs at higher doses are first-line treatments.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 352,
    answer: "Fanconi Syndrome",
    clues:     [
      "A 6-year-old child has poor growth, rickets, and polyuria.",
      "Labs show metabolic acidosis, hypophosphatemia, and hypokalemia.",
      "Urinalysis reveals glucosuria despite normal serum glucose and generalized aminoaciduria.",
      "Bicarbonate wasting is present.",
      "There is proximal tubular dysfunction involving multiple solutes.",
      "This syndrome is often described as a generalized defect of the proximal tubule."
    ],
    description: "Fanconi syndrome is generalized proximal tubule dysfunction causing bicarbonate, phosphate, glucose, uric acid, and amino acid wasting. It can lead to type 2 RTA, growth failure, osteomalacia, and dehydration.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 353,
    answer: "Ischemic Stroke - Posterior Cerebral Artery (PCA)",
    clues:     [
      "A 69-year-old woman suddenly cannot see the right side of the world in both eyes.",
      "Motor strength is preserved.",
      "She can write but cannot read the words she writes.",
      "MRI shows infarction in the left occipital lobe extending into the splenium.",
      "Pupillary reflexes remain intact.",
      "This vascular territory commonly causes contralateral homonymous hemianopia and visual association deficits."
    ],
    description: "PCA stroke often causes contralateral homonymous hemianopia, visual agnosia, alexia without agraphia, or memory impairment depending on laterality and extent. Motor findings are often minimal.",
    ankiStep1: "#AK_Step1_v12::#Pixorize::05_Neuroanatomy::10_Strokes::03_Posterior_Cerebral_Artery_(PCA)",
    ankiStep2: ""
  },
  {
    id: 354,
    answer: "Opioid overdose",
    clues:     [
      "A 32-year-old man is found unresponsive in a public restroom.",
      "Respirations are slow and shallow.",
      "Pupils are pinpoint bilaterally.",
      "Friends report he recently used an unknown injected substance.",
      "Oxygen saturation improves after assisted ventilation and naloxone administration.",
      "The toxidrome causes respiratory depression through excessive mu-receptor activation."
    ],
    description: "Opioid overdose causes central respiratory depression, miosis, and depressed mental status. Immediate ventilatory support and naloxone can reverse life-threatening toxicity.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 355,
    answer: "Lacunar Stroke",
    clues:     [
      "A 64-year-old man with long-standing hypertension develops sudden pure right-sided weakness.",
      "There are no cortical signs such as aphasia, neglect, or visual field cut.",
      "MRI reveals a small deep infarct in the posterior limb of the internal capsule.",
      "He has a history of diabetes as well.",
      "The lesion involves a small penetrating artery.",
      "This stroke subtype is associated with lipohyalinosis from chronic hypertension."
    ],
    description: "Lacunar infarcts are small deep ischemic strokes affecting penetrating vessels and commonly produce pure motor, pure sensory, or ataxic-hemiparesis syndromes without cortical findings.",
    ankiStep1: "#AK_Step1_v12::#Bootcamp::Neurology::20_Ischemic_Cerebrovascular_Accidents::04_Lacunar_Infarction",
    ankiStep2: ""
  },
  {
    id: 356,
    answer: "Benzodiazepine Withdrawal",
    clues:     [
      "A 42-year-old woman abruptly stops long-term alprazolam use.",
      "She develops anxiety, tremor, insomnia, and perceptual disturbances.",
      "Heart rate and blood pressure are elevated.",
      "Hours later she has a generalized tonic-clonic seizure.",
      "Toxicology confirms absence of new stimulant use.",
      "Withdrawal from this sedative-hypnotic can be life-threatening."
    ],
    description: "Benzodiazepine withdrawal can cause autonomic hyperactivity, anxiety, insomnia, perceptual disturbances, and seizures. Gradual tapering is essential after prolonged use.",
    ankiStep1: "",
    ankiStep2: "#AK_Step2_v12::#Subjects::*Pharm_Extra::Neuro/Psych::Benzodiazepines"
  },
  {
    id: 357,
    answer: "Seborrheic dermatitis",
    clues:     [
      "A 42-year-old man has chronic flaky rash on the scalp and eyebrows.",
      "The scale is greasy and yellow-white.",
      "Red patches are also present in the nasolabial folds.",
      "Symptoms worsen during stress and improve with antifungal shampoo.",
      "There are no thick extensor plaques or nail pitting.",
      "The eruption favors sebum-rich areas and is associated with Malassezia overgrowth."
    ],
    description: "Seborrheic dermatitis is a chronic inflammatory eruption in sebum-rich areas such as the scalp, face, and chest. Greasy scale, facial involvement, and response to antifungal therapy are typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 358,
    answer: "Pancreatic adenocarcinoma",
    clues:     [
      "A 68-year-old man presents with weight loss, epigastric discomfort, and new painless jaundice.",
      "He also has dark urine and pale stools.",
      "CT abdomen shows a mass in the head of the pancreas.",
      "CA 19-9 is elevated.",
      "A painless palpable gallbladder is noted.",
      "This highly lethal malignancy often presents late and is associated with smoking and chronic pancreatitis."
    ],
    description: "Pancreatic ductal adenocarcinoma commonly presents with weight loss, abdominal pain, and obstructive jaundice when located in the pancreatic head. It has a poor prognosis because disease is often advanced at diagnosis.",
    ankiStep1: "#AK_Step1_v12::#Bootcamp::Gastroenterology::07_Pancreatic_and_Biliary_Pathology::04_Pancreatic_Malignancies",
    ankiStep2: "#AK_Step2_v12::#FirstAid::06_Gastrointestinal::12_Pancreatic_Disease::04_Pancreatic_Cancer"
  },
  {
    id: 359,
    answer: "Pre-Renal Acute Kidney Injury (AKI)",
    clues:     [
      "A 76-year-old man is admitted with vomiting, diarrhea, and dizziness.",
      "Blood pressure is low and mucous membranes are dry.",
      "Creatinine rises from baseline over 24 hours.",
      "Urinalysis is bland with concentrated urine.",
      "Urine sodium is low and FE-Na is less than 1 percent.",
      "Renal hypoperfusion rather than intrinsic parenchymal injury explains the laboratory pattern."
    ],
    description: "Pre-renal AKI is caused by decreased renal perfusion from hypovolemia, heart failure, cirrhosis, or effective arterial underfilling. Tubules remain intact initially, so urine is concentrated and sodium avidly retained.",
    ankiStep1: "#AK_Step1_v12::#Bootcamp::Nephrology::12_Kidney_Injury::02_Prerenal_AKI",
    ankiStep2: "#AK_Step2_v12::#Subjects::Nephrology_&_Urology::01_Kidneys::Acute_Kidney_Injury::Prerenal_Failure"
  },
  {
    id: 360,
    answer: "Pediatric urinary tract infection",
    clues:     [
      "A 3-year-old girl has fever, abdominal discomfort, and pain with urination.",
      "She has urinary frequency and new daytime accidents.",
      "There is no cough, rash, or ear pain.",
      "Urinalysis shows leukocyte esterase, nitrites, and pyuria.",
      "Urine culture grows Escherichia coli.",
      "The common childhood bacterial infection often presents with nonspecific fever in younger children."
    ],
    description: "Pediatric urinary tract infection often presents with fever, dysuria, frequency, abdominal pain, or new incontinence. Escherichia coli is the most common cause, and urine culture confirms the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 361,
    answer: "Neonatal Intraventricular Hemorrhage",
    clues:     [
      "A premature infant in the NICU develops apnea, pallor, and a bulging fontanelle.",
      "The baby was born at 28 weeks gestation.",
      "Cranial ultrasound shows blood within the ventricular system.",
      "There is concern for posthemorrhagic hydrocephalus.",
      "The bleeding originates from the fragile germinal matrix.",
      "This complication is strongly associated with prematurity."
    ],
    description: "Neonatal intraventricular hemorrhage usually occurs in premature infants because of fragile germinal matrix vasculature. Presentation can range from subtle instability to seizures and hydrocephalus.",
    ankiStep1: "#AK_Step1_v12::#Bootcamp::Neurology::21_Aneurysms_and_Intracranial_Hemorrhage::06_Intraventricular_Hemorrhage",
    ankiStep2: "#AK_Step2_v12::#Subjects::Neurology::06_Intracranial_Hemorrhage::Neonatal_Intraventricular_Hemorrhage"
  },
  {
    id: 362,
    answer: "Atelectasis",
    clues:     [
      "A 63-year-old woman develops low-grade fever and shortness of breath on the first day after abdominal surgery.",
      "She is taking shallow breaths because of pain.",
      "Oxygen saturation is slightly reduced, and breath sounds are diminished at the bases.",
      "Chest x-ray shows plate-like basilar opacities with volume loss.",
      "She has no purulent sputum.",
      "This postoperative complication results from alveolar collapse due to hypoventilation."
    ],
    description: "Atelectasis is collapse of alveoli causing impaired gas exchange and postoperative hypoxemia, especially after abdominal or thoracic surgery. Incentive spirometry and mobilization are key preventive measures.",
    ankiStep1: "#AK_Step1_v12::#Physeo::11_Pathology::03_Pulmonary_Pathology::16_Atelectasis",
    ankiStep2: "#AK_Step2_v12::#Subjects::Pulmonology::05_Lungs::Atelectasis"
  },
  {
    id: 363,
    answer: "Cirrhosis",
    clues:     [
      "A 57-year-old man with long-standing heavy alcohol use presents with abdominal swelling.",
      "Exam shows jaundice, spider angiomas, palmar erythema, and shifting dullness.",
      "Labs show low albumin, elevated INR, and thrombocytopenia.",
      "Ultrasound shows a nodular liver with splenomegaly and ascites.",
      "Endoscopy reveals esophageal varices.",
      "The chronic liver injury has progressed to fibrosis with portal hypertension and impaired synthetic function."
    ],
    description: "Cirrhosis is advanced chronic liver fibrosis causing portal hypertension and impaired liver function. Ascites, varices, coagulopathy, low albumin, and a nodular liver support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 364,
    answer: "Erectile Dysfunction",
    clues:     [
      "A 57-year-old man reports difficulty achieving and maintaining erections.",
      "He has diabetes, hypertension, and peripheral neuropathy.",
      "Morning erections have become infrequent.",
      "Libido is preserved and testosterone level is normal.",
      "Medications include a thiazide diuretic.",
      "This symptom commonly reflects vascular and neurogenic impairment of penile blood flow and signaling."
    ],
    description: "Erectile dysfunction has vascular, neurogenic, psychogenic, endocrine, and medication-related causes. Diabetes and atherosclerotic disease are especially important organic contributors.",
    ankiStep1: "#AK_Step1_v12::#Bootcamp::Psychiatry::07_Sleep_and_Psychosomatic_Conditions::04_Erectile_Dysfunction",
    ankiStep2: "#AK_Step2_v12::#FirstAid::13_Psych::12_Sexual_Disorders::04_Sexual_Dysfunction"
  },
  {
    id: 365,
    answer: "Cytomegalovirus (CMV)",
    clues:     [
      "A 33-year-old renal transplant recipient develops fever, malaise, and leukopenia.",
      "He later has blurry vision and floaters.",
      "Fundus exam reveals retinal hemorrhages with yellow-white necrotic lesions.",
      "PCR detects CMV viremia.",
      "This herpesvirus is a major opportunistic pathogen in immunocompromised patients.",
      "Retinitis can threaten vision if untreated."
    ],
    description: "CMV causes important disease in transplant recipients and advanced HIV, including retinitis, colitis, esophagitis, and systemic viral syndrome. Congenital infection is also a major cause of neonatal morbidity.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::03_Microbiology::05_Virology::05_DNA_viruses::*Cytomegalovirus",
    ankiStep2: "#AK_Step2_v12::#FirstAid::16_Multisystem::05_Human_Immunodeficiency_Virus::09_Cytomegalovirus"
  },
  {
    id: 366,
    answer: "Spontaneous abortion",
    clues:     [
      "A 30-year-old woman at 10 weeks gestation presents with vaginal bleeding and crampy pelvic pain.",
      "She passes tissue at home before arriving.",
      "Cervical os is open on examination.",
      "Ultrasound shows no fetal cardiac activity and retained products in the uterus.",
      "Quantitative beta-hCG is lower than expected for gestational age.",
      "The pregnancy loss occurs before fetal viability without an induced procedure."
    ],
    description: "Spontaneous abortion is noninduced pregnancy loss before viability. First-trimester bleeding, cramping, open cervix, passage of tissue, and ultrasound findings help classify the event.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 367,
    answer: "Eosinophilic Esophagitis",
    clues:     [
      "A 19-year-old man with asthma presents with intermittent solid-food dysphagia.",
      "He has had several food impactions requiring endoscopic removal.",
      "Endoscopy shows concentric rings and linear furrows.",
      "Biopsy demonstrates numerous eosinophils in the esophageal epithelium.",
      "Symptoms are triggered by specific foods.",
      "This chronic immune-mediated disease is strongly associated with atopy."
    ],
    description: "Eosinophilic esophagitis is an atopy-associated inflammatory disorder causing dysphagia and food impaction. Treatment often includes proton pump inhibitors, swallowed topical steroids, and dietary elimination.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::09_Gastrointestinal::04_Pathology::03_Other_esophageal_pathologies::02_Esophagitis::*Eosinophilic_Esophagitis",
    ankiStep2: "#AK_Step2_v12::#FirstAid::06_Gastrointestinal::02_Esophageal_Disease::04_Eosinophilic_Esophagitis"
  },
  {
    id: 368,
    answer: "Non-ST-Elevation Myocardial Infarction (NSTEMI)",
    clues:     [
      "A 63-year-old man presents with pressure-like substernal chest pain radiating to the left arm.",
      "The pain began at rest and lasted 40 minutes.",
      "ECG shows ST-segment depression in the lateral leads.",
      "Serial troponins rise over the next few hours.",
      "He is hemodynamically stable.",
      "This acute coronary syndrome involves myocardial necrosis without ST elevation."
    ],
    description: "NSTEMI is defined by myocardial ischemia with elevated cardiac biomarkers but no ST-elevation pattern on ECG. Management includes antiplatelet therapy, anticoagulation, and risk-based invasive evaluation.",
    ankiStep1: "#AK_Step1_v12::#B&B::06_Cardio::02_Cardiac_Ischemia::05_Unstable_Angina/NSTEMI",
    ankiStep2: "#AK_Step2_v12::#SketchyIM::01_Cardiology::01_Ischemic_Heart_Disease::05_Unstable_Angina/NSTEMI"
  },
  {
    id: 369,
    answer: "Myocarditis",
    clues:     [
      "A 24-year-old man develops chest discomfort and shortness of breath after a viral illness.",
      "He has fatigue, palpitations, and mild fever.",
      "ECG shows nonspecific ST-T changes.",
      "Troponin is elevated despite normal coronary angiography.",
      "Cardiac MRI shows myocardial edema and late gadolinium enhancement.",
      "The condition reflects inflammatory injury of heart muscle."
    ],
    description: "Myocarditis is inflammation of the myocardium, often following viral infection. Chest pain, dyspnea, arrhythmias, elevated troponin, and cardiac MRI findings support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 370,
    answer: "Kartagener Syndrome",
    clues:     [
      "A 12-year-old boy has chronic sinusitis, recurrent otitis media, and daily wet cough.",
      "Chest imaging shows bronchiectasis.",
      "Abdominal exam and imaging reveal situs inversus.",
      "Nasal nitric oxide testing is low.",
      "He is likely to have infertility later because of immotile sperm.",
      "This disorder is caused by defective dynein arms in motile cilia."
    ],
    description: "Primary ciliary dyskinesia causes impaired mucociliary clearance leading to chronic sinopulmonary infection. Kartagener syndrome refers to the triad of bronchiectasis, sinusitis, and situs inversus.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::01_Biochem::02_Cellular::09_Cilia_structure::*Kartagener_Syndrome",
    ankiStep2: "#AK_Step2_v12::#Subjects::Pulmonology::05_Lungs::Embryology::Kartagener_Syndrome"
  },
  {
    id: 371,
    answer: "Lewy Body Dementia",
    clues:     [
      "A 74-year-old man has progressive cognitive decline with marked day-to-day fluctuations.",
      "He has recurrent vivid visual hallucinations.",
      "Mild parkinsonian features are also present.",
      "Family says he had episodes of acting out dreams years before the memory problems began.",
      "He became severely worse after being given a typical antipsychotic.",
      "This dementia is associated with cortical Lewy bodies containing alpha-synuclein."
    ],
    description: "Lewy body dementia presents with fluctuating cognition, recurrent visual hallucinations, parkinsonism, and sensitivity to antipsychotics. REM sleep behavior disorder is common.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 372,
    answer: "Osteoradionecrosis",
    clues:     [
      "A 60-year-old man with a history of oropharyngeal carcinoma treated with radiotherapy two years ago presents with persistent jaw pain and an exposed area of bone in the lower jaw.",
      "He had a molar extraction six months ago and the socket has never healed.",
      "Examination reveals necrotic, exposed bone in the left posterior mandible with surrounding erythematous mucosa.",
      "There is no evidence of tumour recurrence on biopsy.",
      "CT shows a lytic area with cortical destruction and a sequestrum in the irradiated mandible.",
      "The clinical and radiological findings in the context of prior radiotherapy confirm hypovascular, hypoxic, hypocellular bone necrosis."
    ],
    description: "Osteoradionecrosis is avascular necrosis of bone resulting from radiation-induced damage to the vascularity and cellularity of bone in the radiation field. The mandible is the most susceptible site. Risk is increased by high cumulative dose, poor oral hygiene, and post-irradiation dental extractions. Prevention involves dental rehabilitation before radiotherapy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 373,
    answer: "Acanthosis Nigricans",
    clues:     [
      "A 35-year-old woman with obesity notices dark velvety thickening on the back of her neck and in the axillae.",
      "The lesions are asymptomatic.",
      "She has irregular menses and insulin resistance.",
      "Fasting glucose is elevated.",
      "In older adults, sudden extensive onset would raise concern for internal malignancy.",
      "This skin finding commonly reflects hyperinsulinemia."
    ],
    description: "Acanthosis nigricans is a velvety hyperpigmented thickening of intertriginous skin, often associated with insulin resistance, obesity, and endocrine disorders. Rarely, it is a paraneoplastic sign.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 374,
    answer: "Inflammatory Carcinoma of the Breast",
    clues:     [
      "A 57-year-old woman develops rapid swelling and redness of one breast.",
      "The skin appears thickened with peau d'orange changes.",
      "There is no discrete abscess and antibiotics have not helped.",
      "Biopsy shows invasive carcinoma with tumor emboli in dermal lymphatics.",
      "Axillary nodes are enlarged.",
      "This aggressive breast cancer often presents without a palpable dominant mass."
    ],
    description: "Inflammatory breast carcinoma is an aggressive form of invasive breast cancer characterized by erythema, edema, and peau d'orange from dermal lymphatic obstruction. It is often advanced at diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 375,
    answer: "Cyclothymia",
    clues:     [
      "A 27-year-old man describes himself as 'a person of extremes' — periods of high energy and creativity followed by stretches of low mood and retreat.",
      "He says his mood has never been consistently neutral for more than a few weeks at a time over the past three years.",
      "During his 'up' periods he needs little sleep, starts new projects, and is highly social; during his 'down' periods he is withdrawn, self-critical, and unproductive.",
      "Neither phase has ever been severe enough to prevent him from functioning or to require hospitalisation.",
      "There is no evidence of psychotic symptoms, and neither pole meets the full criteria for a major depressive or manic episode.",
      "His pattern of numerous periods of hypomanic symptoms and numerous periods of depressive symptoms over at least two years without meeting full-episode criteria establishes the diagnosis."
    ],
    description: "Cyclothymia is a chronic mood instability condition characterised by numerous periods of hypomanic and depressive symptoms that do not meet the threshold for full manic or depressive episodes, persisting for at least two years. It is considered a mild form of the bipolar spectrum. Mood stabilisers and psychoeducation are the main management strategies.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 376,
    answer: "Amyotrophic Lateral Sclerosis (ALS)",
    clues:     [
      "A 59-year-old man develops progressive weakness and muscle wasting in one hand.",
      "Months later he has fasciculations, spasticity, and brisk reflexes in multiple limbs.",
      "Sensation and eye movements are preserved.",
      "There is no bowel or bladder dysfunction.",
      "EMG shows widespread denervation.",
      "This neurodegenerative disease involves both upper and lower motor neurons."
    ],
    description: "ALS is a progressive motor neuron disease causing combined upper and lower motor neuron findings with spared sensation. Bulbar and respiratory involvement drive morbidity and mortality.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 377,
    answer: "Hereditary Spherocytosis",
    clues:     [
      "A 12-year-old boy has chronic mild jaundice and intermittent gallstone pain.",
      "His father had splenectomy in adolescence for a hemolytic anemia.",
      "CBC shows anemia with elevated MCHC.",
      "Peripheral smear demonstrates numerous spherocytes.",
      "Osmotic fragility testing is increased.",
      "This inherited RBC membrane disorder commonly involves spectrin or ankyrin defects."
    ],
    description: "Hereditary spherocytosis is a membrane cytoskeleton disorder causing extravascular hemolysis, jaundice, splenomegaly, and pigment gallstones. Splenectomy improves hemolysis in selected patients.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 378,
    answer: "Bleeding peptic ulcer",
    clues:     [
      "A 64-year-old man presents after vomiting dark blood.",
      "He feels dizzy when standing and has black tarry stools.",
      "He takes daily naproxen for chronic back pain.",
      "Exam shows tachycardia and epigastric tenderness.",
      "Hemoglobin is low, and blood urea nitrogen is disproportionately elevated.",
      "Urgent endoscopy identifies an actively oozing ulcer crater in the stomach."
    ],
    description: "A bleeding peptic ulcer can cause hematemesis, melena, orthostatic symptoms, and anemia. NSAID use and Helicobacter pylori are common risk factors, and endoscopy can identify and treat active bleeding.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 379,
    answer: "Reye syndrome",
    clues:     [
      "A 7-year-old child develops vomiting and confusion several days after recovering from influenza.",
      "Parents gave aspirin during the viral illness.",
      "Labs show elevated AST and ALT, hyperammonemia, and hypoglycemia.",
      "There is no jaundice.",
      "Liver biopsy would show microvesicular fatty change.",
      "This syndrome causes acute encephalopathy and hepatic mitochondrial dysfunction in children."
    ],
    description: "Reye syndrome is a rare but serious pediatric condition associated with aspirin exposure during viral illness. It causes acute encephalopathy, liver dysfunction, and hyperammonemia.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 380,
    answer: "Mucormycosis",
    clues:     [
      "A 55-year-old man with diabetic ketoacidosis develops facial pain and black nasal discharge.",
      "Exam shows periorbital swelling and necrotic tissue on the palate.",
      "CT reveals invasive sinus disease extending toward the orbit.",
      "Biopsy demonstrates broad nonseptate hyphae with right-angle branching.",
      "Urgent debridement and amphotericin are started.",
      "This angioinvasive fungal infection is strongly associated with ketoacidosis and immunosuppression."
    ],
    description: "Mucormycosis is a rapidly invasive fungal infection that can cause rhino-orbital-cerebral disease, especially in diabetic ketoacidosis. It is a medical and surgical emergency.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 381,
    answer: "Alopecia areata",
    clues:     [
      "A 27-year-old woman notices a sudden round patch of hair loss on the scalp.",
      "The patch is smooth and non-scarring.",
      "There is no scale, erythema, or broken hairs.",
      "Exclamation-point hairs are seen at the edge of the patch.",
      "She has a personal history of autoimmune thyroid disease.",
      "The disorder reflects autoimmune attack on hair follicles."
    ],
    description: "Alopecia areata is autoimmune non-scarring hair loss that often presents as sharply demarcated round patches. Exclamation-point hairs and association with other autoimmune disease support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 382,
    answer: "Branchial Cleft Cyst",
    clues:     [
      "A 12-year-old girl presents with a painless lateral neck mass.",
      "The swelling lies anterior to the sternocleidomastoid muscle.",
      "It became more prominent after an upper respiratory infection.",
      "Ultrasound shows a well-defined cystic lesion.",
      "The thyroid gland is normal.",
      "This congenital lesion arises from persistence of branchial apparatus remnants."
    ],
    description: "Branchial cleft cysts are congenital lateral neck cysts that often present in childhood or adolescence. They may become infected after URI and are usually located along the anterior SCM border.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 383,
    answer: "Polycystic Ovary Syndrome (PCOS)",
    clues:     [
      "A 24-year-old woman presents with irregular menses and difficulty conceiving.",
      "She also has acne, obesity, and coarse hair growth on the chin.",
      "Labs show elevated LH-to-FSH ratio and biochemical hyperandrogenism.",
      "Ultrasound reveals enlarged ovaries with multiple peripheral follicles.",
      "Fasting insulin is elevated.",
      "This endocrine disorder is commonly associated with chronic anovulation and insulin resistance."
    ],
    description: "PCOS is characterized by hyperandrogenism, ovulatory dysfunction, and often polycystic ovarian morphology. It is associated with insulin resistance, infertility, and long-term metabolic risk.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 384,
    answer: "Community-acquired pneumonia",
    clues:     [
      "A 7-year-old child presents with fever, cough, and pleuritic chest pain.",
      "He is tachypneic and appears tired.",
      "Exam shows focal crackles and decreased breath sounds at the right base.",
      "Chest radiograph shows right lower lobe consolidation.",
      "White blood cell count is elevated with neutrophil predominance.",
      "The illness reflects infection of the lung parenchyma acquired outside the hospital."
    ],
    description: "Community-acquired pneumonia in children commonly presents with fever, cough, tachypnea, and focal lung findings. Lobar consolidation and neutrophilia support a typical bacterial cause.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 385,
    answer: "Neuropathic Ulcer / Diabetic Foot Ulcer",
    clues:     [
      "A 61-year-old man with long-standing diabetes presents with a painless plantar foot wound.",
      "He noticed it only after seeing drainage on his sock.",
      "Exam shows diminished vibration sensation and loss of monofilament sensation.",
      "The ulcer overlies a pressure point and is surrounded by callus.",
      "Peripheral pulses are present.",
      "This lesion results from repetitive trauma in an insensate foot."
    ],
    description: "Neuropathic diabetic foot ulcers typically occur on weight-bearing surfaces in patients with peripheral sensory loss. Offloading, wound care, glycemic control, and infection assessment are critical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 386,
    answer: "Malingering",
    clues:     [
      "A 28-year-old man in police custody claims new severe back pain and inability to walk.",
      "Exam findings vary dramatically when he is distracted.",
      "MRI and neurologic testing are normal.",
      "He later admits he hoped to delay a court appearance.",
      "There is an obvious external incentive for the behavior.",
      "This is intentional symptom production for secondary gain."
    ],
    description: "Malingering is the deliberate fabrication or exaggeration of symptoms for external benefit such as money, drugs, avoiding work, or evading legal consequences. It is not a psychiatric disorder.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 387,
    answer: "Hemorrhoids",
    clues:     [
      "A 45-year-old man notices painless bright red blood on toilet paper.",
      "Bleeding occurs after straining with hard stools.",
      "He feels tissue protrude during bowel movements that reduces spontaneously.",
      "Anoscopy shows enlarged vascular cushions above the dentate line.",
      "There is no weight loss, anemia, or change in stool caliber.",
      "The condition reflects engorgement and prolapse of normal anal canal vascular tissue."
    ],
    description: "Hemorrhoids are enlarged anal vascular cushions that can cause bright red bleeding, prolapse, itching, or discomfort. Internal lesions are typically painless because they arise above the dentate line.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 388,
    answer: "Biliary atresia",
    clues:     [
      "A 5-week-old infant has persistent jaundice and pale stools.",
      "Urine is dark, and the liver is enlarged.",
      "Direct bilirubin is elevated.",
      "Ultrasound shows abnormal biliary anatomy, and hepatobiliary scan shows no bile reaching the intestine.",
      "The infant is otherwise feeding reasonably well.",
      "This progressive fibro-obliterative disease of the extrahepatic bile ducts requires early surgery."
    ],
    description: "Biliary atresia is a neonatal cholestatic disease causing conjugated hyperbilirubinemia, acholic stools, and progressive liver fibrosis. Early Kasai portoenterostomy improves outcomes.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 389,
    answer: "Tinea Versicolor",
    clues:     [
      "A 22-year-old man notices patches on the upper trunk that become more obvious after tanning.",
      "They are hypopigmented with very fine scale and mild itch.",
      "KOH prep shows short hyphae and spores in a spaghetti-and-meatballs pattern.",
      "The lesions recur in humid weather.",
      "No inflammation or scarring is present.",
      "This superficial fungal overgrowth is caused by Malassezia species."
    ],
    description: "Tinea versicolor is a superficial Malassezia infection that causes hypo- or hyperpigmented scaly patches on the trunk and shoulders. Topical antifungals are commonly effective, though recurrence is frequent.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::03_Microbiology::03_Mycology::*Cutaneous_Mycoses::Malassezia_Furfur",
    ankiStep2: "#AK_Step2_v12::#Subjects::Dermatology::05_Infections::Tinea_Versicolor"
  },
  {
    id: 390,
    answer: "Mastitis",
    clues:     [
      "A 29-year-old breastfeeding woman develops unilateral breast pain and fever.",
      "The affected area is red, warm, and tender.",
      "She reports cracked nipples and difficulty with latch.",
      "There is no discrete fluctuating mass.",
      "Symptoms improve with continued milk drainage and antibiotics targeting skin flora.",
      "The infection usually occurs when bacteria enter through nipple trauma during lactation."
    ],
    description: "Mastitis is inflammation and infection of breast tissue, commonly during lactation. Fever, focal breast erythema, tenderness, and risk factors such as nipple trauma support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 391,
    answer: "Whipple disease",
    clues:     [
      "A 55-year-old man presents with chronic diarrhea, weight loss, and migratory joint pain.",
      "He later develops memory problems and supranuclear ophthalmoplegia.",
      "Small bowel biopsy shows PAS-positive foamy macrophages in the lamina propria.",
      "There is fat malabsorption and low albumin.",
      "PCR identifies Tropheryma whipplei.",
      "This rare infectious disease causes multisystem involvement and malabsorption."
    ],
    description: "Whipple disease is a chronic multisystem infection causing diarrhea, weight loss, arthralgias, and sometimes CNS involvement. Diagnosis is supported by PAS-positive macrophages in the small intestine.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::09_Gastrointestinal::04_Pathology::12_Malabsorption_Syndromes::05_Whipple_disease",
    ankiStep2: "#AK_Step2_v12::#Subjects::Gastroenterology::05_Small_Intestine::Malabsorption_Syndromes::Whipple_Disease"
  },
  {
    id: 392,
    answer: "Paget Disease of the Breast / Mammary Paget Disease",
    clues:     [
      "A 62-year-old woman has chronic eczematous change of the nipple with crusting and serous discharge.",
      "Topical steroid creams have not resolved it.",
      "Exam shows unilateral nipple erosion and scaling.",
      "Biopsy reveals malignant cells within the epidermis of the nipple.",
      "Underlying ductal carcinoma is identified on imaging.",
      "This lesion should not be mistaken for simple dermatitis."
    ],
    description: "Mammary Paget disease is malignant involvement of the nipple epidermis, usually associated with underlying ductal carcinoma in situ or invasive carcinoma. It presents with chronic unilateral nipple eczema-like changes.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::15_Repro::04_Pathology::18_Vulvar_pathology::02_Neoplastic::*Extramammary_Paget_Disease",
    ankiStep2: "#AK_Step2_v12::#Subjects::Obstetrics_&_Gynecology::01_Gynecology::Breast::Mammary_Paget_Disease"
  },
  {
    id: 393,
    answer: "Atrial flutter",
    clues:     [
      "A 66-year-old man reports palpitations and mild shortness of breath.",
      "Pulse is regular at about 150 beats per minute.",
      "ECG shows a narrow-complex tachycardia.",
      "The baseline has sawtooth atrial activity in the inferior leads.",
      "Atrial rate is close to 300 beats per minute with 2-to-1 conduction.",
      "The rhythm is usually caused by a macroreentrant circuit in the right atrium."
    ],
    description: "Atrial flutter is a macroreentrant atrial tachyarrhythmia with sawtooth flutter waves, often at an atrial rate near 300 beats per minute. Two-to-one conduction commonly produces a ventricular rate near 150.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 394,
    answer: "IgA Vasculitis (Henoch-Schönlein Purpura)",
    clues:     [
      "An 8-year-old boy develops a purpuric rash on the buttocks and legs after an upper respiratory infection.",
      "He also has colicky abdominal pain and ankle swelling.",
      "Urinalysis shows hematuria.",
      "Platelet count is normal.",
      "Skin or kidney biopsy would show IgA immune complex deposition.",
      "This small-vessel vasculitis is common in children."
    ],
    description: "IgA vasculitis causes palpable purpura, arthralgia, abdominal pain, and renal involvement, usually after a URI in children. It is mediated by IgA immune complex deposition.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::07_Cardiovascular::04_Pathology::*Vasculitides::Small_Vessel::Henoch-Schonlein_Purpura",
    ankiStep2: "#AK_Step2_v12::#Subjects::Cardiology::12_Vascular_Pathology::Vasculitis::Henoch_Schonlein_Purpura"
  },
  {
    id: 395,
    answer: "3rd Degree AV Block (Complete Heart Block)",
    clues:     [
      "A 78-year-old man presents with syncope and fatigue.",
      "His pulse is slow and regular at 32 per minute.",
      "ECG shows P waves and QRS complexes occurring independently of each other.",
      "A junctional escape rhythm maintains perfusion.",
      "He has a history of ischemic heart disease.",
      "This rhythm reflects complete failure of atrioventricular conduction."
    ],
    description: "Third-degree AV block is complete heart block with AV dissociation. Patients may present with bradycardia, syncope, or heart failure symptoms and usually require pacing.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::07_Cardiovascular::03_Physiology::14_Electrocardiogram::*ECG_Tracings::3rd_Degree_AV_Block",
    ankiStep2: "#AK_Step2_v12::#Subjects::Cardiology::10_Arrhythmias::AV_Block::3rd_Degree"
  },
  {
    id: 396,
    answer: "Geographic tongue",
    clues:     [
      "A 28-year-old woman attends a routine check-up and is alarmed to find irregular red and white patches on her tongue.",
      "She has noticed them before but they change shape and location over days to weeks.",
      "There is mild sensitivity to spicy foods but otherwise no pain.",
      "Examination reveals well-demarcated areas of erythema with irregular serpiginous white borders on the dorsal and lateral tongue.",
      "The pattern has completely changed at the two-week review, and no lesion is present in the same location.",
      "The characteristic migratory appearance with desquamation of filiform papillae and a surrounding white keratotic border confirms a benign condition."
    ],
    description: "Geographic tongue (benign migratory glossitis) is a benign, idiopathic inflammatory condition of the tongue characterised by migratory areas of denuded filiform papillae with a surrounding white margin. It is often asymptomatic but may cause sensitivity. No treatment is required; reassurance is the primary intervention.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 397,
    answer: "Scleroderma (Systemic Sclerosis)",
    clues:     [
      "A 47-year-old woman presents with Raynaud phenomenon and progressively tight skin on the fingers.",
      "She has reflux symptoms and difficulty swallowing solids.",
      "Exam shows sclerodactyly and telangiectasias.",
      "Nailfold capillaroscopy is abnormal.",
      "Autoantibody testing shows a positive ANA.",
      "This connective tissue disease causes fibrosis of skin and internal organs."
    ],
    description: "Systemic sclerosis is an autoimmune fibrosing disorder that causes vascular dysfunction and progressive fibrosis of skin and internal organs. Manifestations vary from limited cutaneous disease to diffuse multiorgan involvement.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::11_Musculoskeletal_Skin_and_Connective_Tissue::02_Pathology::35_Scleroderma",
    ankiStep2: "#AK_Step2_v12::#Subjects::Immunology_&_Pathology::02_Immunology::Autoimmune_Disorders::Scleroderma"
  },
  {
    id: 398,
    answer: "Actinomycosis",
    clues:     [
      "A 45-year-old man presents with a painful, slowly enlarging swelling of the jaw and lower face.",
      "He has had poor dental hygiene with recent tooth extraction.",
      "Exam shows indurated tissue with sinus tract drainage and granulation tissue.",
      "Discharge contains yellowish-white particles called sulfur granules.",
      "Culture on anaerobic media grows branching gram-positive rods.",
      "This chronic suppurative infection requires prolonged IV penicillin followed by oral amoxicillin."
    ],
    description: "Actinomycosis is a chronic suppurative infection caused by Actinomyces israelii, an oral anaerobe. It causes induration and sinus tracts often in the jaw or lung, with characteristic sulfur granules in drainage.",
    ankiStep1: "#AK_Step1_v12::#Bootcamp::Microbiology::11_Non_-Lactose_Fermenting_Gram_Negative_Bacilli::05_Yersinia_Pestis",
    ankiStep2: ""
  },
  {
    id: 399,
    answer: "Delusional disorder",
    clues:     [
      "A 55-year-old man is referred by his GP at the insistence of his family after he installed CCTV throughout his home and filed multiple police reports claiming his neighbour is orchestrating a campaign to destroy his reputation.",
      "He has constructed detailed written records of alleged incidents spanning two years and presents them coherently during the interview.",
      "Aside from the fixed belief about his neighbour, his thinking is logical and there are no hallucinations, disorganised speech, or negative symptoms.",
      "He continues to work full-time and his social functioning is preserved outside the area of the delusion.",
      "His family report that the belief is unshakeable and no amount of evidence alters it.",
      "His presentation is characterised by one or more non-bizarre delusions for at least one month, without the broader psychopathology of schizophrenia and without mood disorder accounting for the symptoms."
    ],
    description: "Delusional disorder is characterised by the presence of one or more non-bizarre delusions for at least one month, with relatively preserved functioning outside the delusional domain and no prominent hallucinations or disorganised features. It is distinct from schizophrenia by the absence of the broader syndrome. Antipsychotics may reduce distress; establishing a therapeutic alliance is the clinical priority.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 400,
    answer: "Obstructive Shock",
    clues:     [
      "A 52-year-old woman presents with acute hypotension, tachycardia, and elevated JVP.",
      "She had sudden-onset pleuritic chest pain and dyspnea.",
      "ECG shows sinus tachycardia and right heart strain pattern.",
      "Bedside echocardiography reveals acute right ventricular dilation.",
      "Computed tomography confirms bilateral pulmonary emboli.",
      "This form of shock results from mechanical obstruction to cardiac output rather than pump failure or volume loss."
    ],
    description: "Obstructive shock occurs when mechanical obstruction prevents effective cardiac output, as in massive pulmonary embolism, tension pneumothorax, or cardiac tamponade. It presents with hypotension, elevated JVP, and poor perfusion.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::03_Microbiology::06_Systems::08_Osteomyelitis",
    ankiStep2: "#AK_Step2_v12::#FirstAid::08_MSK::01_Whole_Body::08_Osteomyelitis"
  },
  {
    id: 401,
    answer: "Hyperosmolar hyperglycemic state (HHS)",
    clues:     [
      "A 68-year-old man is found confused at home after several days of poor fluid intake.",
      "He has been urinating frequently and became progressively more lethargic.",
      "Labs show glucose of 832 mg/dL, sodium of 158 mEq/L, and serum osmolality of 385 mOsm/L.",
      "Venous pH is 7.32 with no significant anion gap acidosis.",
      "Urine ketones are negative or only faintly positive.",
      "This hyperglycemic crisis lacks severe acidosis and ketosis, distinguishing it from diabetic ketoacidosis."
    ],
    description: "HHS is a severe hyperglycemic emergency with profound hyperglycemia, hyperosmolality, and dehydration but minimal ketosis. It occurs typically in older patients and requires careful fluid and insulin management.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 402,
    answer: "Hypertensive emergency",
    clues:     [
      "A 55-year-old man presents with severe headache, chest discomfort, and confusion.",
      "Blood pressure is 232/128 mmHg on repeated measurements.",
      "Fundoscopy shows papilledema.",
      "Labs show rising creatinine and urinalysis shows red blood cell casts.",
      "ECG suggests left ventricular strain.",
      "The severe pressure elevation is accompanied by acute target-organ injury."
    ],
    description: "Hypertensive emergency is severe blood pressure elevation with acute target-organ damage such as encephalopathy, renal injury, myocardial ischemia, or pulmonary edema. It requires controlled blood pressure reduction with intravenous agents.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 403,
    answer: "Bacterial parotitis",
    clues:     [
      "A 61-year-old postoperative man develops acute unilateral parotid swelling and severe pain.",
      "He has fever and purulent material expressing from the parotid duct.",
      "He was on prolonged nil per os with inadequate hydration.",
      "Exam shows significant tenderness over the affected gland and induration.",
      "Ultrasonography shows hypoechoic areas suggesting abscess formation.",
      "The classic predisposition is poor oral hygiene, dehydration, and failure to stimulate salivary flow."
    ],
    description: "Bacterial parotitis, typically caused by Staphylococcus aureus, presents with acute parotid swelling, fever, and purulent duct drainage. Risk factors include dehydration, poor oral hygiene, and postoperative state.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 404,
    answer: "Iodine-deficiency hypothyroidism",
    clues:     [
      "A 35-year-old woman from a region with no iodized salt reports fatigue, weight gain, and cold intolerance.",
      "She has a visible goiter and coarse dry hair.",
      "Labs show elevated TSH of 18 mIU/L and free T4 of 0.6 ng/dL.",
      "Thyroid peroxidase antibodies are negative, arguing against autoimmune disease.",
      "Urinary iodine is markedly decreased at 12 mcg/L.",
      "This is the most common cause of preventable intellectual disability worldwide."
    ],
    description: "Iodine deficiency causes hypothyroidism and goiter and is the most common preventable cause of intellectual disability globally. Low urinary iodine and negative thyroid autoantibodies help distinguish it from autoimmune thyroiditis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 405,
    answer: "Verrucae (Warts)",
    clues:     [
      "A 13-year-old boy has several rough bumps on his fingers.",
      "The lesions are firm, hyperkeratotic, and interrupt normal skin lines.",
      "Tiny black dots are visible on the surface after paring.",
      "He bites his nails and has similar lesions near the nail folds.",
      "The bumps slowly spread by autoinoculation.",
      "The benign epidermal growths are caused by human papillomavirus infection."
    ],
    description: "Verrucae, or common warts, are caused by human papillomavirus infection. They are rough hyperkeratotic papules that can show thrombosed capillaries as black dots.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 406,
    answer: "Subacute Combined Degeneration",
    clues:     [
      "A 58-year-old man with pernicious anemia develops progressive lower extremity weakness and paresthesias.",
      "He walks with a wide-based unsteady gait and has difficulty with fine motor tasks.",
      "Exam shows loss of proprioception and vibration sense below the knees with hyperreflexia.",
      "He has positive Romberg sign and upgoing plantars.",
      "MRI spine shows signal abnormality in the dorsal and lateral columns.",
      "The pathology reflects demyelination of both corticospinal and dorsal column tracts."
    ],
    description: "Subacute combined degeneration results from vitamin B12 deficiency and affects both dorsal columns and corticospinal tracts. Patients develop sensory ataxia, weakness, and hyperreflexia, and early B12 replacement is critical to limit permanent injury.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 407,
    answer: "Testicular Sertoli Cell Tumor",
    clues:     [
      "A 27-year-old man notices a painless testicular mass.",
      "Hormone levels show elevated estrogen effect with gynecomastia.",
      "Tumor markers AFP and beta-hCG are not elevated.",
      "Pathology reveals sex cord-stromal cells resembling seminiferous tubule support cells.",
      "Most tumors are benign.",
      "This neoplasm arises from Sertoli cells rather than germ cells."
    ],
    description: "Sertoli cell tumors are uncommon testicular sex cord-stromal tumors that may secrete estrogen and cause gynecomastia. Most are benign, but some can behave malignantly.",
    ankiStep1: "#AK_Step1_v12::#Physeo::11_Pathology::09_Reproductive_Pathology::03_Testicular_Tumors",
    ankiStep2: ""
  },
  {
    id: 408,
    answer: "Nursemaid's elbow",
    clues:     [
      "A 2-year-old girl refuses to use her arm after being pulled up by the hand.",
      "She holds the elbow slightly flexed and the forearm pronated.",
      "There is no swelling, bruising, or focal bony tenderness.",
      "Radiographs are unnecessary when the history and exam are classic.",
      "The child immediately uses the arm after a reduction maneuver.",
      "The injury is caused by subluxation of the radial head under the annular ligament."
    ],
    description: "Nursemaid's elbow is radial head subluxation after axial traction on a young child's arm. Children hold the arm pronated and avoid use, with rapid recovery after reduction.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 409,
    answer: "Cryptosporidiosis",
    clues:     [
      "A 36-year-old man with advanced HIV presents with profuse watery diarrhea and weight loss.",
      "He recently drank untreated water while camping.",
      "Stool microscopy with acid-fast staining reveals oocysts.",
      "There is no blood in the stool.",
      "Symptoms are self-limited in healthy hosts but can be chronic in immunocompromised patients.",
      "This protozoan is transmitted by ingestion of contaminated water."
    ],
    description: "Cryptosporidium causes watery diarrhea, especially in patients with AIDS or other immunocompromising conditions. Infection is commonly waterborne and diagnosed by stool antigen testing or acid-fast stain.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::03_Microbiology::04_Parasitology::01_Protozoa-gastrointestinal_infections::*Cryptosporidium",
    ankiStep2: "#AK_Step2_v12::#Subjects::Microbiology::04_Parasites::01_Intestinal_Protozoa::Cryptosporidium"
  },
  {
    id: 410,
    answer: "Lactose intolerance",
    clues:     [
      "A 23-year-old woman has bloating, crampy abdominal pain, and loose stools after milkshakes.",
      "Symptoms improve when she avoids dairy.",
      "There is no weight loss or blood in the stool.",
      "Hydrogen breath testing is positive.",
      "Celiac testing is negative.",
      "This condition results from deficiency of brush-border lactase."
    ],
    description: "Lactose intolerance is caused by reduced lactase activity in the small intestine, leading to osmotic diarrhea and gas after dairy ingestion. Management centers on dietary modification and lactase supplementation.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::01_Biochem::06_Metabolism::21_Lactase_deficiency::*Lactose_Intolerance",
    ankiStep2: "#AK_Step2_v12::#Subjects::Gastroenterology::05_Small_Intestine::Malabsorption_Syndromes::Lactose_Intolerance"
  },
  {
    id: 411,
    answer: "Functional dyspepsia",
    clues:     [
      "A 39-year-old woman has recurrent upper abdominal discomfort for six months.",
      "She feels full quickly after small meals.",
      "Symptoms include post-meal bloating and intermittent nausea.",
      "There is no weight loss, vomiting, anemia, bleeding, or progressive swallowing difficulty.",
      "Upper endoscopy and routine labs are normal.",
      "The chronic upper gastrointestinal symptoms persist without structural disease explaining them."
    ],
    description: "Functional dyspepsia causes chronic epigastric discomfort, early satiety, postprandial fullness, or nausea without structural disease on evaluation. Alarm features should prompt further assessment.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 412,
    answer: "Botulism",
    clues:     [
      "A 38-year-old woman develops blurred vision, dysarthria, and dry mouth after eating home-canned vegetables.",
      "Weakness descends from cranial nerves to the arms and then legs.",
      "Sensation remains intact and fever is absent.",
      "Pupils are dilated and poorly reactive.",
      "She develops respiratory compromise.",
      "The toxin blocks acetylcholine release at the neuromuscular junction."
    ],
    description: "Botulism causes a symmetric descending flaccid paralysis due to presynaptic inhibition of acetylcholine release. Foodborne botulism follows ingestion of preformed toxin, while infant botulism follows ingestion of spores.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::03_Microbiology::02_Clinical_Bacteriology::15_Clostridia::02_Clostridium_botulinum",
    ankiStep2: "#AK_Step2_v12::#Subjects::Microbiology::01_Bacteria::02_Gram_Positive_Bacilli::Clostridium_Botulinum"
  },
  {
    id: 413,
    answer: "Diamond-Blackfan Anemia",
    clues:     [
      "A 5-month-old infant is evaluated for pallor and poor feeding.",
      "CBC shows severe macrocytic anemia with reticulocytopenia.",
      "White cell and platelet counts are normal.",
      "Bone marrow demonstrates marked reduction of erythroid precursors.",
      "Physical exam reveals thumb abnormalities.",
      "This congenital pure red cell aplasia often presents in early infancy."
    ],
    description: "Diamond-Blackfan anemia is a congenital ribosomopathy causing pure red cell aplasia, macrocytic anemia, and congenital anomalies. Many patients require steroids or transfusion support.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::10_Hematology_and_Oncology::04_Pathology::08_Macrocytic_anemias::*Nonmegaloblastic_Macrocytic_Anemia::Diamond-Blackfan",
    ankiStep2: "#AK_Step2_v12::#FirstAid::12_Pediatrics::10_Pediatric_Hematology::01_Diamond-Blackfan_Anemia"
  },
  {
    id: 414,
    answer: "Bartholin gland cyst",
    clues:     [
      "A 33-year-old woman notices a painless lump near the vaginal opening.",
      "The swelling is unilateral and located at the posterolateral introitus.",
      "It has slowly enlarged over several weeks.",
      "There is no fever, erythema, or severe tenderness.",
      "Exam shows a soft fluctuant mass without purulent drainage.",
      "The lesion forms when the duct of a vestibular mucus-secreting gland becomes obstructed."
    ],
    description: "Bartholin gland cyst is a mucus-filled swelling from obstruction of the Bartholin duct. It presents as a unilateral posterolateral introital mass and may become painful if infected.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 415,
    answer: "Portal hypertension",
    clues:     [
      "A 59-year-old man with cirrhosis presents with abdominal distension and hematemesis.",
      "Exam shows ascites, splenomegaly, and caput medusae.",
      "Endoscopy reveals esophageal varices.",
      "Platelet count is low from splenic sequestration.",
      "The hepatic venous pressure gradient is elevated.",
      "This syndrome results from increased resistance to portal blood flow, most often from cirrhosis."
    ],
    description: "Portal hypertension produces varices, splenomegaly, ascites, and collateral venous circulation. Cirrhosis is the most common cause, though prehepatic and posthepatic causes also exist.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::09_Gastrointestinal::04_Pathology::31_Cirrhosis_and_portal_hypertension::*Portal_Hypertension",
    ankiStep2: ""
  },
  {
    id: 416,
    answer: "Coarctation of the Aorta",
    clues:     [
      "A 15-year-old boy is referred for hypertension found on sports screening.",
      "Blood pressure is higher in the arms than in the legs.",
      "Femoral pulses are delayed and weak.",
      "A systolic murmur is heard over the back.",
      "Chest x-ray shows rib notching.",
      "This congenital narrowing of the aorta is associated with bicuspid aortic valve and Turner syndrome."
    ],
    description: "Coarctation of the aorta causes upper-extremity hypertension with diminished lower-extremity perfusion. Long-standing disease can cause collateral intercostal enlargement and rib notching.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::07_Cardiovascular::04_Pathology::01_Congenital_Heart_Diseases::02_Left-to-right_Shunts::*Coarctation_of_the_Aorta",
    ankiStep2: "#AK_Step2_v12::#FirstAid::12_Pediatrics::04_Congenital_Heart_Disease::05_Coarctation_of_the_Aorta"
  },
  {
    id: 417,
    answer: "Dilated cardiomyopathy",
    clues:     [
      "A 49-year-old man has progressive exertional dyspnea and leg swelling.",
      "He has a long history of heavy alcohol use.",
      "Exam shows displaced apical impulse, S3 gallop, and bibasilar crackles.",
      "Echocardiography shows enlarged ventricular chambers with reduced systolic function.",
      "Coronary angiography does not show obstructive coronary disease.",
      "The condition causes impaired pump function from ventricular dilation and systolic failure."
    ],
    description: "Dilated cardiomyopathy causes ventricular dilation with reduced systolic function and heart failure symptoms. Causes include alcohol, viral injury, genetic disease, toxins, and idiopathic disease.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 418,
    answer: "Obsessive-Compulsive Personality Disorder (OCPD)",
    clues:     [
      "A 41-year-old accountant is preoccupied with lists, schedules, and perfect order.",
      "He spends so much time trying to make work flawless that deadlines are missed.",
      "Coworkers describe him as rigid and inflexible.",
      "He does not report intrusive unwanted thoughts or ritual behaviors that relieve anxiety.",
      "Relationships suffer because he insists others follow his exact way of doing things.",
      "This personality disorder is characterized by perfectionism and control rather than true obsessions and compulsions."
    ],
    description: "OCPD involves pervasive perfectionism, orderliness, and control at the expense of flexibility and efficiency. Unlike OCD, behaviors are generally ego-syntonic and not driven by intrusive obsessions.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::13_Psych::02_Pathology::26_Personality_disorders::03_Cluster_C::*Cluster_C_Personality_Disorders::Obsessive_Compulsive_Personality_Disorder",
    ankiStep2: "#AK_Step2_v12::#FirstAid::13_Psych::09_Personality_Disorders::01_Personality_Disorders"
  },
  {
    id: 419,
    answer: "Central diabetes insipidus",
    clues:     [
      "A 30-year-old woman develops severe polyuria and polydipsia after transsphenoidal pituitary surgery.",
      "Serum sodium rises and urine remains very dilute.",
      "Water deprivation fails to concentrate the urine.",
      "Desmopressin produces a marked increase in urine osmolality.",
      "There is no glucosuria.",
      "This condition results from deficient ADH production or release."
    ],
    description: "Central diabetes insipidus is caused by insufficient ADH secretion from the hypothalamus or posterior pituitary. Patients excrete large volumes of dilute urine and respond to desmopressin.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::08_Endocrine::04_Pathology::02_Primary_polydipsia_and_diabetes_insipidus::*Central_Diabetes_Insipidus",
    ankiStep2: "#AK_Step2_v12::#Subjects::Endocrinology::02_Pituitary_Gland::Posterior_Pituitary::Diabetes_Insipidus::Central_Diabetes_Insipidus"
  },
  {
    id: 420,
    answer: "Medication-related osteonecrosis of the jaw",
    clues:     [
      "A 70-year-old woman with breast cancer metastatic to bone presents with jaw pain and an area of exposed bone in the upper jaw.",
      "She has been receiving IV zoledronic acid infusions for the past three years.",
      "She had a premolar extraction eight weeks ago; the socket has not healed.",
      "Examination reveals exposed, necrotic bone in the upper left posterior region with surrounding erythema.",
      "CT of the jaw shows cortical destruction and a sequestrum at the extraction site.",
      "There is no evidence of local tumour recurrence, and the clinical criteria — exposed jaw bone persisting for more than eight weeks in a patient receiving antiresorptive therapy — confirm the diagnosis."
    ],
    description: "Medication-related osteonecrosis of the jaw (MRONJ) is exposed or necrotic jaw bone persisting for more than eight weeks in a patient taking antiresorptive or antiangiogenic agents. Bisphosphonates suppress osteoclast-mediated bone remodelling, impairing healing. Prevention through dental optimisation before commencing treatment and avoidance of invasive procedures is paramount.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 421,
    answer: "Congenital Muscular Torticollis",
    clues:     [
      "A 2-month-old infant persistently tilts the head to one side.",
      "The chin rotates to the opposite shoulder.",
      "Exam finds a firm palpable mass within the sternocleidomastoid muscle.",
      "Range of motion is limited but neurologic exam is otherwise normal.",
      "Pregnancy and delivery were complicated by breech presentation.",
      "This condition is commonly managed with stretching and physical therapy."
    ],
    description: "Congenital muscular torticollis results from shortening or fibrosis of the sternocleidomastoid muscle, often related to intrauterine positioning or birth trauma. Early stretching therapy is usually effective.",
    ankiStep1: "",
    ankiStep2: "#AK_Step2_v12::#Subjects::Pulmonology::01_ENT::Neck::Torticollis"
  },
  {
    id: 422,
    answer: "Epididymitis",
    clues:     [
      "A 24-year-old man presents with gradually worsening unilateral scrotal pain and dysuria.",
      "Exam shows tenderness and swelling posterior to the testis.",
      "The cremasteric reflex is present.",
      "Symptoms developed over days rather than beginning abruptly, and STI testing supports an infectious cause.",
      "Urine testing is positive for chlamydia.",
      "This is a common cause of subacute scrotal pain in sexually active men."
    ],
    description: "Epididymitis causes gradual scrotal pain and swelling, often from sexually transmitted infection in younger men or enteric organisms in older men. It must be distinguished from testicular torsion.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::15_Repro::04_Pathology::41_Epididymitis_and_orchitis",
    ankiStep2: "#AK_Step2_v12::#Subjects::Nephrology_&_Urology::03_Male_Reproduction::Scrotum::Epididymitis"
  },
  {
    id: 423,
    answer: "Reactive attachment disorder",
    clues:     [
      "A 6-year-old boy adopted at age 4 from institutional care is referred for behavioural assessment.",
      "His adoptive parents describe him as emotionally withdrawn and rarely seeking comfort even when distressed or hurt.",
      "When upset, he does not turn to either parent for reassurance and appears confused or frightened when comforted.",
      "His early history includes at least two years in an understaffed orphanage with inconsistent caregiving and minimal individual attention.",
      "He does not have intellectual disability, and his development in language and play-based learning is age-appropriate.",
      "A clinical assessment confirms a consistent pattern of inhibited, emotionally withdrawn behaviour toward adult caregivers, attributable to a history of social neglect and insufficient opportunity to form selective attachments."
    ],
    description: "Reactive attachment disorder is a childhood condition arising from severe early neglect or frequent change of caregivers, characterised by inhibited, withdrawn behaviour toward attachment figures and disturbed emotional regulation. It is not explained by autism spectrum disorder. Evidence-based intervention focuses on supporting sensitive and responsive caregiving within the adoptive or foster family.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 424,
    answer: "Tic Disorder",
    clues:     [
      "A 10-year-old boy has repeated blinking and throat-clearing that worsen with stress.",
      "He describes a buildup of inner tension before the movements.",
      "He can suppress them briefly during class but then they return.",
      "Neurologic exam is normal.",
      "Symptoms wax and wane over time.",
      "This disorder involves sudden recurrent nonrhythmic motor or vocal behaviors."
    ],
    description: "Tic disorders cause brief stereotyped motor movements or vocalizations that can often be suppressed transiently. Severity often fluctuates, and symptoms commonly worsen with anxiety or excitement.",
    ankiStep1: "#AK_Step1_v12::#FirstAid::13_Psych::02_Pathology::03_Childhood_and_early-onset_disorders::11_Tourette_syndrome",
    ankiStep2: "#AK_Step2_v12::#FirstAid::13_Psych::01_Childhood_and_Adolescent_Disorders::05_Tourette_Syndrome"
  },
  {
    id: 425,
    answer: "Retropharyngeal Abscess",
    clues:     [
      "A 4-year-old boy presents with fever, sore throat, and severe neck stiffness.",
      "He refuses to swallow and has a muffled voice.",
      "Neck flexion causes discomfort but meningismus is absent.",
      "Lateral neck radiograph shows widening of the retropharyngeal space.",
      "CT with contrast reveals an enhancing collection posterior to the pharynx.",
      "This deep neck infection can cause airway compromise and descending mediastinitis if untreated."
    ],
    description: "Retropharyngeal abscess is a deep-space neck infection that presents with fever, sore throat, and neck stiffness. It requires prompt imaging, IV antibiotics, and often drainage to prevent airway compromise and mediastinitis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 426,
    answer: "Acute COPD exacerbation",
    clues:     [
      "A 68-year-old man with a long smoking history presents with worsening breathlessness.",
      "He has increased cough and thicker sputum over the past three days.",
      "Exam shows diffuse wheezing, prolonged expiration, and use of accessory muscles.",
      "Oxygen saturation is low, and arterial blood gas shows hypercapnia.",
      "Chest radiograph shows hyperinflation without focal consolidation.",
      "The episode represents acute worsening of chronic airflow limitation, often triggered by infection."
    ],
    description: "Acute COPD exacerbation is a worsening of baseline dyspnea, cough, and sputum in chronic obstructive lung disease. Infection and environmental exposure are common triggers, and severe cases can cause hypercapnic respiratory failure.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 427,
    answer: "Pityriasis Rosea",
    clues:     [
      "A 22-year-old woman develops an asymptomatic scaly rash that began with a solitary lesion on her trunk.",
      "Several days later, multiple smaller lesions appear in a Christmas-tree distribution on her trunk and proximal limbs.",
      "Each lesion has a collarette scale.",
      "She recalls a mild viral prodrome 1 to 2 weeks earlier.",
      "KOH preparation and fungal culture are negative.",
      "The rash typically resolves spontaneously over 6 to 8 weeks."
    ],
    description: "Pityriasis rosea is a self-limited papulosquamous eruption that classically begins with a herald patch followed by secondary lesions with collarette scale in a Christmas-tree distribution. Supportive care is usually sufficient.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 428,
    answer: "Focal Impaired Awareness Seizure",
    clues:     [
      "A 28-year-old man reports episodes of losing awareness for 1 to 2 minutes without warning.",
      "He has automatisms such as lip smacking and hand fumbling during events.",
      "Witnesses describe him staring blankly and being unresponsive.",
      "He is postictal and confused for several minutes after each event.",
      "MRI reveals left mesial temporal sclerosis.",
      "This seizure type originates in a focal brain region, often the temporal lobe."
    ],
    description: "Focal impaired awareness seizures originate in a localized brain region, most commonly the temporal lobe. Patients have impaired awareness and automatisms, often followed by a postictal period.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 429,
    answer: "Basal cell carcinoma",
    clues:     [
      "A 71-year-old fair-skinned man has a slowly enlarging papule on the nose.",
      "The lesion is pearly with rolled borders.",
      "Small surface blood vessels are visible.",
      "It occasionally bleeds after shaving but does not heal.",
      "Biopsy shows nests of basaloid cells with peripheral palisading.",
      "This sun-associated skin cancer is locally invasive but rarely metastasizes."
    ],
    description: "Basal cell carcinoma is the most common skin cancer and usually appears on sun-exposed skin as a pearly papule with telangiectasias and rolled borders. It is locally destructive but rarely metastatic.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 430,
    answer: "Hypomanic Episode",
    clues:     [
      "A 26-year-old woman reports 5 days of unusually elevated mood, decreased need for sleep, and rapid speech.",
      "She started multiple new projects impulsively and spent money excessively.",
      "Her friends notice her behavior is more outgoing than usual but not severe enough to cause marked dysfunction.",
      "She denies hallucinations or delusions.",
      "The episode is clearly distinct from her baseline mood and functioning.",
      "This represents the hallmark elevated mood state of bipolar II disorder."
    ],
    description: "A hypomanic episode is a distinct period of elevated or expansive mood lasting at least 4 days with decreased need for sleep, increased goal-directed activity, and poor judgment. It is less severe than mania and helps define bipolar II disorder.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 431,
    answer: "CN VI Palsy (Abducens Nerve Palsy)",
    clues:     [
      "A 54-year-old man develops horizontal diplopia that worsens when looking to the right.",
      "The right eye fails to abduct fully on rightward gaze.",
      "He has intact vertical eye movements and normal pupillary responses.",
      "MRI brain and orbits shows no structural lesion.",
      "He has a history of diabetes and hypertension.",
      "This cranial nerve has a long intracranial course and is vulnerable to microvascular disease."
    ],
    description: "CN VI palsy causes failure of ipsilateral eye abduction and horizontal diplopia that is worst in the direction of attempted gaze. It is a common ocular motor palsy and is often microvascular in older patients.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 432,
    answer: "Diaper dermatitis",
    clues:     [
      "A 10-month-old infant has a red rash in the diaper area.",
      "The rash involves convex surfaces that contact the diaper.",
      "Skin folds are relatively spared.",
      "Symptoms worsened after several days of diarrhea.",
      "There are no satellite pustules.",
      "The eruption is caused by irritant exposure from moisture, friction, urine, and stool."
    ],
    description: "Diaper dermatitis is an irritant contact dermatitis caused by moisture, friction, urine, and stool exposure. It typically affects convex diaper-contact surfaces and spares skin folds.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 433,
    answer: "Leiomyoma (Fibroid)",
    clues:     [
      "A 38-year-old woman reports progressively heavier menstrual bleeding and pelvic pressure.",
      "She has become anemic from chronic blood loss.",
      "Pelvic exam reveals an enlarged firm uterus.",
      "Transvaginal ultrasound shows multiple well-circumscribed lesions in the myometrium.",
      "The tumors are benign smooth muscle proliferations without cytologic atypia.",
      "This is the most common pelvic tumor in women of reproductive age."
    ],
    description: "Uterine leiomyomas are benign smooth muscle tumors that can cause menorrhagia, pelvic pressure, and infertility. They are estrogen responsive and are the most common pelvic neoplasm in women.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 434,
    answer: "Berylliosis",
    clues:     [
      "A 52-year-old aerospace engineer presents with progressive dyspnea and cough.",
      "He worked with beryllium-containing materials for 20 years without consistent respiratory protection.",
      "Beryllium lymphocyte proliferation testing is positive.",
      "Chest imaging shows bilateral upper-lobe predominant nodules and hilar adenopathy.",
      "Lung biopsy confirms noncaseating granulomas.",
      "This occupational disease results from a hypersensitivity reaction to inhaled beryllium."
    ],
    description: "Chronic berylliosis is an occupational hypersensitivity disease causing granulomatous lung inflammation. It resembles sarcoidosis but is distinguished by exposure history and a positive beryllium lymphocyte proliferation test.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 435,
    answer: "Gastroparesis",
    clues:     [
      "A 48-year-old woman with long-standing diabetes reports nausea and early satiety.",
      "She vomits undigested food several hours after meals.",
      "Abdominal pain is mild, and there is no mechanical obstruction on endoscopy.",
      "Glucose control has been poor for years.",
      "Gastric emptying study shows delayed emptying of a solid meal.",
      "The symptoms result from impaired stomach motility due to autonomic neuropathy."
    ],
    description: "Gastroparesis is delayed gastric emptying without mechanical obstruction. Diabetes-related autonomic neuropathy is a common cause, producing early satiety, nausea, bloating, and vomiting of retained food.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 436,
    answer: "Iliotibial Band Syndrome",
    clues:     [
      "A 31-year-old distance runner develops sharp lateral knee pain during long runs.",
      "The pain is maximal over the lateral femoral condyle.",
      "He has no knee effusion or joint-line tenderness.",
      "Ober test reproduces his pain.",
      "The discomfort results from friction of the iliotibial band over the lateral femoral condyle during knee motion.",
      "This is a common overuse injury in runners with weak hip abductors."
    ],
    description: "Iliotibial band syndrome presents with lateral knee pain during running and results from friction over the lateral femoral condyle. Treatment centers on activity modification, stretching, and hip strengthening.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 437,
    answer: "Bipolar II Disorder",
    clues:     [
      "A 24-year-old woman has multiple depressive episodes with anhedonia, low energy, and suicidal thoughts.",
      "Between depressive phases, she has periods of elevated mood with decreased sleep and impulsive behavior.",
      "These elevated periods last 4 to 6 days but do not cause severe functional impairment or hospitalization.",
      "She has never experienced full mania.",
      "Family history is significant for mood disorders.",
      "This disorder is defined by recurrent depression alternating with hypomanic episodes."
    ],
    description: "Bipolar II disorder is characterized by recurrent major depressive episodes alternating with hypomanic episodes. Patients often present during depression, so careful history is needed to identify the less dramatic hypomanic phases.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 438,
    answer: "Uterine prolapse",
    clues:     [
      "A 67-year-old woman reports pelvic pressure and a bulge sensation.",
      "Symptoms worsen after standing for long periods.",
      "She has had four vaginal deliveries.",
      "Exam shows descent of the cervix toward the vaginal opening with straining.",
      "Urinary hesitancy and incomplete emptying are also present.",
      "The disorder reflects weakening of pelvic support structures allowing the uterus to descend."
    ],
    description: "Uterine prolapse is descent of the uterus due to pelvic floor support weakness. Vaginal deliveries, aging, pelvic pressure, bulge sensation, and visible cervical descent support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 439,
    answer: "Anaplastic Thyroid Carcinoma",
    clues:     [
      "A 67-year-old woman with a long-standing thyroid nodule develops rapid enlargement of the neck and stridor.",
      "She has dysphagia, hoarseness, and weight loss.",
      "Biopsy shows loss of follicular differentiation with pleomorphic spindle cells and numerous mitoses.",
      "The tumor is rapidly invasive into adjacent structures.",
      "Imaging shows local invasion of the trachea and surrounding soft tissue.",
      "This is the most aggressive thyroid malignancy and carries a very poor prognosis."
    ],
    description: "Anaplastic thyroid carcinoma is a highly aggressive thyroid cancer that presents with rapidly enlarging neck mass, airway symptoms, and local invasion. Prognosis is poor despite multimodal therapy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 440,
    answer: "Carbon Monoxide Poisoning",
    clues:     [
      "A 34-year-old man is found unconscious in a running car in a closed garage.",
      "He has altered mental status, headache, and confusion.",
      "Carboxyhemoglobin level is 28%.",
      "Pulse oximetry reads normal despite tissue hypoxia.",
      "He is referred for hyperbaric oxygen therapy.",
      "Carboxyhemoglobin impairs oxygen delivery despite apparently normal oxygen saturation on pulse oximetry."
    ],
    description: "Carbon monoxide poisoning causes carboxyhemoglobin formation, impairing oxygen delivery and shifting the oxygen dissociation curve leftward. Treatment is high-flow oxygen and, in severe cases, hyperbaric oxygen.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 441,
    answer: "Mitral stenosis",
    clues:     [
      "A 58-year-old woman has progressive shortness of breath and fatigue.",
      "She had untreated rheumatic fever as a teenager.",
      "A low-pitched diastolic rumble is heard best at the apex.",
      "There is an opening snap after the second heart sound.",
      "Echocardiography shows thickened valve leaflets and left atrial enlargement.",
      "The narrowed left atrioventricular valve raises left atrial pressure and predisposes to atrial arrhythmias."
    ],
    description: "Mitral stenosis is narrowing of the mitral valve, most often from rheumatic heart disease worldwide. It causes dyspnea, left atrial enlargement, atrial fibrillation risk, and a diastolic rumble with opening snap.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 442,
    answer: "Fibromuscular Dysplasia",
    clues:     [
      "A 38-year-old woman presents with difficult-to-control hypertension.",
      "She also reports episodic headache and pulsatile tinnitus.",
      "Renal artery imaging shows a beaded appearance with alternating stenosis and dilatation.",
      "She has no diabetes, smoking history, or hyperlipidemia.",
      "Carotid imaging also shows similar medium-vessel involvement.",
      "This nonatherosclerotic vasculopathy affects young to middle-aged women predominantly."
    ],
    description: "Fibromuscular dysplasia is a nonatherosclerotic arteriopathy causing alternating constrictions and dilatations in medium-sized arteries, classically the renal and carotid arteries. It is an important cause of secondary hypertension in younger women.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 443,
    answer: "Ludwig Angina",
    clues:     [
      "A 42-year-old man with poor dentition presents with fever and severe submandibular swelling.",
      "He has trismus, difficulty swallowing, and a hot-potato voice.",
      "The swelling is firm and involves both sides below the mandible.",
      "Exam shows brawny induration of the floor of the mouth.",
      "CT shows bilateral involvement of the submandibular spaces without a discrete abscess cavity.",
      "This aggressive cellulitis can rapidly progress to airway compromise."
    ],
    description: "Ludwig angina is a rapidly progressive bilateral cellulitis of the submandibular spaces, usually from an odontogenic infection. Airway protection and IV antibiotics are urgent priorities.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 444,
    answer: "Fibrous dysplasia",
    clues:     [
      "A 14-year-old girl is referred for investigation of painless facial asymmetry noticed by her parents over the past year.",
      "There are no neurological symptoms and no skin changes.",
      "Examination reveals a smooth, firm, non-tender expansion of the right zygomatic-maxillary region.",
      "CT shows an expansile lesion of the right maxilla with a characteristic ground-glass radiographic appearance and blending into surrounding bone without discrete margins.",
      "Bone biopsy demonstrates trabeculae of woven bone arranged in Chinese-letter patterns within a background of cellular connective tissue.",
      "No café-au-lait spots or endocrine abnormalities are found, consistent with monostotic disease."
    ],
    description: "Fibrous dysplasia is a benign fibro-osseous lesion in which normal medullary bone is replaced by fibrous tissue containing woven bone trabeculae, caused by a somatic GNAS1 mutation. The craniofacial skeleton is commonly affected. Monostotic disease is most common; polyostotic disease with café-au-lait spots and endocrine abnormalities characterises McCune-Albright syndrome.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 445,
    answer: "Transient Ischemic Attack (TIA)",
    clues:     [
      "A 68-year-old man experiences sudden right arm weakness and difficulty speaking for 20 minutes.",
      "The symptoms completely resolve within 1 hour.",
      "MRI brain performed the same day shows no acute infarction.",
      "He has atrial fibrillation and is not anticoagulated.",
      "Carotid ultrasound shows only mild stenosis.",
      "This transient event is an important warning sign for future stroke."
    ],
    description: "A transient ischemic attack causes brief focal neurologic dysfunction without completed infarction. It signals high short-term stroke risk and requires urgent evaluation and secondary prevention.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 446,
    answer: "Protein C/S Deficiency",
    clues:     [
      "A 28-year-old woman develops recurrent unprovoked deep venous thrombosis.",
      "She has a strong family history of venous thromboembolism.",
      "Testing performed off anticoagulation shows reduced protein C and protein S activity.",
      "There is no evidence of malignancy, antiphospholipid syndrome, or Factor V Leiden mutation.",
      "Her thromboses began in early adulthood.",
      "These natural anticoagulants are vitamin K-dependent proteins synthesized in the liver."
    ],
    description: "Inherited protein C or protein S deficiency predisposes to recurrent venous thromboembolism. These vitamin K-dependent anticoagulants normally inactivate factors Va and VIIIa, and severe deficiency can present with warfarin skin necrosis or neonatal purpura fulminans.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 447,
    answer: "Premenstrual dysphoric disorder",
    clues:     [
      "A 32-year-old woman presents with severe mood symptoms that she and her partner have noticed follow a reliable monthly pattern.",
      "During the week before her period she experiences profound irritability, sudden tearfulness, and a sense of hopelessness that she describes as far beyond typical premenstrual tension.",
      "She also reports breast tenderness, bloating, and difficulty sleeping during the same window.",
      "Her mood reliably returns to baseline within two to three days of the onset of menstruation.",
      "Two months of prospective daily symptom tracking confirms the luteal-phase onset and follicular-phase resolution.",
      "Her symptoms meet the threshold of five or more qualifying affective and physical symptoms confirmed by prospective rating, present in most menstrual cycles over the past year."
    ],
    description: "Premenstrual dysphoric disorder is a clinically significant mood disorder characterised by affective and somatic symptoms confined to the luteal phase of the menstrual cycle, confirmed by prospective daily tracking over two or more cycles. It is distinct from premenstrual syndrome by severity and functional impairment. SSRIs — used either continuously or luteal-phase-only — are first-line treatment.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 448,
    answer: "Pseudohypoparathyroidism Type 1A",
    clues:     [
      "A 6-year-old girl is short with a round face, short fourth and fifth metacarpals, and developmental delay.",
      "She has hypocalcemia and hyperphosphatemia.",
      "PTH level is elevated, indicating end-organ resistance.",
      "She does not respond to exogenous PTH with the expected rise in urinary cAMP.",
      "Her mother has similar skeletal features.",
      "This disorder involves defective Gs-alpha signaling."
    ],
    description: "Pseudohypoparathyroidism type 1A is an imprinting disorder that causes PTH resistance plus Albright hereditary osteodystrophy features such as short stature, round facies, and short metacarpals. It results from impaired Gs-alpha signaling.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 449,
    answer: "Hypertensive Heart Disease",
    clues:     [
      "A 61-year-old man with longstanding poorly controlled hypertension presents with dyspnea and fatigue.",
      "He has an S4 gallop on exam.",
      "Chest X-ray shows mild pulmonary congestion.",
      "Echocardiography demonstrates left ventricular hypertrophy with impaired diastolic function and ejection fraction greater than 50%.",
      "Coronary arteries are normal on catheterization.",
      "His syndrome results from chronic pressure overload and a stiff left ventricle."
    ],
    description: "Hypertensive heart disease causes concentric left ventricular hypertrophy and eventually diastolic dysfunction, often presenting as heart failure with preserved ejection fraction. Chronic uncontrolled hypertension is the key driver.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 450,
    answer: "Acute angle-closure glaucoma",
    clues:     [
      "A 61-year-old woman presents with sudden severe eye pain and headache.",
      "She has blurred vision and sees halos around lights.",
      "The affected eye is red, and the pupil is mid-dilated and poorly reactive.",
      "She has nausea and vomiting with the eye pain.",
      "Intraocular pressure is markedly elevated.",
      "The emergency is caused by abrupt blockage of aqueous humor outflow from the anterior chamber."
    ],
    description: "Acute angle-closure glaucoma causes sudden painful red eye, halos, blurred vision, nausea, and markedly elevated intraocular pressure. Prompt recognition is needed to prevent permanent vision loss.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 451,
    answer: "Tinea Unguium (Onychomycosis)",
    clues:     [
      "A 52-year-old man complains of discolored, thickened toenails.",
      "The nails show subungual hyperkeratosis with crumbly debris.",
      "KOH preparation of nail clippings shows branching fungal filaments.",
      "Fungal culture grows a dermatophyte.",
      "The nail gradually separates from the nail bed.",
      "Toenails are affected more commonly than fingernails."
    ],
    description: "Onychomycosis is a fungal infection of the nails causing discoloration, thickening, and subungual debris. It is often chronic, difficult to eradicate, and more common in toenails than fingernails.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 452,
    answer: "IgG4-Related Disease",
    clues:     [
      "A 58-year-old man presents with painless jaundice and abdominal discomfort.",
      "MRCP shows a stricture of the common bile duct.",
      "No gallstone or obvious malignancy is identified.",
      "Serum IgG4 level is markedly elevated.",
      "Pancreatic biopsy shows dense lymphoplasmacytic infiltrate rich in IgG4-positive plasma cells.",
      "This systemic fibroinflammatory disease can closely mimic cancer."
    ],
    description: "IgG4-related disease is a systemic fibroinflammatory disorder that can involve the pancreas, biliary tree, salivary glands, and many other organs. Autoimmune pancreatitis is a classic manifestation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 453,
    answer: "Tinea pedis",
    clues:     [
      "A 24-year-old man has itching and burning between the toes.",
      "The skin is macerated with fine scale in the fourth web space.",
      "He uses communal showers at a gym.",
      "KOH preparation from the scale shows branching septate hyphae.",
      "Toenail thickening is not present.",
      "The superficial dermatophyte infection affects the feet and often recurs in moist environments."
    ],
    description: "Tinea pedis is a dermatophyte infection of the feet, often involving interdigital spaces. Pruritus, maceration, scale, gym exposure, and hyphae on KOH support the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 454,
    answer: "Conus Medullaris Syndrome",
    clues:     [
      "A 54-year-old man presents with acute low back pain and new urinary retention.",
      "He has saddle anesthesia and reduced anal sphincter tone.",
      "Leg symptoms are bilateral and relatively symmetric.",
      "Lower extremity weakness is present but less dramatic than the sphincter dysfunction.",
      "MRI shows acute compression at the conus medullaris.",
      "This spinal emergency affects the terminal cord rather than just the lumbosacral roots."
    ],
    description: "Conus medullaris syndrome results from acute compression at the terminal spinal cord and causes early bladder, bowel, and saddle sensory symptoms. Urgent imaging and decompression are required.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 455,
    answer: "Hand, Foot, and Mouth Disease",
    clues:     [
      "A 3-year-old boy presents with fever and a rash on his hands, feet, and mouth.",
      "Exam shows small vesicles on the palms and soles and painful oral ulcers.",
      "He has only mild systemic symptoms.",
      "The illness began abruptly without lower respiratory findings.",
      "Several children at daycare have similar symptoms.",
      "An enterovirus is responsible, and the same virus occasionally causes more severe neurological complications in young children."
    ],
    description: "Hand, foot, and mouth disease is a common enteroviral exanthem in young children, most often caused by coxsackievirus. It presents with oral ulcers and a vesicular rash on the hands and feet.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 456,
    answer: "Osgood-Schlatter disease",
    clues:     [
      "A 13-year-old soccer player has anterior knee pain that worsens with running and jumping.",
      "Pain is localized over the tibial tubercle.",
      "There is no joint effusion or instability.",
      "Exam shows tenderness and mild swelling at the patellar tendon insertion.",
      "Radiographs, if obtained, may show fragmentation of the tibial tubercle.",
      "The overuse injury occurs during growth from repetitive traction at the patellar tendon insertion."
    ],
    description: "Osgood-Schlatter disease is traction apophysitis of the tibial tubercle in active adolescents. Anterior knee pain over the tibial tubercle that worsens with jumping or running is typical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 457,
    answer: "Osteopetrosis",
    clues:     [
      "An 18-month-old infant is evaluated for failure to thrive and developmental delay.",
      "She has hepatosplenomegaly and multiple fractures despite minimal trauma.",
      "Radiographs show very dense bones with loss of normal medullary spaces.",
      "She has anemia and recurrent infections.",
      "Bone marrow failure develops because normal marrow space is replaced.",
      "This inherited disorder results from nonfunctional osteoclasts."
    ],
    description: "Osteopetrosis is an inherited osteoclast dysfunction disorder that causes abnormally dense but fragile bones. Complications include marrow failure, cranial nerve compression, recurrent infections, and pathologic fractures.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 458,
    answer: "2nd Degree AV Block Type I (Mobitz I)",
    clues:     [
      "A 67-year-old man is monitored after an inferior myocardial infarction.",
      "ECG shows progressively lengthening PR intervals until a P wave is not followed by a QRS complex.",
      "The PR interval then resets and the pattern repeats.",
      "The QRS complex is narrow.",
      "He is bradycardic but asymptomatic.",
      "This benign AV nodal conduction abnormality often does not require pacing."
    ],
    description: "Mobitz I, also called Wenckebach block, shows progressively prolonging PR intervals until one atrial impulse fails to conduct. It is usually AV nodal and often benign.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 459,
    answer: "Traveler's diarrhea",
    clues:     [
      "A 23-year-old traveler develops frequent watery stools and abdominal cramps.",
      "Symptoms began one day after eating street food abroad.",
      "He has no blood in the stool and only low-grade fever.",
      "Several travel companions have similar illness.",
      "Stool testing is not required because symptoms are mild and self-limited.",
      "The syndrome is most commonly caused by enterotoxigenic Escherichia coli after contaminated food or water exposure."
    ],
    description: "Traveler's diarrhea is acute watery diarrhea after exposure to contaminated food or water during travel. Enterotoxigenic Escherichia coli is a common cause, and most mild cases are self-limited with hydration.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 460,
    answer: "Spondylolisthesis",
    clues:     [
      "A 17-year-old boy reports lower back pain that worsens with sports activity.",
      "He has tight hamstrings and a stiff-legged gait.",
      "Lumbar X-ray shows forward displacement of L5 on S1.",
      "Oblique views reveal a pars interarticularis defect.",
      "He has no bowel or bladder dysfunction.",
      "This condition reflects slippage of one vertebra on another, often after isthmic injury."
    ],
    description: "Spondylolisthesis is anterior displacement of one vertebra over another, commonly L5 on S1. In adolescents it often follows pars interarticularis defects and presents with activity-related low back pain.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 461,
    answer: "External Hemorrhoid",
    clues:     [
      "A 42-year-old man notices a painful lump at the anal verge.",
      "He has bright red bleeding with bowel movements.",
      "Exam shows a bluish, tender swelling just outside the anal verge.",
      "The thrombosed vessel is visible beneath the skin.",
      "He has significant discomfort with sitting but no systemic symptoms.",
      "This condition involves thrombosis of veins in the external hemorrhoidal plexus."
    ],
    description: "External hemorrhoids are thrombosed veins in the external hemorrhoidal plexus that present with sudden anal pain and a tender perianal lump. Most improve with conservative care, though excision can help selected patients with acute thrombosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 462,
    answer: "Placental abruption",
    clues:     [
      "A 35-year-old pregnant woman at 34 weeks develops sudden painful vaginal bleeding.",
      "Her uterus is firm and tender between contractions.",
      "She has chronic hypertension.",
      "Fetal monitoring shows recurrent late decelerations.",
      "Labs show falling fibrinogen and thrombocytopenia.",
      "The emergency is caused by premature separation of the placenta from the uterine wall."
    ],
    description: "Placental abruption is premature placental separation causing painful bleeding, uterine tenderness, and fetal distress. Hypertension, trauma, smoking, and cocaine use increase risk.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 463,
    answer: "Adenovirus Infection",
    clues:     [
      "A 6-year-old girl presents with fever, sore throat, and red watery eyes.",
      "She has bilateral conjunctival injection without purulent discharge.",
      "Exam also shows pharyngitis and tender cervical lymph nodes.",
      "Several classmates have had similar symptoms.",
      "The illness lasts about a week and improves without specific therapy.",
      "The responsible non-enveloped DNA virus is highly resistant to disinfectants and spreads efficiently in communal settings."
    ],
    description: "Adenovirus commonly causes febrile respiratory illness and can produce pharyngoconjunctival fever with sore throat and conjunctivitis. Management is generally supportive.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 464,
    answer: "Wernicke's (Receptive) Aphasia",
    clues:     [
      "A 58-year-old man has acute difficulty understanding spoken language after a stroke.",
      "He speaks fluently and rapidly but his speech is nonsensical and incoherent.",
      "He does not follow commands reliably.",
      "Repetition is impaired.",
      "He appears unaware that his speech does not make sense.",
      "MRI shows acute infarction in the dominant superior temporal lobe."
    ],
    description: "Wernicke aphasia results from damage to the dominant superior temporal lobe and causes impaired language comprehension despite fluent speech. Patients often produce fluent but meaningless output and have poor awareness of the deficit.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 465,
    answer: "Long QT syndrome",
    clues:     [
      "A 16-year-old girl faints suddenly while swimming.",
      "Her cousin died unexpectedly during exercise.",
      "Baseline ECG shows delayed ventricular repolarization.",
      "Electrolytes are normal and she is not taking medications known to delay repolarization.",
      "Telemetry later shows polymorphic ventricular tachycardia triggered by a pause.",
      "The inherited channelopathy predisposes to torsades de pointes and sudden syncope."
    ],
    description: "Long QT syndrome is a cardiac channelopathy causing prolonged ventricular repolarization and risk of torsades de pointes. Syncope during exertion, swimming, fright, or auditory triggers can occur depending on genotype.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 466,
    answer: "Cannabis Withdrawal",
    clues:     [
      "A 29-year-old man reports irritability, anxiety, and insomnia 3 days after stopping daily cannabis use.",
      "He complains of low mood and decreased appetite.",
      "He is not in pain or having seizures.",
      "Physical exam is unremarkable and vital signs are stable.",
      "Symptoms gradually improve over 1 to 2 weeks.",
      "This withdrawal syndrome is uncomfortable but generally not medically dangerous."
    ],
    description: "Cannabis withdrawal causes irritability, anxiety, sleep disturbance, and reduced appetite after cessation of heavy use. Symptoms are distressing but not typically life-threatening.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 467,
    answer: "Normal Pressure Hydrocephalus",
    clues:     [
      "A 72-year-old man develops progressive gait disturbance, cognitive decline, and urinary incontinence.",
      "He walks with a broad base and short shuffling steps, as if his feet are stuck to the floor.",
      "MRI shows ventriculomegaly without a focal obstructing lesion.",
      "Large-volume lumbar puncture temporarily improves his gait.",
      "CSF pathways are patent, but absorption is impaired.",
      "Ventricular enlargement exceeds what brain atrophy alone would explain, yet opening pressure on lumbar puncture is within the normal range."
    ],
    description: "Normal pressure hydrocephalus is a communicating hydrocephalus syndrome characterized by gait impairment, cognitive decline, and urinary incontinence with ventriculomegaly and often temporary improvement after large-volume lumbar puncture.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 468,
    answer: "Acute necrotising ulcerative periodontitis",
    clues:     [
      "A 32-year-old man with poorly controlled HIV presents with severe gingival pain, bleeding, and halitosis over the past week.",
      "He is pyrexial and has bilateral cervical lymphadenopathy.",
      "Examination reveals crater-like destruction of the interdental papillae and extensive bone exposure at multiple sites.",
      "Unlike typical periodontitis, the tissue destruction has advanced rapidly over days.",
      "The lesions are covered by a yellowish-grey pseudomembrane and bleed spontaneously.",
      "His CD4 count is 90 cells/μL, and microbiological smear shows a predominance of fusospirochaetal organisms."
    ],
    description: "Necrotising ulcerative periodontitis is a severe form of necrotising periodontal disease involving destruction of the interdental papillae, bone, and periodontal ligament, occurring almost exclusively in immunocompromised patients. It is an AIDS-defining illness when advanced. Management includes debridement, systemic metronidazole, optimisation of antiretroviral therapy, and oral hygiene instruction.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 469,
    answer: "Aortic Aneurysm",
    clues:     [
      "A 67-year-old man with hypertension and heavy smoking history presents with sudden severe abdominal and back pain.",
      "He is pale and hypotensive.",
      "Exam reveals a pulsatile abdominal mass.",
      "CT angiography shows a large infrarenal aneurysm with retroperitoneal extravasation.",
      "He is rushed for emergency repair.",
      "This vascular catastrophe has very high mortality once rupture occurs."
    ],
    description: "Aortic aneurysm rupture, especially of an abdominal aortic aneurysm, presents with abrupt pain, hypotension, and possible pulsatile mass. Emergent operative or endovascular repair is required.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 470,
    answer: "Left Bundle Branch Block (LBBB)",
    clues:     [
      "A 59-year-old man with long-standing hypertension has an incidental ECG abnormality.",
      "The QRS duration is 142 milliseconds.",
      "There are broad, notched R waves in leads I, aVL, V5, and V6.",
      "V1 shows a predominantly negative QRS complex.",
      "Septal Q waves are absent in the lateral leads.",
      "This conduction abnormality reflects delayed left ventricular depolarization."
    ],
    description: "Left bundle branch block causes QRS prolongation with broad notched lateral R waves and predominantly negative complexes in V1 to V3. It is associated with structural heart disease and can obscure ischemic ECG changes.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 472,
    answer: "Diffuse Proliferative Glomerulonephritis",
    clues:     [
      "A 26-year-old woman presents with hematuria, proteinuria, and rising creatinine.",
      "She has hypertension and a positive ANA.",
      "Complement levels C3 and C4 are both low.",
      "Kidney biopsy shows proliferation affecting most glomeruli.",
      "Immunofluorescence shows immune complex deposition in a full-house pattern.",
      "This is the most severe and active form of lupus nephritis."
    ],
    description: "Diffuse proliferative glomerulonephritis is the most severe form of lupus nephritis. It causes active urinary sediment, proteinuria, declining kidney function, and extensive immune complex deposition on biopsy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 473,
    answer: "Silicosis",
    clues:     [
      "A 58-year-old man with 30 years of sandblasting exposure presents with progressive dyspnea.",
      "He used minimal respiratory protection at work.",
      "Chest imaging shows bilateral upper-lobe nodules with eggshell calcification of hilar lymph nodes.",
      "Pulmonary function testing shows a restrictive defect.",
      "He is at increased risk for tuberculosis.",
      "This occupational lung disease results from inhalation of crystalline silica."
    ],
    description: "Silicosis causes progressive pulmonary fibrosis with upper-lobe nodules and characteristic eggshell hilar adenopathy. Silica exposure also increases susceptibility to tuberculosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 474,
    answer: "Pulmonary Hypertension",
    clues:     [
      "A 41-year-old woman has progressive exertional dyspnea and presyncope.",
      "Exam reveals elevated JVP, a loud P2, and right ventricular heave.",
      "Chest imaging shows enlarged central pulmonary arteries and right ventricular enlargement.",
      "Echocardiography suggests markedly elevated pulmonary artery pressure.",
      "Right heart catheterization confirms the diagnosis.",
      "This disorder leads to chronic pressure overload of the right ventricle."
    ],
    description: "Pulmonary hypertension causes progressive dyspnea, exertional intolerance, and eventually right heart failure. Definitive diagnosis requires right heart catheterization, and classification depends on the underlying cause.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 475,
    answer: "Ichthyosis Vulgaris",
    clues:     [
      "A 4-year-old boy has dry, scaly skin that is most prominent on the extensor surfaces.",
      "He has prominent palmar and plantar hyperlinearity.",
      "The trunk and extremities have a fish-scale appearance.",
      "He also has a history of atopic dermatitis.",
      "Flexural surfaces are relatively spared.",
      "This is the most common inherited ichthyosis."
    ],
    description: "Ichthyosis vulgaris is an inherited keratinization disorder that causes dry scaly skin and palmar hyperlinearity. It is commonly associated with atopy and filaggrin mutations.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 476,
    answer: "Acute Disseminated Encephalomyelitis (ADEM)",
    clues:     [
      "A 7-year-old girl develops fever, altered mental status, and focal neurologic deficits 1 week after a viral illness.",
      "MRI brain shows multiple inflammatory lesions in the white matter and deep gray structures.",
      "CSF shows pleocytosis with elevated protein.",
      "She responds rapidly to high-dose IV methylprednisolone.",
      "The illness is monophasic, unlike multiple sclerosis.",
      "This represents immune-mediated demyelination following infection or vaccination."
    ],
    description: "ADEM is an acute monophasic demyelinating illness that often follows infection or vaccination. It causes encephalopathy, focal deficits, and multifocal inflammatory lesions on MRI.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 477,
    answer: "Rotator Cuff Tendinopathy",
    clues:     [
      "A 52-year-old man develops shoulder pain that worsens with overhead activity.",
      "He has night pain that disturbs sleep.",
      "Exam shows pain with resisted abduction and positive Neer and Hawkins maneuvers.",
      "Shoulder X-rays are unrevealing.",
      "MRI shows signal abnormality within the supraspinatus tendon.",
      "This degenerative condition is a common cause of shoulder pain in middle age."
    ],
    description: "Rotator cuff tendinopathy causes lateral shoulder pain that is worse with overhead activity and often disturbs sleep. Conservative treatment with physical therapy is usually first line.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 478,
    answer: "Arteriovenous Fistula",
    clues:     [
      "A 51-year-old man on hemodialysis has a surgically created connection between the radial artery and cephalic vein.",
      "He has a prominent pulsatile swelling in his forearm.",
      "A continuous bruit is audible over the site.",
      "His hand remains warm distal to the fistula.",
      "The access provides high-flow vascular entry for dialysis.",
      "This lesion is a direct connection between an artery and a vein."
    ],
    description: "An arteriovenous fistula is a direct artery-to-vein connection, either surgically created or pathologic. In dialysis patients it provides durable vascular access, though high-flow complications can occur.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 479,
    answer: "Polyarteritis Nodosa (PAN)",
    clues:     [
      "A 51-year-old man presents with fever, weight loss, neuropathy, and abdominal pain.",
      "Inflammatory markers are elevated, but urinalysis is normal.",
      "He has chronic hepatitis B infection.",
      "Abdominal angiography shows multiple aneurysms and stenotic segments of medium-sized visceral arteries.",
      "Biopsy shows transmural inflammation with fibrinoid necrosis of medium vessels.",
      "This vasculitis classically spares the pulmonary circulation."
    ],
    description: "Polyarteritis nodosa is a medium-vessel vasculitis associated with hepatitis B and characterized by constitutional symptoms, neuropathy, abdominal pain, and organ ischemia. Angiography or biopsy helps confirm the diagnosis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 480,
    answer: "Pressure Injury (Decubitus Ulcer)",
    clues:     [
      "A 78-year-old bedridden man develops a deep ulcer over the sacrum.",
      "He has been on prolonged bed rest with inadequate repositioning.",
      "The wound has undermining and foul drainage.",
      "It extends through skin into deeper soft tissue.",
      "There is no history of trauma to the area.",
      "This tissue breakdown results from prolonged pressure over a bony prominence."
    ],
    description: "Pressure injuries result from prolonged pressure on skin and underlying tissues, especially in immobile patients. Prevention with repositioning, support surfaces, and skin care is critical.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 481,
    answer: "Renal Osteodystrophy",
    clues:     [
      "A 44-year-old man with stage 5 chronic kidney disease presents with bone pain and muscle weakness.",
      "He has secondary hyperparathyroidism with markedly elevated PTH.",
      "Phosphate is high and vitamin D activation is impaired.",
      "Bone turnover is abnormal on biopsy.",
      "He is at increased fracture risk.",
      "This term refers to the spectrum of bone disease caused by chronic kidney failure."
    ],
    description: "Renal osteodystrophy encompasses the skeletal complications of chronic kidney disease, including high-turnover and low-turnover bone disease. Patients develop bone pain, fragility, and mineral abnormalities.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 482,
    answer: "Lichen Simplex Chronicus",
    clues:     [
      "A 45-year-old woman has a well-demarcated, thickened, scaly patch on her shin.",
      "The area is intensely pruritic and she scratches it repeatedly.",
      "There is prominent lichenification with exaggerated skin lines.",
      "No systemic disease is evident.",
      "The lesion has developed over months of rubbing.",
      "This is considered an itch that scratches rather than a rash that itches."
    ],
    description: "Lichen simplex chronicus is localized chronic dermatitis caused by repeated scratching or rubbing. Treatment focuses on breaking the itch-scratch cycle and controlling the underlying trigger.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 483,
    answer: "Cerebral Edema",
    clues:     [
      "A 38-year-old woman with severe pneumonia develops worsening confusion and seizures.",
      "She has hyponatremia from syndrome of inappropriate antidiuretic hormone secretion.",
      "CT brain shows effacement of sulci and compression of ventricles.",
      "Intracranial pressure is elevated.",
      "Her neurologic status deteriorates rapidly.",
      "This life-threatening complication results from excess water accumulation in brain tissue."
    ],
    description: "Cerebral edema is abnormal accumulation of fluid within the brain and can cause elevated intracranial pressure, herniation, and death. It occurs in trauma, infection, ischemia, and metabolic disturbances.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 484,
    answer: "Bell Palsy",
    clues:     [
      "A 34-year-old man wakes with sudden left-sided facial drooping and inability to close his left eye.",
      "He has impaired taste on the anterior two-thirds of the tongue.",
      "Sounds seem uncomfortably loud on the affected side.",
      "Brain imaging is unrevealing.",
      "Forehead movement is also impaired.",
      "Corticosteroids are started early, and incomplete eye closure prompts artificial tear use and eye taping at night."
    ],
    description: "Bell palsy is an acute idiopathic lower motor neuron facial nerve palsy that causes facial weakness, dysgeusia, and hyperacusis. Most patients recover, and steroids improve outcomes when started early.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 485,
    answer: "Multifocal Atrial Tachycardia (MAT)",
    clues:     [
      "A 68-year-old man with a COPD exacerbation develops palpitations and tachycardia.",
      "The rhythm is irregular.",
      "ECG shows at least three different P-wave morphologies with variable PR intervals.",
      "Heart rate is 128 per minute.",
      "Serum potassium is low.",
      "Treatment focuses on correcting the underlying illness and electrolyte disturbance."
    ],
    description: "MAT is an irregular atrial tachycardia with three or more distinct P-wave morphologies, classically seen in patients with COPD. Management targets the underlying pulmonary problem and metabolic abnormalities.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 486,
    answer: "Patent Ductus Arteriosus (PDA)",
    clues:     [
      "A premature newborn has a continuous machine-like murmur.",
      "Bounding pulses and wide pulse pressure are present.",
      "Respiratory distress worsens with signs of pulmonary overcirculation.",
      "Echocardiography shows a left-to-right shunt through the ductus arteriosus.",
      "Indomethacin is started to promote closure.",
      "This persistent fetal connection links the aorta and pulmonary artery."
    ],
    description: "Patent ductus arteriosus is a persistent connection between the aorta and pulmonary artery, causing a left-to-right shunt. It is common in premature infants and can lead to heart failure and pulmonary edema.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 487,
    answer: "Chiari II Malformation",
    clues:     [
      "A 3-month-old infant with myelomeningocele develops hydrocephalus.",
      "MRI shows cerebellar tissue extending through the foramen magnum into the cervical canal.",
      "She has significant lower-extremity neurologic deficits.",
      "A ventriculoperitoneal shunt is required.",
      "This malformation is strongly associated with open neural tube defects.",
      "It represents caudal displacement of hindbrain structures."
    ],
    description: "Chiari II malformation involves caudal displacement of cerebellar and brainstem tissue and is closely associated with myelomeningocele and hydrocephalus. Neurosurgical management is often required.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 488,
    answer: "Cannabis Intoxication",
    clues:     [
      "A 21-year-old college student is brought to the emergency department after smoking marijuana.",
      "He is anxious, tachycardic, and has dry mouth.",
      "He reports time distortion and mild paranoia.",
      "Coordination is impaired.",
      "Symptoms resolve over several hours with observation.",
      "This acute toxidrome follows recent cannabinoid exposure."
    ],
    description: "Cannabis intoxication produces tachycardia, dry mouth, anxiety, altered time perception, and impaired coordination. Effects usually resolve with supportive care.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 489,
    answer: "Dubin-Johnson Syndrome",
    clues:     [
      "A 24-year-old woman with lifelong intermittent jaundice undergoes evaluation.",
      "She has predominantly conjugated hyperbilirubinemia.",
      "Liver enzymes and synthetic function are otherwise normal.",
      "Liver biopsy shows dark coarse pigment within hepatocytes.",
      "There is no hemolysis or biliary obstruction.",
      "The underlying defect is an inherited mutation in the canalicular organic anion transporter responsible for excreting conjugated bilirubin and related compounds."
    ],
    description: "Dubin-Johnson syndrome is a benign inherited defect in conjugated bilirubin excretion that causes intermittent conjugated hyperbilirubinemia and black liver pigmentation. Prognosis is excellent.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 490,
    answer: "Alcohol Intoxication",
    clues:     [
      "A 42-year-old man is brought to the emergency department with slurred speech and ataxia.",
      "He is disinhibited and has impaired judgment.",
      "Blood alcohol level is 240 mg/dL.",
      "He becomes progressively sedated.",
      "Aspiration precautions are taken.",
      "His condition improves over several hours with supportive care."
    ],
    description: "Acute alcohol intoxication causes dose-dependent CNS depression with slurred speech, ataxia, impaired judgment, and sedation. Severe intoxication can cause respiratory depression and death.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 491,
    answer: "Ehrlichiosis",
    clues:     [
      "A 58-year-old man presents with fever, headache, and myalgias after a recent tick exposure.",
      "He was hiking in the Mid-Atlantic region 2 weeks ago.",
      "He has thrombocytopenia, leukopenia, and elevated liver enzymes.",
      "A rash is absent or faint.",
      "PCR of blood identifies Ehrlichia chaffeensis.",
      "He responds rapidly to doxycycline therapy."
    ],
    description: "Ehrlichiosis is a tick-borne infection causing fever, headache, myalgias, leukopenia, thrombocytopenia, and transaminitis. Doxycycline is the treatment of choice.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 492,
    answer: "Cryptorchidism",
    clues:     [
      "A 2-year-old boy is noted to have an undescended right testis on routine exam.",
      "The left testis is present in the scrotum.",
      "The right testis is not palpable in the scrotum.",
      "Imaging suggests an inguinal or intra-abdominal location.",
      "He is referred for orchiopexy.",
      "Untreated cases increase the risk of infertility and testicular malignancy."
    ],
    description: "Cryptorchidism is failure of testicular descent into the scrotum. Early orchiopexy improves fertility potential and facilitates surveillance for later malignancy risk.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 493,
    answer: "Amphetamine Intoxication",
    clues:     [
      "A 28-year-old man is brought to the emergency department after using methamphetamine.",
      "He is agitated, paranoid, and has visual hallucinations.",
      "He has marked tachycardia, hypertension, and hyperthermia.",
      "Exam shows dilated pupils and bruxism.",
      "He is at risk for myocardial infarction and stroke.",
      "Treatment includes benzodiazepines and aggressive supportive care."
    ],
    description: "Amphetamine intoxication causes severe sympathomimetic toxicity with agitation, psychosis, hypertension, tachycardia, and hyperthermia. Cardiovascular and cerebrovascular complications are major dangers.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 494,
    answer: "Stress Incontinence",
    clues:     [
      "A 58-year-old multiparous woman reports urine leakage with coughing, sneezing, or exercise.",
      "She has no urgency or dysuria.",
      "Urinalysis is normal.",
      "Pelvic floor weakness is demonstrated on exam.",
      "Postvoid residual is low.",
      "This is the most common type of urinary incontinence in women."
    ],
    description: "Stress incontinence results from urethral hypermobility or pelvic floor weakness, causing urine leakage with increased intra-abdominal pressure. It is common after childbirth and with aging.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 495,
    answer: "Major Depressive Disorder with Seasonal Pattern",
    clues:     [
      "A 34-year-old woman reports recurrent depressive episodes that begin each late fall and resolve in spring.",
      "During winter she has low mood, hypersomnia, increased appetite, and reduced energy.",
      "She feels entirely well during the summer months.",
      "This same pattern has repeated for the last 4 years.",
      "She improves with bright-light therapy and an SSRI.",
      "The seasonal relationship holds for at least two consecutive years and is not better explained by psychosocial stressors that coincide with that time of year."
    ],
    description: "Major depressive disorder with seasonal pattern is characterized by recurrent depressive episodes that reliably occur during a particular season, most often fall and winter. Light therapy, antidepressants, and psychotherapy can help.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 496,
    answer: "Cauda Equina Syndrome",
    clues:     [
      "A 56-year-old man presents with severe low back pain radiating down both legs.",
      "He develops urinary retention and numbness around the perineum.",
      "Exam shows reduced anal sphincter tone and bilateral lower-extremity weakness.",
      "Straight-leg raise reproduces severe radicular pain.",
      "MRI shows a massive central lumbar disc herniation compressing the lumbosacral nerve roots.",
      "This is a neurosurgical emergency requiring urgent decompression."
    ],
    description: "Cauda equina syndrome is compression of the lumbosacral nerve roots causing saddle anesthesia, bladder dysfunction, bilateral radiculopathy, and lower-extremity weakness. Emergency decompression is required to reduce permanent neurologic injury.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 497,
    answer: "Cervical Spondylosis",
    clues:     [
      "A 61-year-old man has progressive neck pain, hand clumsiness, and arm paresthesias.",
      "He has hyperreflexia and a broad-based gait.",
      "Spurling maneuver worsens his radicular symptoms.",
      "MRI shows disc degeneration, osteophytes, and narrowing of the cervical canal.",
      "There is chronic compression of both nerve roots and the cervical cord.",
      "This degenerative condition is a common cause of cervical myelopathy in older adults."
    ],
    description: "Cervical spondylosis is age-related degenerative disease of the cervical discs and facet joints. It can cause neck pain, radiculopathy, and cervical myelopathy when osteophytes and disc changes narrow the canal.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 498,
    answer: "Menetrier Disease",
    clues:     [
      "A 52-year-old man presents with peripheral edema, early satiety, and epigastric discomfort.",
      "Labs show hypoalbuminemia without nephrotic syndrome or liver failure.",
      "Upper endoscopy reveals giant rugal folds in the body and fundus of the stomach.",
      "Biopsy shows foveolar hyperplasia with glandular atrophy.",
      "Gastric acid secretion is reduced.",
      "Excess TGF-alpha signaling drives foveolar hyperplasia, leading to massive protein loss through the gastric mucosa."
    ],
    description: "Menetrier disease is a hypertrophic gastropathy characterized by giant gastric folds, excess mucus production, hypoalbuminemia, and reduced acid secretion. It causes a protein-losing gastroenteropathy and can increase gastric cancer risk.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 499,
    answer: "Functional Hypothalamic Amenorrhea",
    clues:     [
      "A 24-year-old competitive runner has not menstruated for 8 months.",
      "She recently increased training volume and intentionally lost weight.",
      "Her pregnancy test is negative and pelvic ultrasound is normal.",
      "TSH and prolactin levels are normal.",
      "FSH and LH are low to low-normal with low estradiol.",
      "Low energy availability reduces leptin levels and raises cortisol, both of which suppress the hypothalamic GnRH pulse generator."
    ],
    description: "Functional hypothalamic amenorrhea is reversible suppression of GnRH pulsatility due to energy deficit, stress, or excessive exercise. It causes low gonadotropins, low estrogen, and loss of menses.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 500,
    answer: "Warm Autoimmune Hemolytic Anemia",
    clues:     [
      "A 62-year-old woman presents with fatigue, jaundice, and dark urine.",
      "Labs show anemia with reticulocytosis, elevated LDH, and elevated indirect bilirubin.",
      "Direct antiglobulin testing is positive for IgG.",
      "Peripheral smear shows spherocytes.",
      "Hemolysis occurs primarily in the spleen at body temperature.",
      "She improves after starting corticosteroids."
    ],
    description: "Warm autoimmune hemolytic anemia is caused by IgG autoantibodies that bind red cells at body temperature, leading mainly to extravascular hemolysis. It presents with anemia, jaundice, spherocytes, and a positive direct Coombs test.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 501,
    answer: "Systemic Lupus Erythematosus (SLE)",
    clues:     [
      "A 28-year-old woman has photosensitivity, oral ulcers, and episodic joint pain.",
      "She develops pleuritic chest pain and a malar rash.",
      "Labs show leukopenia, proteinuria, and hematuria.",
      "ANA is positive, and anti-dsDNA and anti-Smith antibodies are present.",
      "Complement levels are low during disease activity.",
      "This multisystem autoimmune disease disproportionately affects women of childbearing age."
    ],
    description: "Systemic lupus erythematosus is a multisystem autoimmune disease that can affect skin, joints, serosal surfaces, kidneys, blood cells, and the nervous system. ANA is highly sensitive, while anti-dsDNA and anti-Smith antibodies are more specific.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 502,
    answer: "Lichen Planus",
    clues:     [
      "A 54-year-old man develops intensely pruritic violaceous papules on the flexor wrists.",
      "The lesions are polygonal and flat-topped.",
      "He also has lacy white streaks on the buccal mucosa.",
      "Biopsy shows a band-like lymphocytic infiltrate at the dermal-epidermal junction.",
      "Some cases are associated with hepatitis C or triggered by medications.",
      "This inflammatory disorder is remembered by the 6 Ps."
    ],
    description: "Lichen planus is an inflammatory mucocutaneous disorder causing pruritic, purple, polygonal, planar papules and plaques, often with oral Wickham striae. Many cases resolve over time, though recurrence can occur.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 503,
    answer: "Neurofibromatosis Type II",
    clues:     [
      "A 21-year-old woman develops gradual bilateral hearing loss and imbalance.",
      "MRI reveals vestibular schwannomas on both sides.",
      "She has a history of meningiomas and juvenile cataracts.",
      "Several relatives had brain tumors at a young age.",
      "Genetic testing identifies a mutation in the merlin tumor suppressor gene.",
      "This autosomal dominant disorder is defined by bilateral vestibular schwannomas."
    ],
    description: "Neurofibromatosis type II is an autosomal dominant tumor predisposition syndrome caused by NF2 gene mutations. Bilateral vestibular schwannomas are classic, and patients often develop meningiomas, ependymomas, and early cataracts.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 504,
    answer: "Short Bowel Syndrome",
    clues:     [
      "A 45-year-old man had extensive small bowel resection for Crohn disease complications.",
      "He now has chronic diarrhea, weight loss, and steatorrhea.",
      "He develops fat-soluble vitamin deficiency and vitamin B12 deficiency.",
      "He requires supplemental parenteral nutrition.",
      "He is at risk for oxalate kidney stones and D-lactic acidosis.",
      "This disorder reflects inadequate absorptive surface after major small-bowel loss."
    ],
    description: "Short bowel syndrome occurs after extensive small intestinal resection and causes malabsorption, diarrhea, electrolyte losses, and multiple nutrient deficiencies. Management often includes specialized diet, supplements, and sometimes parenteral nutrition.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 505,
    answer: "Glycogen Storage Disease IV (Andersen Disease)",
    clues:     [
      "A 6-month-old infant develops hepatomegaly and failure to thrive.",
      "She has progressive liver dysfunction with portal hypertension.",
      "Liver biopsy shows abnormal glycogen with few branch points and polyglucosan accumulation.",
      "The abnormal material is poorly soluble and damages hepatocytes.",
      "Enzyme testing shows glycogen branching enzyme deficiency.",
      "This glycogen storage disease often progresses to cirrhosis in early childhood."
    ],
    description: "Glycogen storage disease IV is caused by glycogen branching enzyme deficiency, leading to abnormal polyglucosan accumulation in liver, muscle, and other tissues. Many patients develop progressive cirrhosis and liver failure in childhood.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 506,
    answer: "Diabetic Glomerulonephropathy",
    clues:     [
      "A 48-year-old man with a long history of diabetes develops progressive proteinuria.",
      "He has hypertension and a gradually rising creatinine.",
      "Urinalysis shows heavy albuminuria without active sediment.",
      "Funduscopic exam reveals diabetic retinopathy.",
      "Kidney biopsy shows mesangial expansion with nodular glomerulosclerosis.",
      "This is a leading cause of end-stage kidney disease."
    ],
    description: "Diabetic glomerulonephropathy is chronic diabetic kidney disease characterized by progressive albuminuria, declining renal function, and nodular glomerulosclerosis. Blood pressure control and RAAS blockade are key therapies.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 507,
    answer: "Fibroadenoma",
    clues:     [
      "A 22-year-old woman palpates a firm, mobile, painless breast mass.",
      "The lesion has been slowly enlarging over many months.",
      "Ultrasound shows a well-circumscribed oval solid mass.",
      "There are no skin changes or nipple discharge.",
      "Biopsy shows benign stromal and epithelial proliferation without atypia.",
      "The lesion arises from a single terminal duct-lobular unit and contains both stromal and epithelial components."
    ],
    description: "Fibroadenoma is a common benign breast tumor in young women and typically presents as a mobile, rubbery, well-circumscribed mass. Management depends on imaging, symptoms, and growth pattern.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 508,
    answer: "VIPoma",
    clues:     [
      "A 51-year-old man presents with profuse watery diarrhea that persists during fasting.",
      "He has severe hypokalemia and dehydration.",
      "Gastric acid secretion is low.",
      "Serum vasoactive intestinal peptide is markedly elevated.",
      "CT imaging identifies a pancreatic neuroendocrine tumor.",
      "The secreted peptide relaxes intestinal smooth muscle and stimulates chloride secretion, explaining the voluminous secretory diarrhea."
    ],
    description: "VIPoma is a pancreatic neuroendocrine tumor that secretes vasoactive intestinal peptide, causing watery diarrhea, hypokalemia, and achlorhydria. Treatment includes fluid replacement, octreotide, and tumor-directed therapy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 509,
    answer: "Congenital Adrenal Hyperplasia (17-Alpha-Hydroxylase Deficiency)",
    clues:     [
      "A 16-year-old phenotypic girl presents with primary amenorrhea and absent breast development.",
      "She has hypertension and hypokalemia.",
      "Pubic and axillary hair are sparse or absent.",
      "Labs show low cortisol, low androgens, elevated ACTH, and elevated deoxycorticosterone.",
      "Karyotype is 46,XY and internal testes are present.",
      "This enzyme deficiency blocks sex steroid and cortisol synthesis while excess mineralocorticoid precursors accumulate."
    ],
    description: "17-alpha-hydroxylase deficiency is a rare form of congenital adrenal hyperplasia that causes decreased cortisol and sex steroid synthesis with excess mineralocorticoid activity. Patients develop hypertension, hypokalemia, and sexual infantilism or undervirilization.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 510,
    answer: "Lipoma",
    clues:     [
      "A 48-year-old man has a soft, painless, slowly growing subcutaneous mass on his back.",
      "The lesion is freely mobile under the skin.",
      "It has remained stable for years aside from gradual enlargement.",
      "Imaging shows a homogeneous fatty mass without invasion.",
      "Pathology reveals mature adipocytes without atypia.",
      "This is the most common benign soft tissue tumor."
    ],
    description: "Lipoma is a benign tumor of mature adipose tissue that presents as a soft, mobile, painless subcutaneous mass. Most require no treatment unless symptomatic or diagnostically uncertain.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 511,
    answer: "Morton's Neuroma",
    clues:     [
      "A 52-year-old woman reports burning forefoot pain between the third and fourth toes.",
      "The discomfort worsens with walking and narrow shoes.",
      "She has numbness radiating into the adjacent toes.",
      "Compression of the metatarsal heads reproduces the pain with a palpable click.",
      "The lesion reflects perineural fibrosis of a plantar digital nerve.",
      "The lesion results from chronic perineural fibrosis caused by repetitive nerve compression between adjacent metatarsal heads."
    ],
    description: "Morton's neuroma is perineural fibrosis of a plantar digital nerve, usually in the third intermetatarsal space. It causes forefoot pain and paresthesias that worsen with tight shoes and walking.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 512,
    answer: "Scombroid Poisoning",
    clues:     [
      "A 34-year-old man develops flushing, urticaria, and headache 30 minutes after eating tuna.",
      "He also has palpitations and a peppery metallic taste.",
      "His friend who ate the same fish has similar symptoms.",
      "The meal had been stored improperly at warm temperature.",
      "Symptoms improve rapidly with antihistamines.",
      "This reaction results from histamine formed in spoiled dark-meat fish."
    ],
    description: "Scombroid poisoning is caused by ingestion of histamine formed in improperly stored fish such as tuna or mackerel. It mimics an allergic reaction but is a foodborne toxin-mediated illness, and antihistamines are usually effective.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 513,
    answer: "Sliding Hiatal Hernia",
    clues:     [
      "A 62-year-old man with longstanding reflux is found to have a hiatal hernia.",
      "The gastroesophageal junction intermittently moves above the diaphragm.",
      "He mainly reports heartburn and regurgitation.",
      "Barium swallow shows the proximal stomach sliding through the hiatus.",
      "Symptoms improve with acid suppression and lifestyle measures.",
      "This is the most common type of hiatal hernia."
    ],
    description: "Sliding hiatal hernia occurs when the gastroesophageal junction and proximal stomach move above the diaphragm. It is commonly associated with gastroesophageal reflux disease and is often managed medically.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 514,
    answer: "Paraesophageal Hiatal Hernia",
    clues:     [
      "A 71-year-old woman has postprandial chest fullness, dysphagia, and early satiety.",
      "Imaging shows the gastric fundus herniating alongside the esophagus while the gastroesophageal junction remains in place.",
      "She is at risk for gastric volvulus and strangulation.",
      "Her symptoms worsen after large meals.",
      "Surgical repair is recommended because of complication risk.",
      "This is the less common but more dangerous type of hiatal hernia."
    ],
    description: "Paraesophageal hiatal hernia occurs when part of the stomach herniates through the hiatus next to the esophagus. It can cause obstructive symptoms and carries a risk of volvulus, incarceration, and ischemia.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 515,
    answer: "Cholestasis of Pregnancy",
    clues:     [
      "A 34-year-old woman at 32 weeks gestation develops intense generalized pruritus, especially on the palms and soles.",
      "There is no primary rash.",
      "Serum bile acids are elevated.",
      "Transaminases are mildly elevated and other liver diseases are excluded.",
      "Her symptoms improve after delivery.",
      "This pregnancy-related disorder increases the risk of preterm birth and stillbirth."
    ],
    description: "Intrahepatic cholestasis of pregnancy presents in the third trimester with pruritus and elevated bile acids. It is associated with important fetal risks and is managed with close monitoring, ursodeoxycholic acid, and planned delivery when indicated.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 516,
    answer: "Ischemic Colitis",
    clues:     [
      "A 72-year-old woman develops sudden crampy left lower quadrant pain followed by hematochezia.",
      "Symptoms began shortly after an episode of hypotension from dehydration.",
      "CT shows segmental colonic wall thickening near the splenic flexure.",
      "Colonoscopy shows pale edematous mucosa with petechial bleeding and shallow ulceration.",
      "The rectum is spared.",
      "This disorder reflects transient hypoperfusion of colonic watershed areas rather than acute mesenteric arterial occlusion."
    ],
    description: "Ischemic colitis is caused by reduced blood flow to the colon, often affecting watershed regions such as the splenic flexure or rectosigmoid junction. It typically presents with crampy abdominal pain and bloody stool in older adults or after low-flow states.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 517,
    answer: "Cecal Volvulus",
    clues:     [
      "A 28-year-old woman presents with sudden abdominal pain, distention, and vomiting.",
      "She has obstipation and a markedly tympanitic abdomen.",
      "CT shows a markedly dilated displaced cecum with a whirl sign.",
      "The cecum has rotated around its mesentery.",
      "Endoscopic decompression is less reliable than in sigmoid volvulus.",
      "This form of large-bowel obstruction usually requires surgery."
    ],
    description: "Cecal volvulus is twisting of the cecum and ascending colon around a mobile mesentery, causing bowel obstruction and risk of ischemia or perforation. Surgical treatment is usually required.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 518,
    answer: "Pyogenic Liver Abscess",
    clues:     [
      "A 54-year-old man develops fever, right upper quadrant pain, and malaise.",
      "He recently had complicated diverticulitis.",
      "Labs show leukocytosis, elevated alkaline phosphatase, and elevated inflammatory markers.",
      "CT reveals a rim-enhancing hepatic lesion containing fluid.",
      "Blood cultures grow enteric gram-negative organisms.",
      "Treatment includes broad-spectrum antibiotics and percutaneous drainage."
    ],
    description: "Pyogenic liver abscess is a bacterial infection of the liver that often arises from biliary infection, portal venous spread, or hematogenous seeding. Patients typically present with fever, right upper quadrant pain, and a rim-enhancing lesion on imaging.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 519,
    answer: "Foreign Body Aspiration",
    clues:     [
      "A 3-year-old boy has sudden coughing and choking while playing with small toy parts.",
      "He continues to wheeze on the right side afterward.",
      "Chest X-ray shows unilateral hyperinflation due to air trapping.",
      "He later develops recurrent pneumonia in the same region.",
      "Rigid bronchoscopy identifies and removes the object from the right mainstem bronchus.",
      "This diagnosis must be considered after abrupt respiratory symptoms in a young child."
    ],
    description: "Foreign body aspiration often presents with sudden choking, persistent cough, unilateral wheeze, or recurrent localized pneumonia. Bronchoscopy is both diagnostic and therapeutic.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 520,
    answer: "Myocardial Contusion",
    clues:     [
      "A 38-year-old man is admitted after high-speed blunt chest trauma.",
      "He has chest wall tenderness and mild troponin elevation.",
      "ECG shows nonspecific ST-T abnormalities with premature ventricular beats.",
      "Focused echocardiography does not show tamponade or major wall-motion abnormality.",
      "He is monitored for arrhythmias after direct cardiac injury.",
      "This condition reflects bruising of the myocardium rather than coronary occlusion."
    ],
    description: "Myocardial contusion is blunt traumatic injury to the heart that can cause chest pain, biomarker elevation, conduction abnormalities, and arrhythmias. Management is largely supportive with cardiac monitoring when indicated.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 521,
    answer: "Pulmonary Contusion",
    clues:     [
      "A 42-year-old man has blunt chest trauma after a motor vehicle collision.",
      "He develops dyspnea, tachypnea, and hypoxemia over the next several hours.",
      "Chest imaging shows patchy alveolar opacities at the site of impact without lobar collapse.",
      "There is no evidence of heart failure.",
      "He is at risk for worsening respiratory failure and ARDS.",
      "This injury represents alveolar hemorrhage and edema after blunt chest trauma."
    ],
    description: "Pulmonary contusion is bruising of lung parenchyma after blunt chest trauma, causing alveolar hemorrhage, edema, and impaired gas exchange. Treatment is supportive with careful respiratory management.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 522,
    answer: "Annular Pancreas",
    clues:     [
      "A 34-year-old woman has recurrent postprandial fullness, nausea, and nonbilious vomiting.",
      "Endoscopy shows narrowing of the second portion of the duodenum without a mass.",
      "CT demonstrates a ring of pancreatic tissue encircling the duodenum.",
      "Symptoms reflect partial duodenal obstruction.",
      "This congenital anomaly results from abnormal rotation of the ventral pancreatic bud.",
      "Some adults present late after years of vague obstructive symptoms."
    ],
    description: "Annular pancreas is a congenital anomaly in which pancreatic tissue surrounds the duodenum and can cause obstruction. It may present in infancy or later in life with recurrent obstructive symptoms or pancreatitis.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 523,
    answer: "Pancreas Divisum",
    clues:     [
      "A 31-year-old woman has recurrent pancreatitis without gallstones, alcohol use, or hypertriglyceridemia.",
      "MRCP shows separate dorsal and ventral pancreatic duct systems.",
      "Most pancreatic drainage occurs through the minor papilla.",
      "There is no fusion of the embryologic ducts.",
      "Minor papilla therapy is considered because of recurrent attacks.",
      "This congenital ductal variant can predispose some patients to pancreatitis."
    ],
    description: "Pancreas divisum is failure of fusion of the dorsal and ventral pancreatic ducts. Most people are asymptomatic, but some develop recurrent pancreatitis related to impaired drainage through the minor papilla.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 524,
    answer: "Indirect Inguinal Hernia",
    clues:     [
      "A 52-year-old man notices a reducible groin bulge that can extend into the scrotum.",
      "The mass becomes more prominent with coughing or straining.",
      "Imaging shows the hernia passing lateral to the inferior epigastric vessels through the deep inguinal ring.",
      "It follows the path of the processus vaginalis.",
      "This is the most common type of inguinal hernia.",
      "It can occur at any age, including in children."
    ],
    description: "Indirect inguinal hernia occurs when abdominal contents pass through the deep inguinal ring lateral to the inferior epigastric vessels, often due to a persistent processus vaginalis. It may extend into the scrotum.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 525,
    answer: "Direct Inguinal Hernia",
    clues:     [
      "A 68-year-old man develops a reducible bulge in the medial groin.",
      "It becomes more visible with increased intra-abdominal pressure.",
      "The defect protrudes through Hesselbach triangle medial to the inferior epigastric vessels.",
      "It rarely descends into the scrotum.",
      "He has a long history of chronic cough and straining.",
      "This hernia results from acquired weakness of the abdominal wall."
    ],
    description: "Direct inguinal hernia is an acquired hernia through Hesselbach triangle medial to the inferior epigastric vessels. It is associated with abdominal wall weakness and chronic increased intra-abdominal pressure.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 526,
    answer: "Femoral Hernia",
    clues:     [
      "A 71-year-old woman notices a groin bulge located below the inguinal ligament.",
      "The bulge lies inferolateral to the pubic tubercle.",
      "It protrudes through the femoral canal.",
      "She develops intermittent pain with standing.",
      "This hernia has a relatively high risk of incarceration and strangulation.",
      "It is more common in older women than men."
    ],
    description: "Femoral hernia occurs when abdominal contents pass through the femoral canal below the inguinal ligament. Although less common than inguinal hernias, it carries a higher risk of incarceration and strangulation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 527,
    answer: "Aspirin-Exacerbated Respiratory Disease (AERD)",
    clues:     [
      "A 34-year-old woman with asthma develops severe wheezing after taking ibuprofen.",
      "She has chronic rhinosinusitis with recurrent nasal polyps.",
      "Similar respiratory reactions occur with other COX-1 inhibiting NSAIDs.",
      "Leukotriene-mediated symptoms improve with aspirin desensitization in selected patients.",
      "The syndrome reflects abnormal arachidonic acid metabolism rather than IgE-mediated allergy.",
      "COX-1 inhibition shifts arachidonic acid metabolism toward excess leukotriene production, triggering bronchoconstriction in susceptible individuals."
    ],
    description: "Aspirin-exacerbated respiratory disease is defined by asthma, chronic rhinosinusitis with nasal polyps, and respiratory reactions to aspirin or other COX-1 inhibitors. Leukotriene excess plays a major role in pathophysiology.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 528,
    answer: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
    clues:     [
      "A 31-year-old woman with asthma develops worsening cough, wheeze, and fleeting pulmonary infiltrates.",
      "She has eosinophilia and a markedly elevated total IgE level.",
      "CT chest shows central bronchiectasis.",
      "Serology is positive for Aspergillus-specific IgE and IgG.",
      "She sometimes coughs up brownish mucus plugs.",
      "This disorder reflects hypersensitivity to Aspergillus colonization rather than invasive infection."
    ],
    description: "ABPA is a hypersensitivity reaction to Aspergillus colonization in patients with asthma or cystic fibrosis. It causes eosinophilia, high IgE, recurrent infiltrates, and central bronchiectasis. Treatment typically includes corticosteroids and sometimes antifungal therapy.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 529,
    answer: "Incisional Hernia",
    clues:     [
      "A 54-year-old man develops a reducible bulge at the site of a prior abdominal surgery.",
      "The protrusion becomes more obvious with coughing and lifting.",
      "Exam reveals a fascial defect beneath the old scar.",
      "He has obesity and chronic cough, which increased his risk.",
      "This hernia formed through weakness in a previous operative closure.",
      "Symptomatic cases are often repaired surgically."
    ],
    description: "Incisional hernia is protrusion of abdominal contents through a prior surgical incision because of fascial weakness or failure of healing. Obesity, infection, smoking, and chronic cough increase risk.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 530,
    answer: "Fibrocystic Changes of the Breast",
    clues:     [
      "A 38-year-old woman reports cyclic breast pain and bilateral nodularity.",
      "Symptoms worsen before menses and improve afterward.",
      "Ultrasound shows multiple simple cysts without a dominant suspicious mass.",
      "Aspirate from one lesion is nonbloody and symptoms improve after drainage.",
      "This is the most common benign breast condition.",
      "It reflects a mixture of cyst formation, fibrosis, and adenosis."
    ],
    description: "Fibrocystic changes are common benign breast changes characterized by cyclic pain, nodularity, fibrosis, and cyst formation. Symptoms often fluctuate with the menstrual cycle and are usually managed conservatively.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 531,
    answer: "Neonatal Gonococcal Conjunctivitis",
    clues:     [
      "A 4-day-old infant develops copious purulent discharge from both eyes.",
      "The eyelids are markedly swollen with chemosis.",
      "The mother had untreated gonorrhea at delivery.",
      "Gram stain of the exudate shows intracellular gram-negative diplococci.",
      "Systemic ceftriaxone is started urgently.",
      "Without prompt treatment, this infection can rapidly damage the cornea and cause blindness."
    ],
    description: "Neonatal gonococcal conjunctivitis presents 2 to 5 days after birth with severe purulent conjunctivitis and eyelid edema. It is an ophthalmic emergency requiring systemic ceftriaxone and evaluation for disseminated infection.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 532,
    answer: "Neonatal Chlamydial Conjunctivitis",
    clues:     [
      "A 10-day-old infant develops bilateral mucopurulent eye discharge.",
      "Conjunctival inflammation is present but less explosive than with gonococcal infection.",
      "The mother had untreated Chlamydia trachomatis during pregnancy.",
      "NAAT from conjunctival swab is positive.",
      "Oral macrolide therapy is prescribed.",
      "Untreated infants are also at risk for afebrile pneumonia."
    ],
    description: "Neonatal chlamydial conjunctivitis usually presents 5 to 14 days after birth with mucopurulent eye discharge and conjunctival injection. Treatment must be systemic, typically with oral macrolide therapy, because associated nasopharyngeal infection is common.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 533,
    answer: "Wiskott-Aldrich Syndrome",
    clues:     [
      "An 8-month-old boy has recurrent infections, eczema, and easy bruising.",
      "Labs show thrombocytopenia with small platelets.",
      "He has low IgM with elevated IgA and IgE.",
      "He experiences recurrent otitis and pneumonia.",
      "The defect affects actin cytoskeleton organization in hematopoietic cells.",
      "This X-linked immunodeficiency carries increased risk of autoimmunity and lymphoma."
    ],
    description: "Wiskott-Aldrich syndrome is an X-linked disorder characterized by eczema, recurrent infections, and thrombocytopenia with small platelets. It results from WAS gene mutations and can require hematopoietic stem cell transplantation.",
    ankiStep1: "",
    ankiStep2: ""
  },
  {
    id: 534,
    answer: "Job Syndrome (Hyper-IgE Syndrome)",
    clues:     [
      "A 6-year-old boy has recurrent staphylococcal skin abscesses and pneumonias.",
      "He has severe eczema and retained primary teeth.",
      "Exam shows coarse facial features and hyperextensible joints.",
      "Serum IgE is markedly elevated.",
      "His neutrophil recruitment is impaired because of defective Th17 signaling.",
      "This primary immunodeficiency is classically associated with STAT3 mutation."
    ],
    description: "Job syndrome, also called hyper-IgE syndrome, is a primary immunodeficiency characterized by eczema, recurrent staphylococcal infections, retained primary teeth, coarse facies, and markedly elevated IgE. Many cases are caused by STAT3 mutations.",
    ankiStep1: "",
    ankiStep2: ""
  }
];

const DISEASE_LIST = [
  "1st Degree AV Block",
  "2nd Degree AV Block Type I (Mobitz I)",
  "2nd Degree AV Block Type II (Mobitz II)",
  "3rd Degree AV Block (Complete Heart Block)",
  "5α-reductase Deficiency",
  "Absence Seizure",
  "Acanthosis Nigricans",
  "Achalasia",
  "Achondroplasia",
  "ACL (Anterior Cruciate Ligament) Tear",
  "Acne Vulgaris",
  "Acoustic Neuroma / Vestibular Schwannoma",
  "Acral Lentiginous Melanoma",
  "Acromegaly",
  "Acromioclavicular joint sprain",
  "Actinic Keratosis",
  "Actinomycosis",
  "Acute adrenal insufficiency",
  "Acute aortic occlusion (AAO)",
  "Acute Cystitis",
  "Acute Disseminated (Postinfectious) Encephalomyelitis",
  "Acute Dystonia",
  "Acute gastritis",
  "Acute gastrointestinal bleeding",
  "Acute Inflammatory Demyelinating Polyneuropathy / Guillain-Barre Syndrome",
  "Acute Intermittent Porphyria",
  "Acute Interstitial Nephritis (AIN)",
  "Acute Limb Ischemia",
  "Acute Lymphoblastic Leukemia (ALL)",
  "Acute mesenteric ischemia",
  "Acute Myelogenous Leukemia",
  "Acute Necrotizing Pancreatitis",
  "Acute pancreatitis",
  "Acute Promyelocytic Leukemia (APL)",
  "Acute Pyelonephritis",
  "Acute Respiratory Distress Syndrome (ARDS)",
  "Acute Tubular Necrosis (ATN)",
  "Adenocarcinoma of the Lung",
  "Adenomatous polyps",
  "Adenomyosis",
  "Adenovirus Infection",
  "Adjustment Disorder",
  "Adrenoleukodystrophy",
  "Adult T-Cell Lymphoma",
  "Agoraphobia",
  "Albinism",
  "Alcohol Intoxication",
  "Alcohol Use Disorder",
  "Alcohol Withdrawal",
  "Alcoholic cirrhosis",
  "Alcoholic hepatitis",
  "Allergic Bronchopulmonary Aspergillosis (ABPA)",
  "Allergic Conjunctivitis",
  "Allergic Contact Dermatitis",
  "Alopecia areata",
  "Alpha-1 antitrypsin deficiency",
  "Alpha-Thalassemia",
  "Alport Syndrome",
  "Alzheimer Disease",
  "Amphetamine Intoxication",
  "Amphetamine Withdrawal",
  "Amyotrophic Lateral Sclerosis (ALS)",
  "Anal Fissures",
  "Anaplasma spp. (Anaplasmosis)",
  "Ancylostoma spp., Necator americanus (Hookworm)",
  "Androgen Insensitivity Syndrome",
  "Anemia of Chronic Disease",
  "Anencephaly",
  "Anaplastic Thyroid Carcinoma",
  "Angelman Syndrome",
  "Angina Pectoris",
  "Angiodysplasia",
  "Angiosarcoma",
  "Angle-closure Glaucoma",
  "Ankylosing Spondylitis",
  "Annular Pancreas",
  "Anomalous Left Coronary Artery",
  "Anorectal fistula",
  "Anorexia Nervosa",
  "Anovulatory Infertility",
  "Anterior hip dislocation",
  "Anterior shoulder dislocation",
  "Anterior Spinal Artery Occlusion (Anterior cord syndrome)",
  "Anterior Urethral Injury (Straddle Injury)",
  "Anterior Uveitis (Iritis)",
  "Anterograde Amnesia",
  "Antidepressant discontinuation syndrome",
  "Antiphospholipid Syndrome",
  "Antipsychotic-induced hyperprolactinemia",
  "Antisocial Personality Disorder",
  "Antithrombin Deficiency",
  "Aortic Aneurysm",
  "Aortic Dissection",
  "Aortic Valve Regurgitation",
  "Aortic Valve Stenosis",
  "Aortoenteric fistula",
  "Aplastic Anemia",
  "Appendicitis",
  "Argininosuccinic Aciduria (ASL)",
  "Aromatase deficiency",
  "Arteriovenous Fistula",
  "Asbestosis",
  "Ascaris lumbricoides",
  "Aspiration Pneumonia",
  "Aspirin-Exacerbated Respiratory Disease (AERD)",
  "Asthma",
  "Ataxia telangiectasia",
  "Atelectasis",
  "Atheroembolic Disease / Cholesterol embolization syndrome",
  "Atherosclerosis",
  "Atonic Seizure",
  "Atopic Dermatitis (Eczema)",
  "Atraumatic Splenic Rupture",
  "Atrial Fibrillation",
  "Atrial Flutter",
  "Atrial Septal Defect (ASD)",
  "Atrioventricular Septal Defect (AVSD) / Endocardial Cushion Defect",
  "Attention Deficit Hyperactivity Disorder (ADHD)",
  "Autism Spectrum Disorder (ASD)",
  "Autoimmune (Anti-NMDAR) Encephalitis",
  "Autoimmune / Secondary Amyloidosis (AA)",
  "Autoimmune gastritis / Pernicious Anemia",
  "Autoimmune hepatitis",
  "Autosomal Dominant Polycystic Kidney Disease (ADPKD)",
  "Autosomal Dominant Tubulointerstitial Kidney Disease",
  "Autosomal Recessive Polycystic Kidney Disease (ARPKD)",
  "Avascular Necrosis of Bone",
  "Avoidant Personality Disorder",
  "Avoidant/Restrictive Food Intake Disorder (ARFID)",
  "Babesiosis",
  "Bacillary Angiomatosis",
  "Bacillus anthracis",
  "Bacillus cereus",
  "Bacterial parotitis",
  "Bacterial Tracheitis",
  "Balanitis",
  "Barbiturate Intoxication",
  "Barrett esophagus",
  "Bartholin Cyst/Abscess",
  "Bartonella henselae (Cat Scratch Disease)",
  "Bartter Syndrome",
  "Basal Cell Carcinoma",
  "Becker Muscular Dystrophy",
  "Beckwith-Wiedemann Syndrome",
  "Behcet disease",
  "Behçet's Disease",
  "Bell Palsy",
  "Benign neonatal hyperbilirubinemia",
  "Benign Paroxysmal Positional Vertigo (BPPV)",
  "Benign Prostatic Hyperplasia (BPH)",
  "Benzodiazepine Intoxication",
  "Benzodiazepine Withdrawal",
  "Bernard-Soulier Syndrome",
  "Berylliosis",
  "Beta Thalassemia",
  "Biliary atresia",
  "Biliary colic / Cholelithiasis",
  "Binge-Eating Disorder",
  "Bipolar I Disorder",
  "Bipolar II Disorder",
  "Blastomycosis",
  "Blepharitis",
  "Blepharospasm",
  "Body Dysmorphic Disorder",
  "Borderline Personality Disorder",
  "Bordetella pertussis",
  "Borrelia burgdorferi (Lyme Disease)",
  "Borrelia recurrentis (Relapsing Fever)",
  "Botulism (Clostridium botulinum)",
  "Bovine Spongiform Encephalopathy (Mad Cow Disease)",
  "Bowen's disease",
  "Brachycephaly",
  "Branchial Cleft Cyst",
  "Breast Fat Necrosis",
  "Brenner Tumor",
  "Brief psychotic disorder",
  "Broca's (Expressive) Aphasia",
  "Broken-heart syndrome (takotsubo cardiomyopathy)",
  "Bronchial Carcinoid Tumor",
  "Bronchiectasis",
  "Bronchiolitis obliterans (popcorn lung)",
  "Brown-Séquard Syndrome",
  "Brucellosis (Brucella abortis)",
  "Brugada Syndrome",
  "Budd-Chiari syndrome",
  "Bulimia Nervosa",
  "Bullous Pemphigoid",
  "Bunyaviruses (e.g., Hantavirus)",
  "Burkitt Lymphoma",
  "Caffeine Intoxication",
  "Calcium Pyrophosphate Deposition Disease (Pseudogout)",
  "Campylobacteriosis (Campylobacter jejuni)",
  "Candida albicans intertrigo",
  "Cannabis Intoxication",
  "Cannabis Withdrawal",
  "Caplan syndrome",
  "Carbon Monoxide Poisoning",
  "Cardiac Arrest",
  "Cardiac Myxoma",
  "Cardiac Tamponade",
  "Cardiogenic Shock",
  "Carotid Sinus Hypersensitivity",
  "Carpal Tunnel Syndrome",
  "Cat eye syndrome (Schmid-Fraccaro syndrome)",
  "Cataract",
  "Cathinone intoxication (bath salt intoxication)",
  "Cauda Equina Syndrome",
  "Cavernous Sinus Syndrome",
  "CD40 Ligand Deficiency (Hyper-IgM syndrome)",
  "Cecal Volvulus",
  "Celiac disease",
  "Central Cord Syndrome (CCS)",
  "Central diabetes insipidus",
  "Central Post-Stroke Pain Syndrome (CPSP)",
  "Central Sleep Apnea",
  "Central Transtentorial Herniation / Downward Transtentorial Herniation",
  "Central Vertigo",
  "Cerebral Edema",
  "Cerebral Palsy",
  "Cervical Carcinoma in situ",
  "Cervical Invasive Carcinoma",
  "Cervical Myelopathy",
  "Cervical Spondylosis",
  "Chalazion",
  "Charcot-Bouchard Microaneurysm",
  "Charcot-Marie-Tooth Disease",
  "CHARGE Syndrome",
  "Cherry Angioma",
  "Chiari I Malformation",
  "Chiari II Malformation",
  "Chikungunya Virus",
  "Chlamydia conjunctivitis in newborns",
  "Chlamydia trachomatis cervicitis",
  "Chlamydophila psittaci (Psittacosis)",
  "Cholangiocarcinoma",
  "Cholecystitis",
  "Choledocholithiasis / Ascending Cholangitis",
  "Cholera (Vibrio cholerae)",
  "Cholestasis of pregnancy",
  "Chondroblastoma",
  "Chondrosarcoma",
  "Chordae Tendineae Rupture",
  "Choriocarcinoma",
  "Chronic atrophic gastritis",
  "Chronic Bronchitis",
  "Chronic granulomatous disease (CGD)",
  "Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma",
  "Chronic mesenteric ischemia",
  "Chronic Mucocutaneous Candidiasis",
  "Chronic Myelogenous Leukemia",
  "Chronic Obstructive Pulmonary Disease (COPD)",
  "Chronic pancreatitis",
  "Chronic Pyelonephritis",
  "Chronic Traumatic Encephalopathy (CTE)",
  "Cimex lectularius and Climex hemipterus (Bed Bugs)",
  "Cingulate Herniation / Subfalcine Herniation",
  "Classic Congenital Adrenal Hyperplasia (21-Hydroxylase Deficiency)",
  "Clavicle Fractures",
  "Clonorchis sinensis (Chinese Liver Fluke)",
  "Clostridioides difficile gastroenteritis",
  "Clostridium perfringens necrotizing fasciitis",
  "Clostridium tetani",
  "Cluster Headache",
  "CN III Palsy (Oculomotor Palsy)",
  "CN IV Palsy",
  "CN VI Damage",
  "CN VI Palsy (Abducens Nerve Palsy)",
  "Coal Worker's Pneumoconiosis",
  "Coarctation of the Aorta",
  "Cocaine Intoxication",
  "Cocaine Withdrawal",
  "Coccidioidomycosis",
  "Cold Autoimmune Hemolytic Anemia / Cold Agglutinin Syndrome",
  "Colorectal cancer",
  "Common Variable Immunodeficiency (CVID)",
  "Communicating Hydrocephalus",
  "Complete Abortion",
  "Complex Regional Pain Syndrome (CRPS)",
  "Concussion",
  "Conduct Disorder",
  "Conduction Aphasia",
  "Congenital Adrenal Hyperplasia (11-Beta-Hydroxylase Deficiency)",
  "Congenital Adrenal Hyperplasia (17-Alpha-Hydroxylase Deficiency)",
  "Congenital hypothyroidism / cretinism",
  "Congenital Muscular Torticollis",
  "Congenital Sucrase-Isomaltase Deficiency",
  "Congestive Heart Failure (CHF)",
  "Constrictive Pericarditis",
  "Contrast-induced thyroiditis / Jod-Basedow phenomenon",
  "Conus Medullaris Syndrome",
  "Conversion Disorder",
  "Cor Pulmonale",
  "Corneal abrasion",
  "Cornelia de Lange Syndrome (CdLS)",
  "Coronary Artery Spasm (Prinzmetal's Angina)",
  "Coronavirus (Common Cold Coronaviruses)",
  "Corticobasal Degeneration (CBD)",
  "Corynebacterium diphtheriae",
  "Costochondritis",
  "Coxiella burnetii (Q Fever)",
  "Coxsackievirus (Hand, Foot, and Mouth Disease)",
  "Craniopharyngioma",
  "Craniosynostosis",
  "Creutzfeldt-Jakob Disease (CJD)",
  "Cri-du-chat Syndrome",
  "Crigler-Najjar syndrome type 1",
  "Crigler-Najjar syndrome type 2",
  "Crohn disease",
  "Cryptococcus neoformans",
  "Cryptogenic Organizing Pneumonia (COP)",
  "Cryptorchidism",
  "Cryptosporidiosis",
  "Cushing disease",
  "Cushing syndrome",
  "Cutaneous Small-Vessel Vasculitis",
  "Cyanide Poisoning",
  "Cyclothymic Disorder",
  "Cystic Fibrosis",
  "Cystinuria",
  "Cystocele",
  "Cytomegalovirus (CMV)",
  "Dacryocystitis",
  "Dacryostenosis",
  "Dandy-Walker Malformation",
  "De Quervain Tenosynovitis",
  "Deep Vein Thrombosis (DVT)",
  "Delirium",
  "Delirium Tremens",
  "Delusional Disorder",
  "Dengue Virus",
  "Denys-Drash Syndrome",
  "Dependent Personality Disorder",
  "Depersonalization/Derealization Disorder",
  "Depression with Atypical Features",
  "Dermatitis Herpetiformis",
  "Dermatomyositis",
  "Developmental Dysplasia of the Hip",
  "Diabetic Glomerulonephropathy",
  "Diabetic ketoacidosis (DKA)",
  "Dialysis-Related Amyloidosis",
  "Diamond-Blackfan Anemia",
  "Diastasis Recti",
  "Diastolic Dysfunction",
  "Diffuse Axonal Injury",
  "Diffuse Cortical Necrosis",
  "Diffuse esophageal spasm (DES)",
  "Diffuse Large B Cell Lymphoma",
  "Diffuse Proliferative Glomerulonephritis",
  "DiGeorge Syndrome",
  "Dilated Cardiomyopathy",
  "Diphyllobothrium latum (Fish Tapeworm)",
  "Direct Inguinal Hernia",
  "Disruptive Mood Dysregulation Disorder",
  "Disseminated Intravascular Coagulation (DIC)",
  "Disseminated Neisseria gonorrhoeae",
  "Dissociative Amnesia",
  "Dissociative Identity Disorder",
  "Distal Renal Tubular Acidosis (RTA Type 1)",
  "Distributive Shock (Septic Shock)",
  "Diverticulitis",
  "Diverticulosis",
  "Double Outflow Right Ventricle (DORV)",
  "Down Syndrome (Trisomy 21)",
  "DRESS syndrome (Drug Reaction with Eosinophilia and Systemic Symptoms)",
  "Dressler Syndrome",
  "Drug-Induced Hemolytic Anemia",
  "Dry Macular Degeneration",
  "D-Transposition of the Great Vessels",
  "Dubin-Johnson syndrome",
  "Duchenne Muscular Dystrophy",
  "Ductal Carcinoma In Situ (DCIS)",
  "Dumping Syndrome",
  "Duodenal Atresia",
  "Duplex Collecting System",
  "Dupuytren Contracture",
  "Dysgerminoma",
  "Dyslexia",
  "Eastern Equine Encephalitis Virus",
  "Ebola Virus Disease",
  "Ebstein Anomaly",
  "Echinococcus granulosus (Hydatid Disease)",
  "Echovirus",
  "Eclampsia",
  "Ectopic Pregnancy",
  "Ectopic thyroid (lingual thyroid)",
  "Edward Syndrome",
  "Ehrlichia chaffeensis (Ehrlichiosis)",
  "Eisenmenger Syndrome",
  "Embryonal Carcinoma",
  "Endometrial Carcinoma",
  "Endometrial Hyperplasia",
  "Endometriosis",
  "Endometritis",
  "Enhanced physiologic tremor",
  "Entamoeba histolytica",
  "Enterobius vermicularis (Pinworm) infection",
  "Enterocele",
  "Enterococcal infection",
  "Enterocutaneous fistula",
  "Enuresis",
  "Eosinophilic Esophagitis",
  "Eosinophilic Granulomatosis with Polyangiitis (Churg-Strauss Syndrome)",
  "Ependymoma",
  "Epididymal Cyst",
  "Epididymitis",
  "Epidural Hematoma",
  "Epilepsy (chronic seizure disorder)",
  "Epithelial Hyperplasia of the Breast",
  "Epithelioid Sarcoma",
  "Epstein-Barr Virus (EBV)",
  "Erb's palsy",
  "Erectile Dysfunction",
  "Erysipelas",
  "Erythema Multiforme",
  "Erythema Nodosum",
  "Erythrodermic Psoriasis",
  "Erythromelalgia",
  "Escherichia coli (E. coli) prostatitis",
  "Escherichia coli (E. coli) UTI",
  "Esophageal Adenocarcinoma",
  "Esophageal Candidiasis",
  "Esophageal perforation (Boerhaave Syndrome)",
  "Esophageal varices",
  "Essential Hypertension / Primary Hypertension",
  "Essential Thrombocythemia",
  "Essential Tremor",
  "Ewing Sarcoma",
  "Ex vacuo Ventriculomegaly",
  "Exogenous thyrotoxicosis",
  "External Hemorrhoid",
  "Extragonadal Germ Cell Tumor",
  "Extramammary Paget Disease",
  "Extraperitoneal bladder rupture",
  "Fabry Disease",
  "Factitious Disorder Imposed on Another",
  "Factitious Disorder Imposed on Self",
  "Factor 5 Leiden",
  "Familial adenomatous polyposis",
  "Familial Chylomicronemia Syndrome (Type 1 dyslipidemia)",
  "Familial Combined Hyperlipidemia (Type 2b dyslipidemia)",
  "Familial Dysbetalipoproteinemia (Type 3 dyslipidemia)",
  "Familial Hypercholesterolemia (Type 2a dyslipidemia)",
  "Familial Hypertriglyceridemia (Type 4 dyslipidemia)",
  "Familial hypocalciuric hypercalcemia",
  "Fanconi Anemia",
  "Fanconi Syndrome / Proximal Renal Tubular Acidosis (RTA Type 2)",
  "Felty Syndrome",
  "Female Hypergonadotrophic Hypogonadism",
  "Femoral Hernia",
  "Femoral Neck Fracture",
  "Fetal hydantoin syndrome (FHS)",
  "Fibrinous Pericarditis",
  "Fibroadenoma",
  "Fibrocystic Changes of the Breast",
  "Fibromuscular Dysplasia",
  "Fibromyalgia",
  "Focal Aware Seizure (Simple Partial Seizure)",
  "Focal Impaired Awareness Seizure",
  "Focal nodular hyperplasia",
  "Focal Segmental Glomerulosclerosis (FSGS)",
  "Follicular Lymphoma",
  "Foreign body aspiration",
  "Foreign body conjunctivitis",
  "Foster Kennedy Syndrome (FKS)",
  "Fragile X Syndrome",
  "Francisella tularensis (Tularemia)",
  "Friedreich Ataxia",
  "Frontotemporal Dementia",
  "Frostbite / Freezing cold injury",
  "Full-Thickness (Third Degree) Burn",
  "Functional Hypothalamic Amenorrhea",
  "Galactosemia",
  "Gambling Disorder",
  "Ganglion Cyst",
  "Gardner syndrome",
  "Gardnerella vaginalis bacterial vaginosis",
  "Gastric cancer",
  "Gastroesophageal reflux disease (GERD)",
  "Gaucher Disease",
  "Gender Dysphoria",
  "Generalized Anxiety Disorder",
  "Genito-Pelvic Pain/Penetration Disorder (GPPPD)",
  "Gestational Hypertension",
  "Giant Cell (Temporal) Arteritis",
  "Giant Cell Tumor",
  "Giardia lamblia",
  "Gigantism",
  "Gilbert syndrome",
  "Gitelman Syndrome",
  "Glanzmann Thrombasthenia",
  "Glioblastoma multiforme",
  "Global Aphasia",
  "Glomus Tumor",
  "Glucagonoma",
  "Glucose-6-phosphate dehydrogenase (G6PD) Deficiency",
  "Glycogen storage disease I (Van Gierke Disease)",
  "Glycogen storage disease II (Pompe Disease)",
  "Glycogen storage disease III (Cori Disease)",
  "Glycogen storage disease IV (Andersen Disease)",
  "Glycogen storage disease V (McArdle Disease)",
  "GM1 gangliosidosis",
  "Gonorrhea Prostatitis",
  "Goodpasture Syndrome",
  "Gout (Hyperuricemia)",
  "Granulomatosis with Polyangiitis (GPA)",
  "Graves disease",
  "Greater Trochanteric Pain Syndrome (GTPS)",
  "Greenstick Fracture",
  "Guttate Psoriasis",
  "Gynecomastia",
  "Hand, Foot, and Mouth Disease",
  "Haemophilus ducreyi (Chancroid)",
  "Haemophilus influenzae",
  "Hairy Cell Leukemia",
  "Hairy Leukoplakia",
  "Hashimoto thyroiditis",
  "Heat Stroke",
  "HELLP Syndrome",
  "Hemangioblastoma",
  "Hemiballismus",
  "Hemoglobin C (HbC) Disease",
  "Hemolytic Anemia due to Infection",
  "Hemolytic Uremic Syndrome (Enterohemorrhagic E. coli / EHEC)",
  "Hemophilia A",
  "Hemophilia B (Christmas disease)",
  "Hemophilia C",
  "Heparin Induced Thrombocytopenia",
  "Hepatic adenoma",
  "Hepatic angiosarcoma",
  "Hepatic carcinoid tumor (Carcinoid Syndrome)",
  "Hepatic encephalopathy",
  "Hepatic hemangioma",
  "Hepatitis A Virus (HAV)",
  "Hepatitis B Virus (HBV)",
  "Hepatitis C Virus (HCV)",
  "Hepatitis D Virus (HDV)",
  "Hepatitis E Virus (HEV)",
  "Hepatocellular carcinoma (HCC)",
  "Hereditary Fructose Intolerance (HFI)",
  "Hereditary Hemochromatosis",
  "Hereditary Spherocytosis",
  "Herpes Simplex Virus 1 (HSV-1)",
  "Herpes Simplex Virus 2 (HSV-2)",
  "Hidradenitis Suppurativa",
  "Hirschsprung disease",
  "Histoplasmosis",
  "Histrionic Personality Disorder",
  "HIV-associated Dementia",
  "Hodgkin Lymphoma",
  "Holiday Heart Syndrome (Alcohol-Induced Atrial Fibrillation)",
  "Holoprosencephaly",
  "Homocystinuria",
  "Hordoleum (stye)",
  "Horner Syndrome",
  "Horseshoe Kidney",
  "Human Herpesvirus 8 (Kaposi Sarcoma)",
  "Human Immunodeficiency Virus (HIV)",
  "Human Papilloma Virus (HPV) Condyloma Acuminata",
  "Human Papillomavirus (HPV) Laryngeal Papillomatosis",
  "Hunter Syndrome",
  "Huntington Disease",
  "Hurler Syndrome",
  "Hydatidiform Mole",
  "Hydrocele",
  "Hydronephrosis",
  "Hyperkalemic Tubular Acidosis (RTA Type 4)",
  "Hyperlipidemia",
  "Hyperosmolar hyperglycemic state (HHS)",
  "Hyperplastic polyps",
  "Hypersensitivity Pneumonitis",
  "Hypertensive Crisis",
  "Hypertensive Encephalopathy",
  "Hypertensive Heart Disease",
  "Hypertensive Retinopathy",
  "Hypertrophic Cardiomyopathy (HCM)",
  "Hypnagogic Hallucinations",
  "Hypnopompic Hallucinations",
  "Hypogonadotropic Hypogonadism",
  "Hypomanic Episode",
  "Hypoparathyroidism",
  "Hypovolemic Shock",
  "Ichthyosis Vulgaris",
  "Idiopathic Intracranial Hypertension (Pseudotumor Cerebri)",
  "Idiopathic Pulmonary Fibrosis",
  "IgA Nephropathy (Berger Disease)",
  "IgA Vasculitis (Henoch-Schönlein Purpura)",
  "IgG4-Related Disease",
  "Iliotibial Band Syndrome",
  "Illness Anxiety Disorder",
  "Immature Teratoma",
  "Immune Thrombocytopenia",
  "Immunoglobulin Light Chain / Primary Amyloidosis (AL)",
  "Imperforate Hymen",
  "Incisional Hernia",
  "Incomplete Abortion",
  "Indirect Inguinal Hernia",
  "Inevitable Abortion",
  "Infant botulism",
  "Infantile Strawberry Hemangioma",
  "Infection-Related Glomerulonephritis",
  "Infective Endocarditis",
  "Inflammatory Carcinoma of the Breast",
  "Influenza Virus",
  "Inhalant abuse",
  "Insulinoma",
  "Intellectual Disability",
  "Intermittent Explosive Disorder",
  "Internal Hemorrhoid",
  "Internuclear Ophthalmoplegia",
  "Interstitial (Atypical) Pneumonia",
  "Intertrochanteric fracture",
  "Interventricular Septal Rupture",
  "Intestinal Atresia",
  "Intraductal Papilloma",
  "Intraparenchymal Hemorrhage (Intracerebral Hemorrhage)",
  "Intraperitoneal bladder rupture",
  "Intrauterine Adhesions (Asherman Syndrome)",
  "Intussusception",
  "Invasive Aspergillosis (IPA)",
  "Invasive Ductal Carcinoma",
  "Invasive Lobular Carcinoma",
  "Inverse Psoriasis",
  "Iodine-deficiency hypothyroidism",
  "Iodine-excess hypothyroidism / Wolff-Chaikoff effect",
  "Iron Deficiency Anemia",
  "Iron Poisoning",
  "Irritable bowel syndrome",
  "Ischemic Colitis",
  "Ischemic Priapism",
  "Ischemic Stroke - Anterior Cerebral Artery (ACA)",
  "Ischemic Stroke - Anterior Inferior Cerebellar Artery (AICA)",
  "Ischemic Stroke - Anterior Spinal Artery",
  "Ischemic Stroke - Basilar Artery",
  "Ischemic Stroke - Middle Cerebral Artery (MCA)",
  "Ischemic Stroke - Posterior Cerebral Artery (PCA)",
  "Ischemic Stroke - Posterior Inferior Cerebellar Artery (PICA)",
  "Ischial Bursitis",
  "Job syndrome (Hyper-IgE syndrome)",
  "Juvenile polyposis syndrome",
  "Kallmann Syndrome",
  "Kaposi Sarcoma",
  "Kartagener Syndrome / Primary Ciliary Dyskinesia",
  "Kawasaki Disease",
  "Keratoacanthoma",
  "Keratosis Pilaris",
  "Kidney Stones (Nephrolithiasis)",
  "Klebsiella pneumoniae",
  "Klinefelter Syndrome",
  "Klumpke Palsy",
  "Kluver-Bucy Syndrome",
  "Korsakoff Syndrome",
  "Krabbe Disease",
  "Kuru",
  "Lactational Mastitis",
  "Lactose intolerance",
  "Lacunar Stroke",
  "Lambert-Eaton Myasthenic Syndrome",
  "Langerhans Cell Histiocytosis",
  "Large Cell Carcinoma of the Lung",
  "Laryngitis",
  "Lateral Epicondylitis (Tennis Elbow)",
  "Lateral Meniscus Tear",
  "Laxative Abuse / Melanosis Coli",
  "Lead Poisoning",
  "Left Bundle Branch Block (LBBB)",
  "Left Ventricular Hypertrophy (LVH)",
  "Legg-Calvé-Perthes Disease",
  "Legionnaires Disease (Legionella pneumophila)",
  "Leiomyoma (Fibroid)",
  "Leishmania spp. (Leishmaniasis)",
  "Lemierre's Syndrome",
  "Lens Dislocation",
  "Leprosy (Mycobacterium leprae)",
  "Leptospirosis (Leptospira interrogans)",
  "Leriche syndrome (aortoiliac occlusive disease)",
  "Lesch-Nyhan Syndrome",
  "Leukocyte adhesion deficiency (LAD)",
  "Lewy Body Dementia",
  "Lichen Planus",
  "Lichen Sclerosus",
  "Lichen Simplex Chronicus",
  "Liddle Syndrome",
  "Limb Compartment Syndrome",
  "Limited Scleroderma (CREST syndrome)",
  "Lipoma",
  "Lissencephaly",
  "Listeria monocytogenes",
  "Lithium Toxicity",
  "Loa loa (African Eye Worm) Infection",
  "Lobular Carcinoma In Situ (LCIS)",
  "LSD Intoxication",
  "Ludwig Angina",
  "Lumbar disc herniation",
  "Lung Abscess",
  "Lymphogranuloma venereum (LGV)",
  "Lynch syndrome (HNPCC)",
  "Macroangiopathic Hemolytic Anemia",
  "Major Depressive Disorder (MDD)",
  "Major Depressive Disorder with Peripartum Onset",
  "Major Depressive Disorder with Psychotic Features",
  "Major Depressive Disorder with Seasonal Pattern",
  "Major Depressive Disorder with Seasonal Pattern (Seasonal Affective Disorder)",
  "Major Depressive Episode (MDE)",
  "Malignant Hyperthermia",
  "Malingering",
  "Mallory-Weiss syndrome",
  "Malrotation",
  "Mammary Duct Ectasia",
  "Manic Episode",
  "Mantle Cell Lymphoma",
  "Maple Syrup Urine Disease (MSUD)",
  "Marginal Zone Lymphoma",
  "Mature Cystic Teratoma",
  "MCAD deficiency (Medium-chain acyl-CoA dehydrogenase deficiency)",
  "McCune-Albright Syndrome",
  "MDMA (Ecstasy) Intoxication",
  "Measles (Rubeola Virus)",
  "Meckel diverticulum",
  "Medial Epicondylitis (Golfer's Elbow)",
  "Medial Meniscus Tear",
  "Medial Tibial Stress Syndrome",
  "Mediastinitis",
  "Medulloblastoma",
  "Megaloblastic Anemia (Folate Deficiency)",
  "Megaloblastic Anemia (Vitamin B12 Deficiency)",
  "Melanocytic Nevus",
  "Melasma",
  "Membranoproliferative Glomerulonephritis",
  "Membranous Nephropathy",
  "MEN1",
  "MEN2A",
  "MEN2B",
  "Menetrier Disease",
  "Meningioma",
  "Meningocele",
  "Menopause",
  "Mesothelioma",
  "Metabolic-Associated Fatty Liver Disease (MAFLD)",
  "Metacarpal Neck Fracture (Boxer's Fracture)",
  "Metachromatic leukodystrophy (MLD)",
  "Methemoglobinemia",
  "Microangiopathic Hemolytic Anemia",
  "Microscopic colitis",
  "Microscopic Polyangiitis (MPA)",
  "Midgut Volvulus",
  "Migraine Headache",
  "Miller Fisher Syndrome (MFS)",
  "Minimal Change Disease",
  "Missed Abortion",
  "Mitral Valve Prolapse (MVP)",
  "Mitral Valve Regurgitation",
  "Mitral Valve Stenosis",
  "Mixed Connective Tissue Disease (MCTD)",
  "Mixed Cryoglobulinemia",
  "Monoclonal Gammopathy of Undetermined Significance",
  "Morton's Neuroma",
  "Mucinous Carcinoma",
  "Mucinous Cystadenoma",
  "Mucoepidermoid carcinoma",
  "Mucor and Rhizopus spp. (Mucormycosis)",
  "Mucosal polyps",
  "Mullerian Agenesis",
  "Multicystic dysplastic kidney",
  "Multifocal Atrial Tachycardia (MAT)",
  "Multiple Myeloma",
  "Multiple Sclerosis",
  "Multiple System Atrophy (MSA)",
  "MUTYH-associated polyposis",
  "Myasthenia Gravis",
  "Mycobacterium tuberculosis",
  "Mycoplasma pneumoniae",
  "Mycosis fungoides (Cutaneous T-Cell Lymphoma)",
  "Myelodysplastic Syndrome",
  "Myelofibrosis",
  "Myelomeningocele",
  "Myeloschisis",
  "Myocardial Contusion",
  "Myocarditis",
  "Myoclonic Seizure",
  "Myositis Ossificans",
  "Myotonic Dystrophy",
  "Naegleria fowleri",
  "Narcissistic Personality Disorder",
  "Narcolepsy",
  "Nasolacrimal duct obstruction (NLDO)",
  "Necrotizing enterocolitis",
  "Neisseria gonorrhoeae cervicitis",
  "Neisseria meningitidis",
  "Neonatal Chlamydial Conjunctivitis",
  "Neonatal gonococcal conjunctivitis",
  "Neonatal Intraventricular Hemorrhage",
  "Neonatal Respiratory Distress Syndrome (NRDS)",
  "Nephroblastoma (Wilms tumor)",
  "Nephrogenic diabetes insipidus",
  "Neuroblastoma",
  "Neurofibromatosis Type I",
  "Neurofibromatosis Type II",
  "Neuroleptic Malignant Syndrome (NMS)",
  "Neuropathic Ulcer / Diabetic Foot Ulcer",
  "Nicotine Intoxication",
  "Nicotine Withdrawal",
  "Niemann-Pick disease",
  "Nocardiosis (Nocardia)",
  "Nodular Melanoma",
  "Nonclassic Congenital Adrenal Hyperplasia (partial 21-Hydroxylase Deficiency)",
  "Noncommunicating Hydrocephalus",
  "Non-megaloblastic Anemia",
  "Nonproliferative Diabetic Retinopathy",
  "Nonsecreting pituitary adenoma",
  "Nonthyroidal illness syndrome / euthyroid sick syndrome",
  "Normal Pressure Hydrocephalus",
  "Norovirus Gastroenteritis",
  "Obesity Hypoventilation Syndrome",
  "Obsessive-Compulsive Disorder (OCD)",
  "Obsessive-Compulsive Personality Disorder (OCPD)",
  "Obstructive Shock",
  "Obstructive Sleep Apnea (OSA)",
  "Olecranon Bursitis",
  "Oligodendroglioma",
  "Onchocerca volvulus (River Blindness)",
  "Open Globe Injury",
  "Open-angle Glaucoma",
  "Opioid Intoxication",
  "Opioid Withdrawal",
  "Oppositional Defiant Disorder",
  "Orbital cellulitis",
  "Orchitis",
  "Ornithine transcarbamylase (OTC) deficiency",
  "Orotic Aciduria",
  "Orthostatic Hypotension",
  "Osgood-Schlatter Disease",
  "Osmotic Demyelination Syndrome / Central Pontine Myelinolysis",
  "Osteitis Deformans (Paget's Disease)",
  "Osteoarthritis",
  "Osteoblastoma",
  "Osteochondroma",
  "Osteogenesis Imperfecta",
  "Osteoid Osteoma",
  "Osteomalacia/Rickets",
  "Osteomyelitis",
  "Osteopetrosis",
  "Osteoporosis",
  "Osteosarcoma",
  "Otitis Externa",
  "Otitis Media",
  "Ovarian Corpus Luteal Cyst",
  "Ovarian Follicular Cyst",
  "Ovarian Theca Lutein Cyst",
  "Ovarian Torsion",
  "Pacemaker Dysfunction",
  "Paget Disease of the Breast / Mammary Paget Disease",
  "Paget-Schroetter Syndrome (PSS)",
  "Pancoast Tumor",
  "Pancreas Divisum",
  "Pancreatic adenocarcinoma",
  "Pancreatic insufficiency",
  "Pancreatic pseudocyst",
  "Pancreaticopleural fistula",
  "Panic Disorder",
  "PANS (Pediatric Acute-onset Neuropsychiatric Syndrome)",
  "Paracoccidioidomycosis",
  "Paraesophageal Hiatal Hernia",
  "Paraganglioma",
  "Paragonimus westermani (Oriental lung fluke)",
  "Parainfluenza Virus (Croup)",
  "Paralytic Ileus (Ogilvie Syndrome)",
  "Paramyxovirus (Mumps)",
  "Paranoid Personality Disorder",
  "Parkinson Disease",
  "Paroxysmal Nocturnal Hemoglobinuria",
  "Paroxysmal Supraventricular Tachycardia (PSVT)",
  "Partial-Thickness (Second Degree) Burn",
  "Parvovirus B19",
  "Pasteurella multocida",
  "Patau Syndrome",
  "Patellofemoral Syndrome",
  "Patent Ductus Arteriosus (PDA)",
  "Patent Foramen Ovale (PFO)",
  "Pediculus humanus and Phthirus pubis (Lice)",
  "Pelvic adhesive disease",
  "Pelvic Inflammatory Disease",
  "Pemphigus Vulgaris",
  "Penile Squamous Cell Carcinoma",
  "Peptic ulcer disease",
  "Perianal abscess",
  "Perimenopause",
  "Peripartum Blues",
  "Peripheral Artery Disease (PAD)",
  "Peripheral Vertigo",
  "Peritonsillar Abscess",
  "Persistent Depressive Disorder (PDD) / Dysthymic disorder",
  "Pes Anserinus Pain Syndrome",
  "Peutz-Jeghers syndrome",
  "Peyronie Disease",
  "Phantom Limb Pain",
  "Phencyclidine (PCP) Intoxication",
  "Phenylketonuria (PKU)",
  "Pheochromocytoma",
  "Phimosis",
  "Phyllodes Tumor",
  "Physical Abuse",
  "Pica",
  "Pilocytic Astrocytoma",
  "Pilonidal cyst",
  "Pineal Gland Tumor / Parinaud syndrome",
  "Pinguecula",
  "Piriformis syndrome",
  "Pituitary Adenoma",
  "Pituitary apoplexy",
  "Pituitary prolactinoma",
  "Pityriasis / Tinea Versicolor",
  "Pityriasis Rosea",
  "Placenta Accreta",
  "Placenta Increta",
  "Placenta Percreta",
  "Placenta Previa",
  "Placental Abruption",
  "Plantar Fasciitis",
  "Plaque Psoriasis",
  "Plasmodium falciparum Malaria",
  "Plasmodium malariae Malaria",
  "Plasmodium vivax/ovale Malaria",
  "Pleomorphic adenoma",
  "Pleural Effusion",
  "Plummer-Vinson syndrome",
  "Pneumococcal Pneumonia (Streptococcus pneumoniae)",
  "Pneumocystis jirovecii (PCP) pneumonia",
  "Pneumomediastinum",
  "Poliomyelitis",
  "Poliovirus",
  "Polyarteritis Nodosa (PAN)",
  "Polycystic Ovary Syndrome (PCOS)",
  "Polycythemia Vera",
  "Polymorphous Light Eruption",
  "Polymyalgia Rheumatica (PMR)",
  "Polymyositis",
  "Polyomavirus (JC Virus)",
  "Popliteal Cyst (Baker's Cyst)",
  "Porcelain gallbladder",
  "Porphyria Cutanea Tarda",
  "Portal hypertension",
  "Positional plagiocephaly",
  "Post-concussion Syndrome",
  "Posterior hip dislocation",
  "Posterior Reversible Encephalopathy Syndrome (PRES) / Reversible Posterior Leukoencephalopathy Syndrome (RPLS)",
  "Posterior shoulder dislocation",
  "Posterior Urethral Injury (Pelvic trauma)",
  "Posterior Urethral Valves",
  "Post-MI Papillary Muscle Rupture",
  "Post-MI True Ventricular Aneurysm",
  "Post-MI Ventricular Free Wall Rupture",
  "Post-MI Ventricular Pseudoaneurysm",
  "Postpartum Psychosis",
  "Post-Streptococcal Glomerulonephritis",
  "Post-Traumatic Stress Disorder (PTSD)",
  "Postural Orthostatic Tachycardia Syndrome (POTS)",
  "Potter Sequence",
  "Poxvirus (Molluscum Contagiosum)",
  "Prader-Willi Syndrome",
  "Preeclampsia",
  "Premature Atrial Contractions (PACs)",
  "Premature Ejaculation",
  "Premature Ventricular Contractions (PVCs)",
  "Prepatellar Bursitis",
  "Pre-Renal Acute Kidney Injury (AKI)",
  "Presbycusis",
  "Presbyopia",
  "Preseptal cellulitis",
  "Pressure Injury (Decubitus Ulcer)",
  "Primary (psychogenic) polydipsia",
  "Primary adrenal insufficiency (Addison's Disease)",
  "Primary biliary cholangitis",
  "Primary Central Nervous System Lymphoma",
  "Primary Dysmenorrhea",
  "Primary hyperaldosteronism (Conn syndrome)",
  "Primary hyperparathyroidism",
  "Primary Ovarian Insufficiency",
  "Primary Raynaud’s disease",
  "Primary sclerosing cholangitis (PSC)",
  "Primary Spontaneous Pneumothorax",
  "Primary Testicular Lymphoma",
  "Procidentia",
  "Proctitis",
  "Progressive Multifocal Leukoencephalopathy (PML)",
  "Progressive Supranuclear Palsy (PSP)",
  "Proliferative Diabetic Retinopathy",
  "Prolonged QT Syndrome",
  "Prostatic Adenocarcinoma",
  "Protein C/S Deficiency",
  "Prothrombin G20210A Mutation",
  "Pseudoachalasia",
  "Pseudoaneurysm",
  "Pseudofolliculitis Barbae",
  "Pseudohypoparathyroidism type 1A",
  "Pseudomonas aeruginosa infection (non-disseminated)",
  "Pseudopseudohypoparathyroidism",
  "Psoas Abscess",
  "Psoriatic Arthritis",
  "Psychogenic dyspareunia",
  "Pterygium (surfer's eye)",
  "Pulmonary Contusion",
  "Pulmonary Embolism (PE)",
  "Pulmonary Hypertension",
  "Pulmonary Valve Regurgitation",
  "Pulmonary Valve Stenosis",
  "Pustular Psoriasis",
  "Pyloric stenosis",
  "Pyogenic Granuloma",
  "Pyogenic Liver Abscess",
  "Pyruvate Kinase Deficiency",
  "Rabies Virus",
  "Radial Head Subluxation (Nursemaid's Elbow)",
  "Radial Neuropathy (Saturday Night Palsy)",
  "Ramsay Hunt Syndrome (RHS)",
  "Rapidly Progressive Glomerulonephritis (RPGN)",
  "Reactive Arthritis",
  "Rectocele",
  "Rectovaginal fistula",
  "Refeeding Syndrome",
  "Relative Afferent Pupillary Defect / Marcus Gunn Pupil",
  "Renal Cell Carcinoma",
  "Renal Failure",
  "Renal Oncocytoma",
  "Renal Osteodystrophy",
  "Renal Papillary Necrosis",
  "Respiratory Syncytial Virus (RSV) bronchiolitis",
  "Restless Legs Syndrome",
  "Restrictive Cardiomyopathy",
  "Retained placenta",
  "Retained products of conception (RPOC)",
  "Retinal Artery Occlusion",
  "Retinal Detachment",
  "Retinal Vein Occlusion",
  "Retinitis Pigmentosa",
  "Retinoblastoma",
  "Retinopathy of Prematurity",
  "Retrograde Amnesia",
  "Retropharyngeal Abscess",
  "Rett Syndrome",
  "Reye syndrome",
  "Rh Hemolytic Disease of the Newborn",
  "Rhabdomyolysis",
  "Rhabdomyomas (Cardiac Tumor)",
  "Rheumatic Heart Disease",
  "Rheumatoid Arthritis",
  "Rhinosinusitis",
  "Rhinovirus (Common Cold)",
  "Rickettsia prowazekii (Epidemic Typhus)",
  "Rickettsia rickettsii (Rocky Mountain Spotted Fever)",
  "Rickettsia typhi (Endemic Typhus)",
  "Riedel thyroiditis",
  "Right Bundle Branch Block (RBBB)",
  "Right Ventricular Hypertrophy (RVH)",
  "Rosacea",
  "Roseola (HHV-6)",
  "Rotator Cuff Tear",
  "Rotator Cuff Tendinopathy",
  "Rotavirus gastroenteritis",
  "Rotor syndrome",
  "Rubella Virus (German Measles)",
  "Salivary gland tumors",
  "Salmonella typhi",
  "Sandhoff disease",
  "Sarcoidosis",
  "Sarcoptes scabiei (Scabies)",
  "Schistosoma spp. (Schistosomiasis)",
  "Schizoaffective Disorder",
  "Schizoid Personality Disorder",
  "Schizophrenia",
  "Schizophreniform Disorder",
  "Schizotypal Personality Disorder",
  "Scleroderma (Systemic Sclerosis)",
  "Sclerosing Adenosis of the Breast",
  "Scombroid Poisoning",
  "Seborrheic Dermatitis",
  "Seborrheic Keratosis",
  "Secondary biliary cirrhosis",
  "Secondary hyperaldosteronism",
  "Secondary hyperparathyroidism",
  "Secondary Spontaneous Pneumothorax",
  "Selective IgA Deficiency",
  "Selective Mutism",
  "Seminoma",
  "Separation Anxiety Disorder",
  "Septic Arthritis",
  "Septic pelvic thrombophlebitis",
  "Serotonin Syndrome",
  "Serous Carcinoma",
  "Serous Cystadenoma",
  "Serrated polyps",
  "Sertoli-Leydig Cell Tumor",
  "Severe Acute Respiratory Syndrome Coronavirus 2 (SARS-CoV-2)",
  "Severe combined immunodeficiency (SCID)",
  "Sex Cord Fibroma",
  "Sex Cord Granulosa Cell Tumor",
  "Sex Cord Thecoma",
  "Sexual aversion",
  "Sheehan syndrome",
  "Shigellosis (Shigella)",
  "Short bowel syndrome",
  "SIADH",
  "Sialadenitis",
  "Sialolithiasis",
  "Sick Sinus Syndrome",
  "Sickle Cell Anemia",
  "Sickle cell trait",
  "Sideroblastic Anemia",
  "Silicosis",
  "Sinding-Larsen-Johansson (SLJ) syndrome",
  "Sjögren's Syndrome",
  "Sleep Terror Disorder",
  "Sliding Hiatal Hernia",
  "Slipped Capital Femoral Epiphysis (SCFE)",
  "Small bowel obstruction",
  "Small Cell Lung Carcinoma",
  "Small intestinal bacterial overgrowth (SIBO)",
  "Smith-Magenis Syndrome (SMS)",
  "Social Anxiety Disorder",
  "Somatic Symptom Disorder",
  "Somatostatinoma",
  "Spermatocele",
  "Spina Bifida Occulta",
  "Spinal Epidural Abscess",
  "Spinal Muscular Atrophy (Werdnig-Hoffmann Disease)",
  "Splenic Abscess",
  "Spondylolisthesis",
  "Spontaneous bacterial peritonitis",
  "Sporothrix schenckii (Sporotrichosis)",
  "Squamous Cell Carcinoma of the Bladder",
  "Squamous cell carcinoma of the esophagus",
  "Squamous Cell Carcinoma of the Lung",
  "Squamous Cell Carcinoma of the Skin",
  "ST Depression Myocardial Infarction (NSTEMI)",
  "ST Elevation Myocardial Infarction (STEMI)",
  "Stable Angina",
  "Staphylococcal Scalded Skin Syndrome",
  "Staphylococcus aureus cellulitis",
  "Staphylococcus aureus Impetigo",
  "Staphylococcus epidermidis",
  "Staphylococcus saprophyticus",
  "Status Epilepticus",
  "Stevens-Johnson Syndrome (SJS)",
  "Streptococcus agalactiae (Group B Strep)",
  "Streptococcus bovis",
  "Streptococcus pyogenes (Group A Strep) pharyngitis",
  "Stress Incontinence",
  "Strongyloides stercoralis",
  "Struma ovarii hyperthyroidism",
  "Sturge-Weber Syndrome",
  "Subacromial Bursitis",
  "Subacute Combined Degeneration",
  "Subacute granulomatous thyroiditis / de Quervain",
  "Subarachnoid Hemorrhage (SAH) / Berry Aneurysm Rupture",
  "Subclavian Steal Syndrome",
  "Subdural Hematoma",
  "Submucosal polyps",
  "Substance Use Disorder",
  "Superficial (First Degree) Burn",
  "Superficial Spreading Melanoma",
  "Superior Vena Cava (SVC) Syndrome",
  "Supine Hypotensive Syndrome",
  "Swyer Syndrome",
  "Sydenham chorea",
  "Syndrome of Apparent Mineralocorticoid Excess (SAME)",
  "Syringomyelia",
  "Systemic Juvenile Idiopathic Arthritis (sJIA)",
  "Systemic Lupus Erythematosus (SLE)",
  "Systolic Dysfunction",
  "Tabes Dorsalis",
  "Taenia solium (Neurocysticercosis)",
  "Takayasu Arteritis",
  "Tay-Sachs Disease",
  "Temporomandibular Disorders",
  "Tension Pneumothorax",
  "Tension-type Headache",
  "Tertiary hyperparathyroidism",
  "Testicular Leydig Cell Tumor",
  "Testicular Sertoli Cell Tumor",
  "Testicular Torsion",
  "Tetralogy of Fallot (ToF)",
  "Thoracic Outlet Syndrome (TOS)",
  "Threatened Abortion",
  "Thromboangiitis Obliterans (Buerger's Disease)",
  "Thrombotic Thrombocytopenic Purpura",
  "Thyroglossal duct cyst",
  "Thyroid adenoma",
  "Thyroid follicular carcinoma",
  "Thyroid medullary carcinoma",
  "Thyroid papillary carcinoma",
  "Thyroid storm (thyrotoxic crisis)",
  "Thyroid undifferentiated/anaplastic carcinoma",
  "Tic Disorder",
  "Tinea Capitis",
  "Tinea Corporis (Ringworm)",
  "Tinea Cruris (Jock Itch)",
  "Tinea Pedis (Athlete's Foot)",
  "Tinea Unguium (Onychomycosis)",
  "Todd's Paralysis",
  "Tonic Seizure",
  "Tonic-clonic Seizure",
  "Torsades de Pointes",
  "Torus (Buckle) Fracture",
  "Total Anomalous Pulmonary Venous Return (TAPVR)",
  "Tourette Syndrome",
  "Toxic Megacolon",
  "Toxic multinodal goiter",
  "Toxocara canis (Visceral Larva Migrans)",
  "Toxoplasma gondii",
  "Tracheobronchial rupture",
  "Transient Ischemic Attack (TIA)",
  "Transient synovitis",
  "Transthyretin Amyloidosis (ATTR)",
  "Transverse Myelitis",
  "Traumatic Pneumothorax",
  "Treponema pallidum (Syphilis)",
  "Trichinosis (Trichinella spiralis)",
  "Trichomoniasis (Trichomonas vaginalis)",
  "Trichotillomania",
  "Trichuris trichiura (Whipworm)",
  "Tricuspid Atresia",
  "Tricuspid Valve Regurgitation",
  "Tricuspid Valve Stenosis",
  "Tricyclic Antidepressant Toxicity",
  "Trigeminal Neuralgia",
  "Tropical sprue",
  "Truncus Arteriosus",
  "Trypanosoma brucei (African Sleeping Sickness)",
  "Trypanosoma cruzi (Chagas Disease)",
  "Tuberous Sclerosis Complex",
  "Tubo-Ovarian Abscess",
  "Turcot syndrome",
  "Turner Syndrome",
  "Type 1 Diabetes Mellitus",
  "Type 2 Diabetes Mellitus",
  "Tyrosinemia",
  "Ulcerative colitis",
  "Ulnar Neuropathy (Cubital Tunnel Syndrome)",
  "Uncal Transtentorial Herniation",
  "Unstable Angina",
  "Uremic Platelet Dysfunction",
  "Urethral stricture",
  "Urgency Incontinence",
  "Urothelial Carcinoma of the Bladder",
  "Urticaria (Hives)",
  "Uterine Atony",
  "Uterine Inversion",
  "Uterine Prolapse",
  "Uterine Rupture",
  "Vaginal Clear Cell Carcinoma",
  "Vaginal Sarcoma Botryoides",
  "Vaginal Squamous Cell Carcinoma",
  "Varicella Zoster Virus (Chickenpox)",
  "Varicella Zoster Virus (Shingles)",
  "Varicocele",
  "Vasa Previa",
  "Vascular Dementia",
  "Venous Insufficiency",
  "Venous Sinus Thrombosis",
  "Ventricular Fibrillation (VF)",
  "Ventricular Septal Defect (VSD)",
  "Ventricular Tachycardia (VT)",
  "Verrucae (Warts)",
  "Vesicoureteral Reflux",
  "Vesicovaginal fistula",
  "VIPoma",
  "Viral conjunctivitis",
  "Vitamin K Deficiency",
  "Vitiligo",
  "Vocal cord nodules",
  "Vocal cord paralysis",
  "Volvulus",
  "von Hippel-Lindau Disease",
  "Von Willebrand Disease",
  "Vulnerable Child Syndrome",
  "Vulvar Carcinoma",
  "Vulvovaginal candidiasis (Yeast infection)",
  "Waardenburg Syndrome",
  "WAGR Syndrome (WAGR Complex)",
  "Waldenstrom Macroglobulinemia",
  "Warm Autoimmune Hemolytic Anemia",
  "Warthin tumor",
  "Waterhouse-Friderichsen syndrome",
  "Wernicke-Korsakoff Syndrome",
  "Wernicke's (Receptive) Aphasia",
  "Western Equine Encephalitis Virus",
  "Wet Macular Degeneration",
  "Whipple disease",
  "Wide Splitting of S2",
  "Williams syndrome",
  "Wilson disease",
  "Wiskott-Aldrich syndrome (WAS)",
  "Wiskott-Aldrich Syndrome",
  "Wolff-Parkinson-White (WPW) Syndrome",
  "Wuchereria bancrofti, Brugia malayi (Lymphatic Filariasis)",
  "Xeroderma Pigmentosum",
  "X-linked (Bruton) agammaglobulinemia",
  "X-Linked Adrenoleukodystrophy",
  "Yellow Fever",
  "Yersinia enterocolitica",
  "Yersinia pestis (Bubonic Plague)",
  "Yolk Sac Tumor",
  "Zellweger Syndrome",
  "Zenker diverticulum",
  "Zika Virus",
  "Zollinger-Ellison syndrome",
  "Major depressive disorder",
  "Ludwig's angina",
  "Generalised anxiety disorder",
  "Ameloblastoma",
  "Dentigerous cyst",
  "Post-traumatic stress disorder",
  "Oral squamous cell carcinoma",
  "Obsessive-compulsive disorder",
  "Acute dentoalveolar abscess",
  "Enterococcal UTI",
  "Oral candidiasis",
  "Attention deficit hyperactivity disorder",
  "Pericoronitis",
  "Recurrent aphthous stomatitis",
  "Autism spectrum disorder",
  "Odontogenic keratocyst",
  "Necrotising ulcerative gingivitis",
  "Acute appendicitis",
  "Atopic dermatitis",
  "Croup",
  "Gastroesophageal reflux disease",
  "Acute myocardial infarction",
  "Dry socket (alveolar osteitis)",
  "Specific phobia",
  "Psoriasis",
  "Bronchiolitis",
  "Mucocele",
  "Dysthymia",
  "Anaphylaxis",
  "Scabies",
  "Acute otitis media",
  "Gestational diabetes",
  "Aortic stenosis",
  "Oral hairy leukoplakia",
  "Diabetic ketoacidosis",
  "Impetigo",
  "Febrile seizure",
  "Crohn's disease",
  "Acute pericarditis",
  "Burning mouth syndrome",
  "Insomnia disorder",
  "Herpes zoster",
  "Acute cholecystitis",
  "Warthin's tumour",
  "Acute asthma exacerbation",
  "Pertussis",
  "Hepatitis A virus infection",
  "Bacterial vaginosis",
  "Hypoglycemia",
  "Carcinoid Syndrome",
  "Anal fissure",
  "Vulvovaginal candidiasis",
  "Mitral regurgitation",
  "Bacterial meningitis",
  "Urticaria",
  "Scarlet fever",
  "Trichomoniasis",
  "Hypertrophic cardiomyopathy",
  "Leukoplakia",
  "Tinea corporis",
  "Gastric ulcer",
  "Supraventricular tachycardia",
  "Cleft palate",
  "Acute stress disorder",
  "Cellulitis",
  "Ascending Cholangitis",
  "Acute bacterial conjunctivitis",
  "Functional constipation",
  "Ventricular tachycardia",
  "Erythroplakia",
  "Fanconi Syndrome",
  "Opioid overdose",
  "Pediatric urinary tract infection",
  "Cirrhosis",
  "Spontaneous abortion",
  "Non-ST-Elevation Myocardial Infarction (NSTEMI)",
  "Kartagener Syndrome",
  "Osteoradionecrosis",
  "Cyclothymia",
  "Bleeding peptic ulcer",
  "Mucormycosis",
  "Community-acquired pneumonia",
  "Hemorrhoids",
  "Tinea Versicolor",
  "Mastitis",
  "Geographic tongue",
  "Hypertensive emergency",
  "Nursemaid's elbow",
  "Functional dyspepsia",
  "Botulism",
  "Bartholin gland cyst",
  "Medication-related osteonecrosis of the jaw",
  "Reactive attachment disorder",
  "Acute COPD exacerbation",
  "Diaper dermatitis",
  "Gastroparesis",
  "Mitral stenosis",
  "Fibrous dysplasia",
  "Premenstrual dysphoric disorder",
  "Acute angle-closure glaucoma",
  "Tinea pedis",
  "Traveler's diarrhea",
  "Long QT syndrome",
  "Acute necrotising ulcerative periodontitis",
  "Acute Disseminated Encephalomyelitis (ADEM)",
  "Ehrlichiosis"
];

window.__DDLE_CASES__ = GAMES;
window.__DDLE_DICTIONARY__ = DISEASE_LIST;

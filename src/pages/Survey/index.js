import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./Survey.scss";

Survey.StylesManager.ThemeColors["modern"]["$main-color"] = "#c95498";
Survey.StylesManager.ThemeColors["modern"]["$text-color"] = "#743191";

Survey.StylesManager.applyTheme("modern");

Survey.Serializer.addProperty("question", "popupdescription:text");
Survey.Serializer.addProperty("page", "popupdescription:text");
function showDescription(element) {
  document.getElementById("questionDescriptionText").innerHTML =
    element.popupdescription;
  $("#questionDescriptionPopup").modal();
}

function SurveyPage() {
  var surveyJSON = {
    title: "Blossom RX Patient Intake",
    logoPosition: "right",
    pages: [
      {
        name: "Zip Check",
        elements: [
          {
            type: "text",
            name: "Zip Code",
            title: "What’s your US Zip code?",
            hideNumber: true,
            isRequired: true,
            inputType: "number",
            min: "00000",
            max: "99999",
            step: 0,
          },
        ],
        title: "Let’s make sure we’re available in your state",
      },
      {
        name: "Intro",
        elements: [{ type: "html", name: "html1", visible: false }],
        title: "Let’s start with some basic information",
        description:
          "We’re excited to start your free online consult and create your personalized treatment plan. ",
      },
      {
        name: "Terms",
        elements: [
          {
            type: "boolean",
            name: "Do you agree",
            title: "Do you agree to the terms and give consent for telehealth?",
            hideNumber: true,
            isRequired: true,
          },
        ],
        title: "What about privacy?",
        description:
          "Anything you share in your consult will be used for your personal treatment plan and will stay private between you and your medical provider.",
      },
      {
        name: "Symptom Severity",
        elements: [
          {
            type: "rating",
            name: "Hot Flashes Severity",
            title: "Hot Flashes",
            description:
              "Do you ever get waves of heat that come from nowhere and cause you to want to strip off your clothes? Do you feel the sudden need for an electric fan to keep cool?",
            isRequired: true,
            minRateDescription: "Mild",
            maxRateDescription: "Severe",
          },
          {
            type: "rating",
            name: "Vaginal Dryness Severity",
            title: "Vaginal Dryness",
            description:
              "Is your vagina always itchy/irritated? (and you don’t have a yeast infection)? Do you feel like it sometimes hurts if your vagina is touched: eg during pelvic exam / sexual activity",
            isRequired: true,
            minRateDescription: "Mild",
            maxRateDescription: "Severe",
          },
          {
            type: "rating",
            name: "Brain Fog & Forgetfulness Severity",
            title: "Brain Fog & Forgetfulness",
            description:
              "Do you ever feel like you make a list of things to do and then suddenly you can’t remember the last item? Is it harder for you to focus and finish tasks?",
            isRequired: true,
            minRateDescription: "Mild",
            maxRateDescription: "Severe",
          },
          {
            type: "rating",
            name: "Mood Swings Severity",
            title: "Mood Swings",
            description:
              "Do you feel like your “fuse” is shorter these days? (Shorter temper). Are you more irritable and impatient? Feeling more aggressive?",
            isRequired: true,
            minRateDescription: "Mild",
            maxRateDescription: "Severe",
          },
          {
            type: "rating",
            name: "Skin & Hair Changes Severity",
            title: "Skin & Hair Changes",
            description:
              "Is your hair thinner than before? Is your skin drier? Are you using a ton of night cream just to stay feeling normal?",
            isRequired: true,
            minRateDescription: "Mild",
            maxRateDescription: "Severe",
          },
          {
            type: "rating",
            name: "Fatigue / Low Energy Severity",
            title: "Fatigue / Low Energy",
            description:
              "Are you always tired? Do you feel like you don’t have the energy to get your stuff / work done and just want to go to bed at home?",
            isRequired: true,
            minRateDescription: "Mild",
            maxRateDescription: "Severe",
          },
        ],
        title: "How bad are your symptoms?",
        description: "Please rate your experience with the following symptoms",
      },
      {
        name: "What brings you here today?",
        elements: [
          {
            type: "checkbox",
            name: "Primary Symptoms",
            title: "Primary Symptoms Of Concern",
            description: "Select which symptoms you'd most like relief from",
            isRequired: true,
            choices: [
              "Hot Flashes",
              "Night Sweats",
              "Vaginal Dryness",
              "Problems Sleeping",
              "Brain Fog & Forgetfulness",
              "Painful Sex",
              "Urinary Problems",
              "Mood Swings",
              "Weird Period",
              "Skin & Hair Changes",
              "Increase Of Facial Hair & Acne",
              "Fatigue / Low Energy",
              "Weight Changes",
              "Anxiety / Depression",
              "Heart Skipping Or Racing",
              "Joint / Muscular Discomfort",
            ],
            hasOther: true,
          },
        ],
        title: "What brings you here today?",
        description:
          "Help your Blossom RX medical provider understand your symptoms and customize your care.",
      },
      {
        name: "Sex",
        elements: [
          {
            type: "boolean",
            name: "Gender",
            isRequired: true,
            validators: [
              { type: "expression", expression: "{Gender} = 'Female'" },
            ],
            labelTrue: "Male",
            labelFalse: "Female",
            valueTrue: "Male",
            valueFalse: "Female",
          },
        ],
        title: "Let’s start with the basics",
        description:
          "Answering honestly helps your medical provider get the best treatment ordered for you",
      },
      {
        name: "Demographics",
        elements: [
          {
            type: "text",
            name: "question8",
            title: "Where were you born?",
            isRequired: true,
          },
          {
            type: "text",
            name: "question9",
            title: "How tall are you?",
            isRequired: true,
            inputType: "range",
            min: "0",
            max: "8",
          },
          {
            type: "text",
            name: "question10",
            title: "What is your weight?",
            isRequired: true,
            inputType: "number",
          },
        ],
        title: "Demographics",
        description:
          "If our medical providers decide our treatments are for you, they’ll use this to personalize your plan.",
      },
      {
        name: "Period Health",
        elements: [
          {
            type: "radiogroup",
            name: "Last Period",
            title: "When was your last period?",
            isRequired: true,
            choices: [
              "Less than 1 month ago",
              "1-2 months ago",
              "3-6 months ago",
              "6-12 months ago",
              "1-2 years ago",
              "2-5 years ago",
              "5-10 years ago",
              "10+ years ago",
            ],
          },
          {
            type: "checkbox",
            name: "question12",
            title:
              "Are you noticing any period irregularities? Select all that apply",
            isRequired: true,
            choices: [
              { value: "item1", text: "No irregularities" },
              { value: "item2", text: "My period is light and spotting" },
              { value: "item3", text: "My cycles are shorter" },
              { value: "item4", text: "I’m skipping cycles" },
              { value: "item5", text: "Heavier than normal" },
            ],
          },
          {
            type: "text",
            name: "Cycles Skipped Freq",
            title: "How frequently are you skipping cycles?",
            isRequired: true,
          },
        ],
        title: "Period Health",
        description:
          "These questions will help ascertain the current status of your period",
      },
      {
        name: "Pregnancy",
        elements: [
          {
            type: "boolean",
            name: "Pregnancy Plans",
            description: "Are you pregnant or trying to become pregnant?",
            isRequired: true,
          },
          {
            type: "boolean",
            name: "Birth Control",
            description: "Are you using birth control?",
            isRequired: true,
          },
        ],
        title: "Pregnancy",
      },
      {
        name: "Ancestry",
        elements: [
          {
            type: "checkbox",
            name: "Race",
            title: "Which of the following best describes you?",
            description:
              "Race & ethnicity are known factors affecting menopause symptoms, severity, and health. Select all the apply.",
            isRequired: true,
            choices: [
              "African",
              "African American / Black",
              "Asian-American",
              {
                value: "East Asian",
                text: "East Asian (including Chinese, Japanese, Korean, Mongolian, Tibetan, and Taiwanese)",
              },
              {
                value: "South Asian",
                text: "South Asian ( including Bangladeshi, Bhutanese, Indian, Nepali, Pakistani, and Sri Lankan)",
              },
              {
                value: "Southeast Asian",
                text: "Southeast Asian (including Burmese, Cambodian, Filipino, Hmong, Indonesian, Laotian, Malaysian, Mien, Singaporean, Thai, and Vietnamese)",
              },
              "Hispanic / LatinX",
              {
                value: "Indigenous American / First Nations",
                text: "Indigenous American / First nations (including Native American/American Indian, Alaskan Native, Pacific Islander, and Native Hawaiian)",
              },
              "Middle Eastern",
              "White",
              "Prefer not to say",
              "Other",
            ],
          },
        ],
        title: "Ancestry",
      },
      {
        name: "page11",
        elements: [
          {
            type: "checkbox",
            name: "Medical Conditions",
            description:
              "Medical conditions can impact the treatment that’s best for you. Have been treated for any of the following medical conditions? Select all that apply.",
            isRequired: true,
            choices: [
              "Breast Cancer",
              "Uterine/Endometrial Cancer",
              "Ovarian Cancer",
              "Liver Disease",
              "Gallbladder Disease",
              "Lupus",
              "Coronary Heart Disease",
              "Heart Attack",
              "Stroke/TIA",
              "Blood Clot",
            ],
            hasNone: true,
            noneText: "None Of These",
          },
        ],
      },
      {
        name: "page12",
        elements: [
          {
            type: "boolean",
            name: "question18",
            title: "Upcoming Surgery",
            description:
              "Do you expect to have surgery in the next six months?",
            isRequired: true,
          },
          {
            type: "boolean",
            name: "Recent Surgery",
            description:
              "Have you had surgery or immobilization in the last six months?",
            isRequired: true,
          },
        ],
      },
      {
        name: "page13",
        elements: [
          {
            type: "boolean",
            name: "High Blood Pressure History",
            title: "Do you have history of high blood pressure or hypertension",
            isRequired: true,
          },
          {
            type: "boolean",
            name: "Knows BP",
            title:
              "It is essential that you report your blood pressure accurately. Do you know your blood pressure?",
            isRequired: true,
          },
        ],
        title: "Blood Pressure",
        description:
          "Blood Pressure is an important factor in determining the appropriate treatment for you.",
      },
      {
        name: "Blood Pressure Number",
        elements: [
          {
            type: "text",
            name: "Systolic",
            title: "Systolic (mmHg)",
            description: "The higher top number",
            isRequired: true,
            inputType: "number",
            min: "50",
            max: "200",
          },
          {
            type: "text",
            name: "Diastolic",
            title: "Diastolic (mmHg)",
            description: "The lower bottom number",
            isRequired: true,
            inputType: "number",
            min: "40",
            max: "200",
          },
        ],
        title: "What was your blood pressure at your last reading?",
        description:
          "Blood pressure is read as two numbers. The top number is always higher than the bottom number.",
      },
      {
        name: "Hormone Therapy",
        elements: [
          {
            type: "checkbox",
            name: "Taking HRT",
            title:
              "Have you taken hormone-based treatments for menopause symptoms?",
            description: "Select all that apply",
            choices: [
              "Hormone Pill",
              "Hormone Patch",
              "Pellet Therapy",
              "Hormone Cream",
              "Hormone Vaginal Cream",
              "Hormone Transdermal Cream",
              "Bio-identical medication",
              "Other",
            ],
            hasNone: true,
            noneText: "None of these",
          },
        ],
        title: "Hormone Therapy",
      },
      {
        name: "page2",
        elements: [
          {
            type: "checkbox",
            name: "Medications",
            title: "Are you taking any of the following medications?",
            description: "Select all that apply",
            choices: [
              {
                value: "Blood pressure medicine",
                text: "Blood pressure medicine",
              },
              "Testosterone",
              "Depression/anxiety medicine",
              "Mood disorder medicine",
              "Tamoxifen",
            ],
            hasOther: true,
            hasNone: true,
            otherPlaceHolder:
              "Write the name and dosage of each other medicine",
            noneText: "Not taking any medications",
          },
        ],
        title: "Medications",
        description:
          "We’ll create a treatment plan that works with medications you’re currently taking.",
      },
      {
        name: "page3",
        elements: [
          {
            type: "boolean",
            name: "Has Allergies",
            title: "Do you have any allergies?",
            isRequired: true,
          },
          {
            type: "comment",
            name: "Allergies Detail",
            visible: false,
            visibleIf: "{Has Allergies} = true",
            title: "Please describe your allergies",
            requiredIf: "{Has Allergies} = true",
          },
        ],
        title: "Allergies",
      },
      {
        name: "page4",
        elements: [
          {
            type: "boolean",
            name: "Had hysterectomy",
            title: "Have you had a hysterectomy?",
            isRequired: true,
          },
        ],
        title: "Hysterectomy",
      },
      {
        name: "Uterine health",
        elements: [{ type: "html", name: "question6" }],
        title: "Uterine health",
        description:
          "Your treatment recommendation may include progesterone (at no additional cost) to protect the uterine lining.",
      },
      {
        name: "Other health factors",
        elements: [
          {
            type: "boolean",
            name: "Unexplained Bleeding",
            title:
              "Are you having any unexplained bleeding? (Uterine or vaginal bleeding not related to a period?)",
            isRequired: true,
          },
          {
            type: "boolean",
            name: "Mammogram",
            title: "Have you had a mammogram in the last 2 years?",
            isRequired: true,
          },
          {
            type: "text",
            name: "Mammogram Date",
            visible: false,
            visibleIf: "{Mammogram} = true",
            title: "What was the approximate month and year or your mammogram?",
            requiredIf: "{Mammogram} = true",
            inputType: "date",
          },
        ],
        title: "Other health factors",
      },
      {
        name: "Breast Health",
        elements: [{ type: "html", name: "question11" }],
        title: "Breast Health",
        description:
          "A yearly screening mammogram is recommended by your Blossom RX medical provider.",
      },
      {
        name: "Tobacco",
        elements: [
          {
            type: "boolean",
            name: "Uses Tobacco",
            title: "Do you use tobacco products?",
          },
        ],
        title: "Tobacco",
      },
      {
        name: "Anything else",
        elements: [
          {
            type: "boolean",
            name: "Share Boolean",
            title:
              "Anything else you would like to share with your medical provider?",
            isRequired: true,
          },
          {
            type: "comment",
            name: "Additional Info",
            visibleIf: "{Share Boolean} = true",
          },
        ],
        title: "Anything else",
      },
      {
        name: "2nd Hysterectomy",
        elements: [
          {
            type: "boolean",
            name: "Hysterectomy Confirmation",
            title:
              "The answers you shared will affect what treatment is best for you. You reported you have NOT had a hysterectomy. Is this correct?",
            isRequired: true,
          },
          {
            type: "boolean",
            name: "Hysterectomy 2nd ask",
            visibleIf: "{Hysterectomy Confirmation} = false",
            title: "Have you had a hysterectomy?",
          },
        ],
        title: "Hysterectomy Confirmation",
        description: "Please review -we want to get this right for you.",
      },
    ],
    sendResultOnPageNext: true,
    goNextPageAutomatic: true,
    questionTitlePattern: "numTitle",
    widthMode: "responsive",
  };

  function sendDataToServer(survey) {
    survey.sendResult("33620da3-712f-4e6e-b821-c1cde3b1a247");
  }
  const survey = new Survey.Model(surveyJSON);
  survey.onComplete.add(sendDataToServer);
  survey.onGetQuestionTitleActions.add((_, opt) => {
    opt.titleActions = [
      {
        title: "More info",
        innerCss: "btn btn-info btn-xs",
        action: () => {
          showDescription(opt.question);
        },
      },
    ];
  });
  return (
    <div className="survey-page">
      <Survey.Survey model={survey} />
    </div>
  );
}

export default SurveyPage;

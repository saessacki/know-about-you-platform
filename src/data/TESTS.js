export const TESTS = [
  // attckOfTitanMBTI
  {
    info: {
      mainTitle: "진격의 거인 MBTI 테스트",
      subTitle: "진격의 거인 세계관 기반 MBTI 테스트",
      mainUrl: "attackOnTitanMBTI",
      scoreType: "MBTI",
      mainImage:
      "https://images.testkoko.com/intro/attack_of_titan_mbti/titan_intro_ko.avif",
      thumbImage:
        "https://images.testkoko.com/thumbnail/attack_of_titan_mbti/titan_main_thumb_ko.avif",
      lang: "Kor",
      category: "characteristic",
      locale: "ko_KR",
      creator: "테스트코코",
      keywords: "진격의 거인 세계관 MBTI 테스트,진격의 거인(에렌,미카사,아르민,리바이,에르빈),심리테스트,세계관 테스트,테스트코코,ESTJ,ESTP,ESFJ,ESFP,ENTJ,ENTP,ENFJ,ENFP,ISTJ,ISTP,ISFJ,ISFP,INTJ,INTP,INFJ,INFP"
    },
    questions: [
      {
        which: "EI",
        question: "평화로운 일상을 보내던 중...\n벽이 뚫리고 거인들이 나타났다.\n이때 너는 어떻게 행동할 건가?",
        answers: [
          {
            type: "E",
            content: "주변 사람들에게 이 사실을 알리고,\n거인을 처리하기 위해 동료들과\n함께 움직인다.",
          },
          {
            type: "I",
            content: "벽안으로 들어온 거인의 수를 \n파악한 뒤,거인을 해치울 전략을\n머릿속으로 계산 후 혼자 움직인다.",
          },
        ],
      },
      {
        which: "EI",
        question: "조사병단이 되어 내일 벽 바깥으로 나가기\n전날 밤, 너는 무엇을 하면 밤을 보낼 건가?",
        answers: [
          {
            type: "E",
            content: "동료들과 이야기하며 불안감을\n나누고 마음을 다잡는다.",
          },
          {
            type: "I",
            content: "솔직히 너무 무섭다... 지금이라도\n조사병단을 도망칠 방법을 계획한다.",
          },
        ],
      },
      {
        which: "EI",
        question: "동료가 거인에게 붙잡혀 죽을 위기에 처한다.\n이때 나는 어떻게 행동할 건가?",
        answers: [
          {
            type: "E",
            content: "생각 따위는 필요 없이 즉시 동료를\n구출하기 위해 거인에게 돌진한다.",
          },
          {
            type: "I",
            content: "동료를 구하다가 잘못하면 나도\n죽을 수 있다. 안타깝지만 나랑\n친한 동료가 아니라면 버린다.",
          },
        ],
      },
      {
        which: "SN",
        question: "내가 평생 살아온 벽 안에 거인이 있다는\n사실을 알게 되었을 때, 너의 심정은?",
        answers: [
          {
            type: "S",
            content: "그토록 무서워하던 거인이 사실\n우리와 가장 가깝게 있다는 사실을\n알게 되어 엄청난 충격을 받는다.",
          },
          {
            type: "N",
            content: "왜 이런 존재로 벽 속에 거인이 \n숨어있는지,그 이유를 알기 위해\n사실적인 증거나 정보를 파악한다.",
          },
        ],
      },
      {
        which: "SN",
        question: "인류를 구할 목적으로 거인을 죽이지만\n시간이 지날수록 거인 학살을 즐기고 있는 \n자신을 발견한다. 이때 드는 생각은?",
        answers: [
          {
            type: "S",
            content: "이 상황에서 거인을 죽이는 것이\n현실적으로 인류를 구하는 데 중요한\n일이라고 계속 생각한다.",
          },
          {
            type: "N",
            content: "거인을 죽이는 것이 즐거움으로\n바뀐다는 것은 이 전투의 본질을\n잊어버렸다는 의미일 수 있다고\n생각한다.",
          },
        ],
      },
      {
        which: "SN",
        question: "거인을 죽이기 위해 같이 훈련하며 시간을 \n보냈던 동료(베르톨트와 라이너)가 \n거인이라는 것을 너에게 밝혔을 때,\n너는 어떻게 반응할것인가?",
        answers: [
          {
            type: "S",
            content: "슬프지만 이들과 같이 생활하면서 \n얻은 능력과 정보를 바탕으로 \n즉각 전투 태세에 들어간다.",
          },
          {
            type: "N",
            content: "분노와 배신감이 들지만 우선\n침착하고 왜 그들이 갑자기 정체를\n밝히는 이유가 무엇인지 생각한다.",
          },
        ],
      },
      {
        which: "TF",
        question: "마레 해안 침공 시 적과의 작전 중,\n민간인 희생이 불가피할 때,\n너는 어떻게 할 것인가?",
        answers: [
          {
            type: "T",
            content: "결과적으로 작전의 성공이\n더 큰 피해를 막는 길이라면\n어쩔 수 없지만 계획대로 진행한다.",
          },
          {
            type: "F",
            content: "설령 작전이 실패할 위험이 있더라도,\n무고한 사람들의 희생은 최대한 \n피해야 한다.",
          },
        ],
      },
      {
        which: "TF",
        question: "거인을 죽이기 위해 미끼 목적으로 리바이가\n동료들과 함께 죽어달라고 한다.\n이때 너의 생각은?",
        answers: [
          {
            type: "T",
            content: "이성적으로 봤을 때, 우리의 희생이\n큰 목적을 이루는데 필요한 것이라면\n 받아들여야 한다.",
          },
          {
            type: "F",
            content: "인생에서 가장 중요한건 나 자신이다.\n내가 죽으면 아무런 의미가 없으므로\n명령을 거절한다.",
          },
        ],
      },
      {
        which: "TF",
        question: "에렌은 결국 자신이 죽어야 \n모든 상황이 끝나는걸 알고있다.\n만약 너가 에렌이라면 어떻게 행동할건가?",
        answers: [
          {
            type: "T",
            content: "내가 죽는 것이 인류와 세계에 이익을 준다면 기꺼이 죽음을 감수한다.",
          },
          {
            type: "F",
            content: "인생에서 제일 중요한 건 나 자신이다. 내가 왜 남들을 위해 희생해야하는지 생각하며 결정을 망설인다.",
          },
        ],
      },

      {
        which: "JP",
        question: "동료가 적에 의해 거인화 주사를 \n맞고 무지성 거인으로 변했다.\n너는 어떻게 반응할건가?",
        answers: [
          {
            type: "J",
            content: "과거에는 동료였지만 지금은\n거인이므로 즉시 죽인다.",
          },
          {
            type: "P",
            content: "상황을 지켜보며 다른 방법은\n없는지 우선 찾아본다.",
          },
        ],
      },
      {
        which: "JP",
        question: "거인화 주사로 에르빈 단장과 나랑 친한 아르민,\n둘 중 한 명만 살릴 수 있다면 \n너는 어떻게 결정할 것인가?",
        answers: [
          {
            type: "J",
            content: "전략적으로 큰 가치를 발휘할\n에르빈 단장을 살린다.",
          },
          {
            type: "P",
            content: "나한테 가장 중요한건 우정이다.\n나의 친구인 아르민을 살린다.",
          },
        ],
      },
      {
        which: "JP",
        question: "미카사가 에렌을 마지막에 죽이고 많은 인류의\n희생끝에 평화가 찾아왔다. 그때 드는 감정은?",
        answers: [
          {
            type: "J",
            content: "결국 큰 희생이 필요했지만,\n이제 평화가 찾아왔으니 앞으로의\n삶을 계획하고 잘 살아간다.",
          },
          {
            type: "P",
            content: "평화가 찾아왔지만 이런 결말이\n옳았는지,혹은 다른 선택은 없었는지\n계속 생각해보게 된다.",
          },
        ],
      },
    ],
    results: [
      {
        type: "ESTJ",
        query: "1qe2ws3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/jean_estj_ko.avif",
      },
      {
        type: "ESTP",
        query: "1qe2ws3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/hanji_entp_ko.avif",
      },
      {
        type: "ESFJ",
        query: "1qe2ws3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/historia_esfj_ko.avif",
      },
      {
        type: "ESFP",
        query: "1qe2ws3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/connie_esfp_ko.avif",
      },
      {
        type: "ENTJ",
        query: "1qe2wn3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/erwin_entj_ko.avif",
      },
      {
        type: "ENTP",
        query: "1qe2wn3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/hanji_entp_ko.avif",
      },
      {
        type: "ENFJ",
        query: "1qe2wn3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/eren_enfj_ko.avif",
      },
      {
        type: "ENFP",
        query: "1qe2wn3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/zeke_entj_ko.avif",
      },
      {
        type: "ISTJ",
        query: "1qi2ws3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/levi_istj_ko.avif",
      },
      {
        type: "ISTP",
        query: "1qi2ws3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/annie_istp_ko.avif",
      },
      {
        type: "ISFJ",
        query: "1qi2ws3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/reiner_isfj_ko.avif",
      },
      {
        type: "ISFP",
        query: "1qi2ws3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/ymir_isfp_ko.avif",
      },
      {
        type: "INTJ",
        query: "1qi2wn3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/mikasa_intj_ko.avif",
      },
      {
        type: "INTP",
        query: "1qi2wn3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/sasha_isfp_ko.avif",
      },
      {
        type: "INFJ",
        query: "1qi2wn3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/armin_infj_ko.avif",
      },
      {
        type: "INFP",
        query: "1qi2wn3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/bertolt_infp_ko.avif",
      },
    ],
  },
  // attackOfTitanMBTIEng
  {
    info: {
      mainTitle: "Attack on Titan MBTI Test",
      subTitle: "MBTI Test Based on the Attack on Titan Universe",
      mainUrl: "attackOnTitanMBTIEng",
      scoreType: "MBTI",
      mainImage:
        "https://images.testkoko.com/intro/attack_of_titan_mbti/titan_intro_eng.avif",
      thumbImage:
        "https://images.testkoko.com/thumbnail/attack_of_titan_mbti/titan_main_thumb_eng.avif",
      lang: "Eng",
      category: "characteristic",
      locale: "en_US",
      creator : "TestKOKO",
      keywords: "Attack on Titan Universe MBTI Test, Attack on Titan (Eren, Mikasa, Armin, Levi, Erwin), personality test, universe-based test, TestKOKO, ESTJ, ESTP, ESFJ, ESFP, ENTJ, ENTP, ENFJ, ENFP, ISTJ, ISTP, ISFJ, ISFP, INTJ, INTP, INFJ, INFP"
    },
    questions: [
    {
      which: "EI",
      question: "While living a peaceful life... the wall is breached and Titans appear.\nWhat will you do?",
      answers: [
        {
          type: "E",
          content: "Inform those around you and\nmove with your comrades\nto take down the Titans."
        },
        {
          type: "I",
          content: "Assess the number of Titans that have entered the wall, calculate a plan in your head, and act alone."
        }
      ]
    },
    {
      which: "EI",
      question: "The night before you head beyond\nthe Walls as a member of the \nSurvey Corps—how will you spend it?",
      answers: [
        {
          type: "E",
          content: "Talk with your comrades, share\nyour anxiety, and strengthen\nyour resolve together."
        },
        {
          type: "I",
          content: "Honestly, you're terrified...\nYou start planning an escape from the Survey Corps even now."
        }
      ]
    },
    {
      which: "EI",
      question: "A comrade is caught by a Titan and is on the verge of death. What do you do?",
      answers: [
        {
          type: "E",
          content: "Without a second thought, you charge at the Titan to save your comrade."
        },
        {
          type: "I",
          content: "If I try to save them, I might die too. As cruel as it sounds, if they’re not someone close to me,\nI leave them behind."
        }
      ]
    },
    {
      which: "SN",
      question: "How would you feel if you discovered that there are Titans hidden inside the very\nWalls you've lived within your whole life?",
      answers: [
        {
          type: "S",
          content: "You’re overwhelmed by the shock of realizing that the terrifying \nTitans were actually that close\nto you all along."
        },
        {
          type: "N",
          content: "You immediately seek evidence\nand information to understand\nwhy such beings are hidden\ninside the Walls."
        }
      ]
    },
    {
      which: "SN",
      question: "You started killing Titans to save humanity,\nbut over time, you realize you're\nbeginning to enjoy the slaughter.\nWhat thought crosses your mind?",
      answers: [
        {
          type: "S",
          content: "You convince yourself that killing Titans is still a necessary and realistic way to protect humanity."
        },
        {
          type: "N",
          content: "You start to wonder if finding joy in killing means you’ve lost sight of the true purpose of this battle."
        }
      ]
    },
    {
      which: "SN",
      question: "Your comrades—Bertholdt and Reiner—whom you trained and fought alongside,\nreveal to you that they are Titans.\nHow do you react?",
      answers: [
        {
          type: "S",
          content: "Though it pains you, you immediately prepare for battle using the skills and knowledge you gained while being with them."
        },
        {
          type: "N",
          content: "You're filled with anger and betrayal, but stay calm and try to understand why they chose to reveal their identities now."
        }
      ]
    },
    {
      which: "TF",
      question: "During the assault on the Marleyan coast, you’re in the middle of a mission when civilian casualties become unavoidable.\nWhat will you do?",
      answers: [
        {
          type: "T",
          content: "If the operation’s success will ultimately prevent greater losses, you proceed as planned—even if it means civilian casualties."
        },
        {
          type: "F",
          content: "Even if it risks the mission's failure, you do everything you can to avoid sacrificing innocent lives."
        }
      ]
    },
    {
      which: "TF",
      question: "To kill a Titan, Levi asks you and your comrades to sacrifice yourselves as bait.\nWhat goes through your mind?",
      answers: [
        {
          type: "T",
          content: "From a logical standpoint, if our sacrifice is necessary to achieve a greater goal, it must be accepted."
        },
        {
          type: "F",
          content: "The most important thing in life is myself. If I die, nothing else matters—so I refuse the order."
        }
      ]
    },
    {
      which: "TF",
      question: "Eren realizes that his own death is\nthe only way to end everything.\nIf you were in Eren's position,\nwhat would you do?",
      answers: [
        {
          type: "T",
          content: "If my death would benefit humanity and bring peace to the world,\nI would willingly accept it."
        },
        {
          type: "F",
          content: "The most important thing in life is myself. I hesitate, wondering why I should sacrifice myself for others."
        }
      ]
    },
    {
      which: "JP",
      question: "A comrade has been injected with the Titan serum and transformed into a mindless Titan.\nHow do you respond?",
      answers: [
        {
          type: "J",
          content: "They may have been a comrade once, but now they’re a Titan. \nI kill them immediately."
        },
        {
          type: "P",
          content: "I observe the situation first and look for any alternative before taking action."
        }
      ]
    },
    {
      which: "JP",
      question: "You have one Titan injection and must choose between saving Commander Erwin or your close friend Armin. What do you decide?",
      answers: [
        {
          type: "J",
          content: "I choose Commander Erwin, whose strategic value is vital for humanity’s future."
        },
        {
          type: "P",
          content: "For me, friendship is what matters most. I save Armin, my dear friend."
        }
      ]
    },
    {
      which: "JP",
      question: "Mikasa ends up killing Eren, and after countless sacrifices, peace is finally restored.\nHow do you feel?",
      answers: [
        {
          type: "J",
          content: "Though it required great sacrifice, peace has come. I focus on planning my future and moving forward."
        },
        {
          type: "P",
          content: "Even with peace, I keep wondering if this was the right ending, or if there could’ve been another way."
        }
      ]
    }
  ],
    results: [
      {
        type: "ESTJ",
        query: "1qe2ws3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/jean_estj_eng.avif",
      },
      {
        type: "ESTP",
        query: "1qe2ws3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/hanji_entp_eng.avif",
      },
      {
        type: "ESFJ",
        query: "1qe2ws3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/historia_esfj_eng.avif",
      },
      {
        type: "ESFP",
        query: "1qe2ws3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/connie_esfp_eng.avif",
      },
      {
        type: "ENTJ",
        query: "1qe2wn3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/erwin_entj_eng.avif",
      },
      {
        type: "ENTP",
        query: "1qe2wn3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/hanji_entp_eng.avif",
      },
      {
        type: "ENFJ",
        query: "1qe2wn3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/eren_enfj_eng.avif",
      },
      {
        type: "ENFP",
        query: "1qe2wn3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/zeke_entj_eng.avif",
      },
      {
        type: "ISTJ",
        query: "1qi2ws3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/levi_istj_eng.avif",
      },
      {
        type: "ISTP",
        query: "1qi2ws3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/annie_istp_eng.avif",
      },
      {
        type: "ISFJ",
        query: "1qi2ws3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/reiner_isfj_eng.avif",
      },
      {
        type: "ISFP",
        query: "1qi2ws3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/ymir_isfp_eng.avif",
      },
      {
        type: "INTJ",
        query: "1qi2wn3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/mikasa_intj_eng.avif",
      },
      {
        type: "INTP",
        query: "1qi2wn3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/sasha_isfp_eng.avif",
      },
      {
        type: "INFJ",
        query: "1qi2wn3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/armin_infj_eng.avif",
      },
      {
        type: "INFP",
        query: "1qi2wn3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/bertolt_infp_eng.avif",
      },
    ],
  },
  // attackOfTitanMBTIJP
  {
    info: {
      mainTitle: "進撃のMBTIテスト",
      subTitle: "進撃の巨人の世界観に基づくMBTIテスト",
      mainUrl: "attackOnTitanMBTIJp",
      scoreType: "MBTI",
      mainImage:
        "https://images.testkoko.com/intro/attack_of_titan_mbti/titan_intro_jp.avif",
      thumbImage:
        "https://images.testkoko.com/thumbnail/attack_of_titan_mbti/titan_main_thumb_jp.avif",
      lang: "Jp",
      category: "characteristic",
      locale: "ja_JP",
      creator : "テストココ",
      keywords: "進撃の巨人 世界観MBTIテスト、進撃の巨人（エレン、ミカサ、アルミン、リヴァイ、エルヴィン）、心理テスト、世界観診断、テストココ、ESTJ、ESTP、ESFJ、ESFP、ENTJ、ENTP、ENFJ、ENFP、ISTJ、ISTP、ISFJ、ISFP、INTJ、INTP、INFJ、INFP"
    },
    questions: [
    {
      which: "EI",
      question: "平和な日常を送っていたある日…壁が破られ、巨人が現れた。この時、あなたはどう行動する？",
      answers: [
        {
          type: "E",
          content: "周囲の人々にこの事態を知らせ、仲間と共に巨人を討伐するために行動する。"
        },
        {
          type: "I",
          content: "壁内に侵入した巨人の数を把握し、頭の中で戦略を立てて単独で動く。"
        }
      ]
    },
    {
      which: "EI",
      question: "調査兵団として明日壁の外へ出る前夜、あなたはどうやって夜を過ごす？",
      answers: [
        {
          type: "E",
          content: "仲間たちと話し、不安を分かち合いながら覚悟を固める。"
        },
        {
          type: "I",
          content: "正直、怖くてたまらない…今からでも調査兵団から逃げ出す方法を考える。"
        }
      ]
    },
    {
      which: "EI",
      question: "仲間が巨人に捕まり、死の危機に瀕している。この時、あなたはどう行動する？",
      answers: [
        {
          type: "E",
          content: "何も考えず、すぐに仲間を助けるために巨人へ突進する。"
        },
        {
          type: "I",
          content: "助けようとして自分も死ぬかもしれない。辛いが、親しい仲間가でなければ見捨てる。"
        }
      ]
    },
    {
      which: "SN",
      question: "自分が一生暮らしてきた壁の中に巨人がいたと知ったとき、あなたはどう感じる？",
      answers: [
        {
          type: "S",
          content: "あれほど恐れていた巨人が、こんなにも身近にいたという事実に大きな衝撃を受ける。"
        },
        {
          type: "N",
          content: "なぜそんな存在が壁の中に隠されていたのか、その理由を知るために証拠や情報を集めようとする。"
        }
      ]
    },
    {
      which: "SN",
      question: "人類を救うために巨人を倒していたはずが、いつの間にかその虐殺に快感を覚えている自分に気づいた。このとき、あなたの頭に浮かぶ考えは？",
      answers: [
        {
          type: "S",
          content: "今でも巨人を倒すことは現実的に人類を救うために必要な行動だと思い続ける。"
        },
        {
          type: "N",
          content: "倒すことに喜びを感じ始めているのは、この戦いの本質を見失った証かもしれないと考える。"
        }
      ]
    },
    {
      which: "SN",
      question: "一緒に訓練し、共に過ごしてきた仲間——ベルトルトとライナーが、実は巨人だったと告白してきたとき、あなたはどう反応する？",
      answers: [
        {
          type: "S",
          content: "悲しみを感じながらも、彼らと過ごした中で得た技術と情報をもとに即座に戦闘態勢に入る。"
        },
        {
          type: "N",
          content: "怒りと裏切られた気持ちが湧くが、まずは冷静に、なぜ今になって正体を明かしたのかを考える。"
        }
      ]
    },
    {
      which: "TF",
      question: "マーレの海岸を襲撃中、作戦遂行中に民間人の犠牲が避けられない状況に陥った場合、あなたはどうする？",
      answers: [
        {
          type: "T",
          content: "最終的に作戦の成功がより大きな被害を防ぐのであれば、民間人の犠牲はやむを得ないとして計画通りに進める。"
        },
        {
          type: "F",
          content: "たとえ作戦が失敗する可能性があっても、無実の人々の犠牲はできる限り避けようとする。"
        }
      ]
    },
    {
      which: "TF",
      question: "巨人を倒すために、リヴァイが仲間と共に囮になって死んでくれと頼んできた。その時、あなたはどう思う？",
      answers: [
        {
          type: "T",
          content: "論理的に見て、自分たちの犠牲がより大きな目的を果たすために必要なら、受け入れるべきだと思う。"
        },
        {
          type: "F",
          content: "人生で最も大切なのは自分自身。自分が死んだらすべてが無意味だから、その命令は拒否する。"
        }
      ]
    },
    {
      which: "TF",
      question: "エレンは、自分が死ななければすべてが終わらないことを悟っている。もしあなたがエレンの立場だったら、どうする？",
      answers: [
        {
          type: "T",
          content: "自分の死が人類と世界のためになるのなら、喜んでその運命を受け入れる。"
        },
        {
          type: "F",
          content: "人生で最も大切なのは自分自身。他人のために犠牲になるなんて…そう思って迷ってしまう。"
        }
      ]
    },
    {
      which: "JP",
      question: "仲間が巨人化の注射を打たれ、無垢の巨人に変わってしまった。あなたはどう反応する？",
      answers: [
        {
          type: "J",
          content: "かつては仲間でも、今は巨人。すぐに討つべきだと判断する。"
        },
        {
          type: "P",
          content: "まず状況を見極めて、他に方法がないかを探ろうとする。"
        }
      ]
    },
    {
      which: "JP",
      question: "巨人化の注射が一つしかなく、エルヴィン団長と親友のアルミンのどちらか一人しか救えない場合、あなたはどう決断する？",
      answers: [
        {
          type: "J",
          content: "人類の未来のために戦略的価値が高いエルヴィン団長を選ぶ。"
        },
        {
          type: "P",
          content: "自分にとって一番大切なのは友情。親友のアルミンを救う。"
        }
      ]
    },
    {
      which: "JP",
      question: "ミカサが最後にエレンを殺し、多くの犠牲の末に平和が訪れた。その時、あなたは何を感じる？",
      answers: [
        {
          type: "J",
          content: "大きな犠牲は伴ったが、平和が訪れたのなら、これからの人生を計画して前向きに生きていく。"
        },
        {
          type: "P",
          content: "平和になっても、この結末が本当に正しかったのか、他に選択肢はなかったのかと考え続ける。"
        }
      ]
    }
  ],
    results: [
      {
        type: "ESTJ",
        query: "1qe2ws3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/jean_estj_jp.avif",
      },
      {
        type: "ESTP",
        query: "1qe2ws3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/hanji_entp_jp.avif",
      },
      {
        type: "ESFJ",
        query: "1qe2ws3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/historia_esfj_jp.avif",
      },
      {
        type: "ESFP",
        query: "1qe2ws3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/connie_esfp_jp.avif",
      },
      {
        type: "ENTJ",
        query: "1qe2wn3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/erwin_entj_jp.avif",
      },
      {
        type: "ENTP",
        query: "1qe2wn3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/hanji_entp_jp.avif",
      },
      {
        type: "ENFJ",
        query: "1qe2wn3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/eren_enfj_jp.avif",
      },
      {
        type: "ENFP",
        query: "1qe2wn3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/zeke_entj_jp.avif",
      },
      {
        type: "ISTJ",
        query: "1qi2ws3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/levi_istj_jp.avif",
      },
      {
        type: "ISTP",
        query: "1qi2ws3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/annie_istp_jp.avif",
      },
      {
        type: "ISFJ",
        query: "1qi2ws3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/reiner_isfj_jp.avif",
      },
      {
        type: "ISFP",
        query: "1qi2ws3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/ymir_isfp_jp.avif",
      },
      {
        type: "INTJ",
        query: "1qi2wn3et4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/mikasa_intj_jp.avif",
      },
      {
        type: "INTP",
        query: "1qi2wn3et4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/sasha_isfp_jp.avif",
      },
      {
        type: "INFJ",
        query: "1qi2wn3ef4rj",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/armin_infj_jp.avif",
      },
      {
        type: "INFP",
        query: "1qi2wn3ef4rp",
        img_src:
          "https://images.testkoko.com/result/attack_of_titan_mbti/bertolt_infp_jp.avif",
      },
    ],
  },
];

// mbti.com
// images.mbti.com
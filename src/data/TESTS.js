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
        question: "에렌은 결국 자신이 죽어야 모든 상황이\n끝나는걸 알고있다.\n만약 너가 에렌이라면 어떻게 행동할건가?",
        answers: [
          {
            type: "T",
            content: "내가 죽는 것이 인류와 세계에\n이익을 준다면 기꺼이 죽음을 감수한다.",
          },
          {
            type: "F",
            content: "인생에서 제일 중요한 건 나 자신이다.\n내가 왜 남들을 위해 희생해야하는지 \n생각하며 결정을 망설인다",
          },
        ],
      },

      {
        which: "JP",
        question: "동료가 거인화 주사를 맞고 무지성 거인으로 변했다.\n너는 어떻게 반응할건가?",
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
      question: "What will you do when the wall is breached and the Titans appear?",
      answers: [
        {
          type: "E",
          content: "Gather people around, share the situation, and find a way to move together."
        },
        {
          type: "I",
          content: "First, quietly assess the situation and calculate a strategy to take down the Titans."
        }
      ]
    },
    {
      which: "EI",
      question: "What will you do when night falls before the first expedition of the Survey Corps?",
      answers: [
        {
          type: "E",
          content: "Talk to your comrades, share your anxiety, and gather your resolve."
        },
        {
          type: "I",
          content: "Find a quiet corner alone to prepare for tomorrow and collect your thoughts."
        }
      ]
    },
    {
      which: "EI",
      question: "When a comrade is captured by a Titan and is in danger of dying, how will you react?",
      answers: [
        {
          type: "E",
          content: "Immediately rush in to rescue the comrade and attack the Titan."
        },
        {
          type: "I",
          content: "Analyze the situation, find the most effective way to save the comrade, and move with a well-thought-out plan."
        }
      ]
    },
    {
      which: "SN",
      question: "What will you do when you find out that there are Titans inside the wall?",
      answers: [
        {
          type: "S",
          content: "Look for concrete evidence or information to understand why these beings are hiding inside the walls."
        },
        {
          type: "N",
          content: "I believe there must be a bigger secret or purpose behind the existence of Titans within the wall, beyond just their presence."
        }
      ]
    },
    {
      which: "SN",
      question: "You kill Titans to save humanity, but over time, you start enjoying killing them. What do you think about this?",
      answers: [
        {
          type: "S",
          content: "I still think that killing Titans is essential for saving humanity in a practical sense."
        },
        {
          type: "N",
          content: "The fact that killing Titans has shifted from a necessity to enjoyment means that I may have lost sight of the true purpose of this battle."
        }
      ]
    },
    {
      which: "SN",
      question: "What will you think when you find out that Bertholdt and Reiner are Titans?",
      answers: [
        {
          type: "S",
          content: "Immediately enter combat mode, using the abilities and information they have to prepare for the battle."
        },
        {
          type: "N",
          content: "Think about what this revelation means, why they suddenly revealed their identities, and what their true intentions might be."
        }
      ]
    },
    {
      which: "TF",
      question: "During the invasion of the Marley coast, when civilian casualties are inevitable, what will you do?",
      answers: [
        {
          type: "T",
          content: "If the success of the operation prevents even greater damage, emotions must be set aside, and we should proceed as planned."
        },
        {
          type: "F",
          content: "Even if the operation risks failing, the sacrifice of innocent lives should be avoided at all costs."
        }
      ]
    },
    {
      which: "TF",
      question: "If Levi asks you and your comrades to sacrifice yourselves as bait to kill the Titans, how will you respond?",
      answers: [
        {
          type: "T",
          content: "From a rational standpoint, if our sacrifice is necessary to achieve the greater goal, it must be accepted."
        },
        {
          type: "F",
          content: "From a human perspective, it’s difficult to accept such a choice. I would think about whether this decision is truly right."
        }
      ]
    },
    {
      which: "TF",
      question: "Eren knows that he must die for everything to end. If you were Eren, how would you act?",
      answers: [
        {
          type: "T",
          content: "If my death benefits humanity and the world, I would willingly accept it."
        },
        {
          type: "F",
          content: "Knowing that my death is the only way to end everything, I would emotionally struggle with that decision."
        }
      ]
    },
    {
      which: "JP",
      question: "If you could save only one between Erwin and Armin, how would you decide?",
      answers: [
        {
          type: "J",
          content: "Strategically, I would save Erwin, who can provide greater value."
        },
        {
          type: "P",
          content: "Before deciding, I would think about the meaning of their lives and let someone else make the final decision."
        }
      ]
    },
    {
      which: "JP",
      question: "After Mikasa kills Eren and peace is achieved through the sacrifice of many, what emotions do you feel?",
      answers: [
        {
          type: "J",
          content: "Although a great sacrifice was needed, now that peace is here, I must plan for the future and follow that path."
        },
        {
          type: "P",
          content: "Even though peace has come, I continue to wonder if this was the right conclusion, or if there was another choice."
        }
      ]
    },
    {
      which: "JP",
      question: "A comrade is injected with the Titan serum and transforms into a mindless Titan. How will you react?",
      answers: [
        {
          type: "J",
          content: "Although they were once a comrade, they are now a Titan, so I will immediately kill them."
        },
        {
          type: "P",
          content: "I will observe the situation and try to find another way to deal with it."
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
      question: "壁が突破され、巨人が現れた瞬間、あなたはどう行動しますか？",
      answers: [
        {
          type: "E",
          content: "周りの人々を集め、状況を共有し、一緒に動く方法を見つけます。"
        },
        {
          type: "I",
          content: "まず静かに周囲を確認し、巨人を倒すための戦略を頭の中で計算します。"
        }
      ]
    },
    {
      which: "EI",
      question: "調査兵団の初出発前、夜が訪れた時、あなたは何をしますか？",
      answers: [
        {
          type: "E",
          content: "仲間と話しながら不安を共有し、心を落ち着けます。"
        },
        {
          type: "I",
          content: "一人静かな隅で明日の準備をしながら心を整理します。"
        }
      ]
    },
    {
      which: "EI",
      question: "仲間が巨人に捕まって死ぬ危機に直面した時、あなたはどう行動しますか？",
      answers: [
        {
          type: "E",
          content: "すぐに仲間を救出するために巨人に突進します。"
        },
        {
          type: "I",
          content: "状況を分析し、仲間を救うための効果的な方法を見つけ、シナリオを考えて行動します。"
        }
      ]
    },
    {
      which: "SN",
      question: "壁の中に巨人がいることを知った時、あなたはどう反応しますか？",
      answers: [
        {
          type: "S",
          content: "なぜその存在が壁の中に隠れているのか、その理由を知るために事実的な証拠や情報を探します。"
        },
        {
          type: "N",
          content: "巨人が壁の中に存在する理由は、その存在自体を超えて、もっと大きな秘密や目的があるに違いないと思います。"
        }
      ]
    },
    {
      which: "SN",
      question: "人類を救うために巨人を殺すが、次第に巨人殺しを楽しんでいる自分を発見した時、どう思いますか？",
      answers: [
        {
          type: "S",
          content: "この状況で巨人を殺すことが現実的に人類を救うために重要なことだと考え続けます。"
        },
        {
          type: "N",
          content: "巨人を殺すことが最初の目的を超えて楽しみに変わったということは、この戦いの本質を失っている可能性があると考えます。"
        }
      ]
    },
    {
      which: "SN",
      question: "ベルトルトとライナーが巨人であることを知った時、あなたはどう反応しますか？",
      answers: [
        {
          type: "S",
          content: "彼らが持っている能力と情報を元に、すぐに戦闘態勢に入ります。"
        },
        {
          type: "N",
          content: "この事実が何を意味するのか、なぜ彼らが突然正体を明かしたのか、その理由を考えます。"
        }
      ]
    },
    {
      which: "TF",
      question: "マーレの海岸侵攻時、敵との作戦中に民間人の犠牲が避けられない場合、あなたはどうしますか？",
      answers: [
        {
          type: "T",
          content: "作戦の成功がより大きな被害を防ぐ道であるなら、感情を抑えて計画通りに進めるべきです。"
        },
        {
          type: "F",
          content: "たとえ作戦が失敗する危険があっても、無実の人々の犠牲は避けるべきです。"
        }
      ]
    },
    {
      which: "TF",
      question: "巨人を倒すためにリヴァイが仲間と共に死んでくれと頼んだ時、あなたはどう思いますか？",
      answers: [
        {
          type: "T",
          content: "理性で考えれば、私たちの犠牲が大きな目的を達成するために必要であるなら、受け入れなければならない。"
        },
        {
          type: "F",
          content: "人間的な面でその選択を受け入れることは難しい。自分がその決断が正しいのか考えます。"
        }
      ]
    },
    {
      which: "TF",
      question: "エレンは最終的に自分が死ななければすべての状況が終わることを知っている。もしあなたがエレンなら、どう行動しますか？",
      answers: [
        {
          type: "T",
          content: "自分の死が人類と世界に利益をもたらすのであれば、喜んで死を受け入れます。"
        },
        {
          type: "F",
          content: "自分が死ななければすべてが終わると知って、その決断を下すまで感情的に自分と戦い続けます。"
        }
      ]
    },
    {
      which: "JP",
      question: "エルヴィン団長とアルミンのどちらか一人だけを救えるとしたら、どう決めますか？",
      answers: [
        {
          type: "J",
          content: "戦略的に大きな価値を発揮するエルヴィン団長を救います。"
        },
        {
          type: "P",
          content: "決定を下す前に彼らの人生の意味を考えながら、他の誰かに決定を任せます。"
        }
      ]
    },
    {
      which: "JP",
      question: "ミカサがエレンを殺し、何百万もの人々の犠牲の末に平和が訪れた。その時、あなたはどんな感情を抱きますか？",
      answers: [
        {
          type: "J",
          content: "結局、大きな犠牲が必要だったが、平和が訪れたので、これからの生活を計画し、その道を進まなければならない。"
        },
        {
          type: "P",
          content: "平和が訪れたけれど、この結末が正しかったのか、他の選択肢はなかったのか考え続けます。"
        }
      ]
    },
    {
      which: "JP",
      question: "仲間が巨人化の薬を飲み、無知の巨人に変わった。あなたはどう反応しますか？",
      answers: [
        {
          type: "J",
          content: "かつての仲間でも、今は巨人なので即座に殺します。"
        },
        {
          type: "P",
          content: "状況を見守り、他の方法がないかまず探してみます。"
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
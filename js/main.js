$(document).ready(function () {

    let audio = {};

    $('#hru').on('click', function () {

        $(this).attr('disabled', 'disabled');

        $('.hru-title p').addClass('hru-active');

        let arr = [
            "Делаем инди-парашу",
"Сраный провинциальный бренд",
"Переезжаем в английскую пердь",
"Империя мухосранцев на севере",
"Некоторые из вас программисты, я видел, вы работали в движке. Некоторые просто прикидываются",
"Программист должен убить белочку",
"Летс си ит ин зе позитив вэй — не убить белочку, а создать белочку",
"Я должен прокопать русло, по которому мои смыслы потекут, потекут, потекут",
"Магнитик на холодильник — это нфт, только на старых таких, древних технологиях",
"Отсюда же эта секта любителей золотых контактов и виниловых пластинок",
"Артист в театре сегодня простыл и поэтому играет абсолютно потрясающе — мы чувствуем всю его боль",
"Андрей Миронов пошёл играть спектакль и умер. Потому что у него случился инфаркт. Как-то слишком процедурно",
"Вот то, что мы с вами осенью… Сейчас ещё осень, да? Ладно, назовём это “в октябре”",
"Может в процессе починения тарелки, она либо накладывает какое-то проклятье на нас, либо наоборот нас как-то по-японски баффает",
"Люди рассказывали, что она вполне себе злая женщина, может чашки бить самостоятельно",
"Ты должен либо научиться программировать, либо подружиться с программистом, иначе счастья у тебя не будет",
"Вот сука колхозная пришла хлопать в наш храм культуры",
"Мы можем на это посмотреть и получить дозу утреннего кринжа, чтоб взбодриться",
"Вы тыкнули и вам вместо чабреца занудного покажут одуванчик бесполезный",
"Давайте уже отдыхайте, давайте уже подышим все",
"Я буду делать вид, как будто это я придумал, и все будут “У, какой Суслов остроумный”, но никто не узнает страшную правду",
"в этом модуле все делаем соф-арт",
"кенийцы или похожие на них лица",
"Микимаусохуйство (про стикер «Корсары 2»)",
"CD Проджекты всегда рискуют своей жопой",
"Вас не возьмут в японский гд. И вам там не понравится",
"Главная проблема индустрии - дорогие антидепрессанты",
"Гаремник из очень огромных мужиков",
"Пусть у меня мужики будут ладные и складные",
"Я здесь практически не шучу. Я иронизирую",
"Risk of rain – инди-параша (классная игра мне понравилась)(дайте две!)",
"Куда вы пойдете, если устанете в Атомик хартс? Пока никуда",
"Когда вы делаете бесконечные три-в-ряд, вам раз в месяц приходит смс о зачислении денег. Если вы перегораете в Варшаве, то вам тоже раз в месяц приходит смс. Возможно, даже чуть больше, потому что овертайм. Если же вы инди, то вам тоже приходит смс раз в месяц, но не с зарплатой, а с «Ух, сука, плоти долги, а то интернет отключим»",
"Геймдев предлагает выбор из Южного парка: либо гигантская клизма, либо сэндвич с дерьмом",
"Он присоединяется к какой-то горничной, там начинается какой-то трисом (threesome). Мрак какой-то!",
"Как говорится: «Who I am to fucking lecture you?»",
"Звучала музыка, они делали какой-то странный стриптиз и переодевались (про Винкс)",
"Детский наивный стриптиз (тоже Винкс)",
"О боже, я что, все это время говорил с выключенным экраном???",
"Если вы хотите делать ААА, то вы не там этого хотите",
"А так в играх никто ничего не понимает",
"Что-то из проектов, которые я делал, принесло много денег, что-то принесло убытки, а что-то — убытки и боль.",
"Вы играли от безвыходности? Это безысходность.",
"Вы играли в Якудзу за механики или за японскую дурь?",
"У нас мало денег в рынке, мало кадров и мало опыта. Вы здесь, чтобы решить хотя бы проблему с кадрами",
"Если я наблатыкался в матч-3",
"Дайте деняк! Куда идти?",
"Хтоническая японская эротика",
"Сегодня вечером мы пойдем спать, за ночь выйдет 7000 мобильных игр, а завтра еще 8000…",
"Если я более или менее ноу-нэйм и проживаю в какой-нибудь смешной стране типо Белоруссия, Россия или Турция, то девкит вам никто не вышлет, потому что у вас медведи и санкции",
"В Россию вам девкит может и отправят, но таможня вам его не отдаст, потому что подумает, что это шпионское оборудование",
"Все эти черти — аниме-девочки и фурри-лисички — ваши враги на рынке геймдева.",
"НЕ ПАДАЙТЕ в лютую специализацию, но если вы ничего не можете с собой поделать, ПАДАЙТЕ в лютую специализацию",
"Приходит черт и говорит: «Дай мне кабачок»",
"Ведро — это очень важно",
"Что вы умеете в жанре “эники-беники”?",
"В коньке-горбунке есть всё, что есть в других платформерах",
"Тут уже гадящая птица с мухоморами",
"Марио из советской параллельной вселенной",
"Бомбовоз в виде птицы",
"Мы с 21 группой решили, что это шишки. … шишки или какашки…",
"А можно вот так неспеша… Ой, упасть…",
"*Начинает умирать* Нууу всё… пошли дальше… не люблю это",
"3D-чмусик",
"Зелёные гнидогадоиды",
"Все кровь, кишки, говно стремятся ко мне",
"Никакая ты не ловкая китаянка, ты черт московский",
"Если мы возьмём какого-нибудь долгопупса, какого-нибудь долговязого чёрта",
"Хэллоу-Китти-капитализм",
"мраморные чушки древнего рима",
"сбежавший лав-бот",
"он настоящий живой человек, не смотря на то что он квадрат. Я ему сочувствую.",
"кредо платформера — быстро сдох, быстро возродился.",
"марсианские опарыши выедают твою печень. Это важно показать.",
"славная эпоха до индипокалипсиса",
"я геймдизайнер, буду кубики катать",
"зачем вам кубы? потому что вы не хотите анимировать",
"пиксельное гавно — есть такой термин",
"момодора — девочка-красная-шапочка сражатеся со всякой девочко-нечистью. вот тут вы видите девочку-сороконожку (примечание вашей стенографистки: см. хтоническую японскую эротику)",
"проклятье фотореализма",
"если игра про русское гавнище — продемонстрируйте мне такое русское гавнище, чтобы экран потом протирать пришлось",
"чувак с зашитым ртом и голый. Но самое страшное — это количество полигонов.",
"Идеи придумывает всегда пролетариат",
"человекообразные чуваки всегда проблемные",
"агрессивный хэллоу-китти которые дасти-банни",
"он ближе к хеллоу-китти, чем к реббидам, то есть к кроликам",
"катастрофа произошла с саунд-дизайном",
"почему меня забрасывает зайцам????",
"и теперь мне остаётся только ходить внизу, крутить ручку и наслаждаться своей тупостью",
"несуразная эстетика врастопырочку",
"если я что-то зафакапил -- пускай я умру, не мучайте меня",
"прыжок за пределы экрана и здравого смысла",
"длинный чёрт прыгает в стратосферу",
"СО СМЫСЛОМ (ощущение, что делал подросток)",
"кто будет расстреливать точки? только сказочный злодей.",
"проклятый левелдизайн с боссом Comic Sans",
"я играл в эту игру в соответствующем состоянии сознания: оооо, гууусеничка….",
"русский чувак, что под разными именами фигачет в стиме одну и ту же дурь",
"я не уверен насчёт своего гендера…",
"если вы залили апдейт издателю, но забыли прикрепить новые листы, говорите, что это был технический апдейт",
"я не должен убивать оранжевую бяку, потому что она должна убить меня",
"одноразовый космонавт",
"ранеры — двоюродные братья платформеров",
"разбавим инди штуки всей мощью хай-велью продакшн",
"Мужик кричит ХА, пока ждёт платформу 1.5 минуты, чтобы взлететь, как ракетоноситель СОЮЗ",
"вот ты лох, смотри таблицу рекордов. Видишь себя? Нет? Потому что ТЫ ЛОХ",
"Сердечки, похожие на жопу. Что они обозначают, кроме очередной сердечной боли?",
"Хоба! Привет, ублюдок, я тебя съел",
"Мы все — это Филипп Киркоров в безумно красивой шапочке",
"Давно не надевал свою шапочку, начал забывать её волшебный эффект.",
"Геймдизайнер — это медведь на велосипеде. Медведь александр и николай дыбовский. Справа — продюссер, который следит, чтобы медведи ехали бодро. И скептические зрители.",
"Записываемся на курсы стиля от Филиппа Киркорова “как ездить на велосипедах в юбках”",
"Если всмотреться в лица медведей, мы увидим огромный труд.",
"В геймдеве в каждой избушке свои погремушки.",
"На курочке рябе выросли несколько поколений геймдизайнеров.",
"раннер про диско-пиратов с элементами ритм игры. Только что придумал эту дичь, но звучит очень интересно",
"Заходишь в лифт, а там Герман Греф. Вот тебе, батюшка, и элеватор питч.",
"Гопники для детей",
"Как я могу раскладывать детей?",
"Гопатыч",
"Свиньи колосятся",
"Пять кувшинов ртути",
"Бараки для крестоносцев",
"Ниндзи прокрались в лесопосадки",
"Некоторые жестокие люди не создают туалет в симсе. Это ужасно. Не надо так.",
"Я знал, что у нас матерная озвучка, но не знал, что настолько. И вот заходи ко мне бабушка, и такая “Ар-а-а-а-а ю вининг сан?”",
"Циркуляции игрока по игровому пространству",
"Могу ли я поменять мастер чифа на винни пуха или нет?",
"По центру пишем крупно: “ТЫ ПРОСРАЛ!!!”",
"макабрические мотивы в сочетании с мексиканским культом смерти… говоря проще, у меня будут ходячие грибы и кирпичи с глазами.",
"Была такая прекрасная Ханна Монтана, пела песенки, а потом выросла и стала Майли Сайрус, ну, ничего, это случается и с лучшими из нас",
"Яма из русского формализма и структурализма.",
"Клирик Чмуся",
"Принцесса Персик — сюжетная машинка.",
"Гонка, где надо беречь свой анус от попадания чужих пенисов. Не думаю, что за этим стоял математический аппарат...",
"Женщин часто не делают в играх. Не потому что сексизм, а потому что нищебродство.",
"Смолкло. Волк грызёт человека.",
"марчин пш...пш... пшебулович, наверное",
"Лоу-поли девочка делает домашку. Очень расслабляет.",
"Их имена никто не запомнил, потому что всем посрать.",
"Ментальный блок на цветные пенисы.",
"Вышка как Российский вуз не понимает игру в качестве диплома. Как это должно выглядеть? Вот у меня тут персонаж, его зовут Чмуся. Ничего же не поймут. Где у Чмуси библиография, ссылки?..",
"Как славно, что вы накидали жабулек. Теперь в чат приятно зайти",
"Окей, я положу жабу на место, я не буду ее кидать. Лучше кину кирпич",
"Изент ит факин обвиос?)",
"Будто я должен из букв Ж, О, П и А собрать слово «вечность»",
"Я сдох в десяти метрах от финиша, ну что такое(",
"Я разрушилась, а теперь умри!",
"Если вы умрёте сейчас, что будете делать перед просмотром?",
"Если вы думали, что второй курс самый сложный, то вы правы.",
"Шипы, кислота и лава — это не среда, это смерть. Черта, отделяющая живого персонажа от дохлого. Понимаете?",
"Волосатую жуть можно заменить на ракетный крейсер.",
"Способ организации игры для мазохистов — о чём же ещё говорить на паре перед просмотром?",
"Если будете делать игры-кайдзо, то будете общаться со странными людьми со странной организацией психики.",
"Марио-чтоб-ты-сдох-падла... Ну вы поняли, кайдзо — способ надеть латексный костюм. Кто мы такие, чтобы осуждать людей в поиске удовольствия.",
"… не сможем больше добраться до этой клубничины…",
"За платформу-мясорубку — +балл.",
"У ваших платформ могут быть ножки. А могут быть пульки.",
"Сразу договоримся: если неудачник сдох, то он сдох. Никаких розовых соплей!",
"Лимбо обмазывает тебя болотной жижей.",
"А вы хотите плющить психику игрока?",
"Даже шестимесячный ребёнок поймёт, что он негодяй!",
"Злой Николай никуда не убежит!",
"Думаю: сделаю стратегию. Открыл тетрадь. Нарисовал посредине лес. Написал: лес. Словил творческий кризис.",
"Я увидел, как прекрасен мир без наркотиков",
"Сейчас в вас засунут 140 платформеров и вы оживёте",
"Игра — кал, разраб — даун, хочу чтобы он быстрее разорился",
"Анатолий — своего рода кайдзо-платформер. Думаешь, что выучил уровень, а он подкидывает новые приколюхи.",
"Вот мы тут некоторых ругаем за то, что они с развороту бьют игрока сковородкой, а вы с этим лучше справились! Не в том смысле, что вы сильнее бьёте его, а скорее аккуратненько поглаживаете",
"Все кнопки расположили немножко по-геймбойски",
"Настрой мету... не ту мету, что в подвале варят",
"Мета — фигня, которую нельзя обнаружить счётчиком гейгера",
"Твои викинги грабанули соседа, ты получил десять рублей",
"Кроме того, что это средство самообороны, на нем еще и игра есть (про нокиа 3310)",
"Втф из водолей",
"Всегда думайте о юикс. Вдруг вы сделали прекрасную игру, а с точки зрения игрока будет видна одна жопа.",
"Несносное фентези",
"В 2006 было требование сдавать диплом на дискете — что за жесть?",
"Дискеты вымерли в две тысячи… В две тысячи седьмом случился их массовый падёж",
"Все сидели в древней Джире какой-нибудь, сейчас перейдём на что-то более технологичное, и будет эффективнее. Нифига! Все будут стонать, страдать, говорить, что всё перепутали, а потом всё равно вернутся в Жиру",
"Датский мужчина с лицом трогательного маньяка.",
"В виндовс была кнопка “пуск”, и она там была, и была, и была, а потом кто-то подумал: “На кой пёс эта кнопка “пуск” нужна? Давайте её изымем”. И это было страшно. Юзеры взбунтовались",
"Люди в электроник артс, ну, явно же не тупые, не то что бы они сидят у себя в Швеции и думают: “давайте кнопки по приколу поменяем”",
"Игрок, который уже более менее наблатыкался",
"Российская сборная по биатлону не угадала со смазкой. Лыжи плохо ехали.",
"Огромная кнопка ОТМЕНИТЬ на случай, если я зевну ферзя.",
"БАКЛАН С КИЯНКОЙ ПЛЮЩИТ ХОМЯКОВ",
"Твиттера не было, поэтому приходилось собирать Гитлера в интерфейсе",
"Ха-ха! Удачи тебе, чувак, разглядеть, сколько у тебя здоровья, когда оно написано у тебя на спине!",
"“Диегетический” это вообще такое слово, откуда оно взялось? Чёрт поймёт, откуда оно в геймдизайн прокралось",
"В “Тургор” Дыбовского, наверное, он бы играл. Наверное, это ему бы пришлось по вкусу… (про Платона)",
"Ольга Бузова сегодня играла плохо",
"Первые два часа в этой игре я провёл, пытаясь запустить двигатель. Я правда сразу уселся за бомбардировщик, потому что мне показалось, что это более надёжно. Потому что он сразу ныряет во взлётно-посадочную полосу, которая у меня осталось только посадочной, взлететь я так и не смог",
"Но центр, гвоздь, арматура(!) всего проекта…",
"(с ностальгией) Видеть грустную рожу охранника на… Эта лекция записывается? Это лекция не записывается. Я очень уважаю охранников. Но они достали, всё время думают, что я студент, который хочет прокрасться, никак не поймут, что я преподаватель",
"Вот эта бабайка, которая нас пугает… Мы можем её убить или нет?",
"Если я могу тварь эту убить, всё переходит в категорию такой рутины",
"Вот только что за мной бежал какой-нибудь… Бронехряб! И вот я зашёл глотнуть лечилочки, а бронехряб такой стоит, переминается",
"Если персонаж двигается, а мир нет, то это какой-то Нео получается, познавший цифровой дзен. А если наоборот… То это совсем странно!",
"Может ли свиноух меня сейчас сожрать? Да, конечно, может",
"Если попискивание идёт из какой-то менюшки, я понимаю, что меня не будут жрать, я же чувак из центра управления полётом, будут жрать вот этого неудачника, за которого я играю, а я потом перезагрузюсь безо всяких проблем",
"Шутаны — самый такой разухабистый, самый такой простецкий, самый бро-жанр!",
"Минутку, что-то там по работе какие-то странные коммуникации, дайте пару довести, черти",
"Я вижу свой какой-то не самый удачный маникюр, заусенцы, задницу зебры, и я верю, что этот мир настоящий",
"Как хорошо мы поступили, не записывая эту лекцию. Люди обсуждают, что они смотрели на ютубе, потому что пиратка не вышла вовремя",
"Вообще у меня лояльное отношение к пиратству",
"Что за тупость?! Если человек не может купить игру, пусть он её, кхм-кхм, скачает откуда-нибудь",
"Сильно пожатая гифка. Сегодня будет фестиваль сильно пожатых гифок",
"Надо чтобы бетономешалка мешала бетон максимально достоверно",
"Игры часто строятся на теме убивания уродов",
"Разные скабрезности в фанфике",
"У меня персонаж был новеньким, бодреньким, хорошо прыгал, а потом ему откусили ногу и он стал грустнявым и начал ходить помедленнее. Я смекаю, что персонажа надо менять",
"Великолепная картина, надо заказать её себе в формате А0, распечатать и повесить на стену",
"Таймтрекер завис. Ах ты, негодяй",
"УБИЙСТВО! ЕЩЁ ОДНО УБИЙСТВО! (самым крутейшим голосом)",
"Достаточно ли царственный этот мухомор или стоит ещё поискать?",
"Если у человека телефон с виндой, значит он отчаянный социопат",
"Не-диегетический. Ещё никто не придумал, как его нормально назвать. Может вы будете тем человеком, который скажет, что это интерфейс… *фырк*... Басмачический!",
"Я в платформере что могу сделать? Наступить на ёжика. Наступил на ёжика — сердечко в минус. Что ты делаешь, изверг? Не наступай",
"Может ли девушка Самус быть плохо выбритой? Наверное, может, она в будущем живёт, кто мы такие, чтобы осуждать её",
"Так. Овервотч? Мы закончили с тобой",
"Кстати, я не уверен, снижают ли за это карму, может и снижают (про пинание куриц)",
"мы играем за прекрасную кибер... как тебя обозвать... кибер-воительницу короче",
"Воу-воу-воу! Что это? ЧТО ЭТО?! ФАКИНГ ГАД",
"А я не условно, я очень серьезно. Читал недавно эссе про туалеты в играх",
"Блин, я не сплю. Теперь мне стало грустно. Я испытал зависть к возможному мне (в десять минут первого в дискорде)",
"Поздравляю, ваш классовый перк — ковид.",
"нужно двадцать дизайнеров в год",
"не паникуйте. вот если бы вы учились на отделении моды… но вы не модники. не паникуйте.",
"немножечко убивать людей и немножечко продавать наркотики",
"Да, Петя, я оценил ваш элегантный жест. Мне кажется, мы развиваемся. Эволюция мема проходит хорошо.",
"Давайте смотреть презенташку",
"Мы почему решили обсудить звук?.. Почему я всё говорю о себе во множественном числе? Дурная привычка, не пойму, откуда она ко мне в голову приехала. Я решил обсудить звук",
"Мы переходим… Теперь уже точно мы.",
"Всё уже готово, всё уже анимировано, все фичи уже в билде, и вот мы только начинаем думать, как разговаривают персонажи",
"На самом деле это всё из-за просмотра дипломников и предпросмотра третьего курса. Я человек уже полностью поехавший",
"Вижу мужика в грязном хоккейном костюме, я понимаю, что этот мужик мне не пригодится, мне нужно завести знакомство с каким-то более полезным человеком. Но если этот мужик вдруг начинает говорить бархатным баритоном, я может и пересмотрю своё решение",
"Мы можем как-то опасно дышать в микрофон *ИЭХО* (хз, как написать это буквами, но это было великолепно)",
"Мы бы выгнали сюда не трёх человек, а пятьдесят девять, всё бы снимали с голландским углом, когда камера такая “ИЭЭЭ” (наклоняет голову)",
"Нам дают звуки птичек, листьев, жизни, и мы понимаем, что эти звуки жизни сейчас для кого-то из этих классных мужчин оборвутся и закончатся",
"Если я буду смотреть ситком, где люди не ржут, мне сейчас будет некомфортно",
"Не то что я здесь не один и со мной моя компания симбиотов",
"Иногда он может сломать себе и спину, но это как бы окей",
"Где там вот эти фанфары, где “победитель, молодец, доехал”? Ничего нету",
"Надо одновременно показать, что у меня есть попа и у меня есть грудь, поэтому, как правило, если персонажа развернуть, то получится нечто мутантское",
"Когда я им пять раз настучал по башке, ну, чувак, ну издай стон хоть какой-нибудь или предсмертный вопль",
"Звука заноса нету, ну это всё грустно, это всё печально",
"Что такое самописный движок? Это когда никто не знает, как он работает",
"Коварный бронехряп",
"Что-то там неприятно покашливает и хрипит, это явно крокодил Гена свою гармошку расчехляет и сейчас начнет свои песни петь нехорошие",
"Кнопка активатор шапокляков",
"Плохой-плохой мальчик (про Петю)",
"стоило разрешить ему тусоваться с третьекурсницами, как он сразу перестал ходить на занятия",
"Нам часто надо собирать локации из говна и палок…кавычки",
"Александр похоронитель серии Суслов",
"Как показать, что город — Москва? Мы покупаем модельку Храма Василия Блаженого, ставим его среди избушек, и всё, это Москва",
"Я слышу, как Крокодил Гена играет на своей гармошке и понимаю, что мне надо идти туда, как бы мне это не хотелось",
"А учитывая, что ты жалкая Мэй, которая только стенку поставить может ледяную, скорее всего ты умрёшь. Бессмысленно.",
"Несмотря на то, что Саша Минкин продолжает упорствовать в своей ереси, что шутер — это только от первого лица, я считаю, что топ-даун или вид сбоку — это тоже классно",
"В самый лучший пирог идут самые лучшие ингредиенты — мороженое, солёные огурцы, докторская колбаса, тушёнку ещё, наверное, можно добавить",
"После этого чудовищного десерта у вас возможно случится диарея и это хотя бы приключение",
"Пусть там будет статуя Дыбовского, или огромный пирог, или гигантская инопланетная каракатица",
"Так и к статуе Дыбовского мы не можем подойти и цветы положить или, не знаю, чашку с чаем",
"Кому-то поплохело. Как я и сказал, февраль — месяц суровый, надеюсь, в апреле этот мужчина будет кряхтеть уже более оптимистично",
"У меня на слайде треугольника нету. Ну, нельзя его пощупать",
"Пока гей-порно отменяется",
"Вот эта вот ницшеанская яма гей-порно, она всегда рядом",
"Почему Семен? Почему не просто ноунейм-мальчик?",
"Не такого врага, наверное, воображал себе Фридрих Иванович Ницше",
"А кому-то просто нравится миникупер, потому что он такой халёсенький",
"Если мы видим замок, из которого торчат какие-то сыры… Ну очевидно тут мутировал сырок “дружба” и стал сырок “вражда” и случился апокалипсис",
"Большой зубастый черепахозавр, напоминающий динозавра, конечно же сразу считывается как главный злодей",
"Можно в глаз стрелять или куда-нибудь под коленку",
"Есть жаба простая, а жаба золотая имеет гранатомёт",
"В прошлый раз был Микки-Маус, теперь Дональд-Дак и Дональд-Дак начал нести яйца, из которых вылупляются Билии, Вилли, Дилли, только они фашисты",
"Если раньше геймдизайнер был такой отдельный человек-хохотун, который сидит и схемки себе сочиняет",
"Мои маленькие любители фурри, вас мы тоже коснёмся",
"Не ждал, не гадал, а реализовал какие-то мечты Дмитрия",
"В театре нельзя убить своего напарника по сцене, а если можно, то это, конечно, какой-то сомнительный театр, нужно отозвать у него лицензию",
"Мне нужен вот он, розовый мохнатус-ушастус, потому что я люблю его",
"Кто-то там порадовался, что я наконец-то дошёл до фурри?",
"И какую-нибудь святую гейскую империю распространить на всю Европу",
"Через неделю мы попробуем перейти к теме романтики, любви и, кхм-кхм-кхм, секса, кхм-кхм-кхм, как говорится, не пытайтесь повторить это в ваших дипломных проектах",
"Я стримлю фурри? Стримлю, все по плану",
"В реальности Тамбовской Империи нет, её не существует. По крайней мере пока",
"Любая игра похожа на порнографию",
"Чё они всё ходят, целуются, пускай они уже это самое",
"И вот тут как раз наступает территория кринжа, на которой можно подорваться",
"Петя начал говорить цитатами из волчьих пабликов",
"Лучше, чем если бы чувак постоянно рассказывал, что его деревню вырезали какие-то техно… Техно-монголы",
"Всё, что пошло дальше, оно базируется вот на этом трёхпиксельном члене",
"Вон там какой-то хрюндель стоит в виде тени",
"- “Отчего в проектах в последнее время так много жуков?” — очевидно, выросло поколение холлоу найта!”",
"Был такой персонаж в индустрии… индустриальный персонаж… Бобби Котик.",
"А иногда и менеджмент на проекте хороший, и команда хорошая, в игра — говно... Нет, ГОВНИЩЕ! Что это такое? Это жизнь",
"(максимально унылым тоном) Ну классно, я задохнулся. Хотя можно было предположить, что так будет",
"У меня пока нет опыта связывания, и я надеюсь сохранить это чувственное состояние, а то как-нибудь свяжут, а потом не развяжут, так что вывихи останутся",
"Наш персонаж это кто? Это какой-то верхнеуровневый Наполеон, который сидит за пределами экрана и за всем наблюдает",
"Некоторые люди такие “Как в отпуск съездил, потому что мне хлестали и запирали в трёхлитровой банке и заставляли делать что-то неприятное”...",
"Никогда не пробовал себя в такой элегантный чёрный полиэтилен упаковывать, как это называется… Латекс! Но подозреваю, что это похоже на то, чтобы играть в амнезию ночью одному в пустой квартире",
"Если это видеоигра, то там скорее всего что-то движется. Если там движения никакого нету, то может это и не видеоигра вовсе!",
"Люди смотрят футбол. Ну, окей, футбол ещё можно понять, там какой-то азарт, но люди смотрят керлинг!",
"Меня вроде бы никто не видит, зачем такая дикая жестикуляция? Потому что сидеть вот так вот смирно и ничем не шевелить мне тяжеловато",
"Пошутишь какую-нибудь шутку про Чебаркуль, какой-нибудь посёлок, и обязательно в группе окажется кто-то из Чебаркуля",
"Наверное, даже не пухлый водопроводчик, а даже такой поджарый водопроводчик прыгает не очень высоко",
"В реальной жизни такое вряд ли возможно, а если возможно, то не долго и смертельно",
"Что резидент показывает очень хорошо — Лёша, это не буллинг — что сюжет вообще не важен",
"Я просто абсолютно категорически не согласен, до свидания, тут наши пути расходятся, Джойс это кто-то постсоветский, который жутко переоценён, как мы вообще здесь оказались, давайте вернёмся в проклятый страшный особняк, потому что там как раз появился злодей-бабайка",
"Да, блин, Ютуб, ну ты заколебал, верните мне мою бабайку",
"Интересно, что Резидент Ивил в итоге пришёл к Леди Димитреску. Я думаю там какие-то коллективные фантазмы объединились и породили этого персонажа",
"и тут герой начинает прикидывать леоном: ножка болит я инвалид.",
"Который одновременно напоминает кибер-гея и /Виталика Пупкина/. Как это можно сочетать я не знаю, но у японцев получилось. Насколько нелегально моё высказывание в данных условиях я не знаю, но посмотрите ролики и попробуйте сказать, что я не прав",
"Глаз дёргается, когда слушаешь эти коменты от комдиза",
"Монгольский звучит как иностранный, а чувашский звучит как проклятие.",
"ПЕТЯ ПОЧЕМУ ТАК РАНО Я ОЖИДАЛ ВАС В 17:40",
"Тайный пуффендуй. Почему пуффендуй? Нас с Фёдором никуда бы больше не взяли",
"Ко мне в комнату врывается мама и развешивает на балконе мои свежепостиранные клетчатые трусишки",
"Мы не дадим вам программы, зато всегда можем прислать смешную картинку — мол, держитесь там",
"гей-порно... гей-порно мы обсудим во втором модуле",
"не то чтобы мы так хотим вас выставить за дверь... это и так произойдёт после диплома... и мы все с нетерпением ждём этого момента",
"Чайник становится с ножками и убегает. И сразу понимаешь: да, игры — это искусство. Как я мог сомневаться.",
"Возможно, я говорю какое-то холлоунайтохуйство",
"У чувака пропала кожа, и мы видим, как шевелится язык? Как миленько!",
"Где деньги добыл? — Кожаные куртки продавал. — Они что, из человеческой кожи?",
"Все будут думать, что мы жулики. Да, мы жулики.",
"Если добавить прыгающего кукумасика, игра получит новое измерение.",
"Лёгкие вертолётики от алкоголя или клеймомента.",
"Насколько вам известен мир Роблокса? Вы же сможете сделать лучше 13-летних чертей?",
"У нас есть прод, арт и цирковое училище. //как оказалось у нас есть панк, арт и цирковое училище",
"Автор — чувак, которые не может ничего в себе удержать.",
"А потом пластинка попала к Курту Кобейну. Надеюсь, ваши проекты будут иметь такую же убийственную силу",
"Вспахал я озимые и заколосилась у меня тыква, а теперь я хочу посмотреть на бородатую женщину",
"Пакман жрёт точки, они обозначают еду, а тут чувак жрёт ЗЕМЛЮ, которая ничего не обозначает",
"Но если возгордитесь, я вас заставлю в марбл мэднесс сыграть и быстренько как Алексей замотаетесь в одеялко и будете сидеть очень скромно",
"Так, вот ты наконец, поганый qr-код",
"“Антропно” это просто фэнси вэй… Откуда английский во мне проснулся? Это потому что с издателем общался",
"Но это же нечестно. Что вы хотите, залечить свои травмы после того, как вы заварили собачку?",
"Вот мы сейчас шторку поднимем и вы увидите, как прекрасен мир без наркотиков. Не очень, там даже всё капает как-то депрессивно. Зачем это ещё и в игру тащить?",
"Я забыл, что мне надо тыкать там и там и здесь, сорян, я должен быть как это, модный дИджей",
"Есть какие-то парципаторные практики интернета, например, я ворвался в комменты и запостил кринж",
"Когда участвуешь и постишь кринж, то тебе могут запостить его в ответ, а когда просто зыришь, то это такое безопасное за стеночкой существование",
"Она даже лучше работает, из-за того, что она такая какая-то непонятная",
"Когда я вижу вот эту бешеную бёку с сердечками, я сразу понимаю, какая это игра. Может я не запомню её название, но я запомню ощущение",
"В этом смысле Майнкрафт игра абсолютно величайшая, потому что она делает это как никакая другая",
"О нет, я убил эту самую, *щёлк-щёлк* водяную овцу",
"Свинью я убил, извините, я уже перепутал, кто кого убивал",
"Зачем боятся, Анатолий, всё нормально, сейчас Иван передаст вам дрель",
"Мы не ждём приезжая к Эйфелевой башне, что сейчас какие-то клоуны вылезут и начнут в нас кидаться круассанами, геймплей, механики",
"Я дал вам две простые игры, про мраморные шарики и про заваривание чая, как вам ещё помочь?!",
"Или как простейшая штучка с завариванием чая превращается в психологический опыт Дэвида Линча",
"Когда я наконец изловил проклятую гусеничку и змейку и теперь могу наигрывать на гитаре, это может быть такое же по силе чувство, как когда я собрал все эти чёртовы вышки",
"Когда козёл и червяк доходят до вершины, ты думаешь “мммм, мммм, как хорошо, как хорошо”",
"Погладить попу медведя, или что-то кому-то отрезать, или заварить чайку",
"Нет ничего такого в том, чтобы вцепиться в какой-то триггер, который есть у человека, и с помощью этого триггера эмоционально расшатать человека",
"Я могу использовать слово табло, но я думал о более экспрессивном термине",
"Чувака зовут Шалашашка, потому что он русский КГБ-агент",
"Я типо умный и опасный, поэтому я Шалашашка",
"Почему вы, Ваня, расхохотались, многие люди бывают с жёнами, что такого?",
"Когда они говорят “спасибо за пару” это сливается в такое “оролоылволо”",
"Это мессиво из ста пятидесяти иконок в конфе на индивидуальном уровне никак нельзя усвоить",
"“Откуда вы?”, “Мы из Москвы” и у паблишеров сразу лицо такое “Аааа. Хороший город. Да”",
"Я после онлай-пар всегда как выжатая тряпочка “аАаАаАа”",
"Я человек, который просто создан для уютности, выехал без домашних тапочек",
"Моё кигурми в виде Тоторо тоже осталось в Москве, какой бизнес тут вообще можно делать, как лекции готовить в таких чудовищных условиях?",
"Но блин, вы так слона не продадите, идеальное авторское высказывание должно быть во что-то упаковано",
"Это просто кричалочка, это просто плакат, это просто одиночный пикет, и это неплохо, но вы снижаете коммуникационную ценность такого высказывания",
"Судя по многим признакам это достаточно хорни-котёночек, поэтому бонк",
"Взял пряник, метнул его куда-нибудь и ржёшь",
"Но пряник всё-таки развлекает посредственно, во-первых, жалко, мог бы съесть, что ж ты его кидаешь",
"Блин, я перепутал ссылки, РРРРРР, Александр",
"Давайте, Лёша, вы справитесь, это очень простая игра",
"Ну тогда-то я врал! А здесь честен, понимать надо, разные вещи",
"Короче это, Саша играла и выросла она вон в это, в создателя билетной машины",
"Мальчик подарил ему шляпку",
"Игра очень ненавязчиво пресекает все попытки Лёши снизить градус хейта",
"Порножурнал вам не надо, вы маленький ещё",
"Ну, потому что вы будете очень долго играть. Я хочу сразу лишить вас надежды",
"У меня уже какие-то фрейдистские оговорочки неуверенности в будущем на следующий день",
"Моё латынское произношение не очень",
"Рассчитывайте свои силки, чтобы не надорваться",
"Причём она попыталась их убить краскопультом, это какая степень отчаяния должна быть",
"Единственное, что здесь не процедурно генерится — это Лёша, Лёша уже был сгенерирован некоторое время назад",
"Можно ходить и бесконечно любоваться живописью, но Лёша кажется решил всё это сломать и застрять под лестницей",
"Минутку-минутку, сейчас мы победим алматинский интернет радикально",
"Я огромный фанат Анвара, начиная с его проекта про Мистера Рыгунчика?.. К сожалению, забыл, как звали этого персонажа",
"Надо превратить пакмана в какого-нибудь шмакмана",
"И заходили в какой-нибудь мелкий еврейский магазинчик, чтобы купить коржиков",
"И думал, Максим позволит убежать, но нет, Максим не таков",
"С помощью цветочка мы отбиваем претензии нашей братвы",
"Бородатая женщина — сразу проходим мимо в секцию фурри, это нам не интересно",
"У вас носки подобраны в цвет футболочке, вы стараетесь",
"Нет, это бесспорно, вы реально, Маша, очень дерзкая, ну, будьте тогда дерзее",
"Некоторые из вас программисты, я видел, вы работали в движке. Некоторые просто прикидываются",
"Программист должен убить белочку",
"Летс си ит ин зе позитив вэй — не убить белочку, а создать белочку",
"Я должен прокопать русло, по которому мои смыслы потекут, потекут, потекут",
"Магнитик на холодильник — это нфт, только на старых таких, древних технологиях",
"Отсюда же эта секта любителей золотых контактов и виниловых пластинок",
"Артист в театре сегодня простыл и поэтому играет абсолютно потрясающе — мы чувствуем всю его боль",
"Андрей Миронов пошёл играть спектакль и умер. Потому что у него случился инфаркт. Как-то слишком процедурно",
"Вот то, что мы с вами осенью… Сейчас ещё осень, да? Ладно, назовём это “в октябре”",
"Может в процессе починения тарелки, она либо накладывает какое-то проклятье на нас, либо наоборот нас как-то по-японски баффает",
"Люди рассказывали, что она вполне себе злая женщина, может чашки бить самостоятельно",
"Ты должен либо научиться программировать, либо подружиться с программистом, иначе счастья у тебя не будет",
"Вот сука колхозная пришла хлопать в наш храм культуры",
"Мы можем на это посмотреть и получить дозу утреннего кринжа, чтоб взбодриться",
"Вы тыкнули и вам вместо чабреца занудного покажут одуванчик бесполезный",
"Давайте уже отдыхайте, давайте уже подышим все",
"Я буду делать вид, как будто это я придумал, и все будут “У, какой Суслов остроумный”, но никто не узнает страшную правду",
"в этом модуле все делаем соф-арт",
"кенийцы или похожие на них лица",
"У него тема всегда такие вот уродыши",
"Есть ли пределы у сексуализации",
"Бабушка, которая любила чувачка, как никто другой",
"Старик-Пушкин или Старик-Оксимирон — пофиг",
"закопанный вверх тормашками Дракула, дрыгающий ножками — проблем с лендмарками нет.",
"Ватсон и его друг лютые наркоманы. Ну конечно, поживите в этом интерьере, не такими наркоманами станете — котелок, газетки..",
"Стоит ли удивляться краху французской монархии, живущей в таком каля-маля интерьере?",
"Пухлики-страшные-фашисты-гномы",
"Я между прочим про академика Вавилова реферат делал! В восьмом классе… Поэтому до сих пор эту тему близко к сердцу принимаю",
"Никаких конструктивных комментариев дать не могу, только восхитительные",
"Конденсат нищебродства",
"Достоевский может говорить прям активно, во-первых, потому что он уже мёртв",
"наиграются дети в свои кровь-кишки-ниндзя, а потом пойдут всех убивать",
"как вы думаете, насколько я был успешен у американских мужчин?",
"Я хочу и Нюшу, и Копатыча, но они не ладят друг с другом, мне нужно придумать, как их объединить",
"В ваших проектах десятичасовой “синий трактор по полям” не годится – оставим этот абьюзинг мозга для киперкэжа и детских мобилок",
"Нам надо чтобы бездомные “кыш кыш” отсюда.",
"Мало того, что эта девочка красивая так она еще и плоская.",
"Не потная катка, а приколдесное дураковаляние",
"В серьезных играх элемент “нечестно, зато ржачно” уходит",
"Аппарат геймера забит, я устал от скучного дерьма",
"Чувак застрял в корове – поздравим его с этим",
"Откуда ты это сказал?",
"Я собой сегодня доволен: сослался на 4 резидент, поругал хотлайн майами 2, я молодец.",
"не игра, а ржомба",
"хоть завтра в расстрельную команду гестаповцев",
"нарушил все заповеди верстки и оттоптался от души",
"картиночная картинка",
"некоторые студенты не сломались, но подгорели. такие еще сырнички, но уже подгорелые сырнички",
"валера холопов – местная звезда, светило гейм-дизайна, приходит и говорит: “у меня ничего нет”. а я ему: “нет, валера, это все фигня”",
"сейчас закончим за 2 недели опереткой и пойдете бакалавром",
"игры я воровал на савеловском рынке, за что меня 2 раза били. Пиво я тоже воровал, но за него меня били только один раз.",
"алексей устал шлепать. рука бойцов колоть устала",
"“Эротические новеллы про фей?” — конечно.",
"Еще Эротические новеллы про фей? Да",
        ];

        let hruTitle = $('.hru-title p');

        let currentext = hruTitle.text();

        let rand = Math.floor(Math.random() * arr.length),
            randText = $(hruTitle).text(arr[rand]);

        if (currentext === randText) {
            $(hruTitle).text(arr[rand] + Math.random());

            console.log(rand);
            console.log(currentext);

        } else {
            $(hruTitle).text(arr[rand]);
        }

        setTimeout(function () {
            $('#hru').removeAttr('disabled', 'disabled');
            $('.hru-title p').removeClass('hru-active');
        }, 500);

        if("pause" in audio) audio.pause();

        audio = new Audio('sounds/pig.mp3');

        audio.play();

    });
});

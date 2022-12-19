INSERT INTO channels (title, slug)
VALUES ('VK TEAM', 'vkteamchannel'), ('808', '808media');

INSERT INTO posts (title, subtitle, text, author, image_url, video_url, date, likes, dislikes, comments, channel_id)
VALUES ('Backend или Frontend: как войти в IT | Новогоднее шоу VK Образование', 'Артур Сардарян — руководитель группы мобильной разработки проекта Юла и преподаватель в образовательных...', 'Входим в новую неделю с новым выпуском нашего шоу. В видео Артур Сардарян делится историями из жизни фронтенд-разработчика в кругу бэкендеров и советами на тему того, как всё-таки войти в IT. Итого уже половину выпусков с нашими спикерами можно найти в плейлисте шоу: приятное', 'VK TEAM', 'https://i.ytimg.com/vi/a3EBSTO41ks/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkNb5SIRVfB72fMnJF3qYojllD7A', 'https://www.youtube.com/watch?v=a3EBSTO41ks&ab_channel=VKTeam', '10 месяцев назад', 0, 0, 0, 1),
       ('Как начинающему исполнителю продвигаться через «Студию» от VK Музыки | Новогоднее шоу VK Образование', 'Как начинающему артисту самостоятельно и без лейбла продвигать своё музыкальное творчество онлайн? VK Музы...', 'Друзья, постепенно публикуем видео со спикерами нашего Новогоднего шоу VK Образование. Герой первого видео — Хабиб, музыкант и блогер. Вместе с Костей Сидорковым они разобрали работу нового проекта VK Музыки «Студия». Приятного просмотра!', 'VK TEAM', 'https://i.ytimg.com/vi/_O4-AmIqUYw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCwFtntRakmmwYuF-stWiVO_wkYw', 'https://www.youtube.com/watch?v=_O4-AmIqUYw&ab_channel=VKTeam', '10 месяцев назад', 1, 0, 0, 1),
       ('Кто выиграл смартфон Infinix? Итоги конкурса', 'Поздравляем победителя! Свяжитесь с нами в ВК: https://vk.com/rbtshki или по hello@808.media Конкурс на YouTube: https://youtu.be/xVHFx5zciTc', 'Ребятушки, подвели итоги конкурса на два новеньких смартфона Infinix! Победителем на YouTube стал Виталий Скан - https://clck.ru/32Zog5. Поздравляем и просим связаться с нами в ВК: https://vk.com/rbtshki или по hello@808.media', '808', 'https://i.ytimg.com/vi/NB0ljEopx_s/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8do8T_oyS8XX_lsPOOH_IMiSZkw', 'https://www.youtube.com/watch?v=NB0ljEopx_s&ab_channel=808', '1 месяц назад', 28, 0, 2, 2),
       ('Конкурс на Infinix NOTE 12 VIP: итоги!', 'Конкурс на Infinix NOTE 12 VIP: итоги!', 'Подвели итоги конкурса на Infinix NOTE 12 VIP! Смартфон выиграл Kuantro Lord - https://clck.ru/sU5pq. Поздравляем!', '808', 'https://i.ytimg.com/vi/9T8PikxydFE/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGMoUjAP&rs=AOn4CLCrrfUtMUnzjGwicCdSwBbLZcCfZw', 'https://www.youtube.com/watch?v=9T8PikxydFE&ab_channel=808', '4 месяца назад', 61, 0, 6, 2);

INSERT INTO descriptions (text, channel_id)
VALUES ('VK Team — это миллион возможностей проявить себя. Мы делаем современные и быстрые интернет-сервисы, доступные каждому. На этом канале делимся опытом экосистемы VK, рассказываем о технологиях, наших образовательных проектах и жизни команды. Смотрите лекции экспертов, митапы, шоу, онлайн-курсы и подкасты: VK Tech Talks, «Oh, my code!», «Будущее, которое мы заслужили» и «Скринкасты». Подписывайтесь, чтобы быть в курсе!',
        1),
       ('У вас есть интересная идея, крутой гаджет или возможность показать нам завод по производству техники? Пишите в любое время! Адрес ниже :) Полное или частичное использование и трансляция контента возможны ТОЛЬКО с письменного разрешения редакции.',
        2);

INSERT INTO statistic_data (text, channel_id)
VALUES ('Дата регистрации: 11 мар. 2012г.', 1),
       ('15 357 808 просмотров', 1),
       ('Дата регистрации: 18 мар. 2016г.', 2),
       ('639 796 605 просмотров', 2);

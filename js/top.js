var movies = [
['tt0111161', 'The Shawshank Redemption', 'xqir9a'],
['tt0068646', 'The Godfather'],
['tt0071562', 'The Godfather: Part II'],
['tt0060196', 'The Good, the Bad and the Ugly'],
['tt0110912', 'Pulp Fiction', 'xqitu8'],
['tt0050083', '12 Angry Men', 'x56rtr'],
['tt0108052', 'Schindler\'s List', 'xqisgd'],
['tt0073486', 'One Flew Over the Cuckoo\'s Nest', 'x4xvwz'],
['tt0468569', 'The Dark Knight', 'xqittr'],
['tt1375666', 'Inception', 'xqishn'],
['tt0167260', 'The Lord of the Rings: The Return of the King'],
['tt0080684', 'Star Wars: Episode V - The Empire Strikes Back'],
['tt0047478', 'Seven Samurai', 'xqiryy'],
['tt0137523', 'Fight Club', 'xqirib'],
['tt0099685', 'Goodfellas', 'xqirj7'],
['tt0076759', 'Star Wars: Episode IV - A New Hope'],
['tt0120737', 'The Lord of the Rings: The Fellowship of the Ring'],
['tt0317248', 'City of God', 'xqiu03'],
['tt0034583', 'Casablanca'],
['tt0064116', 'Once Upon a Time in the West'],
['tt0047396', 'Rear Window'],
['tt0133093', 'The Matrix', 'xqisfx'],
['tt0082971', 'Raiders of the Lost Ark'],
['tt0114814', 'The Usual Suspects', 'xqish2'],
['tt0102926', 'The Silence of the Lambs'],
['tt0054215', 'Psycho'],
['tt0114369', 'Se7en'],
['tt0038650', 'It\'s a Wonderful Life'],
['tt0167261', 'The Lord of the Rings: The Two Towers'],
['tt0109830', 'Forrest Gump'],
['tt0209144', 'Memento', 'xpway3'],
['tt0043014', 'Sunset Blvd.'],
['tt0110413', 'Leon: The Professional', 'xqjokb'],
['tt0057012', 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', 'xqit7g'],
['tt0078788', 'Apocalypse Now', 'xbfph4'],
['tt0120586', 'American History X'],
['tt0435761', 'Toy Story 3', 'xqit0d'],
['tt0033467', 'Citizen Kane'],
['tt0053125', 'North by Northwest'],
['tt0169547', 'American Beauty'],
['tt0103064', 'Terminator 2: Judgment Day', 'xqjoo4'],
['tt0075314', 'Taxi Driver', 'xqirul'],
['tt0120815', 'Saving Private Ryan', 'xqjoqs'],
['tt0078748', 'Alien'],
['tt0052357', 'Vertigo'],
['tt0245429', 'Spirited Away'],
['tt0211915', 'Amélie', 'xpwcr9'],
['tt0081505', 'The Shining', 'xqisnh'],
['tt0021749', 'City Lights'],
['tt0050825', 'Paths of Glory', 'xqirrc'],
['tt0253474', 'The Pianist'],
['tt0910970', 'WALL·E', 'x4ozdy'],
['tt0022100', 'M'],
['tt0036775', 'Double Indemnity'],
['tt0405094', 'The Lives of Others'],
['tt0407887', 'The Departed', 'xqirlf'],
['tt0056172', 'Lawrence of Arabia'],
['tt0066921', 'A Clockwork Orange', 'xqitaq'],
['tt0056592', 'To Kill a Mockingbird'],
['tt0090605', 'Aliens', 'xqjpp5'],
['tt0180093', 'Requiem for a Dream'],
['tt0338013', 'Eternal Sunshine of the Spotless Mind'],
['tt0082096', 'Das Boot', 'xqjpzv'],
['tt0027977', 'Modern Times', 'xqjptq'],
['tt0118799', 'Life Is Beautiful'],
['tt0105236', 'Reservoir Dogs'],
['tt0041959', 'The Third Man'],
['tt0088763', 'Back to the Future', 'xqjpwr'],
['tt0119488', 'L.A. Confidential', 'xqitj1'],
['tt0071315', 'Chinatown', 'xqjpz7'],
['tt0482571', 'The Prestige', 'xqjord'],
['tt0040897', 'The Treasure of the Sierra Madre', 'xqjosi'],
['tt0095765', 'Cinema Paradiso', 'xqjou6'],
['tt0120689', 'The Green Mile', 'xqjopq'],
['tt0071853', 'Monty Python and the Holy Grail', 'xqirvi'],
['tt0087843', 'Once Upon a Time in America', 'xqjowc'],
['tt0081398', 'Raging Bull', 'xqjow0'],
['tt0042876', 'Rashomon', 'xqjox9'],
['tt0053291', 'Some Like It Hot', 'xqjoxz'],
['tt0045152', 'Singin\' in the Rain', 'xqjp3e'],
['tt0086879', 'Amadeus', 'xqjp53'],
['tt0457430', 'Pan\'s Labyrinth', 'xqjp4q'],
['tt0042192', 'All About Eve', 'xqjp6z'],
['tt0032553', 'The Great Dictator', 'xqjp9v'],
['tt0093058', 'Full Metal Jacket', 'xdwohx'],
['tt0050212', 'The Bridge on the River Kwai', 'xqitq8'],
['tt0040522', 'Bicycle Thieves', 'xqito9'],
['tt0062622', '2001: A Space Odyssey', 'xqirxt'],
['tt0172495', 'Gladiator', 'xqitmb'],
['tt0112573', 'Braveheart', 'xqitky'],
['tt0053604', 'The Apartment'],
['tt0017136', 'Metropolis'],
['tt0361748', 'Inglourious Basterds', 'xqit66'],
['tt0363163', 'Downfall'],
['tt0364569', 'Oldboy', 'xqirzh'],
['tt0105695', 'Unforgiven'],
['tt0070735', 'The Sting'],
['tt1205489', 'Gran Torino'],
['tt0080678', 'The Elephant Man', 'xqjq1x'],
['tt1049413', 'Up', 'xqit2j'],
['tt0031679', 'Mr. Smith Goes to Washington', 'xqjpet'],
['tt0086190', 'Star Wars: Episode VI - Return of the Jedi', 'xqjphh'],
['tt0033870', 'The Maltese Falcon', 'xqjpix'],
['tt0097576', 'Indiana Jones and the Last Crusade', 'xqjpjw'],
['tt0119698', 'Princess Mononoke'],
['tt0047296', 'On the Waterfront', 'xqjpkx'],
['tt0032976', 'Rebecca'],
['tt0095016', 'Die Hard'],
['tt0057115', 'The Great Escape'],
['tt0947798', 'Black Swan'],
['tt0401792', 'Sin City', 'xqisvj'],
['tt0050976', 'The Seventh Seal'],
['tt0372784', 'Batman Begins'],
['tt0017925', 'The General'],
['tt0113277', 'Heat'],
['tt0055630', 'Yojimbo', 'xqjq6d'],
['tt0095327', 'Grave of the Fireflies'],
['tt0116282', 'Fargo'],
['tt0083658', 'Blade Runner', 'xqjq7w'],
['tt0059578', 'For a Few Dollars More'],
['tt1504320', 'The King\'s Speech'],
['tt0395169', 'Hotel Rwanda', 'xqjqaa'],
['tt0073195', 'Jaws', 'xqjqcy'],
['tt0051201', 'Witness for the Prosecution', 'xqjqe2'],
['tt0208092', 'Snatch.', 'xqitbo'],
['tt0089881', 'Ran'],
['tt0477348', 'No Country for Old Men', 'xqjqg5'],
['tt1201607', 'Harry Potter and the Deathly Hallows: Part 2'],
['tt0110357', 'The Lion King', 'xqisti'],
['tt0050986', 'Wild Strawberries'],
['tt0052311', 'Touch of Evil'],
['tt0032138', 'The Wizard of Oz'],
['tt0118715', 'The Big Lebowski', 'xqjqgw'],
['tt0077416', 'The Deer Hunter', 'xqjqpr'],
['tt0167404', 'The Sixth Sense'],
['tt1010048', 'Slumdog Millionaire', 'xqitlv'],
['tt0114709', 'Toy Story'],
['tt0061512', 'Cool Hand Luke'],
['tt0075686', 'Annie Hall'],
['tt0044079', 'Strangers on a Train'],
['tt0025316', 'It Happened One Night'],
['tt0266697', 'Kill Bill: Vol. 1', 'xqjqtw'],
['tt0246578', 'Donnie Darko', 'xqisyk'],
['tt0044706', 'High Noon'],
['tt0091763', 'Platoon', 'xqjqxf'],
['tt0758758', 'Into the Wild'],
['tt0086250', 'Scarface', 'xqjr6d'],
['tt0117951', 'Trainspotting', 'xqjra1'],
['tt0015864', 'The Gold Rush'],
['tt0405159', 'Million Dollar Baby'],
['tt0044741', 'Ikiru'],
['tt0469494', 'There Will Be Blood'],
['tt0064115', 'Butch Cassidy and the Sundance Kid'],
['tt0038787', 'Notorious'],
['tt0031381', 'Gone with the Wind'],
['tt0018455', 'Sunrise: A Song of Two Humans'],
['tt0032551', 'The Grapes of Wrath'],
['tt0012349', 'The Kid'],
['tt1136608', 'District 9', 'xqjreb'],
['tt0046268', 'The Wages of Fear'],
['tt1305806', 'The Secret in Their Eyes'],
['tt0107048', 'Groundhog Day'],
['tt0245712', 'Amores Perros'],
['tt0052618', 'Ben-Hur'],
['tt0120735', 'Lock, Stock and Two Smoking Barrels', 'xqjrek'],
['tt0038355', 'The Big Sleep'],
['tt0061722', 'The Graduate'],
['tt0079470', 'Life of Brian'],
['tt0266543', 'Finding Nemo'],
['tt0112641', 'Casino'],
['tt0088247', 'The Terminator'],
['tt0036868', 'The Best Years of Our Lives'],
['tt0056218', 'The Manchurian Candidate'],
['tt0084787', 'The Thing'],
['tt0092005', 'Stand by Me'],
['tt0440963', 'The Bourne Ultimatum'],
['tt0046911', 'Diabolique'],
['tt0072890', 'Dog Day Afternoon'],
['tt0434409', 'V for Vendetta'],
['tt0114746', 'Twelve Monkeys'],
['tt0892769', 'How to Train Your Dragon'],
['tt1125849', 'The Wrestler'],
['tt0096283', 'My Neighbor Totoro'],
['tt0083987', 'Gandhi'],
['tt0055031', 'Judgment at Nuremberg'],
['tt0119217', 'Good Will Hunting'],
['tt0499549', 'Avatar', 'xqitf0'],
['tt0074958', 'Network'],
['tt0048424', 'The Night of the Hunter'],
['tt0382932', 'Ratatouille', 'xqitci'],
['tt0056801', '8½'],
['tt0058946', 'The Battle of Algiers'],
['tt0053198', 'The 400 Blows'],
['tt0093779', 'The Princess Bride'],
['tt0978762', 'Mary and Max'],
['tt0049406', 'The Killing'],
['tt0054997', 'The Hustler'],
['tt0047528', 'La Strada'],
['tt0796366', 'Star Trek'],
['tt0046912', 'Dial M for Murder'],
['tt0060827', 'Persona'],
['tt0401383', 'The Diving Bell and the Butterfly'],
['tt0061184', 'Who\'s Afraid of Virginia Woolf?'],
['tt0070047', 'The Exorcist'],
['tt0046359', 'Stalag 17'],
['tt0065214', 'The Wild Bunch'],
['tt0044081', 'A Streetcar Named Desire'],
['tt1285016', 'The Social Network'],
['tt0083922', 'Fanny and Alexander'],
['tt0317705', 'The Incredibles', 'xqit46'],
['tt0072684', 'Barry Lyndon'],
['tt0041546', 'Kind Hearts and Coronets'],
['tt0019254', 'The Passion of Joan of Arc'],
['tt0780536', 'In Bruges'],
['tt0020629', 'All Quiet on the Western Front'],
['tt0075148', 'Rocky'],
['tt0120382', 'The Truman Show'],
['tt0015324', 'Sherlock Jr.'],
['tt0327056', 'Mystic River'],
['tt1139797', 'Let the Right One In'],
['tt0050783', 'Nights of Cabiria'],
['tt0175880', 'Magnolia'],
['tt0347149', 'Howl\'s Moving Castle'],
['tt0063522', 'Rosemary\'s Baby', 'xqiu8z'],
['tt0319061', 'Big Fish'],
['tt0109707', 'Ed Wood'],
['tt0338564', 'Infernal Affairs'],
['tt0079522', 'Manhattan'],
['tt0154420', 'The Celebration'],
['tt0046250', 'Roman Holiday'],
['tt0206634', 'Children of Men'],
['tt0325980', 'Pirates of the Caribbean: The Curse of the Black Pearl'],
['tt0378194', 'Kill Bill: Vol. 2'],
['tt0040746', 'Rope'],
['tt0056217', 'The Man Who Shot Liberty Valance'],
['tt0066206', 'Patton'],
['tt0069281', 'Sleuth'],
['tt1130884', 'Shutter Island'],
['tt1220719', 'Ip Man'],
['tt0032599', 'His Girl Friday'],
['tt0198781', 'Monsters, Inc.'],
['tt0095953', 'Rain Man'],
['tt0374546', 'Spring, Summer, Fall, Winter... and Spring'],
['tt0046438', 'Tokyo Story'],
['tt0052561', 'Anatomy of a Murder'],
['tt0028950', 'Grand Illusion'],
['tt0268978', 'A Beautiful Mind'],
['tt0023969', 'Duck Soup'],
['tt0079944', 'Stalker', 'xqite7'],
['tt0498380', 'Letters from Iwo Jima']
];

var Top =
{
    checkMovie: function(event)
    {
        $(this).parent().toggleClass('watched');
    },
    playMovie: function(event)
    {
        jQuery.facebox({ div: '#box' });
        $('.content').html('<iframe frameborder="0" src="http://www.dailymotion.com/swf/' + $(this).parent().attr('data-video-url') +  '?autoplay=1&highlight=E5342F"></iframe>');
    },
    init: function()
    {
        $(document).ready(function(){
            var moviesContainer = $('#movies');
            var play = $('<div id="play"/>');

            var check = $('<div id="check"/>')
                .html('✔');

            var watched = $('<div id="watched"/>')
                .attr('title', "i'v seen it");

            var trailersCount = 0;
            for (var i in movies)
            {
                var movieId = movies[i][0];
                var videoId = false;
                var url = '/lang/en/relevance/search/' + encodeURIComponent('"' + movies[i][1] + '" trailer');
                if (movies[i][2])
                {
                    videoId = movies[i][2];
                    url = '/video/' + videoId;
                    trailersCount ++;
                }
                var posterUrl = 'http://ec.rszr.co/w=182&h=246&mv=' + movieId;
                var movie = $('<div>').addClass('movie')
                    .attr('data-video-url', url)
                    .attr('data-video-id', videoId)
                    .css('background-image', 'url(' + posterUrl + ')')
                    .appendTo(moviesContainer);

                    // movie.append('<img data-src="' + posterUrl +'" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" onload="lzld(this)" />');

                $('<div>').appendTo(movie)
                    .addClass('info')
                    .html(movies[i][1]);
            };
            $('<h3>').html('trailers count: ' + trailersCount).appendTo($('header'));
            $('.movie').mouseenter(function(){
                if ($(this).attr('data-video-id') != 'false')
                {
                    play.appendTo($(this));
                }
                watched.appendTo($(this));
                check.appendTo($(this));
            }).mouseleave(function(){
                play.remove();
                watched.remove();
                check.remove();
            });

            $('#movies').on('click', '#check, #watched', Top.checkMovie);
            $('#movies').on('click', '#play', Top.playMovie);

            $(document).bind('afterClose.facebox', function(){
                $('.content').html('');
            })
        });
    }
}
Top.init();

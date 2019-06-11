$(document).ready(function() {
    $('#go_btn').click(function() {
        var month = $('#MON :selected').val();
        var day = $('#DAY :selected').text();
        var year = $('#YEAR :selected').text();
        var month1, month2, monthTotal;
        var day1, day2, dayTotal;
        var year1, year2, year3, year4, yearTotal;
        var monthOutput = [];
        var dayOutput = [];
        var yearOutput = [];
        var finaldayOutput = [];
        var finalyearOutput = [];
        var finalOutput = [];
        var isNum = year.toString();
        var isNumbr = day.toString();
        var isNmbr = month.toString();
        var final_Output;

        //getting the value of month
        for (var i = 0, len = isNmbr.length; i < len; i += 1) {
            monthOutput.push(+isNmbr.charAt(i));
        }
        month1 = monthOutput[0];
        month2 = monthOutput[1];
        monthTotal = month1 + month2;

        document.getElementById('month').innerHTML = "<b>Month: </b>" + month1 + " + " + month2 + " = " + monthTotal;

        //getting the value of day
        for (var i = 0, len = isNumbr.length; i < len; i += 1) {
            dayOutput.push(+isNumbr.charAt(i));
        }
        day1 = dayOutput[0];
        day2 = dayOutput[1];
        dayTotal = day1 + day2;

        var ssSplit = dayTotal.toString();
        if (ssSplit.length == 2) {
            for (var i = 0, len = ssSplit.length; i < len; i += 1) {
                finaldayOutput.push(+ssSplit.charAt(i));
            }
            var ddt1 = finaldayOutput[0];
            var ddt2 = finaldayOutput[1];
            dayTotal = ddt1 + ddt2;

            console.log("ddt1: " + ddt1);
            console.log("ddt2: " + ddt2);
            document.getElementById('day').innerHTML = "<b>Day: </b> " + day1 + " + " + day2 + " = " + ddt1 + " + " + ddt2 + "=" + dayTotal;
        } else {
            document.getElementById('day').innerHTML = "<b>Day: </b>" + day1 + " + " + day2 + " = " + dayTotal;
        }

        //getting the value of year
        for (var i = 0, len = isNum.length; i < len; i += 1) {
            yearOutput.push(+isNum.charAt(i));
        }
        year1 = yearOutput[0];
        year2 = yearOutput[1];
        year3 = yearOutput[2];
        year4 = yearOutput[3];
        yearTotal = year1 + year2 + year3 + year4;

        var yySplit = yearTotal.toString();
        if (yySplit.length == 2) {
            for (var i = 0, len = yySplit.length; i < len; i += 1) {
                finalyearOutput.push(+yySplit.charAt(i));
            }
            var year_Total1 = finalyearOutput[0];
            var year_Total2 = finalyearOutput[1];
            yearTotal = year_Total1 + year_Total2;

            document.getElementById('year').innerHTML = "<b>Year: </b>: " + year1 + " + " + year2 + " + " + year3 + " + " + year4 + " = " + year_Total1 + "+" + year_Total2 + "=" + yearTotal;
        } else {
            document.getElementById('year').innerHTML = "<b>Year: </b>: " + year1 + " + " + year2 + " + " + year3 + " + " + year4 + " = " + yearTotal;
        }

        final_Output = monthTotal + dayTotal + yearTotal;

        var ffSplit = final_Output.toString();
        if (ffSplit.length == 2) {
            for (var i = 0, len = ffSplit.length; i < len; i += 1) {
                finalOutput.push(+ffSplit.charAt(i));
            }
            var ff1 = finalOutput[0];
            var ff2 = finalOutput[1];
            final_Output = year_Total1 + year_Total2;

            document.getElementById('lifepathNum').innerHTML = monthTotal + " + " + dayTotal + " + " + yearTotal + " = " + ff1 + " + " + ff2 + " = " + final_Output;
        } else {
            document.getElementById('lifepathNum').innerHTML = monthTotal + " + " + dayTotal + " + " + yearTotal + " = " + final_Output;
        }

        document.getElementById('birthdate').innerHTML = "<b>Birth Date: </b>" + month + "/" + day + "/" + year;
        document.getElementById('pathNum').innerHTML = "Life Path Number " + final_Output;

        var content1 = "<h2>The Natural Born Leader</h2><br><br>The Life Path 1 is one of leadership and trailblazing. With a strong sense of independence, you do not like relying on other people, especially if you feel they are holding you back. Often, you may feel like it is better to go it alone. <br><br>You would do well as an entrepreneur because you aren't afraid to take risks! You march to the beat of your own tune and the people around you generally don't hear until the tune is completed and on the top 100 charts. You tend to do things your own way and create innovation by stirring up the pot. People such as Henry Ford, Charlie Chaplin, Ozzy Osbourne, Tom Cruise, all stayed true to their Life Path 1, you should too.<br><br>As a Life Path 1, be careful and don't try to control everything and everyone around you as you plow headlong towards your goals. In life it is still beneficial to maintain a balance.<br><br>Confidence, creativity, and originality are very popular characteristics of a Life Path 1. ";
        var content2 = "<h2>The Diplomat</h2><br><br> As a Life Path 2 you will find yourself attracted to a life of building and nurturing relationships. You bring unity and compassion to the world with your big heart and have a tendency to bring out the good in people in your life.<br><br> You can be very affectionate and considerate of other people's needs. You make good mediators because you can often see both sides of an argument with amazing clarity, which can be a very positive quality... Except when arguing your own points because you tend to become indecisive.<br> <br> Careers that suit the Life Path 2 are ones that will allow you to serve others and society. Examples of these at the highest level would be: diplomat, president, ambassador. But make no mistake, even as a social worker or baby-sitter you can still make an impact with your strong nurturing influence. Some fellow Life Path 2's are: Barrack Obama, Tony Blaire, Jennifer Aniston, Amelia Earhart, Meg Ryan, Jennifer Lopez, Jackie Kennedy. <br><br> One thing to be aware of as a Life Path 2, since you thrive on giving and helping, you can become resentful when someone elses generosity is not returned in the capacity that you give. It is important for you to keep in mind that everyone shows their appreciation in different and often widely dissimilar ways.<br><br> If you are reading this because you know someone a Life Path 2, be sure to show your appreciation whenever possible, be it a simple card, a hug, flowers, or even treating them to dinner.";
        var content3 = "<h2>The Creative</h2> <br></br> People with a Life Path 3 are the most artistic in the bunch. You find ways of creating the most beautiful things in this world such as art, music, literature, etc. You breathe life into culture, and make it seem so simple because of your natural gift for expression. This explains why the entertainment industry is chock full of Life Path 3's. Noteworthy examples include: Chris Rock, Jackie Chan, Jamie Foxx, Nelly Furtado, Snoop Dogg, and Rihanna to name a few. <br><br> Your mindset will do well by ignoring any cynics or defeatists you may come across. Stay headstrong with your creative outlet & true to you goals, and they will often pay off personally, financially, or both.<br><br> All Life Path 3's tend to enjoy life and all that they can get out of it. The extraverted 3's love being in the spotlight and showing off their talent. On the other hand, introverted 3's lean more toward solitary creative pursuits that can garner them a following without being in the spotlight, such as an artist or writer.";
        var content4 = "<h2>The Worker</h2> <br><br> The life of a Life Path 4 is one of work and discipline to feel stable. You do not like taking short-cuts and often feel that the best way to do anything is through dedications and perseverance. You can see through <em>Get Rich Quick</em> schemes and consider them to be a waste of time, you see that time as being better spent working towards the solid goal. <br><br> You like challenge, and may consider everything a challenge, sometimes to a fault. This can lead to discussions, and even arguments, about what is the best way to do something. <br><br> You're very headstrong and will insist on not taking a shortcut. You may feel that spending hours and days to find the best way to do something will pay off greatly in the long run.<br><br> You need stability to feel comfortable. The world often finds 4's in a position of manager and business leader because of their desire to lead people to a defined goal. A career that deals with finite items, patterns, and structure (finance, accounting, engineering, etc.) are best suited to the Life Path 4 because the careers require an attention to detail.";
        var content5 = "<h2>The Flexible Five</h2> <br><br> The Life Path 5 loves to have variety in life. Anything new is exciting. Whether it is traveling to a place you've never been, or meeting new people, you are always looking for that next experience and adventure.<br><br> The war cry of the Life Path 5 is <strong>Freedom!</strong><br><br>You need to explore what life has to offer, and don't see any need to be rooted to a specific place. You tend to be the life of the party because you will go out of your way to meet everyone in the room.<br><br> For the Life Path 5 a career that requires you to be in a certain place at a certain time everyday will not be the best situation. Instead you should consider a career that provides a unique daily experience. This could be careers from sales, where you interact with various clients, to a nature photographer which requires you to travel and explore the farthest reaches of earth. <br><br> A few well known Life Path 5 people: Angelina Jolie, Steven Spielberg, Beyoncé, Dr Dre, Vincent van Gogh, Tina Turner. ";
        var content6 = "<h2>The Harmonizer</h2> <br><br> The Life Path 6 looks for ways to make harmony with everything you encounter. Whether it is art, music, or relationships, no other Life Path can make things coalesce as naturally as you can. Your magnetic personality draws people in and can lead to you being the center of attention.<br><br> You will find that your life will revolve around your family, and friends. You have an innate ability to nurture the people around you. As the person who usually takes charge of a situation you tend to be, or are on the way to being, the head of staff.  <br><br> Don't let your innate ability to lead go to your head, this can lead to you trying to control every situation, and that is not what being a 6 is about. Learn to balance 'leading and nurturing' so as to raise up the people around you, instead of 'demanding and controlling' which will alienate people. <br><br>  Some notable Life Path 6 people you may know: John Lennon, Michael Jackson, Justin Timberlake, Thomas Edison, Stephen King. ";
        var content7 = "<h2>Seeker of Knowledge </h2> <br><br>As a Life Path 7 you are always looking for the answers. Whether the question is big or small, doesn't matter, it’s the glory of finding the answer that drives you. This can lead to some interesting journeys during your life since you tend to seek spiritual or inner self understanding. <br><br> You tend to do this journey on your own and can live inside your own head for lengths of time. You can see situations from many different angles. This is great for careers that requires you to analyse a situation solo, or weed through large amounts of data.<br><br> However, because of your desire to process things and stay in your own head, it can take a long time for someone else to get to know you. This can make relationships difficult to flourish and maintain. You are highly sensitive, but shy away from emotions that may be foreign.<br><br> <h2>You Get The Last Word</h2><br><br> You tend to be in positions that allows you to give the <em>Last Word</em> on a subject because you are often considered an authority on the subject. Careers that you should consider, if you haven't, include: Lawyer, Judge, Clergy, Scientist. These careers and careers similar to them will work well for you because it allows for the time to process things in your head and allows you to be in a position of authority.<br><br> <h2>You Value Your Independence</h2><br><br> You tend to be a loner and find solace in solitude. From the outside this can lead people to believe you an introvert or self absorbed, when in fact you may be enjoying the details that many people are overlooking. <br><br> It turns out that many actors fall under the Life Path 7. Some notable actors are: Marilyn Monroe, Julia Roberts, Leonardo DiCaprio, Antonio Banderas, Bruce Lee, Johnny Depp.";
        var content8 = "<h2>The Powerhouse</h2> <br><br>As a Life Path 8 you are alive to make an impact on the world through your drive and ambition. You are a person of authority, and material wealth. You will often master the art of being successful in the career of your choosing.<br><br> You work very hard to reach your goals. You will often be considered a workaholic. You can sometimes let hitting your goals, and working, take precedence on other aspects of your life like personal relationships with family and friends. <br><br> <h2>Strive For Balance</h2> You will typically have an issue with authority, whether in the form of a boss, police, government official, landlord, etc. which can get you into trouble. This can also drive you to seek out and become a person of authority yourself, so that you don’t have to answer to anyone except yourself. When an understanding of the need for a balance between work and personal life is reached, you can become unstoppable.";
        var content9 = "<h2></h2> <br><br>You have great compassion and idealism. You are a utopian, and will spend your life trying to realize some aspect of your utopian dream, sacrificing money, time, and energy for a better world. It is in giving that you will find much satisfaction. You have a broad outlook on life. You tend to see the big picture, rather than the minute details.<br><br> You naturally attract people from all walks of life who can fit into your larger plans and take over the areas you find uninteresting. The person with a 9 Life Path is rarely prejudiced or accepts social biases of people. Instead, they evaluate people on the basis of what they can do for the larger cause. They are the true egalitarian.<br<br> <h2>You Bring Beauty To Your Surroundings</h2> <br><br> You are imaginative and creative, especially at harmoniously arranging the beauty already potential in the environment. These abilities can lead you into such fields as interior decorating, landscape art, and photography. But because of your strong social consciousness, you can be an effective politician, lawyer, judge, minister, teacher, healer, and environmentalist. Vocations that require self- sacrifice and have a clear social impact are common among 9s. ";
        var content11 = "<h2>The Healer</h2> <br><br> You know you’re different, you don’t need other people to tell you that. As a Life Path 11, life is filled with mysterious connections and experiences that just seem to <em>Pop Up</em>. You’re more intuitive, or sensitive, than other people you know.<br><br> You are here to help people heal in some capacity, and you may already be in a classical healing profession, but you may also help people through your art, words, or other creative outlets. You may find it deeply gratifying to tap into your spiritual side and allow your essence or gifts to be fully realized or expanded upon.<br><br> You may have found that your life sways from one intense situation to another. Although this can be draining at times, know that it provides you with a greater depth of experiences so you can grow faster. You are considered the <em>Wounded Healer</em>, someone who helps themselves by helping others.<br><br> Some of the careers that are best suited for Life Path 11’s all include positions where they are listening and working to improve a person’s life. For example: Minister, Psychologist, Teacher and Charity Worker.<br><br> Some of your fellow Life Path 11’s include: Michael Jordan, Bill Clinton, Prince William, David Beckham, Ronald Reagan, Wolfgang Amadeus Mozart, and Harry Houdini. <br><br> A word of caution: Be mindful not to allow your search for spiritual enlightenment overcome your life and close relationships. There have been many who feel they must go on an arduous journey of self-discovery only to realize that they didn’t need the journey’s harsh lessons in order to find what they were looking for. This self-imposed scenario could inadvertently lead to broken or damaged relationships with the friends and family members who could have been helpful or rewarding in the Life Path 11’s pursuit of enlightenment. <br><br> *Note: Most Life Path 11’s will also have some characteristics of a Life Path 2.";
        var content22 = "<h2>The Master Builder</h2> <br><br> The Life Path 22 is one of the most powerful and influential paths in numerology. Your own abilities may seem overwhelming at times, and difficult to manage, but learning to harness your gifts will allow you greater control over your destiny, and in some cases, the destiny of others. This may cause you to feel as though a heavy burden rests on your shoulders. Be careful not to take on too much at once. And at the same time, don’t be afraid to challenge yourself. <br><br> 22s are some of the biggest thinkers and innovators of our world and often use their big ideas to change lives, in some cases even inspiring hundreds if not millions through their voice, art, ideals, or strength of character. <br><br> If you embrace the catalyst that you can be, the impact you can potentially have on others is enormous. If you allow fear of your power to stifle you, it can spread like a weed and prevent you from reaching your true potential. Please don’t let this happen, the world needs all the 22’s to move us into a more enlightened tomorrow.<br><br> In many cases, the Life Path 22 gains full control over their abilities later in life when they are most open and accepting of their power, though a person with a strong sense of self can unlock these gifts at a comparatively young age. To give you an idea of what can be achieved when a Life Path 22 fully embraces their ability early on in life, we don’t have to look any further than the likes of Will Smith, Paul McCartney, the 14th Dalai Lama, Sir Richard Branson, and Tupac Shakur. <br><br> *Note: The Life Path 22 will also encompass the vibration and qualities of a Life Path 4. This will sometimes feel like a struggle since the 4 desires the stability and safety of a structured work environment. Learn to be flexible in your daily life. You have the power within to overcome adversity.";


        if (final_Output == 1) {
            document.getElementById('cntnt').innerHTML = content1;
        } else if (final_Output == 2) {
            document.getElementById('cntnt').innerHTML = content2;
        } else if (final_Output == 3) {
            document.getElementById('cntnt').innerHTML = content3;
        } else if (final_Output == 4) {
            document.getElementById('cntnt').innerHTML = content4;
        } else if (final_Output == 5) {
            document.getElementById('cntnt').innerHTML = content5;
        } else if (final_Output == 6) {
            document.getElementById('cntnt').innerHTML = content6;
        } else if (final_Output == 7) {
            document.getElementById('cntnt').innerHTML = content7;
        } else if (final_Output = 8) {
            document.getElementById('cntnt').innerHTML = content8;
        } else if (final_Output == 9) {
            document.getElementById('cntnt').innerHTML = content9;
        } else if (final_Output == 11) {
            document.getElementById('cntnt').innerHTML = content11;
        } else if (final_Output == 22) {
            document.getElementById('cntnt').innerHTML = content22;
        }

    });
});
document.addEventListener("DOMContentLoaded", function () {
    var resumeButton = createButton("Resume", "resumeButton");

    var mainContent = document.querySelector("main");
    var originalContent = mainContent.innerHTML;

    var isResumeDisplayed = false; // Track if resume content is displayed

    var navigation = document.querySelector(".navigation");
    navigation.appendChild(resumeButton);

    // Function to create a button
    function createButton(text, id) {
        var button = document.createElement("button");
        button.textContent = text;
        button.id = id;
        return button;
    }

    // Function to handle resume button click
    var originalContent = mainContent.innerHTML;
    resumeButton.addEventListener("click", function () {
        // Toggle between original content and "WIP" screen
        if (!isResumeDisplayed) {
            mainContent.innerHTML = `
                <h2>SUMMARY OF QUALIFICATIONS</h2>
                <ul>
                    <li>Developed strong data-analysis skills at Verto Health by automating data collection and analyzing databases to recommend solutions to stakeholders to reduce costs, increase customer satisfaction, and reduce inefficiencies</li>
                    <li>Strong verbal and non-verbal communication skills developed over 3 years of work experiences by assisting customers at Verto Health, working in large teams at Johnson & Johnson, and working in small and focused teams at YMCA</li>
                    <li>Strong collaboration skills developed through case competitions by working in small teams to solve and present problems</li>
                </ul>
                
                <h2>EDUCATION</h2>
                <p>Ted Roger School of Management • Toronto Metropolitan University September 2020 - Present</p>
                <p>Business Technology Management Co-op Program • Bachelor of Commerce • 3.4 CGPA</p>
                
                <h2>PROFESSIONAL EXPERIENCE</h2>
                <p>Business IT Analyst April 2023 – December 2023</p>
                <p>Verto Health</p>
                <ul>
                    <li>Lead the transition from Zendesk to Jira by analyzing data, creating new automated Python processes and Power Bi dashboards, ensuring a smooth data transition resulting in $60 000 saved annually and increased customer satisfaction</li>
                    <li>Utilized Python to automate weekly data-collection processes and analyze service tickets into Power Bi for comprehensive data analysis and generated detailed reports resulting in a total process time dropping from 1 hour to zero daily</li>
                    <li>Communicated efficiently with customers as a level 1 support agent, working with 20+ clients weekly to provide resolve issues and escalate complex issues to the appropriate agents for swift resolutions, decreasing average resolution time by 8%</li>
                    <li>Delivered monthly presentations in organization reports to the CFO and department heads by generating and analyzing reports to provide comprehensive overviews of key metrics such as monthly operating costs, SLA metrics, ROI, and profitability ratios assisting in decision making using Excel using macros, graphs, pivot tables, and VBA</li>
                </ul>
                
                <p>IT Operations Analyst April 2022 – January 2023</p>
                <p>Johnson & Johnson</p>
                <ul>
                    <li>Improved business decision making by creating and updating Power BI dashboards on both desktop and webapp for users in Canada, America, and Mexico to streamline communications resulting in more effective decision making</li>
                    <li>Developed Power Bi dashboards focusing on optimizing truck load efficiency by analyzing average truck empty space for consumer operations, minimizing shipments with empty space leading to a 4% decrease in transportation costs</li>
                    <li>Evaluated vendor performance by developing Power Bi dashboards and Power Automate flows to recommend the fastest vendor for critical deliveries decreasing delivery times by 14% and increasing customer satisfaction by 11%</li>
                    <li>Partnered with a third-party weather company to automate a system using Power Bi, Python, and Excel to send out email alerts to vendors informing them of the best time to place their orders in the case of inclement weather decreasing shipping delays by 35%</li>
                </ul>
                
                <p>Senior Camp Counselor July 2021 – August 2021</p>
                <p>YMCA Summer Day Camps</p>
                <ul>
                    <li>Worked closely with campers in groups of 10 to develop foster strong relationships built on trust and understanding and acted as a role model while ensuring campers enjoyed a variety of sports and arts over the course of the summer</li>
                    <li>Implemented daily schedules and supervised children in planned and spontaneous activities while enacting established rules to ensure campers respected camp regulations without interfering with the enjoyment of activities on a daily basis</li>
                </ul>
                
                <h2>TECHNICAL COMPETENCIES</h2>
                <ul>
                    <li>Microsoft Office: Word, Excel, PowerPoint, Teams</li>
                    <li>Excel: Pivot Tables, Gantt Charts, VBA, Macros</li>
                    <li>Programming Languages: Python, SQL, Java, HTML</li>
                    <li>Software: Power Bi, Tableau, SQL, Power Automate</li>
                </ul>
                
                <h2>LEADERSHIP EXPERIENCE</h2>
                <p>WITM BSBTM Case Competition Delegate November 2020</p>
                <ul>
                    <li>Designed a solution with 3 other teammates for RedHat to increase both profits and diversity in the workplace and then presented the solution to a panel of over 12 judges and received 4th place</li>
                </ul>
                <p>Deca Symcor Future of Business and Technology Case Competition Competitor February 2020</p>
                <ul>
                    <li>Collaborated with 3 other teammates on designing and presenting a solution to the University of Calgary’s cybersecurity hack and presented it to a panel of 6 judges</li>
                </ul>`;
            resumeButton.textContent = "Original"; // Change button text
            isResumeDisplayed = true;
        } else {
            mainContent.innerHTML = originalContent;
            resumeButton.textContent = "Resume"; // Change button text
            isResumeDisplayed = false;
        }
    });

    // Function to handle keyboard shortcuts
    document.addEventListener("keydown", function (event) {
        if (event.key === "r" || event.key === "R") {
            resumeButton.click();
        } else if (event.key === "d" || event.key === "D") {
            // Toggle dark mode on pressing D
            document.body.classList.toggle("dark-mode");
        } else if (event.key === "f" || event.key === "F") {
            // Increase font size on pressing F
            var currentFontSize = parseFloat(window.getComputedStyle(mainContent, null).getPropertyValue('font-size'));
            mainContent.style.fontSize = (currentFontSize + 2) + 'px';
        } else if (event.key === "g" || event.key === "G") {
            // Decrease font size on pressing G
            var currentFontSize = parseFloat(window.getComputedStyle(mainContent, null).getPropertyValue('font-size'));
            mainContent.style.fontSize = (currentFontSize - 2) + 'px';
        }
    });

    // Handling accessibility buttons within the dropdown
    var accessibilityButtons = document.querySelectorAll(".accessibility-content button");
    accessibilityButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Add functionality for accessibility buttons here
            if (button.id === "increaseFontButton") {
                var currentFontSize = parseFloat(window.getComputedStyle(mainContent, null).getPropertyValue('font-size'));
                mainContent.style.fontSize = (currentFontSize + 2) + 'px';
            } else if (button.id === "decreaseFontButton") {
                var currentFontSize = parseFloat(window.getComputedStyle(mainContent, null).getPropertyValue('font-size'));
                mainContent.style.fontSize = (currentFontSize - 2) + 'px';
            } else if (button.id === "darkModeButton") {
                document.body.classList.toggle("dark-mode");
            }
        });
    });

});

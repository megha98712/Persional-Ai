// ==========================================
// 1. EXTENSIVE DECENTRALIZED KNOWLEDGE CORE
// ==========================================
const personalDatabase = {
    profile: {
        name: "Megha Prajapati",
        profession: "Aspiring Cloud Engineer",
        target_platforms: ["AWS", "Google Cloud Platform (GCP)"],
        current_location: "Dahisar, Mumbai",
        core_tech_stack: ["React", "Firebase", "Node.js", "Tailwind CSS", "JavaScript"]
    },
    active_projects: {
        Agro_Soil_AI: "A high-end Smart Agriculture dashboard featuring real-time soil condition detection, predictive analytics, weather forecasting, and crop recommendation models.",
        VoteWise: "An election literacy portal built in May 2026, designed to guide voters through multi-step eligibility authentication, containing live countdown metrics.",
        Pharmacy_Management: "A multi-step registration system collecting user details and medicine orders, backed by a comprehensive monitoring dashboard built in April 2026."
    },
    academic_and_career_milestones: {
        current_status: "Completing undergraduate technical studies (Graduating Batch 2026).",
        tcs_recruitment: "Successfully cleared shortlisting and completed the intensive in-person interview loop for the TCS Smart Hiring track at the Thane Campus on March 13, 2026."
    }
};

// Global Tech Knowledge Database for General Queries (Without API Key)
const globalTechKnowledge = {
    aws_iam: `### AWS Identity and Access Management (IAM)
• Core Purpose: Securely control access to AWS services and resources.
• Key Concepts:
  - Users: Individual identities (e.g., Megha).
  - Groups: Collections of users under identical permissions.
  - Roles: Temporary identities assumable by services (like EC2) or users.
  - Policies: JSON documents defining explicit Allow/Deny parameters.`,
    
    cloud_computing: `### What is Cloud Computing?
It is the on-demand delivery of IT resources (compute, database storage, applications) over the internet with pay-as-you-go pricing. 
• Top Providers: Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure.
• Main Models: IaaS (EC2), PaaS (Elastic Beanstalk), SaaS (Google Workspace).`,

    react_hooks: `### React Hooks Cheat Sheet
1. useState: Manages local component state.
   const [data, setData] = useState(initialValue);
2. useEffect: Handles side-effects (API calls, subscriptions, DOM mutations).
   useEffect(() => { fetchData(); }, []); // Runs once on mount`,

    binary_search: `// Binary Search Implementation in JavaScript
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid; // Found element index
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1; // Element not found
}`
};

// ==========================================
// 2. INTENT CLASSIFICATION ENGINE (LOCAL NLP)
// ==========================================
function processLocalQuery(query) {
    const q = query.toLowerCase();

    // --- Personal Profile Scope ---
    if (q.includes("name") || q.includes("who are you") || q.includes("aapka naam")) {
        return `You are ${personalDatabase.profile.name}, an ${personalDatabase.profile.profession} based in ${personalDatabase.profile.current_location}.`;
    }
    if (q.includes("skill") || q.includes("tech stack") || q.includes("technologies")) {
        return `Your premium technical stack consists of: ${personalDatabase.profile.core_tech_stack.join(", ")}. Your core cloud targets are ${personalDatabase.profile.target_platforms.join(" and ")}.`;
    }
    if (q.includes("location") || q.includes("where do you live") || q.includes("rehti")) {
        return `According to internal records, you reside in ${personalDatabase.profile.current_location}.`;
    }

    // --- Projects Scope ---
    if (q.includes("agro") || q.includes("soil") || q.includes("agriculture")) {
        return `[Project Profile: Agro Soil AI]\n${personalDatabase.active_projects.Agro_Soil_AI}`;
    }
    if (q.includes("votewise") || q.includes("vote") || q.includes("election")) {
        return `[Project Profile: VoteWise]\n${personalDatabase.active_projects.VoteWise}`;
    }
    if (q.includes("pharmacy") || q.includes("medical")) {
        return `[Project Profile: Pharmacy Management]\n${personalDatabase.active_projects.Pharmacy_Management}`;
    }
    if (q.includes("project")) {
        return `You have engineered major scalable solutions:\n1. Agro Soil AI: ${personalDatabase.active_projects.Agro_Soil_AI}\n2. VoteWise: ${personalDatabase.active_projects.VoteWise}\n3. Pharmacy Management: ${personalDatabase.active_projects.Pharmacy_Management}`;
    }

    // --- Corporate Milestones Scope ---
    if (q.includes("tcs") || q.includes("interview") || q.includes("smart hiring") || q.includes("thane")) {
        return `[Milestone Log]\nStatus: ${personalDatabase.academic_and_career_milestones.tcs_recruitment}\nAcademic Track: ${personalDatabase.academic_and_career_milestones.current_status}`;
    }

    // --- Global Technical Intelligence Scope ---
    if (q.includes("iam") || q.includes("identity and access")) {
        return globalTechKnowledge.aws_iam;
    }
    if (q.includes("cloud") || q.includes("gcp") || q.includes("aws")) {
        return globalTechKnowledge.cloud_computing;
    }
    if (q.includes("hook") || q.includes("useeffect") || q.includes("usestate")) {
        return globalTechKnowledge.react_hooks;
    }
    if (q.includes("binary search") || q.includes("search algorithm") || q.includes("code")) {
        return globalTechKnowledge.binary_search;
    }

    // --- Conversational fallback standard logic ---
    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
        return `Hello Megha! Core systems initialized. Request an action or query your database logs.`;
    }
    if (q.includes("clear")) {
        return "System terminal clearance triggered.";
    }

    // --- Universal dynamic fallback system ---
    return `[Matrix Core Out-of-Scope Warning]
I found no strict rule matching "${query}" in local memory.
Since you are running in No-API Mode, please search for topics initialized in your system configuration like: 'Agro Soil AI', 'TCS Interview', 'AWS IAM', 'React Hooks', or 'Binary Search'.`;
}

// ==========================================
// 3. UI CONTROLLER & SIMULATION PIPELINE
// ==========================================
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');
const sendBtn = document.getElementById('sendBtn');

function displayMessage(message, type) {
    const bubble = document.createElement('div');
    bubble.classList.add('message', type);
    
    // Formatting pre/code syntax block outputs locally
    if (message.includes("```") || message.includes("//") || message.includes("###")) {
        const pre = document.createElement('pre');
        const code = document.createElement('code');
        code.innerText = message;
        pre.appendChild(code);
        bubble.appendChild(pre);
    } else {
        bubble.innerText = message;
    }

    chatBox.appendChild(bubble);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Submitting Execution Form
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const query = userInput.value.trim();
    if (!query) return;

    // View Update: User Output Interfaced
    displayMessage(query, 'user-message');
    userInput.value = '';

    // Simulate AI Computational Thinking Processing
    sendBtn.innerText = "Analyzing...";
    sendBtn.disabled = true;

    // Artificial delay to mimic LLM computational intelligence processing speed
    setTimeout(() => {
        if (query.toLowerCase() === 'clear') {
            chatBox.innerHTML = '<div class="message ai-message">System console logs wiped clean. Systems operating optimally.</div>';
        } else {
            const aiReply = processLocalQuery(query);
            displayMessage(aiReply, 'ai-message');
        }
        
        // Restore active responsive element interfaces
        sendBtn.innerText = "Execute";
        sendBtn.disabled = false;
    }, 600); // 600ms latency simulation delay
});
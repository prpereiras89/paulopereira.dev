import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Papers from "./papers";

class PublicationsPage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell
            className="publications-col"
            col={8}
            tablet={12}
            phone={12}
            style={{ margin: "auto", fontFamily: "Oxygen, sans-serif" }}
          >
            <h1 style={{ fontFamily: "Oxygen, sans-serif" }}>
              Scientific Publications
            </h1>
            <h3 style={{ fontFamily: "Oxygen, sans-serif" }}>Journals</h3>
            {/** Journals*/}
            <Papers
              year={2022}
              title={
                "Availability model for edge-fog-cloud continuum: an evaluation of an end-to-end infrastructure of intelligent traffic management service"
              }
              link={
                "https://link.springer.com/article/10.1007/s11227-021-04033-7"
              }
              metaData={"The Journal of Supercomputing"}
              abstract={
                "Our world is being transformed by connectivity and technology as time goes by, which requires continuous improvement of quality of service (QoS) levels in the systems. Currently, many emerging technologies demand latency-aware networks for real-time data processing, and we are becoming more dependent on those technologies day by day. Cloud computing environments provide high availability, reliability, and performance; however, cloud computing may not be suitable for latency-sensitive applications, such as disaster risk minimization, intelligent traffic management, and crime prevention, for instance. Two complementary paradigms, namely edge and fog computing, have been proposed to overcome the latency issues and increase the computing power between the cloud and edge devices (e.g., controllers, sensors, and smartphones). However, evaluating availability aspects is still a significant concern in those distributed computing environments since many challenges must be faced to guarantee the required QoS for those systems. Therefore, this study addresses the edge-fog-cloud continuum’s availability, where we propose a hierarchical availability model using fault tree and Markov chains. Also, we propose analytical availability models for the components in our environment, which may be used to support scalability and capacity planning of edge, fog, and cloud computing environments. Using our proposed hierarchical model, we investigated several scenarios to improve the system’s availability. In one of the case studies, we could investigate how to improve the availability of a baseline intelligent traffic management infrastructure, which was 98.47%, and we improved to 99.91%."
              }
            />

            <Papers
              year={2022}
              title={
                "Availability evaluation of system service hosted in private cloud computing through hierarchical modeling process"
              }
              link={
                "https://link.springer.com/article/10.1007/s11227-021-04217-1"
              }
              metaData={"The Journal of Supercomputing"}
              abstract={
                "Cloud computing provides an abstraction of the physical tiers, allowing a sense of infinite resources. However, the physical resources are not unlimited and need to be used more assertively. The challenge of cloud computing is to improve the use of resources without jeopardizing the availability of environments. Stochastic models can efficiently evaluate cloud computing systems, which is needed for proper capacity planning. This paper proposes an availability evaluation from a system hosted on a private cloud. To achieve this goal, we created hierarchical models to represent the studied environment. Sensitivity analysis is performed to identify the most influential parameters and components that must be compatible with improving system availability. A case study supports the demonstration of the accuracy and utility of our methodology. We propose structural changes in the environment using different redundancies in the components to obtain satisfactory results. Finally, we analyze scenarios regarding DC’s redundancy."
              }
            />
            
            <Papers
              year={2022}
              title={
                "Performance and availability evaluation of the blockchain platform hyperledger fabric"
              }
              link={
                "https://link.springer.com/article/10.1007/s11227-022-04361-2"
              }
              metaData={"The Journal of Supercomputing"}
              abstract={
                "Through the blockchain-as-a-service paradigm, one can provide the infrastructure required to host blockchain-based applications regarding performance and dependability-related attributes. Many works evaluated issues and mitigated them to reach a high throughput or better downtime and availability indexes. However, to the best of our acknowledgment, studies regarding both characteristics are yet to be performed. This paper presents a performance evaluation of a private infrastructure hosting a blockchain-based application. As we monitored the system, we noticed some increase in resource consumption that may be associated with software aging issues on the hyperledger fabric platform or its basic components. Also, the impact of this resource increment on the probability of the system being operational has been evaluated. When consumption issues were considered, one of the transaction types increased the RAM consumption by almost 80% in less than 3 h, reducing the system availability to 98.17%. For scenarios without resource increment issues on the infrastructure, the availability reached 99.35%, with an annual downtime of 56.43 h."
              }
            />
            
            <Papers
              year={2022}
              title={
                "A model-based approach for planning blockchain service provisioning"
              }
              link={
                "https://link.springer.com/article/10.1007/s00607-021-00956-4"
              }
              metaData={"Computing"}
              abstract={
                "Recently, the blockchain-as-a-service paradigm arose, and many works have evaluated the performance issues related to it. However, not as much has been done regarding Dependability attributes, which have ever been a crucial topic on service provisioning, let it be either public or private infrastructures. This paper presents the blockchain provisioning planning tool (BPPT), a framework to evaluate the availability, deployment, and maintenance costs of Hyperledger Fabric-based applications over private computational infrastructures. The BPPT uses continuous time markov chain (CTMC) and reliability block diagram (RBD) models as an evaluation method of Hyperledger Fabric’s environments and determines distributed applications’ deployment feasibility and endorsement policies related to the platform. We also present case studies that may help those interested in paradigm changes to decide whether they should migrate from old to new technology. Some of the obtained results pointed-out that the AND endorsement, which requires that all nodes sign the authenticity of a transaction, has the highest deployment and maintenance costs, as well as the lowest availability values due to operational requirements, already an OR endorsement, which needs that at least one available node signs the transaction, provides the best relationship between the evaluated metrics. The KooN endorsement (that requires that K out of N nodes signs a transaction authenticity) is a more general model that supports analyzing midterm configurations, besides the two extreme configurations, that is, to AND and OR arrangements."
              }
            />

            <Papers
              year={2021}
              title={
                "Analytical models for availability evaluation of edge and fog computing nodes"
              }
              link={
                "https://link.springer.com/article/10.1007/s11227-021-03672-0"
              }
              metaData={"The Journal of Supercomputing"}
              abstract={
                "Although cloud computing environments increase availability, reliability, and performance, many emerging technologies demand latency-aware networks for real-time data processing. For instance, the Internet of Things environments are composed of many connected devices that generate data for applications, where many of them are latency-sensitive, such as facial recognition security systems in airports or train stations. To overcome the latency of the cloud infrastructure, researchers introduced the edge and fog computing paradigms in order to increase computing power between the cloud and devices. In this study, we propose analytical availability models; also, we evaluate the availability of physical edge and fog nodes running applications. To finish, we perform a capacity-oriented availability and a cost evaluation comparing edge and fog environments. Some of the results show that we can improve the availability from 2.96 number of nines to 5.93, by using our analytical models to plan the infrastructure. These models aim at supporting engineers and analysts to plan fault-tolerant edge and fog environments."
              }
            />
            
            <Papers
              year={2021}
              title={
                "A methodology for selecting hardware performance counters for supporting non-intrusive diagnostic of flood DDoS attacks on web servers"
              }
              link={
                "https://www.sciencedirect.com/science/article/pii/S0167404821002583"
              }
              metaData={"Computers & Security"}
              abstract={
                "Web server outages caused by a Distributed Denial of Service (DDoS) attacks have increased considerably over the years. Intrusion Detection Systems (IDS) are not sufficient to detect threats in the system, even when used in conjunction with Intrusion Prevention Systems (IPS) and even considering the use of data sets containing information about typical situations and attacks on the system’s service. Performing analyzes with a very dense amount of observed variables can cost a significant amount of host resources. Furthermore, these data sets are at risk of not representing the system’s behavior properly, and they cannot always be shared as they may contain confidential information in the diagnostic data. This paper presents a non-intrusive diagnostic methodology to select hardware performance counters in HTTP flood DDoS attacks on enterprise-level web servers, combining methods and techniques from different segments. The proposed approach uses low-level resource appliances such as Hardware Performance Counters (HPCs) for diagnosis, creating behavioral profiles in the face of attacks and usual service usage. The proposed strategy supports delivering reliable diagnoses with accurate characterization without third-party data sets. With the proposed methodology, we were able to reduce HPCs by 26%, compared to the initial group."
              }
            />

            <Papers
              year={2021}
              title={
                "A survey on reliability and availability modeling of edge, fog, and cloud computing"
              }
              link={
                "https://link.springer.com/article/10.1007/s40860-021-00154-1"
              }
              metaData={"Journal of Reliable Intelligent Environments"}
              abstract={
                "During the past years, sending data to the cloud servers was a prominent trend, making the cloud computing paradigm dominate the technology landscape. However, the internet of things (IoT) is becoming a part of our daily environments, and it generates a large volume of data, which is creating uncontrollable delays. For the delay-sensitive and context-aware services, these uncontrollable delays may cause low reliability and availability for applications. To overcome these challenges, computing paradigms are moving from centralized cloud environments to the Edge of the networks. Several new computing paradigms, such as Edge and Fog computing, emerged to support delay-sensitive and context-aware services. By combining edge devices, fog servers, and cloud computing, companies can build a hierarchical IoT infrastructure, using Edge–Fog–Cloud orchestrated architecture to improve IoT environments’ performance, reliability, and availability. This paper presents a comprehensive survey on reliability and availability of Edge, Fog, and Cloud computing architectures. We first introduce and compare some related works about these paradigms and compare them to define the differences between Edge and Fog environments, since there is still some confusion about these terms. We also describe their taxonomy and how they link to each other. Finally, we draw some potential research directions that may help foster research efforts in this area."
              }
            />

            <Papers
              year={2021}
              title={
                "Impact evaluation of DDoS and Malware attack using IoT devices"
              }
              link={
                "https://www.degruyter.com/document/doi/10.1515/9783110619751/html?lang=en"
              }
              metaData={"De Gruyter"}
              abstract={
                "Distributed denial-of-service (DDoS) attacks deny access to infrastructures of service providers. These attacks can arise anytime, anywhere, and with little or no warning at all. Most of the small and medium businesses (SMBs) are not able to handle a significant outage, which may be fatal for the companies. These attacks generate damage to enterprises due to service provisioning interruption, which increases the chances of financial losses, and the system’s unavailability. Therefore, to overcome these issues, the companies must possess a bandwidth higher than the attacker, redundant components in their infrastructure, regular backups, firewalls, other proactive and reactive mechanisms for threat monitoring. This chapter explores DDoS and Malware attacks that employ the Internet of Things (IoT) devices. Hierarchical modeling is commonly used to evaluate the availability of such systems. This chapter also assesses the DDoS attack impacts and Malware in IoT devices. It was proposed models based on attack trees that produce the system and components behavior to determine the DDoS and Malware attack effects on system availability; still, it was verified metrics of interest as the likelihood of an attack, attacker benefit, feasibility, and pain factor. The attack tree indicators show the impact of the concurrent attacks using vulnerable IoT devices on a computer system, which can cause a system’s downtime. Using the attack tree analysis, we allow planning and improving the system’s availability, maintainability, and reliability."
              }
            />

            <Papers
              year={2021}
              title={
                "Distributed application provisioning over Ethereum-based private and permissioned blockchain: availability modeling, capacity, and costs planning"
              }
              link={
                "https://link.springer.com/article/10.1007/s11227-020-03617-z"
              }
              metaData={"The Journal of Supercomputing"}
              abstract={
                "Blockchain and cloud computing are two of the main topics related to the distributed computing paradigm, and in the last decade, they have seen exponential growth in their adoption. Cloud computing has long been established as the main mechanism to test, develop, and deliver new applications and services in a distributed manner across the World Wide Web. Large data centers host many services and store petabytes of user data. Infrastructure and services owners rule the access to data and may even be able to change contents and attest to its veracity. Blockchain is a step towards a future where the user’s data are considered safer, besides being public. Advances in blockchain-based technologies, now, support service provisioning over permissioned and private infrastructures. Therefore, organizations or groups of individuals may share information, service even if they do not trust each other, besides supporting infrastructure management tasks. This paper presents and evaluates models for assessing the availability and capacity-oriented availability of cloud computing infrastructures. It aims at running blockchain’s distributed applications based on the Ethereum blockchain platform and the required expenses to perform service delivery in public and private infrastructures. Most of the obtained results also apply to other blockchains-based platforms."
              }
            />

            <Papers
              year={2020}
              title={
                "Dependability Impact in the Smart Solar Power Systems: An Analysis of Smart Buildings"
              }
              link={
                "https://www.mdpi.com/1996-1073/14/1/124"
              }
              metaData={"Energies"}
              abstract={
                "The Internet has been going through significant transformations and changing the world around us. We can also see the Internet to be used in many areas, for innumerable purposes, and, currently, it is even used by objects. This evolution leads to the Internet of Things (IoT) paradigm. This new concept can be defined as a system composed of storage resources, sensor devices, controllers, applications, and network infrastructure, in order to provide specific services to its users. Since IoT comprises heterogeneous components, the creation of these systems, the communication, and maintenance of their components became a complex task. In this paper, we present a dependability model to evaluate an IoT system. Amid different systems, we chose to assess availability in a smart building. The proposed models allow us to calculate estimations of other measures besides steady-state availability, such as reliability. Thus, it was possible to notice that there was no considerable gain of availability in the system when applying grid-tie solar power or off-grid solar power. The grid-tie solar power system is cheaper than the off-grid solar power system, even though it produces more energy. However, in our research, we were able to observe that the off-grid solar power system recovers the applied financial investment in smaller interval of time."
              }
            />

            <Papers
              year={2020}
              title={
                "Stochastic performance model for web server capacity planning in fog computing"
              }
              link={
                "https://link.springer.com/content/pdf/10.1007/s11227-020-03218-w.pdf"
              }
              metaData={"The Journal of Supercomputing"}
              abstract={
                "Cloud computing is attractive mostly because it allows companies to increase and decrease available resources, which makes them seem limitless. Although cloud computing has many advantages, there are still several issues such as unpredictable latency and no mobility support. To overcome these problems, fog computing extends communication, storage, and computation toward the edge of network. Therefore, fog computing may support delay-sensitive applications, which means that the application latency from end users can be improved, and it also decreases energy consumption and traffic congestion. The demand for performance, availability, and reliability in computational systems grows every day. To optimize these features, it is necessary to improve the resource utilization such as CPU, network bandwidth, memory, and storage. Although fog computing extends the cloud computing resources and improves the quality of service, executing capacity planning is an effective approach to arranging a deterministic process for web-related activities, and it is one of the approaches of optimizing web performance. The goal of capacity planning in fog computing is preparing the system for an incoming workload, so we are able to optimize the system’s utilization while minimizing the total task execution time, which happens before sending the load toward the cloud environment or not sending it at all. In this paper, we evaluate the performance of a web server running in a fog environment. We also use QoS metrics to plan its capacity. We proposed performance closed-form equations extracted from a continuous-time Markov chain model of the system."
              }
            />

            <Papers
              year={2019}
              title={
                "Feature Learning with Multi-objective Evolutionary Computation in the generation of Acoustic Features"
              }
              link={
                "https://journal.iberamia.org/index.php/intartif/article/view/276"
              }
              metaData={"Inteligencia Artificial (Ed. IBERAMIA)"}
              abstract={
                "Choosing audio features has been a very interesting theme for audio classification experts. They have seen that this process is probably the most important effort to solve the classification problem. In this sense, there are techniques of Feature Learning for generate new features more suitable for classification model than conventional features. However, these techniques generally do not depend on knowledge domain and they can apply in various types of raw data. However, less agnostic approaches learn a type of knowledge restricted to the area studded. The audio data requires a specific knowledge type. There are many techniques that seek to improve the performance of the new generation of acoustic features, among which stands the technique that use evolutionary algorithms to explore analytical space of function. However, the efforts made leave opportunities for improvement. The purpose of this work is to propose and evaluate a multi-objective alternative to the exploitation of analytical audio features. In addition, experiments were arranged to be validated the method, with the help a computational prototype that implemented the proposed solution. After it was found the effectiveness of the model and ensuring that there is still opportunity for improvement in the chosen segment."
              }
            />

            <Papers
              year={2019}
              title={
                "Models to evaluate service Provisioning over Cloud Computing Environments - A Blockchain-As-A-Service case study"
              }
              link={
                "https://www.seer.ufrgs.br/rita/article/view/RITA_VOL26_NR3_65"
              }
              metaData={"RITA - Revista de Informática Teórica e Aplicada"}
              abstract={
                "The strictness of the Service Level Agreements(SLAs) is mainly due toa set of constraints related to performance and dependability attributes, such as availability. This paper shows that system’s availability values may be improved by deploying services over a private environment, which may obtain better availability values with improved management, security, and control. However, how much a company needs to afford to keep this improved availability? As an additional activity, this paper compares the obtained availability values with the infrastructure deployment expenses and establishes a cost × benefit relationship. As for the system’s evaluation technique, we choose modeling; while for the service used to demonstrate the models’ feasibility, the blockchain-as-a-service was the selected one. This paper proposes and evaluate four different infrastructures hosting blockchains: (i) baseline; (ii) double redundant; (iii) triple redundant, and (iv) hyper-converged. The obtained results pointed out that the hyper-converged architecture had an advantage over a full triple redundant environment regarding availability and deployment cost."
              }
            />
            <h3 style={{ fontFamily: "Oxygen, sans-serif" }}>Conference</h3>
            {/** Conference*/}
            <Papers
              year={2021}
              title={
                "Impact Evaluation of DDoS Attacks Using IoT Devices"
              }
              link={"https://ieeexplore.ieee.org/abstract/document/9447145/"}
              metaData={
                "2021 IEEE International Systems Conference (SysCon)"
              }
              abstract={
                "Distributed Denial-of-Service (DDoS) attacks can occur anytime, everywhere, and most normally occur with little or no warning. Most small and medium businesses (SMBs) usually are not prepared to deal with this type of attack. The companies must have at least a bandwidth higher than the attack, an infrastructure with redundant components, regular backups, and firewalls capable of monitoring the threats. Otherwise, the services provided by the companies' support can be interrupted, increasing the chances of financial losses. Hierarchical modeling approaches are often used to evaluate the availability of such systems. It can represent different failures and repair events in distinct parts of the system. In this way, this paper proposes hierarchical models that describe the behavior of major IT systems and IoT device components and assess the DDoS effects on system availability. Therefore, we evaluate the impact of the DDoS attacks on computing systems using IoT devices in attack amplification. We assessed equations that estimate the attack feasibility, pain factor, attack propensity, attacker benefits, and technical ability. They enable a direct analytical solution for large systems. The attack tree indices show the impact of simultaneous attacks on a computer system and the several threats that will maximize the system downtime. The attack tree investigation results allow for planning and improving the system's availability, maintainability, and reliability."
              }
            />

            <Papers
              year={2021}
              title={
                "A software maintenance methodology: An approach applied to software aging"
              }
              link={"https://ieeexplore.ieee.org/abstract/document/9447082/"}
              metaData={
                "2021 IEEE International Systems Conference (SysCon)"
              }
              abstract={
                "The increasing use of computational systems has highlighted concerns about attributes that may influence the quality of service, such as performance, availability, reliability, and maintenance capacity. Failures in the software development process may impact these attributes. Flawed code and overall software misdesign may cause internal errors, leading to system malfunction. Some errors might be identified and fixed during the software testing process. However, other errors may manifest only during the production stage. This is the case of the software aging phenomenon, which is related to the progressive degradation that a software performance or reliability suffers during its operational life. This paper proposes a methodology for software maintenance that is tailored to identify, correct, and mitigate the software aging effects. If the source code can be modified and a new version deployed with minimal impact, thus data from aging detection is used for corrective maintenance, i.e., for fixing the bug that causes the aging effects. If the software cannot be fixed nor its version updated without long system interruption or other bad consequences, then our approach can mitigate the aging effects, in a preventive maintenance to avoid service outages. The proposed methodology is validated through both Stochastic Petri Net (SPN) models and experiments in a controlled environment. The model evaluation considering a hybrid maintenance routine (preventive and corrective) yielded an availability of 99.82%, representing an annual downtime of 15.9 hours. By contrast, the baseline scenario containing only reactive maintenance (i.e., repairing only after failure) had more than 1342 hours of annual downtime- 80 times higher than the proposed approach."
              }
            />

            <div id="hybrid-paper">
              <Papers
                year={2019}
                title={
                  "A Hybrid Mechanism of Horizontal Auto-scaling Based on Thresholds and Time Series"
                }
                link={"https://ieeexplore.ieee.org/abstract/document/8914522/"}
                metaData={
                  "2019 IEEE International Conference on Systems, Man and Cybernetics (SMC)"
                }
                abstract={
                  "Demand for performance, availability, and reliability in computational systems has increased lately. Improving these aspects is an important research challenge due to the applications and users diversity. In this paper, we propose a hybrid auto-scaling approach that uses reactive and proactive solutions. We focus on the operation of a Web server, where we applied the characteristic of CPU-bound in the application. The approach proposed is a CPU usage monitor and auto-scaling management that is used to improve the system's throughput and reduce the CPU idle time. Our proposal is implemented using triggering thresholds and five forecasting models: Drift, Simple Exponential Smoothing, Holt, Holt-Winters and ARIMA. The main goal of this research is to achieve a better QoS related to the cloud computing environment. One of the obtained results shows that our method represents a throughput improvement of 12.11% by using our proposal, instead of only using a threshold-based technique."
                }
              />
            </div>

            <Papers
              year={2019}
              title={
                "Dependability Evaluation of an IoT System: A Hierarchical Modelling Approach"
              }
              link={"https://ieeexplore.ieee.org/abstract/document/8914032/"}
              metaData={
                "2019 IEEE International Conference on Systems, Man and Cybernetics (SMC)"
              }
              abstract={
                "Internet of Things (IoT) is a network of physical objects equipped with embedded technology, sensors, and connection to the network (e.g. vehicles, buildings, and others). These physical objects are able to collect data that will be used by various applications. Currently, there are already various applications in IoT such as smart agriculture and smart parking. These applications are composed by a set of heterogeneous components, so tasks such as resource management and maintenance of these systems become complex. Therefore, this paper presents a modeling strategy based on hierarchical models using Stochastic Petri Net (SPN) and Reliability Block Diagram (RBD). In order to evaluate the dependability in an IoT system, a case study was carried out based on a specific scenario considering a smart building. The proposed models enable to estimate measures such as steady-state availability and annual downtime."
              }
            />
            <Papers
              year={2019}
              title={
                "Blockchain provisioning over private cloud computing environments: Availability modeling and cost requirements"
              }
              link={"https://ieeexplore.ieee.org/abstract/document/9064125/"}
              metaData={
                "2019 IEEE 8th International Conference on Cloud Networking (CloudNet)"
              }
              abstract={
                "This paper proposes and evaluates availability models for blockchain provisioning over cloud computing infrastructures as well as their respective deployment expenses in order to establish a cost × benefit relationship. To demonstrate these models' feasibility, we provide two case studies considering blockchain provisioning over a baseline architecture, and three other alternative redundant environments."
              }
            />
            <div id="predictor">
              <Papers
                year={2018}
                title={
                  "Software Rejuvenation in Computer Systems: An Automatic Forecasting Approach Based on Time Series"
                }
                link={"https://ieeexplore.ieee.org/abstract/document/8711347"}
                metaData={
                  "2018 IEEE 37th International Performance Computing and Communications Conference (IPCCC)"
                }
                abstract={
                  "Distributed computing is bringing many advantages in cost, flexibility and availability. However, it increases the demand for performance and reliability. Resources such as CPU, memory, storage and network bandwidth, are very susceptible of presenting software aging issues. Therefore, proactive actions, also known as software rejuvenation must be performed to avoid these issues. The identification of the best moment to perform software rejuvenation is not a simple task, mostly because it may affect the system's availability and reliability. To overcome this problem, we propose an automatic forecasting strategy to support the system administrators to choose the best moment to perform software rejuvenation. Our strategy uses six time series techniques: Drift, Simple Exponential Smoothing, Holt, Holt-Winters, Linear Regression, and ARIMA. In our proposal, the most suitable one is chosen automatically as the best fit for a particular scenario. Three case studies were performed to evaluate the efficiency of our automatic strategy. Our proposal aims to increase the system's availability while decreasing the QoS violation probability. In one of our experiments, we can observe a reduction of 92.3% in the system's downtime. This research supports decision making activities and opens possibilities to foster the usage of forecasting strategies when dealing with software aging phenomenon."
                }
              />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default PublicationsPage;

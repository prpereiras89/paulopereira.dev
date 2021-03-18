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

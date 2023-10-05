const Wrapper = styled.div`
  height: 100vh;
  margin-top: var(--header-height);
  background-color: var(--light-color);
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--light-color);
  padding-bottom: 80px;
  padding: 40px;
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #1b856b;
`;

const Subtitle = styled.h3`
  margin-top: 10px;
`;

const Subtext = styled.h3`
  margin-top: 10px;
  font-size: 16px;
`;

const Header = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

const FormLabel = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
`;

const TextInput = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: var(--dark-color);
  margin-top: 20px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
    color: #111;
  }
`;

State.init({
  description: "",
  forWho: "",
  byWho: "",
  status: "",
  contact: "",
  needs: "",
});

function handleSubmit() {
  Social.set(
    {
      thing: {
        libertydaoInitative: {
          "": JSON.stringify(state),
        },
      },
    },
    {
      onCommit: () => {
        State.update({
          description: "",
          forWho: "",
          byWho: "",
          status: "",
          contact: "",
          needs: "",
        });
      },
      onCancel: () => {
        State.update({
          description: "",
          forWho: "",
          byWho: "",
          status: "",
          contact: "",
          needs: "",
        });
      },
    }
  );
}

return (
  <Wrapper className="row">
    <div className="col">
      <Container>
        <Header>
          <Title>Hello! And thanks for helping us to Activate Liberty!</Title>
          <Subtitle>
            As with any other accomplishment, this doesn’t come without
            consensus, And that doesn’t come without input. So we are enormously
            grateful for Every suggestion and addition to our network and data
            citizens projects.
          </Subtitle>
          <Subtext>But this is only the beginning!</Subtext>
          <Subtext>
            We need to hear the voices of the city to know what projects are
            needed next! Tell us below what needs or initiatives you see, and
            what we can make possible.
          </Subtext>
          <Subtext>Fill in whatever blanks you can, And Thank you!</Subtext>
        </Header>

        <FormLabel>Description:</FormLabel>
        <TextInput
          type="text"
          value={state.description}
          onChange={(e) => State.update({ description: e.target.value })}
        />

        <FormLabel>For Who:</FormLabel>
        <TextInput
          type="text"
          value={state.forWho}
          onChange={(e) => State.update({ forWho: e.target.value })}
        />

        <FormLabel>By Who:</FormLabel>
        <TextInput
          type="text"
          value={state.byWho}
          onChange={(e) => State.update({ byWho: e.target.value })}
        />

        <FormLabel>Status:</FormLabel>
        <TextInput
          type="text"
          value={state.status}
          onChange={(e) => State.update({ status: e.target.value })}
        />

        <FormLabel>Needs:</FormLabel>
        <TextInput
          type="text"
          value={state.needs}
          onChange={(e) => State.update({ needs: e.target.value })}
        />

        <FormLabel>Contact:</FormLabel>
        <TextInput
          type="text"
          value={state.contact}
          onChange={(e) => State.update({ contact: e.target.value })}
        />

        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        <Subtext>
          If you are not logged in, send us a screenshot of the form{" "}
          <a href="mailto:newlibertysystems@gmail.com?subject=Suggested Addition to Projects Catalogue&body=[Title]  [Description]   [Additional Notes]">
            here.
          </a>
        </Subtext>
      </Container>
    </div>
  </Wrapper>
);

// const { Feed } = VM.require("efiz.near/widget/Module.Feed");
// Feed = Feed || (() => <></>);

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   margin-top: var(--header-height);
//   background-color: var(--light-color);

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// return (
//   <Container>
//     <div style={{ maxWidth: "800px" }}>
//       <Widget
//         src="libertydao.near/widget/initiatives.compose"
//         props={{
//           index: {
//             thing: JSON.stringify([
//               {
//                 key: "libertydaoinitiatives",
//                 value: {
//                   type: "md",
//                 },
//               },
//             ]),
//           },
//         }}
//       />
//       <Feed
//         index={[
//           {
//             action: "thing",
//             key: "libertydaoinitiatives",
//             options: {
//               limit: 10,
//               order: "desc",
//               accountId: props.accounts,
//             },
//             cacheOptions: {
//               ignoreCache: true,
//             },
//           },
//         ]}
//         Item={(p) => (
//           <Widget
//             loading={<div className="w-100" style={{ height: "200px" }} />}
//             src="libertydao.near/widget/initiatives.post"
//             props={{ accountId: p.accountId, blockHeight: p.blockHeight }}
//           />
//         )}
//       />
//     </div>
//   </Container>
// );

// const Column = styled.div`
//   flex: 1;
//   padding: 20px;
// `;

// const Card = styled.div`
//   padding: 20px;
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;

//   @media (min-width: 769px) and (max-width: 1024px) {
//     flex-direction: column;
//   }
// `;

// const Icon = styled.i`
//   font-size: 24px;
//   margin-right: 20px;

//   @media (min-width: 769px) and (max-width: 1024px) {
//     margin-right: 0;
//     margin-bottom: 10px;
//   }
// `;

// const Title = styled.h3``;

// const VerticalDivider = styled.div`
//   width: 1px;
//   height: 100%;
//   background-color: #000;

//   @media (max-width: 768px) {
//     height: 1px;
//     width: 100%;
//   }
// `;

// const HorizontalDivider = styled.div`
//   width: 100%;
//   height: 1px;
//   background-color: #000;

//   @media (min-width: 769px) {
//     display: none;
//   }
// `;

// const ColumnTitle = styled.h2`
//   margin-bottom: 20px;
// `;

// const CardItem = ({ iconClass, title }) => (
//   <Card className="l__card">
//     <Icon className={iconClass}></Icon>
//     <Title>{title}</Title>
//   </Card>
// );

// return (
//   <Container>
//     <Column>
//       <ColumnTitle>Actions</ColumnTitle>
//       <CardItem iconClass="bi bi-brush" title="Painting" />
//       <CardItem iconClass="bi bi-music-note-beamed" title="Singing" />
//     </Column>
//     <VerticalDivider />
//     <Column>
//       <ColumnTitle>Disciplines</ColumnTitle>
//       <CardItem iconClass="bi bi-book" title="Philosophy" />
//       <CardItem iconClass="bi bi-gear" title="Engineering" />
//     </Column>
//     <VerticalDivider />
//     <Column>
//       <ColumnTitle>Objects</ColumnTitle>
//       <CardItem iconClass="bi bi-book-half" title="Books" />
//       <CardItem iconClass="bi bi-laptop" title="Computers" />
//     </Column>
//   </Container>
// );

// const accountId = props.accountId ?? context.accountId;
// const groupId = props.groupId ?? "f8ad9d1a76259lmdpjnd74e69162a0a014";
// const creatorId = props.creatorId ?? "hack.near";

// // We get all of the groups that have been indexed
// const groups = Social.index("every", "group", { limit: 10 });

// // TODO: We can put an infinite scroll for groups
// // And then we could do a Social.get([...groups]) constructed from each index

// if (!groups) {
//   return "";
// }

// // we check if they are a member ? Do we need this here?
// // Ohhhh you join everyone
// const isMember = Social.keys(
//   `${accountId}/graph/${groupId}/${accountId}`,
//   undefined,
//   {
//     values_only: true,
//   }
// );

// const type = join ? "leave" : "join";

// const handleJoin = () => {
//   Social.set({
//     graph: { [groupId]: { [accountId]: "" } },
//     index: {
//       graph: JSON.stringify({
//         key: groupId,
//         value: {
//           type,
//           accountId,
//         },
//       }),
//       notify: JSON.stringify({
//         key: creatorId, // in that case, who should the creator be?
//         value: {
//           type,
//           accountId,
//           message: "everyone is growing!",
//         },
//       }),
//     },
//   });
// };

// const GroupCard = styled.div`
//   flex-basis: calc(33.33% - 20px);
//   margin: 0;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 10px;

//   @media (hover: none) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

// const { Feed } = VM.require("efiz.near/widget/Module.Feed");
// Feed = Feed || (() => <></>);

// const Header = styled.div`
//   background: black;
// `;

// const Container = styled.div`
//   margin: 0;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 100%;
//   flex: 1;
//   height: 100vh;
//   margin-top: var(--header-height);
//   background-color: var(--light-color);
// `;

// const ActivityContainer = styled.div`
//   overflow-y: scroll;
// `;

// const Left = styled.div`
//   padding: 20px;
//   background: #f8f8f9;
//   flex: 3;
// `;

// const Center = styled.div`
//   flex: 9;
// `;

// const H5 = styled.h5`
//   margin-bottom: 20px;
// `;

// const Title = styled.h2`
//   margin: 20px 0;
// `;

// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   padding: 20px;
// `;

// return (
//   <Container>
//     <Center>
//       {state.groupId && state.creatorId ? (
// <Widget
//   src={"libertydao.near/widget/initiatives.page"}
//   props={{
//     creatorId: state.creatorId,
//     groupId: state.groupId,
//   }}
// />
//       ) : (
//         <CardWrapper>
//           <Feed
//             index={{
//               action: "every",
//               key: "group",
//               options: {
//                 limit: 10,
//                 order: "desc",
//                 accountId: undefined,
//               },
//             }}
//             Item={(p) => {
//               return (
//                 <Widget
//                   key={p}
//                   src={"libertydao.near/widget/initiatives.card"}
//                   props={{
//                     creatorId: p.accountId,
//                     groupId: p.value.id,
//                     onClick: () =>
//                       State.update({
//                         creatorId: p.accountId,
//                         groupId: p.value.id,
//                       }),
//                   }}
//                 />
//               );
//             }}
//             Layout={Grid}
//           />
//         </CardWrapper>
//       )}
//     </Center>
//     {state.showModal && (
//       <Widget
//         src={"libertydao.near/widget/initiatives.create"}
//         props={{
//           handleClose: () => State.update({ showModal: false }),
//         }}
//       />
//     )}
//   </Container>
// );

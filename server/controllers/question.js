import questionRaw from '../data/question';
import { omitProps } from '../utils';

const questions = JSON.parse(questionRaw);

export default {
  createQuestion(req, res) {
    const { title, body } = req.body;
    if (!title || !body) {
      res.status(400)
        .send({
          status: 400,
          error: 'The title and body field is required'
        });
    } else {
      // Random primary key values
      const userId = 1;
      const meetupId = 1;

      const lastId = questions[questions.length - 1].id;

      questions.push({
        id: lastId + 1,
        createdOn: new Date(),
        createdBy: userId,
        meetup: meetupId,
        title,
        body,
        votes: 0
      });

      res.status(201)
        .send({
          status: 201,
          data: [{
            user: userId,
            meetup: meetupId,
            title,
            body
          }]
        });
    }
  },

  upvoteQuestion(req, res) {
    let question = questions.filter(q => String(q.id) === req.params.id)[0];

    if (!question) {
      res.status(404).send({
        status: 404,
        error: `The question with the id: ${req.params.id} does not exist`
      });
    } else {
      question.votes += 1;
      questions.forEach((q) => {
        if (q.id === question.id) {
          q = question;
        }
      });

      question = omitProps(question, ['id', 'createdOn', 'createdBy']);

      res.status(200).send({
        status: 200,
        data: [
          question
        ]
      });
    }
  },

  downvoteQuestion(req, res) {
    let question = questions.filter(q => String(q.id) === req.params.id)[0];

    if (!question) {
      res.status(404)
        .send({
          status: 404,
          error: `The question with the id: ${req.params.id} does not exist`
        });
    } else {
      question.votes = question.votes > 0 ? question.votes - 1 : 0;

      question = omitProps(question, ['id', 'createdOn', 'createdBy']);

      res.status(200)
        .send({
          status: 200,
          data: [question]
        });
    }
  }
};
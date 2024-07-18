'use client';

/* eslint react/jsx-props-no-spreading: 0 */

import React, { useState, useEffect, useRef } from 'react';
import { ApiQuestions, QuestionTypes } from '@/global';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, Controller } from 'react-hook-form';

export default function AddVideoQuestions() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSuccess = async (data: any) => {
    console.log(999, data, process.env.URL);
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/questions`, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    // console.log('res front', res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSuccess)}>
        <Form.Group className="mb-3" controlId="name">
          <input className="form-control" placeholder="Enter video name" {...register('name', { required: true })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="grade">
          <input className="form-control" placeholder="Enter grade: Middle" {...register('grade', { required: true })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
          <input className="form-control" placeholder="Enter date: 31.12.2024" {...register('date', { required: true })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ylink">
          <input className="form-control" placeholder="Enter YouTube link" {...register('ylink', { required: true })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <select className="form-control" {...register('library')}>
            {Object.values(QuestionTypes).map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="isMocked">
          <Controller
            name="isMocked"
            defaultValue={false}
            control={control}
            render={({ field }) => (
              <Form.Check
                {...field}
                type="checkbox"
                id="isMocked"
                label="Is mocked ?"
              />
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="has online coding ?">
          <Controller
            name="hasCoding"
            defaultValue={false}
            control={control}
            render={({ field }) => (
              <Form.Check
                {...field}
                type="checkbox"
                id="hasCoding"
                label="Has Coding ?"
              />
            )}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
